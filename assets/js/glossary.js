/* ═══════════════════════════════════════════════════════════════════════
   Sitewide glossary term popover.

   Usage in markup:
     <button class="glossary-term" data-term="information-architecture">
       information architecture
     </button>

   The button's data-term is a slug key into the GLOSSARY table below.
   On click, a small popover shows the term's name and plain-language
   definition. The popover container is created once and appended to the
   document automatically — pages only need to load this script and use the
   inline buttons, no extra markup.

   Self-contained: does not depend on case-interactions.js. Loads on every
   page that includes it, so the same term definitions work across UX case
   studies, architecture case studies and any other page.

   Definitions are drafted at IELTS 6.5–7, one sentence each. Editing a
   definition here updates every occurrence of that term across the whole
   site — that is the point of a central table.
   ═══════════════════════════════════════════════════════════════════════ */

(function () {

  var GLOSSARY = {

    /* ── A. UX & service design methods ── */
    "information-architecture": {
      term: "Information architecture (IA)",
      def: "How content and pages are organised and labelled so people can find what they need."
    },
    "tree-testing": {
      term: "Tree testing",
      def: "A research method that checks whether people can find items in a site's structure, using a text-only menu with no visual design."
    },
    "card-sorting": {
      term: "Card sorting",
      def: "A method where participants group and label content, showing how they expect it to be organised."
    },
    "double-diamond": {
      term: "Double Diamond",
      def: "A four-stage design framework: Discover, Define, Develop, Deliver."
    },
    "service-blueprint": {
      term: "Service blueprint",
      def: "A diagram that maps the visible steps of a service alongside the hidden staff processes behind them."
    },
    "progressive-disclosure": {
      term: "Progressive disclosure",
      def: "Showing only the essentials first, then revealing more detail as the user needs it."
    },
    "severity-rating": {
      term: "Severity rating",
      def: "A score that ranks usability problems by how much they affect users, to set fix priorities."
    },
    "usability-testing": {
      term: "Usability testing",
      def: "Watching real users attempt tasks to find where a design is hard to use."
    },
    "persona": {
      term: "Persona",
      def: "A fictional profile that stands for a real user group's goals and needs."
    },
    "user-flow": {
      term: "User flow",
      def: "The path a user takes through screens to complete a task."
    },
    "journey-map": {
      term: "Journey map",
      def: "A visual of a person's experience across the stages of using a service."
    },
    "wireframe": {
      term: "Wireframe",
      def: "A low-detail layout showing structure and content placement before visual design."
    },
    "fidelity-prototype": {
      term: "High- / low-fidelity prototype",
      def: "A rough early version (low-fi) versus a polished, near-final version (hi-fi) of a design."
    },
    "mvp": {
      term: "MVP (minimum viable product)",
      def: "The smallest version of a product that still delivers real value and can be tested."
    },
    "first-click": {
      term: "First click",
      def: "The first place a user clicks to begin a task; a strong predictor of whether they succeed."
    },

    /* ── B. Design systems & front-end ── */
    "design-system": {
      term: "Design system",
      def: "A shared library of reusable components, styles and rules that keep a product consistent."
    },
    "atomic-design": {
      term: "Atomic Design",
      def: "A method that builds interfaces from the smallest parts up to full pages."
    },
    "design-token": {
      term: "Design token",
      def: "A named value for a style, such as a colour or spacing unit, reused across a system."
    },
    "figma-variables": {
      term: "Figma Variables",
      def: "Figma's feature for storing reusable values like colours and sizes."
    },
    "component": {
      term: "Component",
      def: "A reusable interface building block, such as a button or a card."
    },
    "reverse-engineering": {
      term: "Reverse engineering",
      def: "Working backwards from a finished product to understand the rules and decisions behind it."
    },

    /* ── C. Accessibility & standards ── */
    "wcag": {
      term: "WCAG",
      def: "The international guidelines for making web content usable by people with disabilities."
    },
    "contrast-levels": {
      term: "AA / AAA contrast",
      def: "WCAG colour-contrast levels; AA is the common standard and AAA is stricter."
    },
    "assistive-technology": {
      term: "Assistive technology",
      def: "Tools such as screen readers that help people with disabilities use digital products."
    },

    /* ── D. Delivery & operations (public sector) ── */
    "cms": {
      term: "CMS (content management system)",
      def: "Software for creating and updating website content without coding."
    },
    "qa": {
      term: "QA (quality assurance)",
      def: "Checking a product against standards before release to catch defects."
    },
    "bau": {
      term: "BAU (business as usual)",
      def: "The normal, ongoing running of a service after a project ends."
    },
    "go-live": {
      term: "Go-live",
      def: "The moment a product is released for public use."
    },
    "hypercare": {
      term: "Hypercare",
      def: "A short period of intensive support right after launch."
    },
    "content-inventory": {
      term: "Content inventory",
      def: "A full list of a site's existing content, used to plan changes."
    },
    "governance": {
      term: "Governance",
      def: "The decision rules and roles that keep a project accountable."
    },
    "content-strategy": {
      term: "Content strategy",
      def: "Planning what content is needed, in what form, and how it is kept up to date."
    },

    /* ── E. Cultural concepts ── */
    "kaitiakitanga": {
      term: "Kaitiakitanga",
      def: "A Māori principle of guardianship and reciprocal care for people, land and sea."
    },
    "te-ao-maori": {
      term: "Te Ao Māori",
      def: "The Māori worldview and its values."
    },
    "ako": {
      term: "Ako",
      def: "A Māori idea of teaching and learning as a shared, two-way relationship."
    },
    "sdg-12": {
      term: "SDG 12",
      def: "A UN Sustainable Development Goal for responsible consumption and production."
    },
    "tui": {
      term: "Tūī",
      def: "A native New Zealand songbird known for its varied call and white throat tuft."
    },
    "kowhai": {
      term: "Kōwhai",
      def: "A native New Zealand tree with yellow flowers, often visited by Tūī."
    },
    "te-papa": {
      term: "Te Papa",
      def: "New Zealand's national museum, in Wellington."
    },
    "zhuang-brocade": {
      term: "Zhuang brocade",
      def: "A traditional woven textile of the Zhuang people, a Chinese intangible cultural heritage."
    },
    "lingnan": {
      term: "Lingnan",
      def: "A cultural region of southern China with a distinct architecture and garden tradition."
    },
    "cantonese-ivory-carving": {
      term: "Cantonese ivory carving",
      def: "A centuries-old Guangzhou craft known for its fine, layered detail."
    },

    /* ── F. Architecture & engineering ── */
    "scheme-design": {
      term: "Scheme design",
      def: "The early design stage that sets concept, form and layout before technical drawings."
    },
    "construction-documentation": {
      term: "Construction documentation",
      def: "The detailed drawings and specifications contractors use to build."
    },
    "architect-in-charge": {
      term: "Architect in Charge",
      def: "The architect responsible for a project's design quality through delivery."
    },
    "massing": {
      term: "Massing",
      def: "The overall size, shape and arrangement of a building's volumes."
    },
    "masterplan": {
      term: "Masterplan",
      def: "A large-scale plan for how buildings, spaces and movement fit a site."
    },
    "curtain-wall": {
      term: "Curtain wall",
      def: "A non-structural outer wall, usually glass, hung on the building's frame."
    },
    "parametric-design": {
      term: "Parametric design",
      def: "Designing with rules and parameters so forms can be generated and adjusted by computer."
    },
    "grasshopper": {
      term: "Grasshopper",
      def: "A visual programming tool used for parametric design."
    },
    "space-syntax": {
      term: "Space syntax",
      def: "A method for analysing how a layout shapes movement, visibility and use."
    },
    "podium": {
      term: "Podium",
      def: "The wider low-rise base that a tower sits on."
    },
    "setback": {
      term: "Setback",
      def: "A step-back in a building's form, here stacked to create planted terraces."
    },
    "sky-garden": {
      term: "Sky garden",
      def: "A planted outdoor space raised within or on top of a tall building."
    },
    "transfer-beam": {
      term: "Transfer beam",
      def: "A large beam that redirects structural loads where columns cannot run continuously."
    },
    "tensile-membrane": {
      term: "Tensile membrane",
      def: "A lightweight fabric roof or canopy stretched under tension."
    },
    "standing-seam-roof": {
      term: "Standing-seam roof",
      def: "A metal roof whose panels join in raised, weather-tight seams."
    },
    "fritted-glass": {
      term: "Fritted glass",
      def: "Glass with a printed ceramic pattern that controls light and privacy."
    },
    "building-services": {
      term: "Building services",
      def: "A building's technical systems: power, water, ventilation and drainage."
    },
    "building-envelope": {
      term: "Building envelope",
      def: "The outer shell separating inside from outside: walls, roof and glazing."
    },
    "super-high-rise": {
      term: "Super high-rise",
      def: "A very tall building, generally above roughly 100 metres."
    },
    "cbd": {
      term: "CBD (central business district)",
      def: "A city's main commercial and business centre."
    },
    "gray-space": {
      term: "Gray space",
      def: "A transitional area that is neither fully indoors nor fully outdoors."
    },
    "consortium": {
      term: "Consortium",
      def: "A group of firms joining together to bid for and deliver one project."
    },
    "mock-up": {
      term: "Mock-up",
      def: "A full-size physical sample used to test materials and details before construction."
    },
    "multi-modal": {
      term: "Multi-modal",
      def: "Combining several transport modes (air, rail, subway, road) in one hub."
    },
    "circulation": {
      term: "Circulation",
      def: "How people move through and between a building's spaces."
    }

  };

  document.addEventListener("DOMContentLoaded", function () {

    var triggers = document.querySelectorAll(".glossary-term");
    if (!triggers.length) return;

    // Create the single popover container once and append to the body.
    var popover = document.createElement("div");
    popover.className = "glossary-popover";
    popover.setAttribute("role", "dialog");
    popover.setAttribute("aria-live", "polite");
    document.body.appendChild(popover);

    var activeTrigger = null;

    function closePopover() {
      popover.classList.remove("is-open");
      popover.innerHTML = "";
      if (activeTrigger) activeTrigger.setAttribute("aria-expanded", "false");
      activeTrigger = null;
    }

    function openPopover(trigger) {
      var slug = trigger.getAttribute("data-term");
      var entry = GLOSSARY[slug];
      if (!entry) return; // unknown slug: fail silently, leave text as-is

      if (activeTrigger === trigger && popover.classList.contains("is-open")) {
        closePopover();
        return;
      }
      if (activeTrigger) activeTrigger.setAttribute("aria-expanded", "false");
      activeTrigger = trigger;
      trigger.setAttribute("aria-expanded", "true");

      popover.innerHTML =
        '<h3 class="glossary-popover__term"></h3>' +
        '<p class="glossary-popover__def"></p>';
      popover.querySelector(".glossary-popover__term").textContent = entry.term;
      popover.querySelector(".glossary-popover__def").textContent = entry.def;

      // Position under the trigger, flipping above if there isn't room.
      var rect = trigger.getBoundingClientRect();
      var popH = 200;
      var spaceBelow = window.innerHeight - rect.bottom;
      var topPos = spaceBelow >= popH + 16
        ? rect.bottom + 8
        : rect.top - popH - 8;

      popover.style.top = Math.max(16, topPos) + "px";
      popover.style.left = Math.max(16, Math.min(rect.left, window.innerWidth - 356)) + "px";
      popover.classList.add("is-open");
    }

    triggers.forEach(function (trigger) {
      trigger.setAttribute("aria-expanded", "false");
      trigger.addEventListener("click", function (event) {
        event.stopPropagation();
        openPopover(trigger);
      });
    });

    // Click outside closes.
    document.addEventListener("click", function (event) {
      var target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest(".glossary-term") && !target.closest(".glossary-popover")) {
        closePopover();
      }
    });

    // Escape closes.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closePopover();
    });

    // Reposition/close on scroll or resize so the popover never floats away
    // from its trigger.
    window.addEventListener("scroll", closePopover, { passive: true });
    window.addEventListener("resize", closePopover);

  });

})();
