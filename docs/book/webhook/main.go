package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
)

type AlertMsg struct {
	Receiver          string
	Status            string
	GroupLabels       map[string]string
	CommonLabels      map[string]string
	CommonAnnotations map[string]string
	ExternalURL       string
	Alerts            []Alert
}

type Alert struct {
	Status       string
	Labels       map[string]string
	Annotations  map[string]string
	StartsAt     time.Time
	EndsAt       time.Time
	GeneratorURL string
	Fingerprint  string
}

type FeishuMsg struct {
	Card    MsgCard `json:"card"`
	MsgType string  `json:"msg_type"`
}

type MsgCard struct {
	Header   CardHeader    `json:"header"`
	Elements []CardElement `json:"elements"`
}

type CardHeader struct {
	Template string `json:"template"`
	Title    ContentTag
}
type ContentTag struct {
	Content string `json:"content"`
	Tag     string `json:"tag"`
}

type CardElement struct {
	Tag    string         `json:"tag"`
	Fields []FieldContent `json:"fields"`
}

type FieldContent struct {
	IsShort bool       `json:"is_short"`
	Text    ContentTag `json:"text"`
}

const Webhook = "https://open.feishu.cn/open-apis/bot/v2/hook/e6e55b00-8782-43a2-9cf4-a6fcf1b6aef4"

func main() {
	http.HandleFunc("/alerts", alertHandler)
	log.Fatal(http.ListenAndServe("0.0.0.0:5001", nil))
}

func alertHandler(w http.ResponseWriter, r *http.Request) {
	dec := json.NewDecoder(r.Body)
	defer r.Body.Close()

	var m AlertMsg
	if err := dec.Decode(&m); err != nil {
		log.Printf("decoding alert message error: %v", err)
		return
	}
	for _, alert := range m.Alerts {
		var feishu_msg FeishuMsg
		feishu_msg.MsgType = "interactive"
		// 告警消息
		if alert.Status == "firing" {
			feishu_msg.Card.Header.Template = "red"
			feishu_msg.Card.Header.Title.Content = fmt.Sprintf("崩盘 - %s", alert.Labels["_product_name"])
			feishu_msg.Card.Header.Title.Tag = "plain_text"
			content := fmt.Sprintf(
				"**告警名称**: %s\n**告警时间**: %s\n**告警概述**: %s\n**告警产品**: %s\n**告警实例**: %s\n",
				alert.Labels["alertname"],
				alert.StartsAt.UTC().Format("2006-01-02 15:04:05"),
				alert.Annotations["summary"],
				alert.Labels["_product_name"],
				alert.Labels["_name"],
			)
			field := FieldContent{
				IsShort: true,
				Text:    ContentTag{Tag: "lark_md", Content: content},
			}

			fields := make([]FieldContent, 0)
			fields = append(fields, field)
			element := CardElement{
				Tag:    "div",
				Fields: fields,
			}
			elements := make([]CardElement, 0)
			elements = append(elements, element)
			feishu_msg.Card.Elements = elements
		} else {
			// 恢复消息
			feishu_msg.Card.Header.Template = "green"
			feishu_msg.Card.Header.Title.Content = fmt.Sprintf("恢复 - %s", alert.Labels["_product_name"])
			feishu_msg.Card.Header.Title.Tag = "plain_text"
			content := fmt.Sprintf(
				"**告警名称**: %s\n**恢复时间**: %s\n**告警概述**: %s\n**告警产品**: %s\n**告警实例**: %s\n",
				alert.Labels["alertname"],
				alert.EndsAt.UTC().Format("2006-01-02 15:04:05"),
				alert.Annotations["summary"],
				alert.Labels["_product_name"],
				alert.Labels["_name"],
			)
			field := FieldContent{
				IsShort: true,
				Text:    ContentTag{Tag: "lark_md", Content: content},
			}

			fields := make([]FieldContent, 0)
			fields = append(fields, field)
			element := CardElement{
				Tag:    "div",
				Fields: fields,
			}
			elements := make([]CardElement, 0)
			elements = append(elements, element)
			feishu_msg.Card.Elements = elements
		}
		msg_body, err := json.Marshal(feishu_msg)
		if err != nil {
			log.Fatalf("json marshal feishu_msg error: %v", err)
		}
		req, err := http.NewRequest("POST", Webhook, bytes.NewBuffer(msg_body))
		req.Header.Set("Content-Type", "application/json")
		if err != nil {
			log.Fatalf("http new request error: %v", err)
		}
		client := &http.Client{}
		resp, err := client.Do(req)
		if err != nil {
			log.Fatalf("post feishu_msg error: %v", err)
		}
		defer resp.Body.Close()
	}
}
