# VTH v2 — Section Detail Spec (施工图) v2

**Purpose:** 逐 section 锁定内容来源、文字、布局、样式、图片、icon。按此表写代码，不做额外发挥。

**内容优先级:** 参考页内容优先 → 参考页没有的用生产页 → 视觉规范以 Master Template Spec 为准

**CSS 架构:** `global.css` → `ux-case-study.css` → `vth.css`（不动）→ `vth-v2.css`（新建，v2 专属）

**色彩变量（写入 `.ux-case-page--victim-hub`）:**
- `--ux-primary: #00164B` (navy)
- `--ux-secondary: #B30D0D` (red)
- `--ux-primary-dark`, `--ux-primary-soft`, `--ux-primary-pale` 按 navy 推导

---

## Section 0: Hero

| 项目 | 内容 |
|------|------|
| **来源** | 参考页 hero |
| **布局** | 保持生产页 `ux-hero ux-hero--cover vth-hero` 结构 |
| **Tags** | 左侧 primary tags: `UX` / `Service Design` / `Content Strategy`。右侧 secondary tag: `Professional Work`。规则：第一个 tag 是大类型（UX），后面是具体分类，最右是工作性质。 |
| **H1** | `Victims Hub`（保持生产页标题，不改） |
| **Summary** | "Creating clearer pathways for people looking for victim information, reporting options, support, safety information and what happens next."（参考页） |
| **Button 1** | Primary: "View outcome" → 滚动到 `#outcome` |
| **Button 2** | Secondary: "View prototype" → 滚动到 `#delivery`（hi-fi prototype 区域） |
| **背景** | 保持现有 hero gradient（navy → blue），不属于 tier 系统 |

---

## Section 1: Overview + Meta

| 项目 | 内容 |
|------|------|
| **来源** | 参考页 Overview 正文 + 生产页 Meta |
| **布局** | `.ux-two-col`（1/3 左 + 2/3 右） |
| **Kicker** | "Overview"（左侧 aside 内），颜色 `var(--ux-secondary)` (red) |
| **H2** | "A clearer victim information pathway."（参考页） |
| **正文** | 参考页两段：(1) "The Victims Hub work brought together research, information architecture, content strategy and delivery planning to improve how victim information is structured on the Police website." (2) "The work focused on clearer pathways for people looking for reporting options, support, safety information and what happens next. It also created a more stable reference package for review, handover and future go-live planning." |
| **Meta** | 与生产页完全一致（Client, Role, Team, Timeline, Tools, HENEX Lens, Skills） |
| **背景 Tier** | N (neutral, white) |
| **Meta label color** | `var(--ux-secondary)` (red) — CLIENT / ROLE / TEAM / TIMELINE / TOOLS |
| **HENEX Lens** | label 用 red，但 "R24 · Trust & Cooperation Rules" 链接文字用 `var(--ux-primary)` (navy blue) |
| **Skills 胶囊** | navy blue 边框 + navy blue 文字 |

---

## Section 2: Background

| 项目 | 内容 |
|------|------|
| **来源** | 参考页 Background(02) 文字 + R2 图片 |
| **布局** | `.ux-two-col`（1/3 左 + 2/3 右） |
| **Kicker** | "Background"，颜色 `var(--ux-secondary)` (red) |
| **H2** | "Useful information existed, but the journey was fragmented."（参考页） |
| **正文** | "Useful victim information already existed on the Police website, but it was spread across pages, FAQs and internal structures."（参考页） |
| **图片** | `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/current-site.png` |
| **3 张卡片** | ❌ 不放在这里，移到 Problem |
| **背景 Tier** | P (primary gradient) |

---

## Section 3: Problem

| 项目 | 内容 |
|------|------|
| **来源** | 混合：生产页 Problem 文字 + 参考页 Background 的 3 张卡片 |
| **布局** | Vertical stack，但标题行采用 split layout：kicker + H2 在左，正文在右（同一行）。HMW 和卡片在下方全宽。 |
| **Kicker** | "Problem"，颜色 `var(--ux-secondary)` (red) |
| **H2** | "The core challenge was guidance, resonance and confidence." |
| **正文（与 H2 同行右侧）** | (1) "The project was initially framed around improving victim information pages, but the research showed that the challenge was larger than a visual refresh." (2) "The real problem was whether people could quickly understand where to go, recognise that the content was written for them, and move forward with confidence." |
| **HMW（全宽）** | "How might we redesign the NZ Police victim pages so that someone who may or has experienced a crime can quickly **understand where to go**, feel that the **pages were written for them**, and **move forward with confidence**?" |
| **HMW 颜色** | "**How might we**", "**understand where to go**", "**pages were written for them**", "**move forward with confidence**" 用 `var(--ux-secondary)` (red)。其余文字用 `var(--ux-primary)` (navy blue)。 |
| **3 张卡片（HMW 下方）** | |

| Card | Title | Text |
|------|-------|------|
| Fragmented content | "Useful information existed across pages and FAQs, but the pathway through that information was not clear enough." |
| Internal structure | "Some content reflected organisational categories more than the way people look for help." |
| Unclear next steps | "People needed clearer routes for reporting, support, safety information and what happens next." |

| **Influence block** | "The problem framing gave the project a practical decision filter. Each design direction could be assessed against whether it helped people find the right path, recognise the language as relevant to them and move forward with more confidence." |
| **背景 Tier** | L (light) |

---

## Section 4: Solution (新 section)

| 项目 | 内容 |
|------|------|
| **来源** | 参考页 Problem(03) 的内容，重新标记为 Solution |
| **布局** | Vertical stack |
| **Kicker** | "Solution"，颜色 `var(--ux-secondary)` (red) |
| **H2** | "A strategy built on guidance, resonance and confidence." |
| **正文** | "The core challenge was not only to refresh pages. The work needed to clarify guidance, improve language resonance and build confidence in the next step." |
| **3 张 icon 卡片** | |

| Card | Title | Text | Tabler Icon |
|------|-------|------|-------------|
| Guidance | "Help people recognise the right path and next step." | `ti-sign-right` |
| Resonance | "Use language and labels that match how people describe their needs." | `ti-message` |
| Confidence | "Set honest expectations and make support pathways visible." | `ti-sparkles` |

| **Influence block** | "The strategy was distilled from research and workshop findings, laying the groundwork for design principles and the information architecture that followed." |
| **背景 Tier** | N (neutral) |
| **Icon 卡片样式** | 参考页 `.visual-card` 风格：icon 居中上方，标题，描述文字 |

---

## Section 5: Outcome

| 项目 | 内容 |
|------|------|
| **来源** | 参考页 Final Outcome(10) — 只取 video 部分 |
| **布局** | Vertical stack |
| **Kicker** | "Outcome"，颜色 `var(--ux-secondary)` (red) |
| **H2** | "A review-ready hub package and hi-fi direction." |
| **正文** | "The outcome was a review-ready hub package that could support the next delivery phase." |
| **Video** | `<video>` 标签，src: `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/vth.mp4` |
| **不放在这里** | hi-fi prototype tabs, 4 handover cards → 都去 Delivery |
| **背景 Tier** | D (deep, navy) |
| **文字颜色** | 白色（Tier D 要求） |
| **Kicker 对比度** | `#B30D0D` red on `#00164B` navy = contrast ratio ~3.2:1。不足 4.5:1。需要在 Tier D 上用亮化红色，如 `#FF4444` 或 `#E53E3E`，确保对比度达标。写入 `vth-v2.css` 作为 Tier D 的 kicker override。 |

---

## Section 6: Contribution（重组 "My role"）

| 项目 | 内容 |
|------|------|
| **来源** | 混合：参考页 Approach(04) 卡片内容 + 生产页 My Role |
| **布局** | Vertical stack |
| **Kicker** | "Contribution"，颜色 `var(--ux-secondary)` (red) |
| **H2** | "Leading research, IA, content strategy and governance." |
| **正文** | "The project approach combined evidence gathering, IA design, content strategy, prototype testing and governance planning." |
| **6 张工作领域卡** | 保持参考页原始的 6 张工作领域卡，不加 role badge。Kicker 改为 "Contribution"，H2 用角色视角描述，卡片内容与参考页一致。不用 influence block（此 section 讲个人 impact）。 |

| Card | Title | Text |
|------|-------|------|
| 1 | Research and evidence | "Build and connect the evidence base." |
| 2 | IA and content | "Translate findings into page structures, content hierarchy and reusable patterns." |
| 3 | Governance | "Support review cycles, decision pathways and formal handover readiness." |
| 4 | Stakeholder alignment | "Work across business, communications, web and programme governance needs." |
| 5 | Prototype direction | "Use the prototype as a shared artefact for testing and review." |
| 6 | BAU planning | "Prepare the path from prototype completion to build, launch and operation." |

| **背景 Tier** | N (neutral) |

---

## Section 7: Process (新 section, Chapter 2 开场)

| 项目 | 内容 |
|------|------|
| **来源** | 新建，Spec 定义 |
| **布局** | Vertical stack |
| **Kicker** | "Process"，颜色 `var(--ux-secondary)` (red) |
| **H2** | 待确认。建议："From evidence to delivery." |
| **4 张 nav 卡** | 可点击导航到 Chapter 2 子 section：|

| Card | Title | Links to |
|------|-------|----------|
| Research | "Mixed evidence, findings and design principles" | `#research` |
| Design | "IA, content strategy, lo-fi prototype and design system" | `#design` |
| Validation | "Usability testing results and metrics" | `#validation` |
| Delivery | "Hi-fi prototype, key decisions and go-live planning" | `#delivery` |

| **背景 Tier** | P (primary gradient) |
| **卡片样式** | Navigable card，border + background tint 用 `var(--ux-primary)`，hover lift + shadow |

---

## Section 8: Research

| 项目 | 内容 |
|------|------|
| **来源** | 参考页 Research(05) + Findings(06) + Principles(07) 三合一 |
| **布局** | Vertical stack |
| **Kicker** | "Research"，颜色 `var(--ux-secondary)` (red) |
| **H2** | "The redesign was grounded in mixed evidence." |
| **正文** | "Research, testing, content review, web data and team scoring were combined to build a stronger basis for IA structure, language choices and action pathway design."（比参考页稍详细，比生产页简洁） |

### Sub-block A: Method Grid (7 张)

| Method | Number | Label |
|--------|--------|-------|
| Interviews | 3 | Interviews |
| Usability tests | **6** | Usability tests |
| Best practices | 26 | Best practices analysed |
| Content items | 200+ | Content items inventoried |
| Data pages | 5 | Pages of data analysed |
| Cards sorted | 30 | Cards sorted |
| Directions | 10 | Directions scored |

