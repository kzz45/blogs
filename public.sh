#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'public'

git push -f https://github.com/kzz45/blogs.git main
