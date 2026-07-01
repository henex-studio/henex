# HENEX Related Projects 样式审计与修改 Spec v1.0

供 Cowork 端直接读取并执行。本文档基于 GitHub 仓库当前最新版本核查，核查范围覆盖全部 14 个已上线案例页。

## 一、问题结论

Related Projects 标题字号不统一，根因是 CSS 选择器遗漏，不是设计决策差异。

`assets/css/architecture-case.css` 中，控制各 section 标题字号的规则明确包含了 `.arch-related h2`：

```css
.arch-section-head h2,
.arch-related h2,
.arch-henex__intro h2 {
  font-size: clamp(2rem, 3.5vw, 3.5rem);
  line-height: 1.03;
}
```

`assets/css/ux-case-study.css` 中，对应规则列出了一长串选择器，但**唯独遗漏了 `.ux-related h2`**：

```css
.ux-intro h2,
.ux-wide-head h2,
.ux-copy h2,
.ux-copy h3,
.ux-video-grid h2,
.ux-feature h3,
.ux-ds-module h3,
.ux-retro h2,
.ux-retro h3 {
  color: var(--ux-dark);
  font-size: clamp(1.55rem, 2.4vw, 2.45rem);
  line-height: 1.12;
}
```

因为 `.ux-related h2` 没有被任何项目级规则覆盖，它会退回使用 `global.css` 里的默认 h2 样式：

```css
h2 {
  font-size: clamp(2.25rem, 4.6vw, 4.3rem);
  line-height: 1.03;
  font-weight: 700;
}
```

这就是截图里 VSK 页面的"More work across service, digital and spatial systems."会渲染成两行超大字号的原因,它实际用的是全局默认 h2，比建筑页面的 Related 标题大了将近一倍。

## 二、影响范围

受影响：全部使用 `ux-case-study.css` 模板的 UX 案例页,共 8 个。

```
works/accessibility-support-hub.html   (ASH)
works/voting-starter-kit.html          (VSK)
works/rekraft.html                     (RKT)
works/whos-singing-outuiside.html      (WSO)
works/new-world-design-system.html     (NDS)
works/victim-hub.html                  (VTH)
works/studier.html                     (STD)
works/welnest.html                     (WST)
```

不受影响：全部建筑案例页,已经统一，共 6 个。

```
works/oppein-headquarters.html         (OPI)
works/great-bay-area-science-hall.html (GSH)
works/guangzhou-baiyun-t2.html         (BT2)
works/guangzhou-football-park.html     (GFP)
works/nanning-wuxu-t3.html             (NT3)
works/shantou-ayg.html                 (AYG)
works/poly-yuzhu.html                  (PYZ)
```

注：建筑案例页实际有 7 个而非文档中之前记录的 4 个，poly-yuzhu.html 和 guangzhou-football-park.html 也在已上线清单内，之前的交接文件未完整记录，建议后续更新 IA Workbook。

## 三、修改方向

按你的决策，标题字号往建筑版本的小字号靠拢，因为 Related Projects 是跨项目的全局组件，不应该跟随单个项目的品牌字号,应该统一成一套独立于项目主题的中性标准。

## 四、具体修改内容

### 4.1 核心修改（唯一必需的改动）

文件：`assets/css/ux-case-study.css`

将 `.ux-related h2` 加入标题字号规则的选择器列表，改成跟 `.arch-related h2` 完全一致的数值，消除两套模板之间的字号差异。

```css
/* 修改前 */
.ux-intro h2,
.ux-wide-head h2,
.ux-copy h2,
.ux-copy h3,
.ux-video-grid h2,
.ux-feature h3,
.ux-ds-module h3,
.ux-retro h2,
.ux-retro h3 {
  color: var(--ux-dark);
  font-size: clamp(1.55rem, 2.4vw, 2.45rem);
  line-height: 1.12;
}
```

```css
/* 修改后 */
.ux-intro h2,
.ux-wide-head h2,
.ux-copy h2,
.ux-copy h3,
.ux-video-grid h2,
.ux-feature h3,
.ux-ds-module h3,
.ux-retro h2,
.ux-retro h3 {
  color: var(--ux-dark);
  font-size: clamp(1.55rem, 2.4vw, 2.45rem);
  line-height: 1.12;
}

.ux-related h2 {
  color: var(--theme-text);
  font-size: clamp(2rem, 3.5vw, 3.5rem);
  line-height: 1.03;
}
```

说明：`.ux-related h2` 单独列一条规则，不并入上面那组，原因是颜色不同。上面那组用 `var(--ux-dark)`（项目主题色），但 Related 标题作为跨项目中性组件，应该跟 `.arch-related h2` 一样用 `var(--theme-text)`（全局中性文字色），不跟随单个项目的品牌色。这与你之前确认过的"Related kicker 用全局中性灰 `var(--theme-muted)`，不是项目主题色"这条规则逻辑一致，颜色和字号都要跟着这个中性化原则走。

### 4.2 无需修改的部分

Related 卡片本身的结构、圆角、阴影、hover 效果、图片比例（`aspect-ratio: 16/10`）,`ux-related-card` 和 `arch-related-card` 这两条规则参数已经高度一致，不需要改动。

Related 描述文案的长度差异（UX 版本短句 6-10 字风格 vs 建筑版本更长更具体的句子）,这是内容层面的差异，不是 CSS 问题。按你之前确认的规则，UX 案例页的 Related 描述用"单句短格式"，建筑案例页目前的描述明显更长更具体，这两者是否要统一文案长度是内容策略问题，不在这次 CSS 修改范围内，需要你另外决定是否要重写建筑页的 Related 描述文案。本 Spec 不处理这部分。

卡片视觉呈现方式（UX 用色块+插画/logo，建筑用实景摄影图）,这是两类项目本身素材类型的差异,UX 项目没有现场摄影图，建筑项目有。这不是样式 bug，不建议强行统一，除非你希望 UX 页也换成插画之外的处理方式。

## 五、验证清单（Cowork 执行后自检）

- [ ] 已从 GitHub 拉取 `assets/css/ux-case-study.css` 最新版本，整段替换，不是在旧版本上叠加
- [ ] 只修改了 `.ux-related h2` 这一处规则块，其他内容原样保留
- [ ] 修改后，抽查至少 3 个 UX 案例页（建议 VSK、ASH、WST）确认 Related 标题字号已经跟建筑页视觉一致
- [ ] 确认 dark mode 下标题颜色仍然可读（`var(--theme-text)` 在 dark mode token 里已经是白色，理论上无需额外处理，但建议截图确认）
- [ ] 跑一遍 `henex-audit-rules` 里的 Page QA Checklist 中的响应式检查项（1440/900/520/375 四档），确认字号 clamp 值在各断点下不溢出

## 六、后续建议（不在本次范围内，仅供记录）

1. IA Workbook 里建筑案例页数量记录为 4 个，实际是 7 个（多了 BT2、GFP、PYZ），下次整理 IA 文档时建议核实并更新。
2. Related 描述文案长度风格在 UX 和建筑两条产品线之间不统一，是否需要统一，需要你单独决策。
3. 建议以后新增全局组件相关 CSS 规则时，同步检查 `ux-case-study.css` 和 `architecture-case.css` 两个文件中对应的选择器列表是否包含了新组件，避免同类遗漏再次发生。

---

*文档版本 v1.0，生成日期 2026-07-01，基于 GitHub cafeyee/henex main 分支当前版本核查。*