**样式：** 参考页 `.method-card` grid（7 列桌面，4 列中屏，1 列手机）

### Sub-block B: Findings (3 张 icon 卡)

| **Sub-kicker** | "Findings" |
| **Sub-H3** | "Three findings shaped the design response." |
| **Lead** | "The evidence pointed to three connected design needs: clearer guidance, language that matched people's situations, and visible next steps." |

| Card | Title | Text | Tabler Icon |
|------|-------|------|-------------|
| Structure | "Organise content around clear pathways, consistent page patterns and information people can scan." | `ti-sitemap` |
| Tone | "Use language that is warm, plain, honest and written from the person's point of view." | `ti-message-circle` |
| Behaviour | "Make next steps visible so people know what they can do, where they can go and what to expect." | `ti-route` |

### Sub-block C: Design Principles (9 张 icon 卡)

| **Sub-kicker** | "Design Principles" |
| **Sub-H3** | "Nine principles kept decisions grounded in evidence." |
| **Lead** | "The principles helped keep design conversations focused on evidence, rather than personal preference or internal structure." |

| # | Principle | Description | Tabler Icon |
|---|-----------|-------------|-------------|
| 01 | Signal Direction | "Show victims where to go, not what exists." | `ti-sign-right` |
| 02 | Speak Victim | "Write every label the way a victim would describe their need." | `ti-message` |
| 03 | Reveal Paths | "Keep expected pathways visible even when the route leads elsewhere." | `ti-sitemap` |
| 04 | Greet First | "Acknowledge the person before explaining the process." | `ti-users` |
| 05 | Set Expectations | "Tell people what comes next without making promises." | `ti-message-check` |
| 06 | Define Boundaries | "Say what Police does and where its responsibility ends." | `ti-shield-check` |
| 07 | Enable Scanning | "Design for scanning, not reading." | `ti-scan` |
| 08 | Build Familiarity | "Give every page a consistent shape so nothing needs relearning." | `ti-layout-grid` |
| 09 | Invite Action | "Turn support information into a reason to act." | `ti-send` |

**样式：** `.principle-card` grid（3 列），编号（左上）、icon（右上）、标题、描述。

### Sub-block D: Influence

"The principles shaped pathways, labels, page templates, Police boundaries and support actions."

| **背景 Tier** | N (neutral) |
| **图片** | 无（v2 用参考页的 icon 版替代生产页的图片版） |

---

## Section 9: Design (IA, Content Strategy, Lo-fi Prototype, Design System)

| 项目 | 内容 |
|------|------|
| **来源** | 参考页 IA and Content Strategy(08) + 新增 lo-fi + 新增 DS |
| **布局** | Vertical stack |
| **Kicker** | "Design"，颜色 `var(--ux-secondary)` (red) |
| **H2** | "The IA shifted from organisational categories to victim pathways." |
| **正文** | "Content was grouped around what people need to understand, what people need to do, and what people may need to follow up on." |

### Sub-block A: IA Categories (3 张 icon 卡)

| Card | Title | Text | Tabler Icon |
|------|-------|------|-------------|
| Understand | "Information for victims" | `ti-help-circle` |
| Act | "Report a crime and Support for victims" | `ti-send` |
| Stay informed and safe | "What happens next, Keeping safe and Give feedback" | `ti-shield-check` |

### Sub-block B: IA Diagram

| **图片** | `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/ia-structure.png` |
| **Modal zoom** | 保持 `data-modal-src` 功能 |
| **Figcaption** | "Information architecture structure used to connect victim pathways, page sections and supporting content." |

### Sub-block C: Lo-fi Prototype

| **来源** | 从生产页 Validation 移过来 |
| **图片** | `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/lofi-hub.png` |
| **说明** | "Low-fidelity hub prototype used to make structure visible before build." |

### Sub-block D: Design System (新增)

| **Sub-kicker** | "Design System" |
| **Sub-H3** | "A working design system reverse-engineered from the existing Police site." |
| **Lead** | "The Police website had no documented design system. Core elements, including colour, typography and navigation patterns, were reverse-engineered from the live site. New components were then created to fill gaps the existing pages could not address: accordion panels, information popovers, quick exit controls and warning cards." |

**默认可见区域：** 3 张新增组件展示卡（icon + 标题 + 一行描述），展示项目中新建的核心组件：

| Component | Title | Description | Tabler Icon |
|-----------|-------|-------------|-------------|
| Accordion | "Grouped disclosure panels for structured information." | `ti-layout-rows` |
| Quick Exit | "Safety control that opens an unrelated site for users in danger." | `ti-door-exit` |
| Glossary Popover | "Inline term definitions without leaving the page." | `ti-help-circle` |

**Read more 展开后：** iframe 嵌入完整 DS 页面。URL: `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/vth-ds.html`。复用参考页 `.hifi-shell` 的 iframe 嵌入模式。

### Sub-block E: Influence

"The pathway model made the hub easier to explain, prototype, test and extend into later delivery stages."

| **背景 Tier** | L (light) |

---

## Section 10: Validation

| 项目 | 内容 |
|------|------|
| **来源** | 参考页 Prototype and Validation(09) + 生产页 ease-score 图 |
| **布局** | Vertical stack |
| **Kicker** | "Validation"，颜色 `var(--ux-secondary)` (red) |
| **H2** | "Testing showed the new direction was easier to use." |
| **正文** | "The lo-fi prototype was tested against the current site to measure whether the new structure improved task success, ease and speed."（改写：去掉 prototype 泛泛描述，聚焦测试方法） |
| **3 张 Metric 卡** | |

| Metric | Value | Subtext | Direction |
|--------|-------|---------|-----------|
| Success rate | 22.2% ↑ | From 66.7% to 88.9% | Improved |
| Ease score | +56.3% ↑ | From 2.67/5 to 4.17/5 | Improved |
| Median task time | -41.4% ↓ | From 140s to 82s | Faster |

| **测试结果图** | `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/ease-score.png`（保留） |
| **Lo-fi 图** | ❌ 移到 Design section |
| **Influence block** | "The results moved the conversation from opinion to evidence-based iteration, while showing where signposting still needed improvement." |
| **背景 Tier** | N (neutral) |

---

## Section 11: Delivery（合并 Final Outcome + Key Decisions + Go-live）

### Sub-block A: Hi-fi and Handover (Tier D)

| 项目 | 内容 |
|------|------|
| **来源** | 参考页 Final Outcome(10) 中的 hi-fi + 4 cards |
| **Kicker** | "Delivery"，颜色需亮化 red（同 Outcome 的 Tier D 处理） |
| **H2** | 待确认。建议："From tested direction to review-ready package." |
| **Hi-fi prototype embed** | iframe: `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/08-High-fidelity%20prototype_v4.0.html`。带 tab 切换（"Landing page" / "Information page"），复刻参考页 `.hifi-shell` 组件。 |
| **4 张 handover 卡** | |

| Card | Title | Text |
|------|-------|------|
| Hi-fi direction | "Landing page direction and reusable section template direction." |
| IA and content model | "Pathway structure, page hierarchy and reusable content patterns." |
| Handover package | "Content inventory, open items and recommended next steps." |
| Delivery readiness | "Inputs for build planning, QA, accessibility and go-live preparation." |

**样式：** Tier D 深色背景（navy），白色文字，卡片用深色变体

### Sub-block B: Key Decisions (Tier L)

| 项目 | 内容 |
|------|------|
| **来源** | 生产页 Key decisions section |
| **Sub-kicker** | "Key decisions and trade-offs" |
| **Sub-H3** | "The project required trade-offs across UX, governance and delivery." |
| **Lead** | "Several decisions shaped the project direction and helped keep the work focused on user pathways, realistic delivery and sustainable service ownership." |
| **6 张 decision 卡** | |

| Card | Title | Text |
|------|-------|------|
| Decision | Treat the work as structure change, not visual refresh | Research showed that the deeper issue was information hierarchy, navigation flow and language. |
| Decision | Organise around victim tasks | The hub needed to reflect what people needed to do, not how internal services were organised. |
| Decision | Define Police boundaries clearly | The hub needed to explain what Police can do, where responsibility ends and when another agency may be better placed to help. |
| Decision | Use the prototype as an alignment tool | Keeping the prototype low-fidelity for longer helped surface structure, signposting and wording issues. |
| Decision | Do not lock build too early | CMS build model, vendor work, content approval, quick exit, accessibility and QA all depended on a reliable build reference. |
| Decision | Plan for operation, not only launch | The hub needed hypercare, stabilisation, ownership and BAU rhythm after go-live. |

### Sub-block C: Go-live and BAU (Tier N)

| 项目 | 内容 |
|------|------|
| **来源** | R2 参考页 (`10-Project Summary_R2.html`) BAU section — 完全对照参考页 |
| **Sub-kicker** | "Go-live and BAU Planning" |
| **Sub-H3** | "The prototype became an operational planning asset." |
| **Lead** | "The plan set out how the hub could move from prototype to build, launch readiness and BAU. It clarified the delivery streams, likely timing, key decision variables, resource needs and the operating rhythm after launch." |
| **布局** | 与参考页完全一致：Lead → Gallery（2 图 + Read more + 5 图）→ 3 文字卡 → Influence |

**图片 Gallery（Lead 下方，卡片上方）：**

默认显示的 2 张图：

| # | Image URL | Alt | Caption title | Caption text |
|---|-----------|-----|---------------|-------------|
| 1 | `https://pub-…/vth/post-pathway.png` | "Diagram showing complete the full hub package and prepare for go-live workstreams." | "Post-June pathway to go-live" | "Two linked streams move the work from the remaining hub package into build, QA and launch preparation." |
| 2 | `https://pub-…/vth/post-timeline.png` | "Timeline scenario comparison showing fast, recommended managed and conservative delivery pathways." | "Timeline scenario comparison" | "The recommended managed pathway is the planning case, with fast and conservative paths used to frame opportunity and risk." |

"Read more" 按钮（展开/收起）

展开后显示的 5 张图：

| # | Image URL | Alt | Caption title | Caption text |
|---|-----------|-----|---------------|-------------|
| 3 | `https://pub-…/vth/post-roadmap.png` | "Indicative roadmap timeline showing go-live workstreams and dependencies." | "Indicative roadmap to go-live" | "The roadmap sequences setup, content, build, testing, accessibility, approvals and launch readiness across the managed pathway." |
| 4 | `https://pub-…/vth/post-variables.png` | "Impact and certainty matrix showing key timing variables for delivery planning." | "Key variables that affect timing" | "High-impact and lower-certainty items should be confirmed first because they can reshape the delivery path." |
| 5 | `https://pub-…/vth/post-resource.png` | "Resource view chart showing relative workload across roles over time." | "Resource view" | "Go-live needs coordinated effort across business ownership, content, communications, web, vendor and governance roles." |
| 6 | `https://pub-…/vth/post-after-golive.png` | "Post-launch operation timeline showing hypercare, stabilisation, BAU rhythm and improvement backlog." | "After go-live operation" | "After launch, the hub should move through hypercare, stabilisation and a BAU operating rhythm before the first improvement backlog." |
| 7 | `https://pub-…/vth/post-long-term.png` | "Future improvement roadmap showing long-term improvement areas after first launch." | "Long-term improvement areas" | "Future work can address legacy content, FAQs, search relevance, VictimInfo alignment and broader service integration." |

