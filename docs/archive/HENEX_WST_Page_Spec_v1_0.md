# HENEX WST（Welnest）案例页 执行交接文档 v1.0

供 Cowork 端直接读取并生成代码使用。本文档为唯一执行依据，生成前请先读取本文件全文，
再读取 `docs/specs/` 下的设计系统与审计规则文档，最后参照 `works/accessibility-support-hub.html`
（ASH）与 `works/voting-starter-kit.html`（VSK）的现有组件实现，禁止凭记忆生成。

---

## 一、基本信息

| 项目 | 值 |
|---|---|
| 项目代号 | WST |
| 项目全名 | Welnest |
| 文件路径 | `works/welnest.html` |
| CSS 路径 | `assets/css/wst.css`（独立文件，命名跟随 vsk.css 模式，不带 `-case` 后缀） |
| R2 图片路径 | `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/wst/` |
| JS 依赖 | `case-interactions.js`（不要引用 `ux-case-study.js`，会 404） |
| body class | `ux-case-page ux-case-page--welnest` |
| 参考模板 | `works/accessibility-support-hub.html`（结构主参照）、`works/voting-starter-kit.html`（无独立 Concept、Feedback 卡片基础结构） |

---

## 二、颜色系统

| 用途 | 颜色 | 对白底对比度 | 说明 |
|---|---|---|---|
| 主色（标题/正文，深色） | `#9F5801` | 5.0:1 ✓ AA达标 | 替代原 PDF 黄橙，用于 h1-h3、正文强调、ux-kicker 在浅底场景 |
| 提亮色（装饰/kicker） | `#FB8A00` | 2.4:1，视觉用，非正文 | 比 `#FFB200`（1.8:1）对比度更好，选用此色 |
| Section 背景色 1 | `#FFEFDE`（米白） | — | 用于 `ux-section--tint` 替代色，部分 section 背景 |
| Section 背景色 2 | `#FB8A00` 浅化版或原橙 | — | 视具体 section 使用，深色背景场景可选用更深处理版本，留待生成时按实际可读性微调，不强制固定第二背景色数值 |

Token 命名建议（写入 wst.css `:root` 或 scoped 变量）：
```css
--ux-theme: #9F5801;      /* 主色，标题/正文 */
--ux-accent: #FB8A00;     /* 提亮色，kicker/装饰 */
--ux-tint: #FFEFDE;       /* 米白，section 背景 */
```

注意：装饰色 `#FB8A00` 不达 AA，仅用于 kicker、icon、边框等装饰性场景，不可用于正文或可读性要求高的文字，这是延续 WSO 橙色规则的同一原则（装饰色限定使用范围）。

---

## 三、文件与图片对照

R2 路径前缀：`/projects/wst/`

已确认存在的图片（来自用户提供的文件列表）：
```
ds-brand.png, ds-color.png, ds-font.png
final-design1.png, final-design2.png
hero.png
ia.png
ideation.png
lofi-prototype.png
outcome.png
overview.png   ← 用于 Overview 下方静态展示区，替代其他项目的 video
problem.png
solution.png
user-flow1.png, user-flow2.png, user-flow3.png
user-journey.png
ut1.png, ut2.png, ut3.png, ut4.png, ut5.png, ut6.png   ← Usability Test 6张，对应6个改进点
wst-home.webp   ← 用于 og:image 和 Related Projects 卡片
```

**命名口径确认**：UT = Usability Test 的缩写，与 PDF 中 6 个改进点（Navigation Feedback / Terminology Confusion / Rating Ambiguity / Comparison Feature / Agent Contact / Inspection Report）一一对应，按顺序 ut1→ut6。

Prototype 链接（写入 Hero 的 View Prototype 按钮）：
```
https://www.figma.com/proto/5XtHyFWIZCxFNOQXkAjdPS/welnest-for-portfolio?page-id=0%3A1&node-id=1-8431&p=f&viewport=37%2C342%2C0.04&t=2y4MZ3DWWdY9r5DR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A8431
```

