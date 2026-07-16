# HENEX 项目交接文件 — WSO 与 RKT 案例页重建

---

## 一、新对话启动 Prompt（复制到新对话开头）

```
我在继续 HENEX 个人作品集网站（henex.uk，GitHub: cafeyee/henex，public 仓库）的开发。

工作流：你生成或修改文件后复制到 /mnt/user-data/outputs/，我下载后手动 git push，Vercel 自动部署。
技术栈：纯 HTML/CSS/JS，三层 CSS（global.css / ux-case-study.css / 每个项目独立 css）。
图片在 Cloudflare R2：https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/{项目代号}/{文件名}

硬性工作规则（务必遵守）：
1. 先讨论再执行。生成代码前先确认架构，先读参考文件再写。
2. 执行任务前先告诉我用哪个模型（Opus 做规划/审查/决策，Sonnet 做代码生成），等我确认或切换后再开始。
3. 不要重复 append CSS/JS。改文件前先从 GitHub 拉最新版本（web_fetch raw.githubusercontent.com），整段替换，不要在旧文件上叠加。
4. 改某个 section 时只改那一段，不要顺手重写整页，除非我明确要求。
5. 用中文讨论，正式产出用英文。
6. 涉及共享/全局组件的修改前，先说明影响范围。
7. 改动后做结构验证（检查重复 ID、选择器范围、组件依赖的 CSS 是否存在）。

请先读这份交接文件，然后等我说下一步做什么。
```

---

## 二、项目背景

HENEX 是 Cafe Yi 的个人作品集网站，展示 UX 设计与建筑设计两类案例。Cafe 在项目里同时担任项目经理、前端、UX/UI 设计三个角色。

网站共 18 个 HTML 页面：5 个根页面（index、about、works、lab、philosophy）+ 13 个案例页（UX 与建筑各若干）。

### 颜色对比度原则（贯穿全站）
- 正文必须满足 WCAG AA（4.5:1）。
- 装饰性元素（kicker、icon、边框、装饰色）允许低于 4.5:1，作为有意识的品牌决策。
- 每个项目用「双层色」策略：一个深色用于标题/正文（达标），一个鲜亮色用于 kicker/装饰（视觉优先，不达标可接受），深色背景上另配高对比强调色。

### CSS 组件依赖的关键教训
- `.ux-feedback-icon` 的 SVG 样式（圆形容器尺寸 + stroke）定义在 `vsk.css`，**不在 global**。任何项目用 feedback 卡片，必须把这套 icon CSS 复制进自己的项目 css，否则 SVG 会渲染成巨大黑色圆形。
- `.ux-influence` 组件在 `ux-case-study.css` 里，但它的间距规则是 `.ux-narrow .ux-influence { margin-top: 44px }`。如果项目的 `.ux-copy` 没有 `ux-narrow` class，间距不生效，需在项目 css 里补 `.ux-copy/.ux-problem/.ux-wide-head .ux-influence { margin-top: 44px }`。
- 缩略图按钮（包裹 `<img>` 做点击放大的 `<button>`）的选择器必须写成 `.容器 figure button`，**不能**写成 `.容器 button`，否则会清空同容器内 Read more 按钮的边框和背景。
- Recipe popover 元素的 class 必须是 `ux-popover`（不是 `ux-recipe-popover`），JS 靠 `[data-recipe-popover]` 属性找元素，但 CSS 样式绑在 `.ux-popover` 上。
- 案例页脚本引用 `case-interactions.js`（不是 `ux-case-study.js`，后者 404），它处理 recipe popover 和图片 modal。

### UX 案例页标准叙事顺序（VSK 模式，所有 UX 页对齐）
```
Hero → Overview → Problem → Solution → Outcome → Feedback →
Design Process → Discover → Define → Develop → Deliver(DS + Final Design) →
Retrospective → HENEX Recipe → Related Projects
```

### 标准组件结构
- **Hero 标签**：`case-tag-row case-tag-row--overlay` 里放 `case-tags--primary`（深色文字+半透明背景）和 `case-tags--secondary`。primary 第一个标签放大类（如 UX），后面放细分类别，不重复写 UX Design。
- **Feedback**：`ux-wide-head`（在 grid 外面）+ `ux-feedback-grid` 里放 `ux-feedback-card`，每张卡含 person-icon SVG。
- **Design Process**：`ux-two-col` + `ux-process`（每个 `<div><span>标签</span><p>描述</p></div>`），扁平结构，不是卡片。
- **HMW**：直接嵌在 Problem 的 h2 里，用 `<strong>How might we</strong>` 和 `<em>` 包裹，靠 CSS 上色，不做独立 blockquote。
- **Influence 总结**：`<div class="ux-influence"><strong>Influence</strong><p>...</p></div>`，加在各关键阶段（Discover/Define/Develop/DS）末尾，说明这一步对下一步的启发。
- **Related Projects**：4 张卡 + 只保留「Back to Works」（不要 To the Top，右下角全局浮动按钮已承担回顶功能）。描述用单句短格式（约 6-10 字）。kicker 用全局中性灰 `var(--theme-muted)`，不是项目主题色。

