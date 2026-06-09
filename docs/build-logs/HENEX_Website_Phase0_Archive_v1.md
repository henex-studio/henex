# HENEX Website Phase 0 Archive, Discovery and Direction Setting

## 1. 文档目的

本文档归档 HENEX 网站进入正式 Phase 1 构建之前的 Phase 0 工作内容。Phase 0 的重点不是写正式页面代码，而是完成项目定位、内容盘点、视觉方向探索、设计系统雏形、技术路线判断和部署策略讨论。

本文档用于留底，方便后续回看为什么当前网站采用 Static First, Astro Ready 的路线，以及 Home v1、Design System v1 和后续页面结构如何形成。

## 2. Phase 0 的阶段定义

Phase 0 可以理解为 HENEX Website 的探索和定向阶段。

主要目标：

1. 明确 HENEX 网站的职业定位和品牌方向。
2. 梳理作品集内容和页面结构。
3. 初步建立设计系统方向。
4. 验证字体、颜色、背景、视觉语言和 HENEX fusion 方向。
5. 判断部署技术路线。
6. 为 Phase 1 的正式静态网站构建做准备。

Phase 0 的 stop condition 是：

1. 网站定位基本明确。
2. Phase 1 页面范围基本明确。
3. Design System 方向基本明确。
4. 技术路线基本明确。
5. 可以开始生成正式静态页面。

## 3. HENEX 核心定位

HENEX 被确定为用户个人设计哲学和作品集网站的核心品牌概念。

HENEX 的含义：

```text
Human
Emotion
Nature
Experience
Nexus
```

HENEX 表达的是 Human、Emotion、Nature 三者交汇下的体验关系。Nexus 表示交汇点，Experience 表示这些元素交汇下被创造和感知的体验。

当前 HENEX 的核心结构为：

```text
Human: Identity, Perception, Agency
Emotion: Affect, Empathy, Meaning
Nature: Medium, Matter, Interface
```

三维和九节点组合形成未来 Philosophy 页面和作品映射的理论基础。

## 4. 职业定位方向

Phase 0 中逐步明确，HENEX 网站不应只是建筑作品集，也不应只是普通 UX portfolio。

当前定位方向：

```text
Cross-disciplinary design and advisory
Public-facing service and product design
Evidence-informed design
Systems thinking
Built environment and complex delivery background
```

网站需要传达的专业气质：

1. Professional.
2. Senior.
3. Editorial.
4. Systematic.
5. Quietly distinctive.

需要避免的感觉：

1. 学生作品集。
2. 过度炫技的 portfolio。
3. 普通 SaaS landing page。
4. 纯建筑展示站。
5. 过度理论化、看不出实际项目能力的网站。

## 5. 内容盘点和页面规划

Phase 0 中已确认网站 Phase 1 需要覆盖以下页面类型：

```text
Home
About
Philosophy
Works
Lab placeholder
Case study pages
```

Lab 在 Phase 1 只作为导航入口和占位页，不在 Home 内容区重点展示。

### 5.1 Home 页面初步目标

Home 需要在 5 到 10 秒内让访问者理解：

1. 用户是谁。
2. 用户做什么。
3. HENEX 是什么。
4. 哪些项目最能证明能力。
5. 下一步应进入 Works、About 还是 Philosophy。

### 5.2 About 页面初步目标

About 页面需要解释用户从建筑、复杂项目交付，到 UX、服务设计、公共部门设计工作的转向和连续性。

核心叙事：

```text
From built environments to public services.
```

### 5.3 Philosophy 页面初步目标

Philosophy 页面承载 HENEX 的完整理论：

1. HENEX 定义。
2. Human / Emotion / Nature 三维。
3. 九个节点。
4. 节点组合。
5. 与项目案例的映射关系。

### 5.4 Works 页面初步目标

Works 页面需要按项目能力和职业目标排序，而不是简单按时间排序。

项目分组方向：

```text
Service Systems
Built Systems
```

### 5.5 Case Study 页面初步目标

Case Study 需要从“展示成果”转向“说明判断过程、复杂性、方法和贡献”。

UX / Service / Product case study 需要覆盖：

1. Context.
2. Problem.
3. Role.
4. Process.
5. Key decisions.
6. Validation.
7. Final design.
8. Outcome.
9. Reflection.

