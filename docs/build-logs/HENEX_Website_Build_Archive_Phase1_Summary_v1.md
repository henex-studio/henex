# HENEX Website Build Archive, Phase 1 Working Summary

## 1. 文档目的

本文档归档过去两天 HENEX 网站 Phase 1 构建过程中的关键决策、设计系统方向、技术路线、页面结构和下一步任务。它用于明天继续生成 Home v1 时作为工作基准。

本阶段的核心成果是：HENEX 网站从早期 Astro 试验和视觉探索，收敛为 Static First, Astro Ready 的静态网站路线，并完成 Home 页面主要设计方向的确认。

## 2. 当前项目路线

### 2.1 实施架构

Phase 1 使用静态网站方式：

```text
Static HTML
CSS
Minimal vanilla JavaScript
GitHub repository
Vercel static deployment
Cloudflare R2 for future large media
```

当前不使用 Astro。原因是 Phase 1 的重点是快速稳定上线、降低技术复杂度、便于零代码维护和验证作品集内容质量。

### 2.2 Astro Ready 原则

虽然 Phase 1 使用静态页面，但所有代码必须保持 Astro-ready：

1. 使用稳定、组件化的 class 命名。
2. Header、Footer、Project Card、Case Study Section、Tag、Button 等结构保持一致。
3. 页面 slug 使用清晰、可迁移命名。
4. 项目 metadata 逐步统一。
5. 避免 inline CSS。
6. 避免随机一次性 class 名。
7. 后续如果转 Astro，应是结构升级，而不是重新设计。

未来迁移 Astro 时，可映射为：

```text
index.html -> src/pages/index.astro
about.html -> src/pages/about.astro
philosophy.html -> src/pages/philosophy.astro
works.html -> src/pages/works.astro
works/*.html -> src/pages/works/[slug].astro
.site-header -> Header.astro
.site-footer -> Footer.astro
.project-card -> ProjectCard.astro
.case-hero -> CaseHero.astro
.tag -> Tag.astro
```

## 3. GitHub 和 Vercel 部署状态

### 3.1 新仓库路线

已确认使用新建干净 GitHub 仓库，而不是直接覆盖旧 Astro 仓库。

旧 Astro 仓库保留为 archive 或暂时不动。新仓库用于静态网站 Phase 1。

### 3.2 Vercel 设置

静态网站部署已跑通。Vercel 配置使用：

```text
Application Preset: Other
Root Directory: ./
Build Command: empty
Output Directory: . or empty
Install Command: empty
```

Global Shell Preview 已通过以下检查：

1. 首页正常显示。
2. 字体正常加载。
3. HENEX fusion card 正常显示。
4. 顶部导航正常显示。
5. 手机宽度下 menu 按钮可点击。
6. 三张 project card 正常排列。
7. Footer 正常显示。

这说明 GitHub 到 Vercel 的静态部署链路已稳定。

## 4. Design System 当前决策

### 4.1 Typography

当前确认：

```text
Heading Font: IBM Plex Sans
Body Font: Inter
```

使用规则：

1. IBM Plex Sans 用于 hero、section heading、project title、navigation brand 和重要 label。
2. Inter 用于正文、项目描述、case study 内容和说明文字。
3. 字体通过 CSS tokens 管理。

### 4.2 Brand colours

当前确认使用 Graphite 系统：

```text
Brand Primary: #111827
Brand Secondary: #374151
```

使用规则：

1. Brand Primary 用于主按钮、深色 footer、强结构区块。
2. Brand Secondary 用于 metadata、links、active state、secondary emphasis。
3. Graphite 比蓝色 secondary 更高级，也不会和 HENEX 的 Human blue 冲突。

### 4.3 HENEX semantic colours

当前确认：

```text
Human:   #3C8CF4
Emotion: #FF5688
Nature:  #31BB8E
```

使用规则：

1. 三色作为 HENEX semantic accent，不作为普通品牌按钮色。
2. 三色用于 dots、chips、tint backgrounds、Soft Fusion、dimension cards 和 framework visual。
3. 不在三色底上默认使用白字。

### 4.4 Accessibility colour rule

已检查三色与深色文字、白色文字对比度。结论：