收起按钮："Show less"

**3 张文字卡（Gallery 下方，`.grid-3`）：**

| Card | Title | Text |
|------|-------|------|
| 1 | Complete the full hub package | "Remaining hi-fi pages, draft content, user testing, content inventory updates and handover package." |
| 2 | Prepare for go-live | "CMS build model, web team and vendor engagement, quick exit, accessibility, QA and publishing preparation." |
| 3 | Post-launch operation | "Hypercare, stabilisation, BAU rhythm and improvement backlog." |

| **Influence block** | "The plan helped clarify what needed to be stable before build, what teams needed to be involved, and how the hub would move from launch into hypercare, stabilisation and BAU." |

| **背景 Tier** | D → L → N（三段式） |

---

## Section 12: Reflection

| 项目 | 内容 |
|------|------|
| **来源** | 参考页 Reflection(12)，重组为全局统一的 3 卡格式 |
| **布局** | Vertical stack，保持 `.ux-retro` class |
| **Kicker** | "Looking back, looking forward."，颜色 `var(--ux-secondary)` (red) |
| **H2** | "What should continue after the prototype phase." |
| **Lead** | "The project showed that sensitive public service content needs evidence, structure, governance, ownership and enough time to test the proposed experience in practice." |
| **3 张卡（全局统一标题）** | |

| Card | Title | Text |
|------|-------|------|
| Value | "The work demonstrated that evidence-led structure, clear governance and tested pathways can reshape how public services present sensitive information." |
| Learned | "Further tree testing and user testing would strengthen IA confidence. Frontline input could refine how support, expectations and next steps are explained to victims." |
| Next | "A shared tracker dashboard for delivery visibility, and sustained governance and BAU planning beyond prototype and launch, would support long-term operation." |

| **背景 Tier** | P (primary gradient) |

---

## Section 13: HENEX Recipe

| 项目 | 内容 |
|------|------|
| **来源** | 生产页 |
| **布局** | `.ux-two-col`（1/3 左 + 2/3 右） |
| **Kicker** | "HENEX Method Recipe"，颜色 `var(--ux-secondary)` (red) |
| **H2** | "R24 explains how the Victims Hub turns trust, cooperation and safe action into service structure." |
| **Primary Recipe** | R24 · Trust & Cooperation Rules |
| **Primary 描述** | 生产页现有描述 |
| **Recipe node pills** | 保留 3 个 pill tags，但颜色按 HENEX 维度系统着色（文字 + 边框）：|

| Pill | Dimension | Color |
|------|-----------|-------|
| Agency | Human | `var(--color-human)` = `#3C8CF4` (blue) |
| Empathy | Emotion | `var(--color-emotion)` = `#FF5688` (pink) |
| Interface | Nature | `var(--color-nature)` = `#31BB8E` (green) |

