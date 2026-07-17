# Glossary Term Tagging — Execution Spec

**Status:** Ready to execute. Component (CSS in `global.css`, `assets/js/glossary.js`, term table) is already built, approved and demo-verified (dashed underline, light+dark). `glossary.js` is already linked on all 15 case study pages. This spec covers only the remaining step: wrapping the confirmed term occurrences in body copy.

**Model:** Sonnet, no extended thinking. This is mechanical find-and-replace against an exact list — no design judgement left. Every decision that needed judgement is already resolved below.

**What "tagging" means.** Replace the plain term text in the body with a button:

```html
<button class="glossary-term" data-term="SLUG">TERM TEXT</button>
```

Keep the visible TERM TEXT exactly as it already reads in the sentence (don't change wording, capitalisation or surrounding words). Only wrap it.

---

## Rules (all already decided — do not re-judge)

1. **One tag per term per page.** Wrap only the FIRST body-copy occurrence of each term on each page, at the line noted below. Leave all later repeats untouched.
2. **Body copy only.** Only wrap text inside `<p>` paragraphs. NEVER wrap text inside `<figcaption>`, `alt=""`, `<title>`, meta tags, headings (`<h1>`–`<h4>`), `.arch-meta-item`, `.ux-meta`, skill lists, or kickers. The term must be running prose.
3. **Abbreviations: first full occurrence only.** For IA, MVP, WCAG, CMS, QA, BAU, CBD, SDG 12 — one tag on the page, at the noted line, nothing more.
4. **Skip self-explained cultural terms.** These are intentionally NOT tagged even though they're in the term table, because the sentence already defines them inline: Tūī, Kōwhai, Te Papa, Zhuang brocade, Lingnan, Cantonese ivory carving. (They stay in `glossary.js` for future use.)
5. **Exact visible-text match.** Where the first occurrence surfaces as a variant phrase (e.g. "parametric software", "tokens", "schematic design"), wrap ONLY the words listed in the "Wrap this text" column — do not force the canonical term name into the sentence.
6. **Verify the slug exists** in `glossary.js` before wrapping (all slugs below are confirmed present).

---

## Per-page tag list

Line numbers are from the scan; if a linter has reflowed a file, find the phrase in the noted paragraph rather than trusting the line number blindly. Each row: `data-term` slug → the exact visible text to wrap → which paragraph.

### UX case pages

**accessibility-support-hub.html (10)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| information-architecture | information architecture | 109 |
| usability-testing | usability testing | 109 |
| design-system | design system | 109 |
| service-blueprint | service blueprint | 246 |
| severity-rating | severity rating | 253 |
| wireframe | wireframe | 255 |
| fidelity-prototype | high-fidelity prototype | 255 |
| double-diamond | Double Diamond | 267 |
| contrast-levels | AAA | 478 |
| progressive-disclosure | progressive disclosure | 588 |

Note: lines 109 has three terms in one paragraph — wrap all three, each its own button.

**studier.html (4)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| mvp | MVP | 100 |
| first-click | first click | 148 |
| persona | persona | 158 |
| tree-testing | tree testing | 82 |

**new-world-design-system.html (8)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| design-system | design system | 65 |
| atomic-design | Atomic Design | 65 |
| reverse-engineering | reverse engineer | 65 |
| assistive-technology | assistive technologies | 245 |
| design-token | token structure | 266 |
| governance | governance | 501 |
| figma-variables | Figma Variables | 419 |
| component | component anatomy | 524 |

Note: line 65 has three terms in one paragraph. For `assistive-technology` at 245 wrap the full word as it reads ("assistive technologies").

**rekraft.html (11)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| kaitiakitanga | Kaitiakitanga | 73 |
| ako | Ako | 90 |
| te-ao-maori | Te Ao Māori | 91 |
| sdg-12 | SDG 12 | 91 |
| mvp | MVP | 244 |
| information-architecture | information architecture | 295 |
| usability-testing | usability testing | 295 |
| user-flow | user flows | 295 |
| fidelity-prototype | high-fidelity | 295 |
| design-system | design system | 321 |
| persona | persona | 728 |

Note: line 295 has four terms in one paragraph; check the exact surface wording for each (e.g. "user flows" plural, "high-fidelity"). Wrap `ako` only where "Ako" is the module name in prose, not inside a heading.

**voting-starter-kit.html (3)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| usability-testing | usability testing | 196 |
| content-strategy | content strategy | 196 |
| tree-testing | tree testing | 467 |

**welnest.html (9)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| usability-testing | usability testing | 187 |
| fidelity-prototype | high-fidelity prototype | 187 |
| double-diamond | Double Diamond | 227 |
| journey-map | journey map | 232 |
| user-flow | user flows | 236 |
| design-system | design system | 236 |
| information-architecture | information architecture | 347 |
| design-token | token-ready | 418 |
| persona | persona | 424 |

**whos-singing-outuiside.html (7)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| progressive-disclosure | progressive disclosure | 150 |
| usability-testing | usability testing | 209 |
| fidelity-prototype | hi-fi prototype | 209 |
| design-system | design system | 218 |
| wcag | WCAG | 337 |
| contrast-levels | AA standards | 368 |
| persona | persona | 450 |

Note: this page's title/OG contain "Tūī"; do NOT tag Tūī anywhere (self-explained rule + it appears mostly in headings/captions).

**victim-hub.html (18)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| information-architecture | information architecture | 81 |
| content-strategy | content strategy | 81 |
| go-live | go-live | 82 |
| governance | governance | 169 |
| design-system | design system | 187 |
| card-sorting | card sorting | 203 |
| usability-testing | usability testing | 203 |
| content-inventory | content inventory | 203 |
| persona | persona | 233 |
| reverse-engineering | reverse-engineered | 255 |
| user-flow | user flow | 330 |
| design-token | tokens | 402 |
| fidelity-prototype | high-fidelity prototype | 438 |
| bau | BAU | 438 |
| cms | CMS | 477 |
| qa | QA | 477 |
| hypercare | hypercare | 478 |
| tree-testing | tree testing | 593 |

Note: `qa` — wrap only the standalone "QA" token, not any "QA" inside another word. Several paragraphs (203, 438, 477) carry multiple terms; wrap each.

### Architecture case pages

**guangzhou-baiyun-t2.html (7)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| circulation | circulation | 199 |
| space-syntax | space syntax | 201 |
| scheme-design | scheme design | 126 |
| construction-documentation | construction documentation | 126 |
| architect-in-charge | Architect in Charge | 126 |
| fritted-glass | fritted glass | 288 |
| tensile-membrane | tensile membrane | 311 |

Note: line 126 has three terms (Architect in Charge, scheme design, construction documentation) in one paragraph — wrap all three. `circulation` at 199 must be a `<p>`, not the figcaption at 187.

**shantou-ayg.html (8)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| massing | massing | 108 |
| circulation | circulation | 108 |
| architect-in-charge | Architect in Charge | 127 |
| building-services | building services | 128 |
| gray-space | gray space | 195 |
| parametric-design | parametric design | 263 |
| grasshopper | Grasshopper | 263 |
| standing-seam-roof | standing-seam | 264 |

Note: line 108 has massing + circulation in one paragraph. `standing-seam` at 264 — wrap "standing-seam" (the hyphenated form as it reads).

**oppein-headquarters.html (13)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| super-high-rise | super high-rise | 68 |
| sky-garden | sky gardens | 108 |
| cbd | CBD | 106 |
| scheme-design | scheme design | 126 |
| architect-in-charge | Architect in Charge | 126 |
| massing | massing | 126 |
| setback | setback | 182 |
| transfer-beam | transfer beam | 226 |
| building-services | building services | 226 |
| curtain-wall | curtain wall | 251 |
| podium | podium | 251 |
| parametric-design | parametric software | 272 |
| construction-documentation | construction documentation | 312 |

Note: `parametric-design` first surfaces as "parametric software" at 272 — wrap those two words. Line 126 has three terms; 226 and 251 have two each.

**nanning-wuxu-t3.html (2)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| multi-modal | multi-modal | 68 |
| massing | massing | 142 |

Note: do NOT tag Zhuang brocade / Lingnan-type cultural terms here (self-explained).

**guangzhou-football-park.html (3)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| curtain-wall | curtain wall | 107 |
| scheme-design | schematic design | 142 |
| building-envelope | building envelope | 163 |

Note: `scheme-design` surfaces here as "schematic design" — wrap those two words. Do NOT tag "jade"/"ivory carving" cultural references (self-explained).

**great-bay-area-science-hall.html (5)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| construction-documentation | construction drawings | 110 |
| curtain-wall | curtain wall | 110 |
| consortium | consortium | 110 |
| masterplan | masterplan | 171 |
| mock-up | mock-up | 192 |

Note: line 110 has three terms; `construction-documentation` surfaces as "construction drawings" — wrap those two words.

**poly-yuzhu.html (3)**
| slug | Wrap this text | Para (line) |
|------|---------------|-------------|
| masterplan | masterplan | 104 |
| circulation | circulation | 104 |
| podium | podium | 138 |

---

## Totals

111 tags across 15 pages: UX pages 70, architecture pages 41. Skipped by design: the 6 self-explained cultural terms.

---

## Verification (run after tagging)

1. **Every `data-term` resolves.** Grep all `data-term="..."` values across the 15 pages; confirm each slug exists as a key in `glossary.js`. Zero orphans.
   ```
   grep -ohE 'data-term="[^"]+"' works/*.html | sort -u
   ```
   Cross-check against the `GLOSSARY` keys.
2. **No double-wrapping.** No `<button class="glossary-term"` nested inside another, and no term wrapped twice on the same page.
3. **Tag balance.** Each touched page: `<button>` open count == `</button>` close count (account for existing recipe-trigger buttons too).
4. **Nothing wrapped in the wrong place.** Grep that no `glossary-term` button sits inside a `<figcaption>`, `alt=`, or heading.
5. **Count check.** Total `glossary-term` buttons across all pages == 111 (or the agreed number if Cafe trims any).
6. **Spot-render.** Rebuild the demo or open one real page to confirm the underline shows and the popover opens.

## After execution

Update `docs/HENEX_Project_Execution_Plan.md`: mark the glossary component + tagging DONE, note it's a sitewide component (Roadmap item 3.7 delivered), and log the 111 tags. Remind Cafe the updated plan + specs go back into RAG.
