/**
 * Interactive Components Preview Functions
 * Handles hero, CTA, cards, and action-oriented sections
 */

/**
 * Renders a hero section preview
 */
function renderHeroSection(section, index, getAsset) {
  return h(
    "div",
    {
      key: index,
      className: "hero-preview",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "2rem",
        padding: "2.5rem 1rem",
        background: "linear-gradient(45deg, #374151, #4b5563)",
        color: "white",
        borderRadius: "0.5rem",
        marginBottom: "2rem",
        "@media (min-width: 768px)": {
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          padding: "3rem 1rem",
          alignItems: "center",
        },
      },
    },
    h(
      "div",
      { style: { maxWidth: "37.5rem", margin: "0 auto" } },
      h(
        "h2",
        {
          style: {
            fontSize: "2.5rem",
            lineHeight: "1.2",
            marginBottom: "1rem",
            fontWeight: "700",
          },
        },
        section.get("title")
      ),
      section.get("subtitle") &&
        h(
          "p",
          {
            style: {
              fontSize: "1.25rem",
              lineHeight: "1.6",
              marginBottom: "2rem",
              opacity: "0.9",
            },
          },
          section.get("subtitle")
        ),
      section.getIn(["cta", "text"]) &&
        h(
          "a",
          {
            href: "#",
            style: {
              display: "inline-block",
              backgroundColor: "#10b981",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: "600",
            },
          },
          section.getIn(["cta", "text"])
        )
    ),
    section.get("image") &&
      h(
        "div",
        { style: { display: "flex", justifyContent: "center" } },
        h("img", {
          src: getAsset(section.get("image")),
          alt: section.get("image_alt") || "Hero image",
          style: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "0.5rem",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          },
        })
      )
  );
}

/**
 * Renders a CTA section preview
 */
function renderCtaSection(section, index, getAsset) {
  return h(
    "div",
    {
      key: index,
      className: "cta-preview",
      style: {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "3rem 2rem",
        borderRadius: "1rem",
        textAlign: section.get("center_content") ? "center" : "left",
        marginBottom: "2rem",
      },
    },
    section.get("title") &&
      h(
        "h3",
        {
          style: {
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
          },
        },
        section.get("title")
      ),
    section.get("description") &&
      h(
        "p",
        {
          style: {
            fontSize: "1.25rem",
            lineHeight: "1.6",
            marginBottom: "2rem",
            opacity: "0.9",
          },
        },
        section.get("description")
      ),
    section.get("image") &&
      h(
        "div",
        {
          style: {
            marginBottom: "2rem",
            display: "flex",
            justifyContent: section.get("center_content") ? "center" : "flex-start",
          },
        },
        h("img", {
          src: getAsset(section.getIn(["image", "url"])),
          alt: section.getIn(["image", "alt"]) || "CTA image",
          style: {
            maxWidth: "300px",
            height: "auto",
            borderRadius: "0.5rem",
          },
        })
      ),
    h(
      "div",
      {
        style: {
          display: "flex",
          gap: "1rem",
          justifyContent: section.get("center_content") ? "center" : "flex-start",
          flexWrap: "wrap",
        },
      },
      section.getIn(["primary_button", "text"]) &&
        h(
          "a",
          {
            href: "#",
            style: {
              backgroundColor: "white",
              color: "#667eea",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: "600",
            },
          },
          section.getIn(["primary_button", "text"])
        ),
      section.getIn(["secondary_button", "text"]) &&
        h(
          "a",
          {
            href: "#",
            style: {
              backgroundColor: "transparent",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontWeight: "600",
              border: "2px solid white",
            },
          },
          section.getIn(["secondary_button", "text"])
        )
    )
  );
}

/**
 * Renders a featured cards section preview
 */
function renderFeaturedCardsSection(section, index, getAsset) {
  var cards = section.get("cards");
  return h(
    "div",
    { key: index, className: "featured-cards-preview" },
    section.get("title") &&
      h(
        "h3",
        {
          style: {
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "2rem",
            textAlign: "center",
          },
        },
        section.get("title")
      ),
    h(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        },
      },
      cards &&
        cards.map(function (card, cardIndex) {
          return h(
            "div",
            {
              key: cardIndex,
              style: {
                backgroundColor: "white",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e5e7eb",
              },
            },
            card.get("media_type") === "image" && card.get("image") &&
              h(
                "div",
                { style: { marginBottom: "1rem" } },
                h("img", {
                  src: getAsset(card.get("image")),
                  alt: card.get("title"),
                  style: {
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "0.25rem",
                  },
                })
              ),
            card.get("media_type") === "icon" && card.get("icon") &&
              h(
                "div",
                {
                  style: {
                    fontSize: "3rem",
                    textAlign: "center",
                    marginBottom: "1rem",
                    color: "#6366f1",
                  },
                },
                "📄" // Placeholder icon
              ),
            h(
              "h4",
              {
                style: {
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                },
              },
              card.get("title")
            ),
            card.get("description") &&
              h(
                "p",
                {
                  style: {
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    color: "#6b7280",
                    marginBottom: "1rem",
                  },
                },
                card.get("description")
              ),
            (card.get("url") || card.get("cta_text")) &&
              h(
                "a",
                {
                  href: "#",
                  style: {
                    display: "inline-block",
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.25rem",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  },
                },
                card.get("cta_text") || "Learn More"
              )
          );
        })
    )
  );
}

// Export interactive component functions
window.InteractivePreviewComponents = {
  renderHeroSection,
  renderCtaSection,
  renderFeaturedCardsSection,
};
