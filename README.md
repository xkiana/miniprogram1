# 实验1

创建了一个简单的微信小程序

## 项目说明

当前项目包含一个首页示例：显示文字和图片，并通过按钮切换文字内容。

## 目录结构

```text
miniprogram-2/
├── app.js                    # 小程序入口
├── app.json                  # 全局配置
├── app.wxss                  # 全局样式
├── components/               # 自定义组件
├── pages/index/              # 首页页面
├── image/                    # 图片资源
├── project.config.json       # 微信开发者工具项目配置
├── sitemap.json              # 小程序 sitemap 配置
└── .gitignore                # Git 忽略规则
```

在此基础了，实现了简单的文字内容切回（根据对赋值的检查，判定执行的操作）