---

## 三、本次完成的工作

### WSO（Who's Singing OuTūīside?）— 完成，待推送

**文件**：`works/whos-singing-outuiside.html`、`assets/css/wso-case.css`

**颜色**：
- 主色（标题/正文）`#30352E`（暗橄榄绿，白底 12.54:1 ✓）
- 装饰/kicker `#FF7701`（鲜橙，白底 2.66:1 视觉用；深色背景上 4.71:1 ✓）
- token：`--ux-theme: #30352E` / `--ux-dark: #1A1E18` / `--wso-orange: #FF7701`

**关键决策与结构**：
- Hero 纯背景图（wso/hero.png），无暗色叠层，标题 `#000000`，副标题 `#2A2A2A`，标签走全局 overlay 默认（深色文字），无白色 override。
- 标签：primary = UX / Data Visualisation / Illustration；secondary = Course Work。
- 视频：原生 `<video>`，`src=wso/wso.mp4`，`poster=wso/hero.png`，`aspect-ratio: 1660/1080`，圆角 + overflow hidden + 卡片阴影。
- HMW 嵌在 Problem h2，`<strong>`/`<em>` 橙色。
- Feedback：3 张卡（ux-wide-head 在 grid 外），icon CSS 已复制进 wso-case.css。
- Design Process：ux-two-col + ux-process 四步（Discover/Define/Develop/Deliver）。
- Discover：Primary Research（Observation 竖图 + Field Survey 两图**竖排** `--stack`）、Secondary Research（Info 四图网格 + Visualisation 两图）。
- Define：Ideation 两张 sketch（删了第三张）、Lo-fi 第一张显示其余两张折叠（`wso-lofi-more` + `wso-lofi-btn`）。
- Develop DS：`wso-ds-block` 左文右图交替 `--reverse`，比例 `.34fr/.66fr`。Illustration 块含宽图 + 两图并排 `wso-illus-pair`。
- Final Design：上下结构（kicker+标题+描述在上，图在下，居中，max-width 860px）。默认显示 Cover/Morning Call/Life Circle，Egg→Dream（final4-10）折叠在「Read more」后。Read more + View Prototype 并排居中（`wso-final-actions`）。
- kicker 橙色限定主内容区：`.ux-section:not(.ux-related) .ux-kicker` + hero + intro 首段。Related kicker 保持中性。
- 脚本：`case-interactions.js`。popover 元素用 `class="ux-popover"`。
- Recipe：R16 · Why First Data Story（Perception × Meaning × Medium），popover R10/R13/R12。
- Related：ASH/VSK/NDS/RKT 四张，单句描述，只「Back to Works」。

### RKT（ReKraft）— 完成，待推送

**文件**：`works/rekraft.html`、`assets/css/rkt.css`

**颜色**：
- 主色（标题/正文）`#187A62`（深teal绿，白底 5.25:1 ✓）
- 装饰/kicker `#3CBC9A`（中绿，白底 2.37:1 视觉用）
- 深色背景强调 `#C2FA7D`（lime，#0A3429 上 11:1 ✓）
- token：`--ux-theme: #187A62` / `--ux-dark: #0A3429` / `--ux-accent: #3CBC9A` / `--ux-lime: #C2FA7D`