1. `#202124` 深色文字在 Human、Emotion、Nature 三个 accent 背景上基本可用。
2. 白字在三个 accent 背景上都不够安全，Nature 尤其不适合白字。
3. 首页和组件中应优先使用 tint background + dark text + accent marker。

## 5. Home 页面已确认方向

### 5.1 Home 页面总体结构

Home v1 暂定结构：

1. Hero。
2. Capability strip。
3. HENEX framework preview。
4. Featured Works。
5. About preview。
6. Dark Footer。

Lab 不在 Home 内容区展示，只保留在 nav 和 footer sitemap 中。

### 5.2 Hero 当前方向

Hero 已基本确认使用：

```text
Night full-bleed hero
Left aligned editorial layout
Two CTA buttons
No right-side HENEX card
```

Hero 标题：

```text
Creating intuitive experiences across services, digital systems and built environments.
```

Hero 副标题：

```text
I use research, systems thinking and delivery experience to shape public-facing services, digital products and built environments through HENEX.
```

Hero CTA：

```text
View Works
Explore HENEX
```

说明：早期比较过 Day full-bleed 和 Night full-bleed。Night version 更接近原主页抓眼球的大视觉，也更有记忆点。正式 Home v1 可以先使用 Night full-bleed。

### 5.3 Capability strip 当前方向

三项能力条已确认逻辑：设计、研究、交付三位一体，但不在表面直接说这个公式。

当前文案：

```text
Public-facing design
Make complex services, information and touchpoints easier for people to understand and use.

Research-led decisions
Use research, testing and data to guide design choices and reduce uncertainty.

Complex delivery
Coordinate people, constraints and systems so ideas can move from concept to implementation.
```

版式方向：

1. Section title 和 cards 之间需要较大间距。
2. Card 内部使用 index 在上，文字在下。
3. Card 高度统一，保持高级、稳定的 system card 感。

### 5.4 HENEX 区域当前方向

HENEX 区域当前倾向使用 v0.6 的 Option B：

```text
Icon cards with node chips
```

当前结构：

```text
HENEX creates experience through the interaction of Human, Emotion and Nature.
A practical framework for connecting service logic, emotional context and the digital or physical environments where people act.

[Human card] [Emotion card] [Nature card]
```

每张卡结构：

```text
Icon
Dimension name
Short sentence
Node chips
```

例如：

```text
Human
How people understand, decide and act.
[Identity] [Perception] [Agency]
```

当前问题和待处理事项：

1. Option B 比直接大 node text 更适合首页。
2. Icon 当前仍偏小，后续需重新导出或调整 SVG viewBox。
3. SVG 颜色目前可能还是旧颜色，先不处理颜色，优先确认 layout。
4. HENEX 区域需要一个轻量 CTA 去 Philosophy。

建议 Home v1 中加入：

```text
Explore the framework -> philosophy.html
```

Dimension cards 可链接到：

```text
Human -> philosophy.html#human
Emotion -> philosophy.html#emotion
Nature -> philosophy.html#nature
```

### 5.5 Featured Works 当前方向

已确认使用 1 + 3 + 2 排法：

```text
Featured Work
[Victim Hub lead card]

Service Systems
[Accessibility Support Hub] [New World Design System] [Who’s Singing OuTūīside?]

Built Systems
[Guangzhou Baiyun T2] [Shantou University and AYG Venue]
```

说明：

1. Lead project 当前使用 Victim Hub。
2. 未来可以轮换最重要或最匹配求职目标的项目作为 lead project。
3. Service Systems 和 Built Systems 分类名已确认。
4. UX / service projects 可先用 Soft Fusion 或 vector style placeholder。
5. 建筑项目未来可以用照片，但需统一 crop、container、overlay 和 card treatment。

### 5.6 About preview 当前方向

已确认标题改短，避免一个词单独占一行：

```text
From built environments to public services.
```

当前正文：

```text
My work has moved from large-scale architectural delivery into UX, service design and evidence-informed public sector work, with a focus on making complex systems easier to use and deliver.
```

版式规则：

1. 左侧标题，右侧正文 + CTA。
2. 右侧正文 max-width 约 620px。
3. 左右内容垂直居中。
4. Button 与正文保持足够间距。

