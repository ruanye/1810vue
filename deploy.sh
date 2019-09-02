#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
git add -A
git commit -m '添加自动发布脚本'
git push origin master
cd -