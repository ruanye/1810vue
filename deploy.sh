#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
git add -A
git commit -m '封装nav组件'
echo '自动发布'
git push origin master
echo '自动发布完成'