### 5.7 Footer 当前方向

Footer 固定使用深色模式。

结构：

```text
Cafe Yi
Creating evidence-informed design work across public services, digital systems and built environments.
Contact

Social
LinkedIn
Instagram

Explore
About
Philosophy
Works
Lab

Copyright © 2026 Cafe Yi. All rights reserved.
```

链接：

```text
LinkedIn: https://www.linkedin.com/in/cafeyi
Instagram: https://www.instagram.com/cafe.yi_photo/
Contact: mailto:cafeyee@gmail.com
```

## 6. SVG Icon 处理记录

用户已将 SVG 上传到 GitHub 路径：

```text
assets/icons/henex/dimension-human.svg
assets/icons/henex/dimension-emotion.svg
assets/icons/henex/dimension-nature.svg
```

后续 node icons 也可使用：

```text
assets/icons/henex/node-identity.svg
assets/icons/henex/node-perception.svg
assets/icons/henex/node-agency.svg
assets/icons/henex/node-affect.svg
assets/icons/henex/node-empathy.svg
assets/icons/henex/node-meaning.svg
assets/icons/henex/node-medium.svg
assets/icons/henex/node-matter.svg
assets/icons/henex/node-interface.svg
```

当前技术判断：

1. 通过 `<img>` 引用 SVG 最稳定，但 CSS 无法稳定控制 SVG 内部 stroke 或 fill 颜色。
2. 如果需要 CSS 控制颜色，后续需改为 inline SVG 或 CSS mask。
3. Phase 1 当前先用 `<img>`，优先确认 layout 和比例。
4. 重新导出 SVG 时，应减少 viewBox 空白，让图形占 artboard 70% 到 85%。
5. 图标线条可适当加粗，以便在 Home dimension card 中更有分量。

## 7. 已生成过的关键文件

### Design and archive files

```text
HENEX_Working_Rules_Static_First_Astro_Ready_v1_1.md
HENEX_Design_System_v1_1_Full.md
```

### Static shell

```text
henex_static_shell_v0_1.zip
```

该文件用于验证 GitHub + Vercel 静态部署链路。

### Home mood iterations

```text
henex_home_mood_v01.zip
henex_home_mood_v02.zip
henex_home_mood_v03.zip
henex_home_mood_v04.zip
henex_home_mood_v05.zip
henex_home_mood_v06.zip
```

当前最接近正式方向的是 v0.6。

## 8. 明天 Home v1 生成前的确认清单

明天开始生成 Home v1 前，先确认以下内容：

1. Hero 默认使用 Night full-bleed。
2. HENEX 使用 Option B，Icon cards with node chips。
3. HENEX 区域添加 soft CTA：Explore the framework。
4. HENEX dimension cards 是否需要整张可点击。
5. 是否使用当前 SVG，即使颜色暂未统一。
6. Featured Works 使用 1 + 3 + 2。
7. About preview 标题使用 From built environments to public services.
8. Footer 使用 dark fixed。

## 9. 明天建议交付顺序

### Step 1

生成正式 Home v1 文件：

```text
index.html
assets/css/pages.css
```

如有必要，小幅更新：

```text
assets/css/global.css
assets/js/main.js
```

### Step 2

用户上传到 GitHub 或替换当前静态仓库对应文件。

### Step 3

Vercel 自动部署后检查：

1. Desktop hero。
2. Mobile hero。
3. HENEX SVG 是否显示。
4. HENEX cards spacing。
5. Works card layout。
6. About preview line breaks。
7. Footer links。
8. Mobile nav。

### Step 4

修复 Home v1 bug 后，再进入 About 页面或 Philosophy 页面。

## 10. 当前阶段总结

两天内已完成：

1. 确认 Static First, Astro Ready 架构。
2. 新静态 GitHub + Vercel 部署链路跑通。
3. 确认 Graphite brand system。
4. 确认 HENEX 三色 semantic accent。
5. 完成 Home 页面主要结构和视觉方向探索。
6. 确认 Hero、Capability、Works、About、Footer 的方向。
7. HENEX 区域收敛到 icon card + node chip 方向。
8. 明天可开始正式生成 Home v1。