Architecture case study 需要覆盖：

1. Project context.
2. Design challenge.
3. Role and responsibility.
4. Spatial or system strategy.
5. Collaboration and delivery.
6. Final outcome.
7. Awards or impact if available.

## 6. 初步项目优先级

Phase 0 中明确，Home 和 Works 不应平均展示所有项目，而应根据当前求职方向排序。

Home Featured Works 当前优先顺序：

```text
Lead Project:
Victim Hub

Service Systems:
Accessibility Support Hub
New World Design System
Who’s Singing OuTūīside?

Built Systems:
Guangzhou Baiyun International Airport Terminal 2
East Campus of Shantou University and Asian Youth Games Venue
```

说明：

1. Victim Hub 当前最贴近公共部门、服务改善、信息架构、可用性测试和证据驱动设计，因此适合作为 lead project。
2. Lead project 未来可以轮换，不必永久固定。
3. 建筑项目作为复杂系统和交付能力的支撑，不应压过当前 UX / service direction。

## 7. 初步设计系统探索

Phase 0 中进行了多轮 mood sample 和 design system 方向探索。

### 7.1 字体方向

最终收敛为：

```text
Heading Font: IBM Plex Sans
Body Font: Inter
```

选择原因：

1. IBM Plex Sans 具有系统感、技术感和专业感，适合 HENEX 的框架表达。
2. Inter 适合正文阅读和数字产品语境。
3. 两者结合能支持 professional + editorial + systematic 的整体气质。

### 7.2 背景方向

最终收敛为：

```text
Cool Editorial Neutral
```

核心背景色：

```text
#F6F7F8
```

原因：

1. 比纯白更柔和。
2. 比暖灰更现代。
3. 能支撑 Graphite 品牌系统和 HENEX 三色。

### 7.3 品牌色方向

经历蓝色 secondary、B Soft、Graphite 等比较后，最终选择 Graphite：

```text
Brand Primary: #111827
Brand Secondary: #374151
```

选择原因：

1. 更高级、更 senior。
2. 不会与 HENEX Human blue 冲突。
3. 更适合公共部门、advisory、系统设计和复杂交付背景。
4. 能让 HENEX 三色作为语义色保留识别度。

### 7.4 HENEX 三色方向

最终确认：

```text
Human:   #3C8CF4
Emotion: #FF5688
Nature:  #31BB8E
```

黄色方向被放弃。原因是蓝、粉红、绿组合更干净，更适合 contemporary + professional + HENEX fusion 的视觉方向。

### 7.5 Accessibility 色彩规则

Phase 0 中确认：

1. HENEX 三个 accent 色不应默认使用白字。
2. 如果要在 accent 背景上放文字，应使用深色文字。
3. 更推荐将 HENEX 三色用于 dots、lines、chips、tint backgrounds、icons 和 Soft Fusion。

## 8. HENEX Soft Fusion 方向

Phase 0 中确认 Soft Fusion 是 HENEX 的核心视觉签名。

Soft Fusion 使用：

```text
Human blue
Emotion pink
Nature green
```

使用场景：

1. Home hero background。
2. HENEX field。
3. Works project visual placeholder。
4. Case study abstract visual。
5. Philosophy 页面 framework visual。

限制：

1. 不应在每个普通卡片都使用。
2. 不应影响正文可读性。
3. 应作为 HENEX signature visual，而不是普通装饰背景。

## 9. Hero 视觉方向探索

Phase 0 中，Hero 从左右分栏逐渐转向 full-bleed fusion hero。

早期问题：

1. 左侧大文字 + 右侧 HENEX card 过于拥挤。
2. 第一屏信息量过大。
3. 右侧 card 抢占文字空间。

后续收敛方向：

```text
Full-bleed night fusion hero
Left aligned editorial layout
Two CTA buttons
No separate right-side card
```

当前 Hero 文案：

```text
Creating intuitive experiences across services, digital systems and built environments.
```

副标题：

```text
I use research, systems thinking and delivery experience to shape public-facing services, digital products and built environments through HENEX.
```

CTA：

```text
View Works
Explore HENEX
```

## 10. HENEX Icon 和视觉系统探索

用户已有 HENEX 三维九点 icon 系统。