| **Secondary Recipe label** | ⭐ 新增 "Secondary Recipe" 标签 |
| **Secondary IDs** | R18, R15, R04, R09（保持 popover buttons） |
| **Popover** | 保持生产页 recipe popover 功能 |
| **背景** | `var(--theme-surface-soft)` (#F0F3F5 light / #121314 dark) |

---

## Section 14: Related Projects

| 项目 | 内容 |
|------|------|
| **来源** | 生产页 |
| **布局** | 保持现有结构 |
| **Kicker** | "Related Projects"，颜色 global neutral |
| **H2** | "More work across service, digital and spatial systems." |
| **4 张卡** | 保持生产页 4 个项目卡 |
| **Back to Works button** | 保持 |
| **背景 Tier** | N (neutral, white) |

---

## 全局样式变更汇总

| 变更 | 说明 |
|------|------|
| `--ux-secondary: #B30D0D` | 加到 `.ux-case-page--victim-hub` |
| 所有 section kicker 颜色 | `var(--ux-secondary)` (red)，Related 用 neutral |
| Meta label 颜色 | `var(--ux-secondary)` (red)，HENEX Lens R24 链接用 `var(--ux-primary)` |
| Skills 胶囊 | navy blue 边框 + 文字 |
| Overview kicker | `var(--ux-secondary)` (red) |
| HMW 双色 | 关键短语 red，其余 navy blue |
| Hero buttons | "View outcome" + "View prototype" |
| Hero tags | `UX` / `Service Design` / `Content Strategy` + `Professional Work` |
| "My role" → "Contribution" | Kicker 改名，6 卡保留但加角色标签 |
| Recipe node pills | 按维度着色：blue / pink / green |
| 新建 Solution section | 参考页 Problem(03) 内容 |
| 新建 Process section | 4 张 nav cards |
| Design section 扩充 | 新增 lo-fi prototype + Design System |
| Delivery Go-live | 图片内容布局 + Read more 展开 |
| Reflection | 3 卡统一标题 Value / Learned / Next |
| Tier D kicker | 亮化 red 确保深色背景对比度 |
| 4-tier 背景系统 | N/L/P/D |

---

## 背景 Tier 序列（从上到下）

| Section | Tier |
|---------|------|
| Hero | (own gradient) |
| Overview | N |
| Background | P |
| Problem | L |
| Solution | N |
| Outcome | D |
| Contribution | N |
| Process | P |
| Research | N |
| Design | L |
| Validation | N |
| Delivery sub-A | D |
| Delivery sub-B | L |
| Delivery sub-C | N |
| Reflection | P |
| Recipe | (special gray) |
| Related | N |

相邻 tier 检查：N→P→L→N→D→N→P→N→L→N→D→L→N→P→special→N ✅ 无冲突

---

## 剩余待确认事项（v2 阶段，已通过下方 v4 Addendum 取代或延续处理）

1. **Process H2：** "From evidence to delivery." — 已确认沿用。
2. **Delivery H2：** "From tested direction to review-ready package." — 已确认沿用。
3. **Design System 组件预览图：** 已通过 v4 Addendum 重新设计为文字+实景交替布局，不再是截图预览卡。
4. **Go-live sub-block：** 已通过 v4 Addendum 修正为单列图片 + 默认隐藏卡片。

---

# ⚠️ v4 Bug Fix Addendum（2026-07-10）

**来源：** Cafe 提供的 "V2 bug.docx"，共 27 项反馈 + 1 项独立页面问题（Chronology）+ 1 项会中补充（Lo-fi 原型嵌入）。

**本 Addendum 是对上方 v2/v3 spec 内容的修正层。凡与上方冲突之处，以本节为准。** 所有条目标注 `[MODIFIED]`。执行时按此 Addendum 逐条对照代码，不要只看上方旧条目。

**依赖的全局规则：** 本 Addendum 大量引用 Master Template Spec 的新增 Section 4.1 两层标题规则（Tier A 章级堆叠 / Tier B 子块并排），执行前需先读该节。

---

## A1. 全局结构调整：四大章开场描述 + 子块标题补全 `[MODIFIED]`

**范围：** Research、Design、Validation、Delivery 四章。Process 本身已是纯开场章节，不需要这层。

**规则：**
- 每章顶部已有的 kicker + H2，视为该章的 **Tier A 章级开场标题**，紧跟一段完整总结该章内容与意义的描述文字（现有描述偏简短，需改写得更完整，说明这一章做了什么、为什么重要）。
- 章内每个具体子块（例如 Research 章下的 method grid、Findings、Design Principles；Design 章下的 IA categories、IA 图、Lo-fi、Design System）都必须有自己独立的 **Tier B 子块标题**：kicker + 小标题（左 1/3）+ 描述（右 2/3）。目前 method grid、IA categories、IA 图几个子块缺这一层，需要补上。
- 开场标题与子块内容在同一个 `<section>` 内，不拆分成独立 section，不引入新的 tier 背景，不影响相邻 tier 规则。

**Research 章子块标题补全：**

| 子块 | Tier B Kicker | Tier B 标题 | 描述 |
|------|---------------|------------|------|
| Method grid | "Mixed Method Research" | "Seven methods built the evidence base." | "Interviews, usability testing, best practice review, content inventory, web data analysis, card sorting and evaluative scoring were combined to reduce reliance on assumption." |
| Findings | "Findings"（已存在，保留） | "Three findings shaped the design response."（保留） | 保留现状 |
| Design Principles | "Design Principles"（已存在，保留） | "Nine principles kept decisions grounded in evidence."（保留） | 保留现状 |

**Design 章子块标题补全：**

| 子块 | Tier B Kicker | Tier B 标题 | 描述 |
|------|---------------|------------|------|
| IA categories | "IA Categories" | "Content grouped around victim intent." | "Understand, Act, and Stay informed and safe replaced organisational categories as the top-level grouping." |
| IA diagram | "IA Structure" | "A pathway model connecting every section." | "The structure diagram maps how victim pathways connect page sections and supporting content." |
| Lo-fi | 见 A8，独立小节处理 | — | — |
| Design System | "Design System"（已存在，保留） | 见 A9 重做 | 见 A9 |

**章级描述文字改写（Tier A，四章）：**

| 章 | 新描述 |
|----|--------|
| Research | "Research, testing, content review, web data and team scoring were combined to build a stronger, evidence-led basis for IA structure, language choices and action pathway design, rather than relying on internal assumption." |
| Design | "Design translated research findings into a pathway-based information architecture, a low-fidelity prototype and a reverse-engineered design system, giving the team a shared, testable structure to react to." |
| Validation | "The low-fidelity prototype was tested against the current site to measure whether the new structure improved task success, ease and speed, moving the conversation from opinion to evidence." |
| Delivery | "Delivery consolidated the tested direction into a hi-fi prototype, a set of key delivery decisions, and a go-live and BAU plan, so the project could hand over a review-ready package rather than a set of disconnected artefacts." |

---

## A2. 布局规则套用清单 `[MODIFIED]`

按 Master Spec 新 Section 4.1 执行：

**Tier A（`.ux-chapter-head`，纵向堆叠占左 2/3）：** Background、Problem、Solution、Outcome、Contribution、Process、Research、Design、Validation、Delivery、Reflection 的章级开场标题。

**Tier B（`.ux-section-head`，左 1/3 + 右 2/3 并排）：** 上方 A1 列出的所有子块标题，以及已存在的 Findings / Design Principles / Design System 子块标题。

**不变：** Overview 保留 `.ux-two-col`。

**变化：** Background 从原本的 `.ux-two-col` 改为 Tier A 堆叠布局，与 Problem/Solution/Outcome 等章节一致。

---

## A3. Hero `[MODIFIED]`

- 背景从图片改为淡主题色渐变（浅蓝到更浅蓝，参考截图 image1），不再使用 hero-bg.png。
- 需要 dark mode 适配：dark 模式下渐变改为深蓝色系（`--ux-primary-dark` → `--ux-primary`）。
- 右侧不再放置任何插图/mockup 元素。

---

## A4. Overview `[MODIFIED]`

- Meta 信息标题（CLIENT / ROLE / TEAM / TIMELINE / TOOLS / SKILLS 的 span 标签）颜色从 `var(--ux-primary)`（蓝）改为 `var(--ux-secondary)`（红），与 HENEX Lens 标签颜色一致。
- **修正：** 这与之前 v2 spec Section 6.2 的记录相反，之前记反了，以此条为准。

---

## A5. Background `[MODIFIED]`

- 布局改为 Tier A 堆叠（见 A2），不再用 `.ux-two-col`。
- 内容不变：正文 + `current-site.png` 图片。

---

## A6. Problem `[MODIFIED]`

- 文字字号改为与 Background 一致的字号（现在偏大，需要缩小到 Background 的字号）。
- 布局与 Solution 一致，采用 Tier A 堆叠。

### HMW 重做

- 去掉卡片外框（不再用 `.vth-hmw-statement` 的 border+background 容器样式）。
- 间距必须走 spacing token（`--space-*`），不能是 0。
- 位置从 HMW 卡片在上、3 张卡片在下，改为 **3 张卡片在上、HMW 在下**。
- 删除 Problem 部分的 Influence block，改为该 section 以 HMW 结束。
- 样式参考 ASH 的 HMW 处理：文字撑满宽度，不设右侧配图，双色关键词高亮保留（红色关键短语 + 深色正文，参考现有 vth2-hmw 双色逻辑）。
- **待核实：** 需要对比 ASH 页面 HMW 的实际字号（`clamp()` 数值），确保 VTH 的 HMW 字号与 ASH 一致，不要沿用当前偏大的数值。

---

## A7. 全局 icon 卡片样式重做 `[MODIFIED]`

**范围：** Solution 3 卡、Findings 3 卡、Design Principles 9 卡、IA categories 3 卡、以及后续所有采用相同 icon 卡片结构的地方。这是一次性统一改动，不做逐 section 差异化。

- 去掉当前圆形底纹背景的 icon 容器（`.vth2-icon` 的 `border-radius: 50%` + 背景色块）。
- 改为更大尺寸、无背景框的裸 icon，直接使用 `var(--ux-primary)` 或语境色，参照参考页效果（image8：大尺寸线性 icon，无外框）。
- 卡片内标题字号增大，目前偏小、不够醒目，需要提升视觉层级（建议从当前 `1.08rem` 提升到接近 `1.2–1.3rem`，具体数值构建时试验确认）。

---

## A8. Lo-fi 原型独立小节 `[MODIFIED]`

- 从 IA diagram 后单独拆出一个 Tier B 子块：kicker "Lo-fi Prototype"，标题待定（建议 "A single prototype to test structure before build."）。
- 描述文字：说明 lo-fi 原型的目的——把所有功能和内容反馈整合进一个完整原型，用于测试信息架构、用户流程和可用性，并根据测试反馈进行迭代。
- **图片替换：** 原 `lofi-hub.png` 改为 `lofi-info`（R2 已有，具体文件名以 R2 实际路径为准，构建时核实完整 URL）。
- **新增原型嵌入：** 参照 Design System 小节的 `.hifi-shell` 模式，嵌入 lo-fi 原型 iframe，URL: `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/vth-lofi.html`。
- 默认收起，用 "Read more" 按钮展开显示（复用 `data-expand-trigger` 共享机制）。

---

## A9. Design System 结构重做 `[MODIFIED]`

**彻底放弃卡片形式**，改为参照 ASH 的 Key Feature 布局（image19）：左 1/3 标题+描述，右 2/3 实景图片/组件效果。

**结构：**
1. Design System 子块的 Tier B 标题（kicker + 标题，左 1/3）+ 总描述（右 2/3）— 保留现有总述文字。
2. 下面接三个交替布局的展示区块，每个区块= 标题+描述（1/3）+ 实际组件截图或效果图（2/3）：
   - **Accordion**：左文右图。
   - **Quick Exit**：左图右文（与 Accordion 相反）。
   - **Glossary Popover**：左文右图（与 Quick Exit 相反，跟 Accordion 一致）。
3. 三个区块用的截图/效果图，需要从 `vth-ds.html` 实际截取对应组件的展示效果，不能用占位图。

**容器规范（同时适用于 DS 嵌入容器和 Delivery 的 hi-fi prototype 容器）：**
- 容器底色改为深蓝色渐变（`var(--ux-primary-dark)` → `var(--ux-primary)`），不再是浅色/白色背景。
- 画面比例从 16:9 改为更接近主流显示器的比例，16:10 或 4:3，具体选 16:10（更常见的现代显示器比例）。

**Read more 展开的完整 DS 参考页** 保留现状（iframe 嵌入 `vth-ds.html`），但外层容器套用上述深蓝渐变 + 16:10 规范。

---

## A10. Process 卡片箭头 icon `[MODIFIED]`

- 4 张导航卡片（Research / Design / Validation / Delivery）标题文字末尾统一增加一个向下箭头 icon（Tabler `ti-arrow-down` 或 `ti-chevron-down`），暗示可点击导航到对应章节。

---

## A11. Outcome kicker 颜色 `[MODIFIED]`

- kicker "Outcome" 颜色确认为红色（当前 Tier D 背景下被覆盖成白色，是 bug）。
- 需要检查 `.ux-tier-d .ux-kicker` 的覆盖规则，之前为了对比度把 Tier D 上所有 kicker 都强制变成亮红 `#FF5C5C`，这个逻辑本身是对的，需要确认 Outcome 的 kicker 是否真的应用了这条规则，还是被其他更高优先级的选择器覆盖成白色。构建时需实际渲染核查。

---

## A12. Dark mode 全局配色修复 `[MODIFIED]`

**范围：** 全站所有区域的卡片底色和 icon 颜色在 dark 模式下对比度不足，看不清楚（参考截图 image12、image13）。

- 需要重新设计 dark mode 下的卡片背景色（当前几乎是全黑或极低对比度深色，与页面背景融为一体）。
- Icon 颜色在 dark 模式下同样需要提高亮度/对比度。
- 这是全局性问题，不是 VTH 专属，但本轮先在 VTH v2 的 `vth-v2.css` 里针对 `.ux-case-page--victim-hub-v2` 范围修复，验证方案后再考虑是否推广到 `ux-case-study.css` 全局。
- 构建时需要在 dark mode 下逐 section 截图核对，不能只改一处就假设全部生效。

---

## A13. IA 图改为内联 SVG（与参考页一致）`[MODIFIED]`

**根因已确认：** 参考页的 IA 图不是外部图片，是内联 `<svg class="ia-svg">`，自带 `<style>` 作用域和 dark mode 变量（`--navy`/`--blue-mid`/`--blue-light`/`--blue-tint`/`--line`/`--meta`/`--white`）。生产页把它导出成 `ia-structure.png` 位图后使用，这就是模糊的根因——矢量图被降级成了固定分辨率图片。

**修复方案：** 默认展示直接改为内联 SVG，原样复制参考页的 `<svg>` 代码块（已提取，1280×520 viewBox，六个 T1-T6 顶层节点 + 二级卡片结构），不再使用任何外部图片。

- 保留点击放大功能：点击后在 modal 里展示同一个 SVG（可以直接克隆同一段 SVG 到 modal，不需要额外准备位图版本）。
- Dark mode：SVG 内联样式已包含浅色变量定义，需要补充参考页里 `[data-theme=dark] .ia-svg` 相关的深色覆盖规则（`.ia-root`/`.ia-top`/`.ia-line`/`.ia-dot`/`.ia-sub`/`.ia-subtext`/`.ia-white` 的深色版本颜色值），一并写入 `vth-v2.css`。
- **影响 Modal 系统：** 现有 `data-modal-src` 机制是为外部图片 URL 设计的（modal 里塞 `<img>`）。SVG 内联后点击放大需要新的处理方式，构建时需要确认是复用现有 modal 结构改成塞 SVG，还是做一个轻量的 SVG 专属放大方案。这里需要构建时具体设计，不是简单换图片路径。

---

## A14. Delivery 独立成大章 `[MODIFIED]`

- 确认 Delivery 是独立的大章（Tier A 章级开场标题），hi-fi prototype 是这个章下面的一个 Tier B 子块（子块 kicker 可用 "Hi-fi Prototype" 或保留 "Scrollable hi-fi prototype"，构建时定）。
- 所有 kicker（章级和子块级）统一使用红色 `var(--ux-secondary)`（或 Tier D 背景下的亮化红）。

---

## A15. Key Decisions 卡片 `[MODIFIED]`

- 卡片内 "Decision" 标签文字（`<span>Decision</span>`）整体删除，直接从标题开始，不再有这个前缀标签。

---

## A16. Go-live 图片布局 + Read more 修复 `[MODIFIED]`

**两处 bug：**

1. **图片布局：** 当前是两张并排一排（2 列 grid），需要改为**一行一张图**（单列布局，`grid-template-columns: 1fr` 或直接用 flex column）。默认显示 2 张，展开后显示 5 张，逻辑不变，只改列数。
2. **Read more 失效：** 当前下方的 3 张文字卡片默认全部显示，没有被 Read more 隐藏。需要检查 HTML 结构，确认这 3 张卡片是否被正确包在 `id="vth2-golive-more"` 的隐藏容器内，还是被错误地放在了容器外部导致一直可见。构建时需要用浏览器实际点击验证展开/收起效果，不能只看代码看似正确。

---

## A17. Reflection kicker/标题对调 `[MODIFIED]`

- 当前错误：kicker 位置显示的是 "Looking back, looking forward."，标题位置融合进了描述文字里。
- 修正：**kicker 应为 "Reflection"**，**H2（标题）应为 "Looking back, looking forward."**。
- 这与 v2 spec 原先记录的"kicker 统一为 Looking back, looking forward"矛盾，此条修正为准：kicker 只用简单的章名 "Reflection"，"Looking back, looking forward" 是标题不是 kicker。

---

## A18. HENEX Method Recipe 三处修复 `[MODIFIED]`

1. **删除残留 node pills：** R24 名称下方如果还残留旧的 3 个 node 标签（非维度着色版本），必须彻底删除，不应该还存在。
2. **维度色 tag 移位：** 描述文字下方的 3 个 tag（Agency / Empathy / Interface）要改为对应 HENEX 维度颜色（human 蓝 / emotion 粉 / nature 绿，复用现有 `.vth2-recipe-pill` 系统），并且**位置从描述下方移到 R24 名称正下方**，替换掉当前 "Agency × Empathy × Interface" 纯文字行的位置。当前实现里维度色 tag 还留在描述下方，位置不对。
3. **Secondary Recipe 字体样式统一：** "Secondary Recipe" 标签的字体样式必须与 "Primary Recipe" 标签完全一致（同字号、同字重、同颜色、同大小写处理），不单独发明新样式。当前 `.vth2-secondary-label` 是独立定义的，需要改成直接复用 `.ux-recipe-primary span` 的样式规则。

---

## A19. Chronology 页面按钮修复（独立页面，顺带处理）`[MODIFIED]`

**文件：** `works-chronology.html`（需构建时确认实际文件名）

- 右下角当前显示 "To the Top" 文字按钮，错误。应改为 **"Back to Works"** 按钮，链接到 `works.html`。
- 全局的 "回到顶部" 功能应使用站内统一的圆形箭头按钮组件（即 `.back-to-top` class，其他所有 case study 页面已在用的那个圆形按钮，位置固定右下角），不应该是文字按钮。
- 构建时需要读取该页面实际 HTML，确认当前 "To the Top" 按钮的具体实现方式后再改。

---

## v4 Addendum 执行前置条件

1. 本 Addendum 需 Cafe 审阅确认后，才能进入 HTML/CSS 代码修改阶段。
2. A1/A2 的两层标题规则改动范围最大，建议构建时先完成这两条，再逐条处理 A3-A19，因为后续很多子块标题的产出依赖 A1/A2 定义的 Tier A/Tier B class 是否已经写好。
3. A12（dark mode 全局配色）范围模糊，构建时需要先截图核对当前 dark mode 下所有 section 的实际问题，再决定具体改多少处颜色变量，不要盲目全局替换。
4. A19（Chronology）是独立文件，与其余 18 条互不依赖，可并行处理。

---

# ⚠️ v5 Bug Fix Addendum（2026-07-10，PDF 走查后）

**触发来源：** Cafe 导出 light + dark 两版 PDF（dark 版把所有 Read more 展开）交给我逐页走查。本节是对上方 v2/v3/v4 内容的再修正层，凡冲突之处以本节为准。所有条目标注 `[MODIFIED]`。**本 Addendum 需 Cafe 审阅确认后才能进入代码阶段。**

**已确认的决策（Cafe 本轮拍板）：**
1. 暗色对比修复范围：写进共享层（Master Spec + `ux-case-study.css` 标准），VTH 先接入，其他页另排。
2. DS 三张组件图：Cafe 已上传到 R2，本轮直接接入。
3. 暗色下白底 PNG 图表：保持现状，不改。
4. Influence 收尾条：全部保留，不动。
5. 间距：中幅拉大。

---

## B1. 暗色模式强调色对比度修复（N/L/P tier）`[MODIFIED]`

**根因（走查+CSS 审计已确认）：** A12 上一轮只修了卡片底色和 Tier D 的 kicker，N/L/P 三个 tier 的强调色文字没修。VTH 的 kicker、meta 标签（CLIENT/ROLE 等）、HENEX Lens 值、Skills 描边 pill、Recipe 标签与 pill、DS 子块标题，全部硬编码到 `var(--ux-secondary)`（红）或 `var(--ux-primary)`（深蓝）。这两个 token 在暗色下不翻转，于是在变暗的 N/L/P 背景上几乎不可见。正文 H2 和段落之所以正常，是因为它们继承全局 `--theme-text` 会自动翻白。浅灰 L-tier（DESIGN、DESIGN SYSTEM、KEY DECISIONS、RECIPE 等章）尤其严重，因为背景比纯黑更亮，深色文字对比更差。

**修复方案（套用 Master Spec 新 10.4 的 ink-token 标准）：**
1. 在 `vth-v2.css` 增加页级暗色 token 覆盖块：
   ```css
   [data-theme=dark] .ux-case-page--victim-hub-v2 {
     --ux-accent-ink: color-mix(in srgb, var(--ux-secondary) 55%, white);
     --ux-strong-ink: color-mix(in srgb, var(--ux-primary) 62%, white);
   }
   ```
2. 把现有硬编码引用改为经由 ink token 解析（浅色模式默认值等于原色，浅色视觉不变）：
   - kicker、meta 标签、HENEX Lens 值、Recipe 标签 → `var(--ux-accent-ink, var(--ux-secondary))`
   - Skills 描边 pill、DS 子块 navy 标题、Recipe 链接文字 → `var(--ux-strong-ink, var(--ux-primary))`
3. Recipe 的三色维度 pill（human 蓝 / emotion 粉 / nature 绿）本身用 HENEX 维度色，暗色下也偏暗，需要单独确认对比度。构建时在暗色 L-tier 上核查，不足则给这三色也补暗色亮化值。
4. Tier D 已有的亮红 kicker 覆盖（A11 的 `#FF5C5C !important`）保留不动。

**验证要求：** 暗色下逐 section 截图，确认 N/L/P 三 tier 上每一处 kicker、meta、lens、pill、子标题、recipe 标签均清晰可读，达到 4.5:1。这是本轮硬性验收项。

---

## B2. 各小节间距中幅拉大 `[MODIFIED]`

**问题：** 走查发现小节之间、子块之间过于拥挤，缺呼吸感。

**具体数值（套用 Master Spec 6.5 修订后的节奏下限，中幅档）：**
1. `--section-pad`（section 垂直内边距）：96px → 112px。
2. `.vth2-subsection`（子块间距）：48px → 64px。
3. 子块标题下第一个内容元素、`.ux-layout-stack` 子元素 margin-top：28px / 32px → 40px。
4. 连续堆叠的 `.vth2-ds-feature` 之间：28px → 40px。
5. 响应式断点下按 Section 11 比例缩减，移动端不必照搬桌面数值。

---

## B3. Design System / Quick Exit 左右比例修正 `[MODIFIED]`

**根因（已确认）：** `.vth2-ds-feature` 用 `grid-template-columns: .34fr .66fr`（文字 1/3 + 图 2/3）。`--reverse` 变体只用 `order` 交换了子元素顺序，但没交换列宽，导致图片被塞进窄的 0.34fr 列、文字进宽的 0.66fr 列，正好反了。走查截图里 Quick Exit 的组件图挤在左边很小，文字反而占大半。

**目标（Cafe 明确）：** Quick Exit 应为图片左边 2/3、文字右边 1/3。

**修复方案：** `--reverse` 变体除了 `order` 交换，还要把列宽一起交换为 `.66fr .34fr`（或改用显式 `grid-column` 定位），确保图始终 2/3、文字始终 1/3，无论左右。Accordion 与 Glossary Popover 保持文字左 1/3、图右 2/3 不变。移动端仍单列堆叠。

---

## B4. IA 图点击放大改为 R2 的 ia-structure 图 `[MODIFIED]`

**Cafe 要求：** IA 图默认仍用 A13 的内联 SVG（清晰），但**点击放大后展示 R2 里的 `ia-structure` 图**，而不是克隆同一段 SVG。

**修复方案：**
1. IA 触发器从当前的 SVG 克隆弹窗（`vth2-svg-modal` + `data-svg-modal-target`）改为走站点标准图片弹窗（`.ux-modal` / `data-modal-src`），src 指向 R2 的 ia-structure 图。
2. 随之**移除专用的 `.vth2-svg-modal` 结构、其 CSS 以及 inline `<script>` 里的 SVG 克隆逻辑**（openSvgModal / svgTrigger 等），减少一套冗余弹窗系统。
3. 默认内联 SVG 展示保留不变，只改"放大"这一步的目标。

**待 Cafe 核对的确切文件名：** 我按命名推断为
`https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/ia-structure.png`
若实际文件名或扩展名不同（例如 `.jpg` 或带版本号），执行前请告知确切 URL。

---

## B5. Design System 三张组件图接入确认 `[MODIFIED]`

Cafe 已将三图上传 R2。页面当前引用的确切路径如下，请核对文件名一致（走查时这三张仍是 404，接入后需再验证能正常加载）：
1. `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/ds-accordion.png`
2. `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/ds-quick-exit.png`
3. `https://pub-1cd8987f6bec4bed9e8f92d877e3e854.r2.dev/projects/vth/ds-glossary-popover.png`

`lofi-info.png`（Lo-fi 小节）走查确认已正常加载，无需处理。若三图实际文件名与上表不符，执行前告知，我改 `src`。

---

## B6. 明确不改的项（决策留痕）`[MODIFIED]`

1. **暗色下白底 PNG 图表**（Validation 的 ease-score 图、Go-live 的时间线/优先级矩阵/资源甘特等）：这些是白底位图，不是 iframe，无法用 CSS 改主题。Cafe 决定保持现状，本轮不包图注卡、不重导出。留痕以免日后误判为遗漏。
2. **Influence 收尾条**：全站约六处，Cafe 决定全部保留，不精简、不删除。

---

## v5 Addendum 执行前置条件

1. 本 Addendum 需 Cafe 审阅确认后，才能进入代码修改阶段。
2. B1 依赖 Master Spec 新版 10.4 的 ink-token 标准，执行前先读该节。
3. B4 依赖 Cafe 核对 `ia-structure` 的确切 R2 文件名；B5 依赖核对 DS 三图文件名。这两项文件名一旦确认即可执行。
4. 本轮改动集中在 `vth-v2.css`（B1/B2/B3）、`victim-hub-v2.html`（B4 弹窗结构）、`ux-case-study.css` 与 Master Spec（B1 的共享层标准）。其他 7 个案例页的暗色迁移不在本轮，另立任务。

---

# ⚠️ v6 Bug Fix Addendum（2026-07-12，"v2-bug2.docx" 走查后）

**触发来源：** Cafe 上传 "v2-bug2.docx"，12 条批注 + 截图，针对 B1-B6 已落地后的实际渲染效果。本节是对上方 v1-v5 内容的再修正层，凡冲突之处以本节为准。所有条目标注 `[MODIFIED]`。**本 Addendum 需 Cafe 审阅确认后才能进入代码阶段。**

**已确认的决策（Cafe 本轮拍板，通过澄清问题环节）：**
1. HMW 处理：做成窄的深蓝过渡带（强调块，非独立大章节）。
2. Influence/卡片 hover 边框色：直接改 `global.css` 全局规则，用 fallback 写法保护其他 7 页不受影响。
3. DS 三模块文案：Cafe 委托我写初稿，本节给出草稿供确认。
4. Go-live 图片：拆成独立 1/3+2/3 block，但视觉层级要从属于 Go-live 章节（不能做得比章节本身更醒目），可见/隐藏结构不变（2 张常显 + 5 张 Read More 后展开）。

---

## C1. Problem 标题借用了 Solution 的框架词 `[MODIFIED]`

**根因（已核实代码）：** Problem 区块当前 H2 是 "The core challenge was guidance, resonance and confidence."，Solution 区块 H2 是 "A strategy built on guidance, resonance and confidence."。两句话本质同一句改写，且"guidance/resonance/confidence"三个词就是 Solution 下方三张卡片（Guidance/Resonance/Confidence）的标题，属于 Solution 的答案框架，不该出现在提出问题的 Problem 里。

**修复方向：** Problem 的 H2 改为真正描述问题本身、呼应它自己三张卡片（Fragmented content / Internal structure / Unclear next steps）的句子，不借用 Solution 的词汇。

**文案草稿（供确认，非终稿）：**
"The real problem wasn't the pages. It was whether people knew where those pages could take them."

Problem 下方的描述段落（"The project was initially framed... move forward with confidence."）暂不改动，因为它与后续 HMW 句子的重复用词是描述→提问的常规写法，Cafe 截图圈的是 H2 本身，不是这段。若确认 H2 改动方向后，我会同步检查这段是否也需要跟着微调。

---

## C2. HMW 独立强调块 `[MODIFIED]`

**方向确认：** 不做成独立 Tier D 大章节，做成一条窄的深蓝渐变过渡带，浅色文字，作为 HMW 自己的强调块嵌在 Problem 区块内（3 张卡片下方），不改变 Problem→Solution 的 tier 序列（Problem 仍是 L，Solution 仍是 N，不产生相邻同色冲突）。

**实现方向：** 新增一个 `.vth2-hmw-band` 容器包住现有的 HMW 段落，背景用与 Tier D 一致的深蓝渐变（`var(--ux-primary-dark)` → `var(--ux-primary)`），文字沿用 Tier D 的白色/亮红处理规则（"How might we" 前缀红色，其余白色，与当前配色方案一致，只是从"透明背景嵌在浅色区块里"变成"有自己的深色底色卡片"）。

---

## C3. 全局卡片 hover 边框改用 2nd 主题色 `[MODIFIED]`

**范围确认：** 直接修改 `global.css` 的共享 hover 规则（覆盖 `.ux-card`、`.ux-influence` 等一整组选择器），而不是只在 VTH 页面加覆盖。

**技术风险与处理方式：** 目前只有 `vth-v2.css` 定义了 `--ux-secondary`，其余 7 个案例页的 CSS 都没有这个变量。若把 hover 规则硬改成读取 `--ux-secondary`，会导致这 7 页的 hover 边框失效（变量取不到值，`color-mix` 得到无效结果）。

修复方式：`global.css` 的 hover 规则改为
```css
border-color: color-mix(in srgb, var(--ux-secondary, var(--ux-theme, var(--page-accent, var(--theme-text)))) 28%, var(--theme-border));
```
即优先取 `--ux-secondary`，取不到就退回原来的 `--ux-theme`。VTH 立即变成红色 hover（`--ux-secondary` 已定义），其余 7 页维持现状不受影响，等各自补上 `--ux-secondary` 后自动切换，不需要本轮跟着改。

**文档同步：** Master Template Spec 第 207 行"Card colors inherit the case primary theme color for border accent and hover states"这句描述的是旧行为，需要更新为"hover 优先使用 secondary 色，未定义则退回 primary 色"。

---

## C4. 暗色模式卡片 hover 无变化（本轮回归）`[MODIFIED]`

**根因（已核实）：** B1 把暗色下 N/L/P 三个 tier 里 `.ux-card` 的静止边框设成了 `color-mix(--ux-primary 34%, ...)`，比 C3 提到的全局 hover 规则（28% 混色）更深，导致 hover 后边框反而比静止状态浅，视觉上等于没有变化。这是 v5 引入的回归，非新问题。

**修复方向：** 暗色下静止边框调回比 hover 状态浅的比例（例如 20%），确保 hover 时边框依然可见地变深/变亮，两个状态保持可辨识的差异。

---

## C5. Mixed Method Research 卡片缺 hover + icon 偏小 `[MODIFIED]`

**根因（已核实）：** `.vth2-method-card` 和 `.vth2-principle-card` 从未被加入 `global.css` 的共享 hover 选择器列表，其他卡片类（如 `.vth-metrics article`）都在这个列表里，唯独这两个漏了。

**修复方向：**
1. 把 `.vth2-method-card`、`.vth2-principle-card` 加入 `global.css` 的共享 hover 选择器列表，享受 C3 修复后的 2nd 色 hover 效果。
2. `.vth2-method-card .vth2-icon` 从 1.6rem 适度放大（建议 1.9rem，仍明显小于主 icon 的 2.75rem，保持 7 宫格密度感，但不再显得过小）。

---

## C6. 章节到子块间距升级到大幅档 `[MODIFIED]`

**背景：** B2 已从 48px/96px 拉到 64px/112px（中幅档），Cafe 看过实际渲染后认为还是紧。

**新数值（大幅档，对应此前 AskUserQuestion 提供的选项）：**
1. `--section-pad`：112px → 128px（移动端断点相应从 64px → 72px）。
2. `.vth2-subsection`：64px → 80px。
3. `.ux-layout-stack` 子元素、`.vth2-ds-feature` 间距：40px → 48px。

---

## C7. 暗色模式下 Tier L 背景发脏 `[MODIFIED]`

**根因（已核实）：** 暗色下 Tier L 背景是 `color-mix(in srgb, var(--ux-primary-pale) 22%, var(--theme-bg))`。`--ux-primary-pale` 是接近白色的浅蓝（`#EEF1F8`），以 22% 低比例混入近黑背景，产出的是饱和度很低的脏灰色，不是干净的深蓝，视觉上和 Tier D 的纯深蓝渐变对比强烈，显得"脏"。

**修复方向：** 暗色下 Tier L 改用与 Tier D 同源但更浅一档的纯色深蓝（而非用浅色 token 弱混黑色），例如 `color-mix(in srgb, var(--ux-primary) 60%, var(--theme-bg))` 或直接给一个具体的深蓝色值，确保是干净的蓝而不是灰。具体色值构建时用取色工具核对，确保与 Tier D、Tier N 有可辨识但不刺眼的层级差。

---

## C8. Lo-fi / Hi-fi 缩写需写全称 `[MODIFIED]`

**范围（已核实，12 处用户可见文字，不含 CSS 类名/id）：**
- "Lo-fi" → "Low-Fidelity"（kicker "Lo-fi Prototype" → "Low-Fidelity Prototype"，标题 "A single prototype..." 不变，正文与 alt 文案里的 "lo-fi" → "low-fidelity"）
- "Hi-fi" → "High-Fidelity"（kicker "Hi-fi Prototype" → "High-Fidelity Prototype"，正文与 alt 文案里的 "hi-fi" → "high-fidelity"）
- CSS 类名（`.hifi-shell`、`.vth2-hifi-shell`、`#vth2HifiFrame` 等）保持不变，纯样式/脚本挂钩，不属于"输出成果"的可见文案，改名只会增加无意义的重构风险。

---

## C9. 内嵌原型头部文字间距太挤 `[MODIFIED]`

**根因：** `.hifi-head` 目前 `padding: var(--space-md) var(--space-md) 0`（24px），标题紧贴容器圆角边缘，视觉上偏挤。

**修复方向：** 顶部内边距加大到 `var(--space-lg)`（32px），左右保持或同步小幅加大，具体以实际渲染为准。

---

## C10. DS 三模块标题结构参照 ASH 重做 `[MODIFIED]`

**根因：** 当前 Accordion/Quick Exit/Glossary Popover 三块用"小号红色 kicker（组件名）+ 独立加粗 h4 句子 + 正文段落"三层结构。ASH 参考页的 Key Feature 模式是：kicker 是统一的通用标签（"Key Feature"），真正的组件/功能名是大标题本身，描述是紧跟其后的一段话，不再拆成"标题句+正文句"两层。

**修复方向：** 组件名（Accordion / Quick Exit / Glossary Popover）从小号 kicker 升级为大标题样式，原本的 h4 句子与正文段落合并成一段连贯描述。

**文案草稿（供确认，非终稿）：**

1. **Accordion**
   标题：Accordion
   正文：Long-form victim information collapses into grouped, scannable panels, so people only expand the section relevant to their situation.

2. **Quick Exit**
   标题：Quick Exit
   正文：A persistent safety control lets someone leave the page instantly if their situation requires it, replacing the current tab with an unrelated site.

3. **Glossary Popover**
   标题：Glossary Popover
   正文：Unfamiliar terms are underlined inline. Selecting one opens a short, plain-language definition without navigating away from the current page.

**结构说明：** kicker 是否保留一个统一的通用标签（如 "Component"）还是完全去掉直接从大标题开始，构建时可以两版对比一下再定，不在这里预先锁死。

---

## C11. DS 三模块排列方向翻转 `[MODIFIED]`

**现状：** Accordion（文左图右）→ Quick Exit（图左文右，B3 已修正图文比例）→ Glossary Popover（文左图右），标题位置呈"左右左"。

**目标：** 改成"右左右"：Accordion 变图左文右（套用 `--reverse`），Quick Exit 变文左图右（去掉 `--reverse`），Glossary Popover 变图左文右（套用 `--reverse`）。B3 修正的"reverse 变体图文列宽比例"逻辑不受影响，这次只是改哪个模块用不用 `--reverse`，两次修改相互独立、不冲突。

---

## C12. Go-live/BAU 图片改为 DS 式 1/3+2/3 独立 block `[MODIFIED]`

**现状（已核实）：** 当前是 `.vth2-golive-gallery` 全宽堆叠图片 + 底部 caption 的结构，分两组：常显组 2 张图（post-pathway、post-timeline），Read More 展开后再显示 5 张图（post-roadmap、post-variables、post-resource、post-after-golive、post-long-term）。

**目标：** 7 张图各自拆成独立的 1/3 标题+2/3 图片 block，复用 DS 模块（C10/C11 修正后）的布局与文字样式和尺寸。可见/隐藏结构维持不变（仍是 2 张常显 + 5 张藏在 Read More 后面），不要一次性全部摊开。

**视觉层级约束（Cafe 明确）：** 这组 block 从属于 Go-live 章节内部，不能在视觉权重上盖过或等同于 Design System 章节的 DS 模块本身。构建时字号、间距要比 DS 模块的版本收窄一档（例如标题用 h4 而非 h3，或整体 padding 更紧凑），保持"同一种布局语言，但明显是子级内容"的层级关系。

---

## v6 Addendum 执行前置条件

1. 本 Addendum 需 Cafe 审阅确认后，才能进入代码修改阶段。
2. C1、C10 含文案草稿，需要 Cafe 确认或修改文字后再落代码，不是纯样式改动。
3. C3 依赖 global.css 的共享 hover 规则改动，影响全站 8 个案例页（VTH 立即生效，其余 7 页因 fallback 保护暂不受影响）。
4. C4、C5 是本轮验证中发现的既有代码问题（C4 是 v5 引入的回归），C5 是遗漏，两者均可直接按此 Addendum 修复，不依赖额外确认。
5. C2、C6、C7、C8、C9、C11、C12 方向已通过澄清问题环节确认，可直接按本节数值/描述执行。
6. 本轮改动集中在 `vth-v2.css`（C2/C4/C5/C6/C7/C9/C11/C12）、`victim-hub-v2.html`（C1/C10/C11/C12 文案与结构）、`global.css`（C3/C5 共享 hover 规则）、Master Template Spec（C3 的 hover 文档更新）。

---

## v7 Bug Fix Addendum（D1-D6）

**来源：** Cafe 对 v6 补丁构建做的直接视觉走查，附 7 张标注截图，一次性提出 8 项问题。本轮全部为缺陷修复（非设计决策），未走 AskUserQuestion 澄清环节，直接进入代码修复。

### D1. Hover 边框范围收窄 `[MODIFIED]`

**问题：** C3 把 `.ux-influence:hover` 并入了全站共享 hover 选择器列表，导致 `.vth2-method-card`、`.vth2-principle-card` 等非导航卡片也跟着变红，超出 Cafe 原本只要 Influence 变红的要求。

**修复：** 在 `global.css` 中把 `.ux-influence:hover` 拆成独立规则，优先用 `--ux-secondary`（红），fallback 到 `--ux-theme`。共享列表的其余 ~30 个选择器（含 method/principle 卡片）还原为只用 `--ux-theme`（深色变化，非变红）。

### D2. 暗色模式 hover 完全无效 `[MODIFIED]`

**根因：** 暗色静态态选择器（如 `[data-theme=dark] .ux-case-page--victim-hub-v2 .ux-tier-* .ux-card`）的 CSS 特异度高于共享的 `:hover` 规则，无论是否真的在 hover，静态态声明始终胜出。

**修复：** 在 `vth-v2.css` 中新增与暗色静态态同级或更高特异度的 `:hover`/`:focus-within` 规则，覆盖 `.ux-card`/`.ux-influence`（按 tier 区分）与 `.vth2-method-card`/`.vth2-principle-card`（页面级）。同时把 method/principle 卡片暗色静态态边框的 color-mix 比例从 34% 降到 20%，与此前 C4 对 `.ux-card` 的处理保持一致（原比例比任何 hover 态都更深，导致 hover 视觉上不可见）。

### D3. Design Principles 图标放大 `[MODIFIED]`

**问题：** C5 只放大了 Mixed Method Research 卡片（`.vth2-method-card .vth2-icon`），Design Principles 是另一套 9 宫格（`.vth2-principle-top .vth2-icon`），未被覆盖到。

**修复：** `.vth2-principle-top .vth2-icon` 字号从 `1.5rem` 提升到 `1.9rem`。

### D4. 间距与内嵌头部 padding 再提一档 `[MODIFIED]`

**说明：** 复核确认 C6 的数值已正确写入文件、无被覆盖迹象，但 Cafe 反馈"感觉没有变化"，不排除是构建预览缓存问题。作为保险措施，本轮再统一升一档：

- `--section-pad`：128px → 144px（移动端 72px → 80px）
- `.ux-layout-stack` 各子项 `margin-top`：48px → 56px
- `.vth2-subsection` `margin-top`：80px → 96px
- `.vth2-subsection` 各子项 `margin-top`：48px → 56px

另发现真实缺口：`.hifi-head` 底部 padding 原为 0，标题/说明文字与下方 iframe 之间几乎无间距。修复：`.hifi-head` padding 改为 `var(--space-lg) var(--space-lg) var(--space-md)`（新增 24px 底部间距）。

**待 Cafe 确认：** 若强制刷新（清缓存）后仍无明显变化，需要进一步排查是否有预览环境本身的问题，而非代码问题。

### D5. `--ux-dark` 暗色翻转 + DS/Go-live 图片统一白底 `[MODIFIED]`

**根因：** `vth.css`（生产基础文件，不可动）无条件定义 `--ux-dark: #00164B`，全文件没有任何暗色覆盖。这导致两类问题同时发生：`var(--ux-dark, fallback)` 写法的 fallback 永远不会生效（因为 `--ux-dark` 在作用域内始终有定义）；`var(--ux-dark)` 裸引用（无 fallback，如 `.ux-recipe-primary a`、`.ux-recipe-tags span`）在暗色模式下保持深蓝，读不清。这正是 Cafe 反馈的 DS 标题看不清（问题6）与 Recipe 区文字看不清（问题8）的共同根因。

**修复：** 在 `vth-v2.css` 已有的 `[data-theme=dark] .ux-case-page--victim-hub-v2` 覆盖块中新增 `--ux-dark: var(--theme-text);`，一次性修复 `ux-case-study.css` 与 `vth-v2.css` 中所有下游引用，无需逐一修改选择器。

**图片背景：** `.vth2-ds-feature__media img` 与 `.vth2-golive-feature .vth2-ds-feature__media img` 的 `background` 从 `var(--theme-surface)`（暗色下变近黑）改为硬编码 `#fff`，避免带透明通道的截图在暗色模式下露出黑底，统一所有参考图的背景表现。

### D6. Go-live 章节头与内容列宽对齐 `[MODIFIED]`

**根因：** 共享的 `.ux-section-head`（章节/子块标题，`ux-case-study.css`）使用 `minmax(200px, .36fr) minmax(0, .64fr)`，而 `.vth2-ds-feature`（`vth-v2.css`）使用 `minmax(220px, .34fr) minmax(0, .66fr)`，两套列宽不一致，导致 Go-live 章节标题与下方内容块左右边界对不齐。

**修复：** 在 `vth-v2.css` 中新增页面级覆盖 `.ux-case-page--victim-hub-v2 .ux-section-head { grid-template-columns: minmax(220px, .34fr) minmax(0, .66fr); }`，与 `.vth2-ds-feature` 保持一致。`.ux-section-head` 是全站共享类，未改动 `ux-case-study.css` 本身，只在 v2 页面范围内覆盖，不影响其他案例页。

### v7 Addendum 执行说明

1. D1-D6 均为缺陷修复，未走独立澄清确认环节，Cafe 的 8 点走查反馈本身已构成明确指令。
2. 涉及文件：`vth-v2.css`（D2-D6）、`global.css`（D1）。`victim-hub-v2.html` 本轮未改动，全部为 CSS 层修复。
3. D4 的间距问题存在"代码已修但预览未见效"的不确定性，已在数值上做防御性升级，仍需 Cafe 强制刷新后回归确认。
4. 静态验证（HTML 标签平衡、id 唯一性、三个 CSS 文件大括号配对）已全部通过。

---

## v8 背景系统 Addendum（Hero + 全页背景色阶）

**来源：** Cafe 提出两项方向性调整，均经可视化对比确认后落地。一是 hero 改为 primary + secondary 双色渐变，与 Philosophy/Homepage 的 hero 语言统一；二是把所有内容章节的背景统一进 primary 主题色系，中性色只保留给全局章节。适用范围：只在 VTH 试点，不改 Master 四层标准，其余 7 个 case 页不受影响。

### E4. Hero 双色磨砂 bloom `[MODIFIED]`

**方案：** Option C 双色 bloom。primary（navy）与 secondary（red）两片柔和色晕分别落在左上、右下角，放在 `.vth2-hero::before` 层并施加 `filter: blur()`，读作虚焦镜头光斑，颜色无硬边。技法与 Home/Philosophy hero 一致（它们的 `::before` 同样带 blur）。底色为平色，色晕层在其上、正文之下（`.ux-hero__copy` 为 z-index 2）。`.ux-hero` 已有 `overflow: hidden`，`inset: -60px` 的模糊溢出被裁掉。

**深浅逻辑：** 浅色色晕透明度较低压在近白底（经 Cafe "颜色更浓" 反馈后加浓：navy 0.52 / red 0.33）；深色色晕透明度更高、红色提亮（`#FF5C5C` 系），压在近黑底 `#02040A`。

### E5/E7. 强调色阶 D 拆分（浅色改中 navy，深色调浅） `[MODIFIED]`

**问题：** 原 `.ux-tier-d` 深浅两模式共用同一套近黑 navy 渐变。浅色模式下，强调章（Outcome、尤其内容量大的 Delivery）会是一大片近黑，压迫感强。

**修复：** 按模式拆分。浅色改 "tone B" 中 navy 渐变 `#16224A / #223160 / #19264A`，明显是蓝色而非黑色，仍可稳定承载白字。深色新增 `[data-theme=dark]` 覆盖；经 Cafe "深蓝纯色太黑" 补充意见后，深色不再用 `--ux-primary-dark`（近黑），改用 `--ux-primary-soft` 按 22%/34%/20% 混入 `--ux-primary`，抬亮成清晰的深蓝，仍是全页最强的强调层。

### E6. 全页背景色阶系统 `[MODIFIED]`

**规则（Cafe 明确）：** Overview 到 HENEX Recipe 的所有内容章节都要有 primary 主题色背景，有深有浅、有纯色有渐变；中性色只留给全局章节（nav、Related、footer）。相邻章节背景不重复；强调章用深色渐变。

**四个色阶（均属 primary 家族）：**
1. S 浅主题色渐变（新增）。VTH 作用域内把 `.ux-tier-n` 从中性重定义为一条柔和 navy 渐变（浅色 `#DCE5F5→#EFF3FA`，深色 `primary-soft` 18%→10% 渐变）。所有原本 `tier-n` 的中性内容章节（Overview、Solution、Contribution、Research、Validation）因此自动变主题色，相邻关系天然成立，HTML 基本不动。仅在 VTH 覆盖，不影响其他页的 `tier-n` 中性语义。
2. L 浅主题色纯色（现有 Tier L，`--ux-primary-pale`）。
3. P 主题色渐变（现有 Tier P）。
4. D 深色渐变（现有 Tier D，见 E5，仅 Outcome、Delivery 使用）。

**逐节色阶（相邻不撞色）：** Overview S、Background P、Problem L、Solution S、Outcome D、Contribution S、Process P、Research S、Design L、Validation S、Delivery D、Reflection P、Recipe L。Related/Footer 保持中性。

**Delivery 整章统一深色：** Delivery 章下三个小节原本 tier-d（hi-fi）+ tier-l（决策卡）+ tier-n（go-live）混着。按"每章一个大背景色 + 强调章用深色"的要求，HTML 中把决策卡 `tier-l→tier-d`、go-live `tier-n→tier-d`，整章连成一片深色。三小节的卡片沿用既有 `.ux-tier-d .ux-card` 白字/半透明白底规则。

**Recipe 转主题色：** `.vth2-recipe` 背景从中性 `--theme-surface-soft` 改为 tone L（浅色 `--ux-primary-pale`，深色 `primary-soft` 46% 混色），与上方 Reflection（tone P）区分。

### v8 Addendum 执行说明

1. 两项方向均经 Cafe 可视化对比确认（hero 三方案 → C；C 再调浅色浓度；强调深色三档 → B 统一；深色 D 再调浅一档）。
2. 涉及文件：`vth-v2.css`（E4/E5/E6 全部背景规则）、`victim-hub-v2.html`（E7，仅 Delivery 两小节 tier 类改动）。不动 `vth.css`、`ux-case-study.css`、Master 四层标准。
3. `tier-n` 在 VTH 被重定义为 tone S 属"页面级语义覆盖"，已在 CSS 注释标明，仅限本页试点。若 Cafe 认可，后续可考虑提升为 Master 标准并迁移其余 7 页（暂不做）。
4. 静态验证（HTML 标签平衡、三个 CSS 文件大括号配对、色阶相邻序列）已全部通过。

### E10. HMW 带配色对齐强调色阶 `[MODIFIED]`

tier-d 经 E5 调浅后，HMW 带（C2 写死了旧近黑配色）比其他强调块深一截。改为与 tier-d 完全一致：浅色 tone B，深色抬亮深 navy。（此项后被 E14 取代，见下。）

### E11-E13. 审计 Batch 1 色调修正 `[MODIFIED]`

对应 `docs/audits/VTH_v2_Design_Audit.md` 的 V2/V1/V5，均经可视对比确认（B2/A2/C2 组合），hero 深色 navy 光晕（V4）经 Cafe 确认保持现状不改：

1. E11（V2）：深色 tone S 从 18%→10% 提到 28%→16%，五个 S 章节不再读作近黑中性色，仍明显低于 tone L 的 46%。
2. E12（V1）：浅色 tone S 起点从 #DCE5F5 加深到 #CFDCF2（渐变 #CFDCF2→#DAE4F4→#E4EBF7），解决浅色下 S/L 三处接缝几乎不可见的问题。
3. E13（V5）：浅色 tone P 起点从纯白改为 8% 混色，消除 P 章顶部的白带。

### E14. HMW 升级为独立全宽节 `[MODIFIED]`

**动因（Cafe）：** 页面上没有第二处大型深色卡片风格，HMW 卡片是孤例；且部分 case 没有 HMW，独立成节便于整节增删。

**改动：** HTML 中把 HMW 从 Problem 内部的 `.vth2-hmw-band` 卡片移出，成为独立 `<section class="ux-section ux-tier-d vth2-hmw-section" id="hmw">`，直接复用共享强调色阶背景（不再自带配色，E10 的重复配色随之删除）。padding 收紧为 96px/64px（插曲节，非完整章）。节序 Problem(L)→HMW(D)→Solution(S) 相邻合规。`.vth2-hmw-band` 类及其 layout-stack 引用已全部清除，无残留。

### E16. 浅色背景阶梯换清蓝家族 `[MODIFIED]`

**动因（Cafe）：** Process 等浅色章节画面显脏。根因是各档背景都由偏灰的 `--ux-primary-soft` 混入偏灰白底，产出低饱和灰紫调。**修复（方案二，经可视对比确认）：** 浅色三档整体换成更白底、色相明确偏蓝的清蓝家族——S `#D8E7FA→#E1ECFB→#EBF2FC`；P `#F2F7FE→#D6E5F9`（弃用 color-mix 公式，直接写清蓝色标）；L token `--ux-primary-pale` 从 `#EEF1F8` 改 `#F0F5FD`（tier-l 与 Recipe 同步变干净）。深色模式不动。明暗阶梯关系维持 E11-E13 结论。

### E17. Hero 红晕上收，解决与 Overview 接缝冲突 `[MODIFIED]`

**动因（Cafe）：** 红晕压在 hero 底边，与紧接的 Overview 蓝色背景在接缝处暖冷相撞。**修复（方案 A，经可视对比确认）：** 红晕从右下（88% 84%）移到右上（90% 18%），hero 底边回归蓝白基调，接缝变蓝对蓝。浅深两模式同步，透明度不变。

### E18. Process 转强调深色（二幕开场门户） `[MODIFIED]`

**动因（Cafe）：** Process 是第二部分的启动点兼页内导航，浅渐变读作普通内容节，权重不够。**修复（方案 A，经可视对比确认）：** 整节 tier-p → tier-d，加入"深色 = 标点时刻"语言（HMW 提问 / Outcome 收束 / Process 开场 / Delivery 收尾）。节序 Contribution(S)→Process(D)→Research(S) 合规。导航卡自动套用共享 tier-d 卡片规则（白字、半透明卡、E9 hover），唯一补丁是箭头图标（自带 navy 色规则在深底隐形）在 tier-d 内覆盖为 72% 白。页面 P 档剩 Background 和 Reflection 两处。

### E19. Batch 2 代码健康重构（审计 C1/C2/C5，无视觉变化） `[MODIFIED]`

**C2 token 化：** v8 调色板收拢为页面级 token，每个值只存在一处：`--ux-tone-s` / `--ux-tone-p` / `--ux-emphasis`（深色变体在 `[data-theme=dark]` 作用域重定义）+ `--ux-alert-ink`（#FF5C5C，4 处引用全部换 token）。三个 tier 背景规则合并为单条（不再需要独立深色覆盖），E10 式的多处色值漂移从机制上不可能再发生。

**C1/C5 边框契约：** 展示卡片家族（ux-card / ux-influence / vth2-method-card / vth2-principle-card / vth2-nav-card）的 border-color 声明全站只剩两处，都在 `global.css`：基础规则读 `var(--card-border, fallback)`，共享 hover 规则读 `var(--card-border-hover, fallback)`。所有 tier/模式/页面覆盖一律改为变量赋值（CSS 变量可继承，赋值可挂在容器上），不允许再直接声明 border-color。曾三次引发 hover 失效的特异度陷阱（C4/D2/E9）从结构上消除，D2/E9 的 hover 补丁块全部删除。Influence 的红色 hover 改为 `global.css` 中 `.ux-influence` 上的变量赋值（触发器 `.ux-influence:hover` 回到共享列表）。过时的深色 nav-card 覆盖删除（E18 后 Process 两模式都是 tier-d）。

**影响面：** 其余 7 个 UX case 页视觉不变（所有 fallback 保持原公式原值）。此契约是 Master 迁移时其他页应采用的目标模式。**需 Cafe 截图回归确认两模式 hover 与卡片观感无变化。**

### E20. 暗色 Influence hover 换亮红 `[MODIFIED]`

**根因（经 Cafe DevTools 截图证实）：** E19 契约链路本身正常（`--card-border-hover` 正确算出 `#d57a7a`），但 `--ux-accent-ink` 暗色值（红混 55% 白）饱和度太低，1px 浅粉线与暗卡的淡白静态边框肉眼无法区分，hover 读作"无变化"。**修复：** 暗色 N/L/P 内 Influence 的 hover 赋值改用 `--ux-alert-ink`（#FF5C5C），与 tier-d 内 Influence 的红 hover 全站统一；accent-ink 仍作文字用色。

### E21. 清除 vth.css 遗留类对契约的破坏（Influence hover 真凶） `[MODIFIED]`

**根因（经 Cafe 第二轮 DevTools 截图证实）：** E20 只解决了颜色弱的问题；hover 完全无反应的真凶是 v2 标记里遗留的生产类 `vth-inline-influence`。`vth.css:74` 对它直接声明深色静态 border-color，特异度 (0,2,0) 与共享 hover 规则打平，vth.css 加载在 global.css 之后，平局获胜，hover 永远被压制——完全绕开 E19 契约。这正是审计 C4/C6 预言的 vth.css 源头问题的又一实例。

**修复：** (1) v2 HTML 摘除全部 5 处 `vth-inline-influence` 类（vth.css 本身不动，生产页不受影响）；vth.css 原来通过该类提供的职责在 v2 内补齐——间距统一为页面级 56px（两处子块内 Influence 从 30px 对齐到 C6/D4 节奏），label 色改用 `--ux-strong-ink`（浅色 navy、深色冰蓝，延续 #C4F3FF 气质，tier-d 红色标签规则不受影响），padding/边框由共享基础规则接管（22→24px、16%→20%，无感差异）。(2) 同机制隐患排查：`vth.css:74` 同一行还命中 `.vth-metrics article`（Validation 指标卡，类不可摘），加了一个注释标明的 INTEROP SHIM（读契约变量的高特异度双态规则），Phase 5 切换修复 vth.css 时随 C4/C6 一并删除。

### E15. Mobile 下 section-head 未塌陷修复 `[MODIFIED]`

**根因：** D6 的列宽对齐覆盖（页面级，特异度 0,2,0）不带断点，把 `ux-case-study.css` 已有的 ≤1180px 塌陷规则（0,1,0）在所有宽度压掉，mobile 下标题列 220px 底宽把右侧描述挤成一字一行的高条。**修复：** D6 覆盖包进 `@media (min-width:1181px)`，窄屏交还给全局塌陷规则，描述自动落到标题下方。

### E9. Delivery 转深色后的对比度与 hover 回补 `[MODIFIED]`

Delivery 整章转 tier-d 后，Go-live 小节里两处仍按浅底配色，落到深 navy 上看不清，走查发现后回补：go-live 小标题 `.vth2-golive-feature .vth2-ds-feature__text h5`（原 `var(--ux-dark)` 深色）和其正文 `p`（原 `--theme-text-soft` 深色）在 tier-d 内强制改白/柔白；Influence 的 `INFLUENCE` 标签 `.ux-influence strong` 改亮红 `#FF5C5C`。同时 Influence 的 hover 因 tier-d 静态态特异度 (0,4,0) 盖过共享 hover 而失效（与 D2 同类问题，只是这次发生在 tier-d），新增 tier-d 作用域的 `:hover`/`:focus-within` 规则 (0,4,1)：卡片用亮白边、Influence 用红边，浅深两模式通用。