---

## 四、页面结构（叙事顺序）

不另加 Concept section，遵循 PDF 原结构，对齐 VSK 的精简叙事顺序：

```
Hero
→ Overview（含 meta 信息 + HENEX Lens）
→ Preview（静态图替代 video，ux-video-grid 结构，img 替换 video 标签）
→ Problem（HMW 嵌 h2）
→ Solution
→ Outcome
→ Feedback（3卡，圆形icon结构，主题色调整）
→ Design Process（ux-two-col + ux-process 四步）
→ Discover（Research + Findings + User Journey）
→ Define（Design Principles + Problem Reframing/HMW 已在Problem处理，此处放Principles）
→ Develop（Ideation + IA + Userflow + Prototyping + Usability Testing[折叠]）
→ Deliver（Design System + Final Design）
→ Retrospective（三卡 Value/Limitation/Next）
→ HENEX Method Recipe
→ Related Projects
```

---

## 五、关键组件规格

### 5.1 Hero
- 纯背景图 `hero.png`，参照 WSO/RKT 模式，无暗色叠层（除非生成时发现图片本身对比度不足以承载白字，再做局部调整）
- 标签：primary = `UX` / `Real Estate`；secondary = `Course Work`（按 PDF 原文 "UX Real Estate Course Work"）
- 标题：`Welnest`
- 副标题：`Helping newcomers find a home with clarity and confidence.`
- 按钮：`View Prototype`（见上方链接）+ `Back to Works`

### 5.2 Overview
- 结构对齐 ASH：`ux-two-col` + `ux-intro`（kicker+h2）+ `ux-copy`（正文 + ux-meta + ux-skills）
- Meta 字段（按 PDF）：
  - Client: `MUXD`
  - Role: `UX Research, UX/UI Design, Usability Testing`
  - Team: `Individual`
  - Timeline: `12 Weeks`
  - Tools: `Figma, Miro, Office365`
- HENEX Lens（**使用 RAG 官方映射，非 PDF 原文**）：
  ```
  R24 · Trust & Cooperation Rules
  Agency × Empathy × Interface
  ```

### 5.3 Preview（替代 Video）
- 结构沿用 ASH 的 `ux-video-grid` section（`ux-section ux-section--tint`）
- 左侧文案改为静态展示语境，例如 kicker `Preview`，标题类似 `A look at the final experience.`
- 右侧 `<video>` 替换为 `<img src=".../overview.png" alt="..." loading="lazy">`，保留 `ux-video` 容器 class 以继承尺寸/圆角样式（生成时确认该 class 是否兼容 img 标签，如不兼容需在 wst.css 补一条等效样式，不可影响 global 共用类）

### 5.4 Problem
- HMW 嵌入 h2，`<strong>`/`<em>` 上色规则同 ASH/RKT
- 配图：`problem.png`

### 5.5 Solution
- `ux-solution__grid` 左文右图，图用 `solution.png`

### 5.6 Outcome
- `ux-wide-head` + `ux-evidence`，图用 `outcome.png`

### 5.7 Feedback（重点：样式调整项）
- **结构**：沿用 ASH/VSK 的 `ux-feedback-grid` + `ux-feedback-card` + 圆形人像 SVG icon（`.ux-feedback-icon`），**不更换为纯文字卡片**
- **颜色**：icon 的 stroke/fill 颜色改为 WST 主题色 `#9F5801` 或提亮色 `#FB8A00`（生成时按深浅背景选择达标色，icon 本身是装饰元素，可用提亮色，但若背景是浅色需确认 icon 描边本身的可视对比，不要求文字级 AA，只需视觉可辨识）
- **数量**：3 条，从 PDF 5 条反馈中精简提炼，每条压缩为一句话，不逐字照搬原文
- **重要**：icon CSS（`.ux-feedback-icon` 的尺寸/形状规则）需要确认是否已在 `ux-case-study.css` 全局存在。根据交接文件记录，这套 CSS 实际定义在 `vsk.css` 而非 global，**生成时必须将这部分 icon CSS 复制进 `wst.css`**，否则会复现 WSO 早期踩过的「SVG 渲染成巨大黑色圆形」问题