**关键决策与结构**（按标准 VSK 顺序重排过，原页面顺序是乱的）：
- Hero 纯背景图（rkt/hero.png），无暗色叠层，标题 `#0A3429`，副标题 `#243B33`。
- 标签：UX / Te Ao Māori / Sustainability；secondary = Course Work。
- Overview：meta（角色用「Project Management, UX Research, UX/UI Design, Usability Testing」，team「4 UX Designers」）+ HENEX Lens R07。
- Problem：HMW 嵌 h2（`<strong>`/`<em>` 上色）。8 张 barrier 图（problem1-8.png），默认显示 **4 张一排**（4 列网格，**撑满容器宽度，无 max-width**），Read more 展开其余 4 张（`rkt-problem-more`，也 4 列）。Read more 居中。缩略图按钮选择器必须 `.rkt-problem-gallery figure button`。
- **Concept**（新增 section，放在 Solution 前）：一段总结文字 + 三张并排图（our-dream / our-explore / our-story）。容器**无底色透明**，**无固定高度**，图片原比例最大 320px 高，grid `align-items: end` + figure flex column 让三个 figcaption 在同一基线。每张图外包 `rkt-concept-grid__media` wrapper。
- Solution：用 `solution.png`，`ux-solution__grid` 左文右图。
- Outcome：`final-screen.png`，ux-wide-head + ux-evidence。
- Feedback：**2 张卡**（2 列网格），icon CSS 已复制进 rkt.css。
- Design Process：ux-two-col + ux-process 四步。
- Discover：Research + Findings（6 卡 `rkt-finding-grid` 3 列）+ Insights。末尾 Influence 块。
- Define：Problem Reframing + Design Principles + Design Scope（influence）。四张 principle 图（principle1-4.png）用 `rkt-scope-grid--four` 四列并排。
- Develop：Wireframe + Market lo-fi（lofi2）移入 `ux-copy` 内做 `rkt-develop-stack`（**纵向堆叠**，宽度自动跟随右侧文字列约 66%）。Community(lofi1) + Ako(lofi3) 折叠在 `rkt-develop-more`，Read more 居中。末尾 Influence 块。
- DS：`rkt-ds-stack` 文章 `.52fr/.48fr` 交替 `rkt-ds-reverse`。Illustration 和 Icons **拆成两个独立 article**（之前合在一起图太小）。Brand Identity 第三个。末尾 Influence 块（间距已用 `.ux-wide-head .ux-influence` 补到 44px）。
- **Final Design**（原叫 Module Decisions，已改名）：深色背景 `#0A3429`（`section:has(#final-modules-title)`），kicker lime，白字。内部 `ux-feature` 之间的分隔线已删（`border-top: none; padding-top: 0`）。Onboarding + Market 默认显示，Community + Ako 折叠在 `rkt-modules-more`，Read more **居中**，深色背景上白色描边样式。
- Retrospective：三卡 Value/Limitation/Next。
- Recipe：R07 · Purpose Story Script（Identity × Meaning × Medium），popover R25/R26/R22/R24。
- Related：NDS/VSK/ASH/**WSO**（WSO 后加的）四张，单句描述，只「Back to Works」。kicker 用 `var(--theme-muted)` 中性灰。
- JS：`wireExpand(btnId, panelId)` 辅助函数，wire 三个按钮：rkt-problem-btn、rkt-develop-btn、rkt-modules-btn。
- `:has()` 选择器用于深色 section 主题，现代浏览器支持，作为渐进增强接受。

---

## 四、待推送清单（尚未在 GitHub 上）

```
works/whos-singing-outuiside.html
assets/css/wso-case.css
works/rekraft.html
assets/css/rkt.css
```

建议提交：
```bash
git add works/whos-singing-outuiside.html assets/css/wso-case.css works/rekraft.html assets/css/rkt.css
git commit -m "rebuild: WSO and RKT case pages — structure, color tokens, components"
git push origin main
```

---

## 五、R2 图片清单（已确认存在）

**WSO**：hero.png, outcome.png, observation.png, field-survey1-2.png, info1-4.png, visualization1-2.png, sketch1-3.png, lofi1-3.png, ds-typograpy.png（注意拼写少一个 h）, ds-color.png, ds-icon.png, ds-illustration1-3.png, ds-interaction.png, ds-accessibility.png, final1-10.png, wso.mp4, wso-home.webp

**RKT**：hero.png, problem1-8.png, solution.png, our-dream.png, our-explore.png, our-story.png, principle1-4.png, wireframe.png, lofi1-3.png, ds-color.png, ds-typography.png, ds-illustration.png, ds-icon.png, ds-brand.png, final-onboarding.png, final-market.png, final-community.png, final-ako.png, final-screen.png, rkt-home.webp

---

## 六、剩余待办（之前积累，未做）

| 优先级 | 项目 | 说明 |
|--------|------|------|
| 中 | ASH、NDS、VSK、STD 补第二色 | 目前单色，缺节奏。需 Cafe 定每个项目的第二色 |
| 低 | C1 全局页 hero 换 about 风格 | 等手绘插画 |
| 低 | C2 UX 案例模板全站推广 | 投递后再做，WSO/RKT 是单页验证 |
| 低 | C3 建筑案例绿色强调色实验（BT2） | 无优先级 |

建筑案例页（已建，结构稳定）：OPI、NT3、GSH、PYZ。
建筑专用组件：`arch-diamond-row`、`arch-concept-image-stack`、`arch-concept-stack`、`arch-two-col--followup`、`arch-media-col`。

建筑 meta 角色措辞规则：不能暗示独立责任，用「Project Director, Chinese side (one of)」这类格式，正文用「I worked as one of the project directors」。

---

## 七、复盘：本次为什么反复多

主要原因不是模型智能，而是工作流问题：
1. 上下文太长，多轮改动叠加，曾基于「上一轮输出」而非「GitHub 最新版」改文件，导致旧规则和新规则混在一起。
2. 没有强制「先拉最新 → 整段替换 → 验证」的流程，出现过重复 append 造成 CSS/JS 冲突。
3. Sonnet 在没有明确参考时会凭记忆生成，必须强制先读参考页再写。

新对话请严格执行启动 prompt 里的 7 条规则，尤其是「改前先拉 GitHub 最新版」和「先读参考再生成」。