Phase 0 中确定：

1. Home 只展示三个 dimension icons。
2. 九个 node icons 留给 Philosophy 页面。
3. Home 不应把 HENEX 讲得太深。
4. Dimension cards 应使用 tint icon panel + node chips 的方向。

已上传到 GitHub 的路径：

```text
assets/icons/henex/dimension-human.svg
assets/icons/henex/dimension-emotion.svg
assets/icons/henex/dimension-nature.svg
```

技术记录：

1. 使用 `<img>` 引用 SVG 最稳定。
2. 通过 `<img>` 引用时，CSS 不能稳定改变 SVG 内部颜色。
3. 如果后续要 CSS 控色，需要 inline SVG 或 CSS mask。
4. Phase 1 先优先确认 layout，不被 SVG 颜色问题卡住。
5. 重新导出 SVG 时要减少 viewBox 空白，保证 icon 本身有足够视觉分量。

## 11. Footer 方向探索

Footer 最终选择 dark fixed version。

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

选择原因：

1. 深色 footer 更能收住页面。
2. 更符合 Graphite DS。
3. 比浅灰 footer 更有高级感和完成度。

## 12. 技术路线探索

Phase 0 中讨论过 Astro 的优势和缺点。

Astro 的优势：

1. Header、Footer、ProjectCard 等可组件化。
2. 未来可用 content collections 管理项目和 Lab 内容。
3. 静态优先，性能好。
4. 可以渐进添加交互。
5. 适合未来接 Git-based CMS。

但 Phase 1 暂不采用 Astro，因为：

1. 用户零代码背景，静态 HTML/CSS 更容易维护。
2. 当前重点是内容和视觉系统，不是工程复杂度。
3. 新静态仓库 + Vercel 已可满足当前需求。
4. 未来转 Astro 成本可控，前提是当前代码保持 Astro-ready。

## 13. 已形成的文件和产物

Phase 0 / Early Phase 1 期间已经产生：

```text
HENEX_Content_Inventory_DS_Plan_v1.md
HENEX_Design_System_v1_Draft.md
HENEX_Design_System_v1_1_Full.md
HENEX_Working_Rules_Static_First_Astro_Ready_v1_1.md
HENEX_Website_Build_Archive_Phase1_Summary_v1.md
```

Mood / preview 文件包括：

```text
HENEX_Mood_Samples_v0_1.html
HENEX_Mood_Samples_v0_2_Font_Background_Test.html
HENEX_Mood_Samples_v0_3_Type_Colour_Fusion.html
henex_mood_v04_body_colour.html
henex_mood_v05_yellow_human.html
henex_mood_v06_blue_pink_green.html
henex_v07_brand_accent_compare.html
henex_v08_brand_secondary_blue_refine.html
henex_v09_bsoft_components.html
henex_v10_graphite_components.html
henex_static_shell_v0_1.zip
henex_home_mood_v01.zip
henex_home_mood_v02.zip
henex_home_mood_v03.zip
henex_home_mood_v04.zip
henex_home_mood_v05.zip
henex_home_mood_v06.zip
```

## 14. Phase 0 最终结论

Phase 0 的最终结论：

1. HENEX 网站应是专业、系统化、带有设计哲学的个人网站。
2. 当前优先服务求职和专业展示，不应过度艺术化或理论化。
3. 网站应以静态 HTML/CSS 方式进入 Phase 1。
4. 代码必须保持 Astro-ready。
5. Design System 使用 IBM Plex Sans、Inter、Graphite、HENEX 三色和 Soft Fusion。
6. Home 页面已基本收敛到 Night full-bleed hero、Capability strip、HENEX icon cards、Featured Works 1 + 3 + 2、About preview、Dark footer。
7. 明天可进入 Home v1 正式代码生成。

## 15. 建议归档位置

建议将本文档放入 RAG：

```text
HENEX Website Space / Project Documentation / Phase 0
```

如果同时上传 Phase 1 summary，则建议结构为：

```text
HENEX Website Space / Project Documentation / Phase 0 / HENEX_Website_Phase0_Archive_v1.md
HENEX Website Space / Project Documentation / Phase 1 / HENEX_Website_Build_Archive_Phase1_Summary_v1.md
```