### 5.8 Design Process
- `ux-two-col` + `ux-process`，四步 Discover/Define/Develop/Deliver，扁平结构

### 5.9 Discover
- Research 段落文字
- Findings：PDF 提供 8 个 finding（F01-F08），参照 RKT 的 `rkt-finding-grid` 3列卡片模式，建议显示全部8个或精简，**生成时建议默认显示6个，其余按折叠处理**，具体数量生成时可视版面密度调整，不强制
- User Journey：`user-journey.png`，可配合 Before/During/Result/After 阶段说明（PDF 原文有四階段表格内容，建议精简为简短文字段落，不照搬整张表格的所有字段，按 Voice Rules 的「图片支持推理，不替代推理」原则，关键信息用文字呈现，详细表格内容可作为图片证据补充）
- 末尾加 Influence 块

### 5.10 Define
- Design Principles（PDF 提供6个：Transparency/Clarity/Efficiency/Accessibility/Supportiveness/Inclusiveness），用卡片网格呈现，参照 RKT `rkt-scope-grid` 或 VSK `ux-principle-grid` 模式
- Problem Statement（即 HMW，已在 Problem section 处理，此处不重复）
- 末尾加 Influence 块

### 5.11 Develop
- Ideation：`ideation.png`
- Information Architecture：`ia.png`
- User Flow：`user-flow1-3.png`（三张，参照 RKT 横向或纵向排列，生成时按图片实际比例决定）
- Prototyping：`lofi-prototype.png`
- **Usability Testing（折叠重点）**：
  - 6 张图（ut1-ut6）对应 6 个改进点，内容来自 PDF：Navigation Feedback / Terminology Confusion / Rating Ambiguity / Comparison Feature / Agent Contact / Inspection Report
  - 默认显示前 3 个，其余 3 个折叠
  - 折叠交互参照 RKT 的 `wireExpand(btnId, panelId)` 模式，新增对应的 wst 折叠按钮 id（如 `wst-ut-btn`/`wst-ut-more`）
  - 卡片样式：图文卡片（参照 ASH 的 `ux-test-block`：图 + 标题 + 简短说明），不是纯文字列表
  - 每条内容需精简改写，不照搬 PDF 原文的详细描述
- 末尾加 Influence 块

### 5.12 Deliver
- **Design System**：
  - Typography：`ds-font.png`，说明 Noticia Text（标题）+ SF Pro（正文）
  - Colour：`ds-color.png`，三个 PDF 原色（`#FFB200`/`#FB8A00`/`#FFEFDE`）作为品牌色展示，与本文档第二节的「WST 网站呈现用色」（`#9F5801` 等）需在文案中做区分说明，避免混淆「Welnest 产品本身的品牌色」与「HENEX 网站展示这个案例所用的强调色」
  - Brand：`ds-brand.png`，logo 故事（nest + birds + house 寓意）
- **Final Design**：
  - `final-design1.png`、`final-design2.png`
  - 参照 ASH 的 `ux-feature-list` 模式（如果只有2张图，可考虑做2个 `ux-feature` 区块，不强制四个）

### 5.13 Retrospective
- 三卡 Value / Limitation / Next，从 PDF 的 Reflection 与 Next steps 段落提炼改写：
  - Value: 强调 problem reframing、principles 驱动决策、usability-driven 改进
  - Limitation: personalization depth 与 real-world validation 不足
  - Next: usability metrics、diary studies、personalization、accessibility checks、analytics

### 5.14 HENEX Method Recipe（重点：与 PDF 不一致，已裁定使用 RAG 官方数据）

**使用 RAG `Project_Recipe_Map` 表的官方映射，PDF 末尾原有的 Recipe 描述作废，不采用。**

```
Primary Recipe: R24 · Trust & Cooperation Rules
Triad: Agency × Empathy × Interface

Secondary Recipes（popover按钮）:
R18 · Step by Step Path Design
R21 · Small Step Actions
R06 · Inclusive Onboarding Paths
R12 · Calm Clarity Tuning
```

Mapping Confidence: High
官方理由（来自RAG）：Newcomers need trust mechanisms, guided steps, low-friction actions and supportive interface rules.

文案需按此重新撰写一段说明本项目为何对应 R24（信任机制、引导式步骤、低摩擦行动、支持性界面规则），不要使用 PDF 原文里 Purpose Story Script/Impact Dashboard/Sensory Wayfinding 等不在官方映射内的内容。

### 5.15 Related Projects
- 4张卡，建议从同为 Digital Systems 分类的项目中选取（参照 IA Workbook），具体选哪4个生成时按当前 works 目录已上线项目从中选取，保持与其他案例页"4张+Back to Works"的标准格式一致
- 描述单句短格式（6-10字英文）
- kicker 用全局中性灰 `var(--theme-muted)`

---

## 六、文案撰写原则（适用全篇）

严格遵循 `HENEX_Case_Study_Voice_and_Narrative_Rules.md`：

1. 清晰英文，IELTS 6.5-7 水平，主动语态优先
2. 避免填充式开头，避免空泛抽象名词堆叠
3. 段落简短，图片辅助推理而非替代推理
4. Influence/Impact 段落要讲清楚"这一步如何影响下一步"，不是泛泛总结
5. Scope/Tradeoff 表述要诚实，不夸大系统成熟度（如 Design System 部分，若只是基础色彩字体规则，不要描述成"a complete production-ready design system"）
6. Token 相关表述参照 Token and System Claims 章节的措辞规范
7. Feedback 引述精简到3条，每条不超过一句话，不是逐字保留 PDF 原文

---

## 七、待 Cowork 生成时自行决定但需在生成后向用户说明的事项

以下几点没有强制规定具体数值/数量，留给 Cowork 在实际排版时根据图片比例、内容密度判断，但**生成完成后需要在交付时明确告知用户做了哪些选择**，以便用户审阅：

1. Findings（F01-F08）默认显示几个，折叠几个
2. User Journey 表格内容精简程度
3. Final Design 是否扩展到4个 feature block 或保持2个
4. Section 背景色（米白 vs 橙）具体分配到哪几个 section

---

## 八、不在本次范围内的事项

- 不创建独立 Concept section（已与用户确认）
- 不修改 ASH/VSK/RKT/WSO 任何现有文件
- 不在本文档对应的 Chat 环境执行代码生成，代码生成动作在 Cowork 完成
- 完成后的颜色对比度需用现有对比度检查脚本复核（参照 henex-audit-rules）,确保正文文字达 AA

---

## 九、生成前检查清单（Cowork 端执行前自检）

- [ ] 已读取本文档全文
- [ ] 已读取 `docs/specs/` 下设计系统文档
- [ ] 已读取 `works/accessibility-support-hub.html` 和 `works/voting-starter-kit.html` 最新版本（不是凭记忆）
- [ ] 已确认 `.ux-feedback-icon` 相关CSS会被复制进 `wst.css`
- [ ] 已确认 Recipe 引用的是 R24 而非 PDF 原文的描述
- [ ] 已确认折叠交互参照 RKT 的 `wireExpand` 模式命名
- [ ] 生成后跑一遍 `henex-audit-rules` 里的 Page QA Checklist（响应式、无障碍、功能、代码卫生四块）

---

*文档版本 v1.0，生成日期 2026-07-01。如有结构调整，请在 Cowork 执行前回到 Chat 环境更新本文档，不要在 Cowork 端直接偏离本文档结构自行决策重大结构变化。*
