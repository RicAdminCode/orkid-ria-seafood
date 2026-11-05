import { Link } from "@tanstack/react-router";

export default function PageContent() {
  return (
    <>
      <a className={"skip-link"} href={"#main"}>
        {"Skip to content"}
      </a>
      {"\n"}
      <header className={"site-header"}>
        <Link to="/" className={"brand"}>
          <img
            src={"/assets/Orkid%20Rid%20Logo.png"}
            alt={""}
            width={"1755"}
            height={"1805"}
          />
          <span>{"ORKID RIA"}</span>
        </Link>
        <nav
          aria-label={"Main navigation"}
          className={"nav"}
          id={"primary-nav"}
        >
          <Link to="/menu/" className={"nav-link"}>
            {"Menu"}
          </Link>
          <Link
            to="/reservation/"
            className={"nav-link nav-reserve neon-active"}
          >
            {"Reservations"}
          </Link>
          <Link to="/about/" className={"nav-link"}>
            {"Dining Experience"}
          </Link>
          <Link to="/restaurant/" className={"nav-link nav-visit"}>
            {"Visit"}
          </Link>
          <a
            className={"nav-link nav-contact neon-active"}
            href={"https://wa.me/60176144128"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            {"WhatsApp us ↗"}
          </a>
        </nav>
        <span className={"header-location"}>{"Langkawi · Malaysia"}</span>
        <button
          aria-controls={"primary-nav"}
          aria-expanded={"false"}
          aria-label={"Open navigation"}
          className={"mobile-menu"}
        >
          {"Menu"}
        </button>
        <nav className={"header-utility"} aria-label={"Restaurant contact"}>
          <a href={"tel:+60176144128"}>{"+60 17-614 4128"}</a>
          <Link to="/restaurant/">{"Daily, 1:00 pm–11:00 pm"}</Link>
          <Link to="/about/">{"Our story"}</Link>
          <Link to="/reservation/">{"Contact"}</Link>
        </nav>
      </header>
      {"\n"}
      <main className={"home-main"} id={"main"}>
        <section className={"hero-main"}>
          <div
            aria-label={"Restaurant photographs"}
            aria-roledescription={"carousel"}
            className={"slides"}
          >
            <div className={"slide active"}>
              <picture className={"responsive-photo"}>
                <img
                  alt={"Dining pavilion beside the reflecting pool at night"}
                  decoding={"async"}
                  width={"680"}
                  height={"510"}
                  loading={"eager"}
                  fetchPriority={"high"}
                  sizes={"max(100vw, 106.667svh)"}
                  src={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment6.webp"
                  }
                  srcSet={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment6.webp 680w"
                  }
                />
              </picture>
            </div>
            <div className={"slide"}>
              <picture className={"responsive-photo"}>
                <img
                  alt={"Waterside dining tables and lanterns at Orkid Ria"}
                  decoding={"async"}
                  width={"680"}
                  height={"510"}
                  loading={"lazy"}
                  fetchPriority={"low"}
                  sizes={"max(100vw, 106.667svh)"}
                  src={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment7.webp"
                  }
                  srcSet={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment7.webp 680w"
                  }
                />
              </picture>
            </div>
            <div className={"slide"}>
              <picture className={"responsive-photo"}>
                <img
                  alt={"Guests dining beneath pendant lights at Orkid Ria"}
                  decoding={"async"}
                  width={"680"}
                  height={"510"}
                  loading={"lazy"}
                  fetchPriority={"low"}
                  sizes={"max(100vw, 106.667svh)"}
                  src={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment1.webp"
                  }
                  srcSet={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment1.webp 680w"
                  }
                />
              </picture>
            </div>
            <div className={"slide"}>
              <picture className={"responsive-photo"}>
                <img
                  alt={"Outdoor dining tables at Orkid Ria at night"}
                  decoding={"async"}
                  width={"680"}
                  height={"510"}
                  loading={"lazy"}
                  fetchPriority={"low"}
                  sizes={"max(100vw, 106.667svh)"}
                  src={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment5.webp"
                  }
                  srcSet={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment5.webp 680w"
                  }
                />
              </picture>
            </div>
            <div className={"slide"}>
              <picture className={"responsive-photo"}>
                <img
                  alt={"Bar counter and illuminated shelving at Orkid Ria"}
                  decoding={"async"}
                  width={"680"}
                  height={"510"}
                  loading={"lazy"}
                  fetchPriority={"low"}
                  sizes={"max(100vw, 106.667svh)"}
                  src={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment3.webp"
                  }
                  srcSet={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment3.webp 680w"
                  }
                />
              </picture>
            </div>
            <div className={"slide"}>
              <picture className={"responsive-photo"}>
                <img
                  alt={"Live seafood tanks inside Orkid Ria"}
                  decoding={"async"}
                  width={"680"}
                  height={"510"}
                  loading={"lazy"}
                  fetchPriority={"low"}
                  sizes={"max(100vw, 106.667svh)"}
                  src={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment2.webp"
                  }
                  srcSet={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment2.webp 680w"
                  }
                />
              </picture>
            </div>
            <div className={"slide"}>
              <picture className={"responsive-photo"}>
                <img
                  alt={
                    "Pendant lights beneath the dining pavilion roof at Orkid Ria"
                  }
                  decoding={"async"}
                  width={"382"}
                  height={"510"}
                  loading={"lazy"}
                  fetchPriority={"low"}
                  sizes={"max(100vw, 59.922svh)"}
                  src={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment4.webp"
                  }
                  srcSet={
                    "/assets/environment/Orkid%20Ria%20Seafood%20Environment4.webp 382w"
                  }
                />
              </picture>
            </div>
          </div>
          <div className={"slider-controls"}>
            <button
              aria-label={"Previous image"}
              className={"slider-arrow prev"}
            >
              {"‹"}
            </button>
            <span aria-live={"polite"} className={"slide-count"}>
              {"01 / 07"}
            </span>
            <button aria-label={"Next image"} className={"slider-arrow next"}>
              {"›"}
            </button>
          </div>
          <article className={"testimonial-card"}>
            <h1 className={"quote-title"}>
              {"Fresh Seafood."}
              <br />
              {"Cooked Your Way."}
            </h1>
            <p className={"quote-copy"}>
              {
                "Choose your seafood, settle on the preparation, and gather around the table. Join us in Pantai Tengah, Langkawi."
              }
            </p>
            <div className={"hero-actions"}>
              <Link to="/menu/" className={"book-button"}>
                {"Explore the Menu "}
                <span aria-hidden={"true"}>{"↗"}</span>
              </Link>
              <Link to="/reservation/" className={"outline-button neon-active"}>
                {"Reservations "}
                <span aria-hidden={"true"}>{"↗"}</span>
              </Link>
            </div>
          </article>
          <span className={"since"}>{"Langkawi, Malaysia"}</span>
          <p className={"eyebrow"}>{"Orkid Ria · Seafood Restaurant"}</p>
        </section>
        <section
          className={"section home-features seafood-showcase"}
          aria-label={"Seafood highlights"}
          aria-labelledby={"seafood-showcase-title"}
        >
          <div className={"showcase-heading"}>
            <div>
              <h2 className={"section-title"} id={"seafood-showcase-title"}>
                {"Seafood for "}
                <strong>{"the Table"}</strong>
              </h2>
              <p>
                {
                  "Crab, fish, prawns and plates to share. Explore a few dishes from our tables, then ask our team about today’s selection and prices."
                }
              </p>
            </div>
            <Link to="/menu/" className={"showcase-menu-link"}>
              {"Explore the Menu "}
              <span aria-hidden={"true"}>{"↗"}</span>
            </Link>
          </div>
          <div
            className={"photo-rail feature-rail"}
            tabIndex={0}
            aria-label={"Seafood photographs"}
            aria-roledescription={"carousel"}
            id={"seafood-carousel"}
          >
            <figure className={"dish-card"}>
              <Link
                to="/menu/"
                className={"dish-photo neon-frame"}
                aria-label={"Explore Crab menu highlights"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/2026/feb-0c-480.avif 480w, /assets/2026/feb-0c-800.avif 800w, /assets/2026/feb-0c-1200.avif 1200w, /assets/2026/feb-0c.avif 1400w"
                    }
                    sizes={
                      "(max-width: 767px) max(91vw, 532px), (max-width: 990px) max(77vw, 588px), (max-width: 1279px) max(67vw, 588px), (max-width: 1499px) max(51.3vw, 588px), max(43.5vw, 588px)"
                    }
                  />
                  <img
                    alt={"Crab served with vegetables."}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 767px) max(91vw, 532px), (max-width: 990px) max(77vw, 588px), (max-width: 1279px) max(67vw, 588px), (max-width: 1499px) max(51.3vw, 588px), max(43.5vw, 588px)"
                    }
                    src={"/assets/2026/feb-0c.webp"}
                    srcSet={
                      "/assets/2026/feb-0c-480.webp 480w, /assets/2026/feb-0c-800.webp 800w, /assets/2026/feb-0c-1200.webp 1200w, /assets/2026/feb-0c.webp 1400w"
                    }
                    width={"1400"}
                  />
                </picture>
              </Link>
              <figcaption>
                <h3>{"Crab"}</h3>
                <p>{"Crab served with vegetables."}</p>
              </figcaption>
              <Link
                to="/menu/"
                className={"card-detail-link"}
                aria-label={"View Crab in the menu"}
              >
                <span aria-hidden={"true"}>{"↗"}</span>
              </Link>
            </figure>
            <figure className={"dish-card"}>
              <Link
                to="/menu/"
                className={"dish-photo neon-frame"}
                aria-label={"Explore Whole Fish menu highlights"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fd-480.avif 480w, /assets/gallery/32-40-c2-fd-800.avif 800w, /assets/gallery/32-40-c2-fd.avif 1200w"
                    }
                    sizes={
                      "(max-width: 767px) max(91vw, 456px), (max-width: 990px) max(77vw, 504px), (max-width: 1279px) max(67vw, 504px), (max-width: 1499px) max(51.3vw, 504px), max(43.5vw, 504px)"
                    }
                  />
                  <img
                    alt={"Whole fish served at the table."}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 767px) max(91vw, 456px), (max-width: 990px) max(77vw, 504px), (max-width: 1279px) max(67vw, 504px), (max-width: 1499px) max(51.3vw, 504px), max(43.5vw, 504px)"
                    }
                    src={"/assets/gallery/32-40-c2-fd.webp"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fd-480.webp 480w, /assets/gallery/32-40-c2-fd-800.webp 800w, /assets/gallery/32-40-c2-fd.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
              </Link>
              <figcaption>
                <h3>{"Whole Fish"}</h3>
                <p>{"Whole fish served at the table."}</p>
              </figcaption>
              <Link
                to="/menu/"
                className={"card-detail-link"}
                aria-label={"View Whole Fish in the menu"}
              >
                <span aria-hidden={"true"}>{"↗"}</span>
              </Link>
            </figure>
            <figure className={"dish-card"}>
              <Link
                to="/menu/"
                className={"dish-photo neon-frame"}
                aria-label={"Explore Prawns menu highlights"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-40-c3-00-480.avif 480w, /assets/gallery/32-40-c3-00-800.avif 800w, /assets/gallery/32-40-c3-00.avif 1200w"
                    }
                    sizes={
                      "(max-width: 767px) max(91vw, 456px), (max-width: 990px) max(77vw, 504px), (max-width: 1279px) max(67vw, 504px), (max-width: 1499px) max(51.3vw, 504px), max(43.5vw, 504px)"
                    }
                  />
                  <img
                    alt={"Prawns with a crisp topping."}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 767px) max(91vw, 456px), (max-width: 990px) max(77vw, 504px), (max-width: 1279px) max(67vw, 504px), (max-width: 1499px) max(51.3vw, 504px), max(43.5vw, 504px)"
                    }
                    src={"/assets/gallery/32-40-c3-00.webp"}
                    srcSet={
                      "/assets/gallery/32-40-c3-00-480.webp 480w, /assets/gallery/32-40-c3-00-800.webp 800w, /assets/gallery/32-40-c3-00.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
              </Link>
              <figcaption>
                <h3>{"Prawns"}</h3>
                <p>{"Prawns with a crisp topping."}</p>
              </figcaption>
              <Link
                to="/menu/"
                className={"card-detail-link"}
                aria-label={"View Prawns in the menu"}
              >
                <span aria-hidden={"true"}>{"↗"}</span>
              </Link>
            </figure>
            <figure className={"dish-card"}>
              <Link
                to="/menu/"
                className={"dish-photo neon-frame"}
                aria-label={"Explore Oysters menu highlights"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fa-480.avif 480w, /assets/gallery/32-40-c2-fa-800.avif 800w, /assets/gallery/32-40-c2-fa.avif 1200w"
                    }
                    sizes={
                      "(max-width: 767px) max(91vw, 456px), (max-width: 990px) max(77vw, 504px), (max-width: 1279px) max(67vw, 504px), (max-width: 1499px) max(51.3vw, 504px), max(43.5vw, 504px)"
                    }
                  />
                  <img
                    alt={"Oysters served on the half shell."}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 767px) max(91vw, 456px), (max-width: 990px) max(77vw, 504px), (max-width: 1279px) max(67vw, 504px), (max-width: 1499px) max(51.3vw, 504px), max(43.5vw, 504px)"
                    }
                    src={"/assets/gallery/32-40-c2-fa.webp"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fa-480.webp 480w, /assets/gallery/32-40-c2-fa-800.webp 800w, /assets/gallery/32-40-c2-fa.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
              </Link>
              <figcaption>
                <h3>{"Oysters"}</h3>
                <p>{"Oysters served on the half shell."}</p>
              </figcaption>
              <Link
                to="/menu/"
                className={"card-detail-link"}
                aria-label={"View Oysters in the menu"}
              >
                <span aria-hidden={"true"}>{"↗"}</span>
              </Link>
            </figure>
            <figure className={"dish-card"}>
              <Link
                to="/menu/"
                className={"dish-photo neon-frame"}
                aria-label={
                  "Explore Fried Rice & Shared Plates menu highlights"
                }
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/2026/feb-0a-480.avif 480w, /assets/2026/feb-0a-800.avif 800w, /assets/2026/feb-0a-1200.avif 1200w, /assets/2026/feb-0a.avif 1400w"
                    }
                    sizes={
                      "(max-width: 767px) max(91vw, 532px), (max-width: 990px) max(77vw, 588px), (max-width: 1279px) max(67vw, 588px), (max-width: 1499px) max(51.3vw, 588px), max(43.5vw, 588px)"
                    }
                  />
                  <img
                    alt={"Fried rice alongside seafood and vegetables."}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 767px) max(91vw, 532px), (max-width: 990px) max(77vw, 588px), (max-width: 1279px) max(67vw, 588px), (max-width: 1499px) max(51.3vw, 588px), max(43.5vw, 588px)"
                    }
                    src={"/assets/2026/feb-0a.webp"}
                    srcSet={
                      "/assets/2026/feb-0a-480.webp 480w, /assets/2026/feb-0a-800.webp 800w, /assets/2026/feb-0a-1200.webp 1200w, /assets/2026/feb-0a.webp 1400w"
                    }
                    width={"1400"}
                  />
                </picture>
              </Link>
              <figcaption>
                <h3>{"Fried Rice & Shared Plates"}</h3>
                <p>{"Fried rice alongside seafood and vegetables."}</p>
              </figcaption>
              <Link
                to="/menu/"
                className={"card-detail-link"}
                aria-label={"View Fried Rice & Shared Plates in the menu"}
              >
                <span aria-hidden={"true"}>{"↗"}</span>
              </Link>
            </figure>
            <figure className={"dish-card"}>
              <Link
                to="/menu/"
                className={"dish-photo neon-frame"}
                aria-label={"Explore Seafood to Share menu highlights"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria4-480.avif 480w, /assets/langkawi-app/orkid-ria4-800.avif 800w, /assets/langkawi-app/orkid-ria4.avif 1015w"
                    }
                    sizes={
                      "(max-width: 767px) max(91vw, 676px), (max-width: 990px) max(77vw, 747px), (max-width: 1279px) max(67vw, 747px), (max-width: 1499px) max(51.3vw, 747px), max(43.5vw, 747px)"
                    }
                  />
                  <img
                    alt={"A spread of seafood and shared dishes."}
                    decoding={"async"}
                    height={"571"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 767px) max(91vw, 676px), (max-width: 990px) max(77vw, 747px), (max-width: 1279px) max(67vw, 747px), (max-width: 1499px) max(51.3vw, 747px), max(43.5vw, 747px)"
                    }
                    src={"/assets/langkawi-app/orkid-ria4.webp"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria4-480.webp 480w, /assets/langkawi-app/orkid-ria4-800.webp 800w, /assets/langkawi-app/orkid-ria4.webp 1015w"
                    }
                    width={"1015"}
                  />
                </picture>
              </Link>
              <figcaption>
                <h3>{"Seafood to Share"}</h3>
                <p>{"A spread of seafood and shared dishes."}</p>
              </figcaption>
              <Link
                to="/menu/"
                className={"card-detail-link"}
                aria-label={"View Seafood to Share in the menu"}
              >
                <span aria-hidden={"true"}>{"↗"}</span>
              </Link>
            </figure>
          </div>
          <div className={"rail-controls"}>
            <button
              type={"button"}
              aria-label={"Previous seafood photographs"}
              data-feature-direction={"-1"}
              aria-controls={"seafood-carousel"}
            >
              {"←"}
            </button>
            <button
              type={"button"}
              aria-label={"Next seafood photographs"}
              data-feature-direction={"1"}
              aria-controls={"seafood-carousel"}
            >
              {"→"}
            </button>
          </div>
          <div className={"feature-progress"} aria-hidden={"true"}>
            <span></span>
          </div>
          <p className={"visually-hidden feature-status"} role={"status"}></p>
        </section>
        <section
          aria-labelledby={"local-title"}
          className={"section local-intro statement-section"}
        >
          <div>
            <p className={"eyebrow"}>
              {"Orkid Ria Seafood Restaurant · Pantai Tengah, Langkawi"}
            </p>
            <h2 className={"section-title"} id={"local-title"}>
              {"A seafood meal worth gathering for."}
            </h2>
            <p>
              {
                "Start at the seafood tanks, then make the meal your own. Talk with our team about portions and preparation for the people around your table."
              }
            </p>
            <p>
              {"Take a look at our "}
              <Link to="/menu/">{"seafood highlights"}</Link>
              {", explore the "}
              <Link to="/about/">{"dining spaces"}</Link>
              {", or "}
              <Link to="/reservation/">
                {"get in touch to plan your visit"}
              </Link>
              {"."}
            </p>
          </div>
          <Link to="/about/" className={"book-button"}>
            {"The Orkid Ria Experience ↗"}
          </Link>
        </section>
        <div
          className={"seafood-strip"}
          aria-label={"Seafood and shared plates"}
        >
          <span>{"Crab"}</span>
          <span>{"Whole Fish"}</span>
          <span>{"Prawns"}</span>
          <span>{"Oysters"}</span>
          <span>{"Fried Rice & Shared Plates"}</span>
          <span>{"Seafood to Share"}</span>
        </div>
        <section
          className={"section dining-journey"}
          aria-labelledby={"journey-title"}
        >
          <div className={"journey-heading"}>
            <p className={"eyebrow"}>{"Ordering at Orkid Ria"}</p>
            <h2 className={"section-title"} id={"journey-title"}>
              {"Make the meal your own."}
            </h2>
            <Link to="/menu/" className={"book-button"}>
              {"Explore the Menu ↗"}
            </Link>
          </div>
          <article className={"journey-step"}>
            <div className={"journey-copy"}>
              <span className={"step-number"}>{"01"}</span>
              <strong>{"See what’s available."}</strong>
              <p>
                {
                  "Ask the team about the seafood selection and cooking options."
                }
              </p>
            </div>
            <div className={"journey-photo"}>
              <picture className={"responsive-photo"}>
                <source
                  type={"image/avif"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria1-480.avif 480w, /assets/langkawi-app/orkid-ria1-800.avif 800w, /assets/langkawi-app/orkid-ria1.avif 1015w"
                  }
                  sizes={
                    "(max-width: 760px) max(90vw, 498px), max(60vw, calc(177.758svh - 327.08px), 1067px)"
                  }
                />
                <img
                  alt={"Entrance and reflecting pool at dusk"}
                  decoding={"async"}
                  height={"571"}
                  loading={"lazy"}
                  sizes={
                    "(max-width: 760px) max(90vw, 498px), max(60vw, calc(177.758svh - 327.08px), 1067px)"
                  }
                  src={"/assets/langkawi-app/orkid-ria1.webp"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria1-480.webp 480w, /assets/langkawi-app/orkid-ria1-800.webp 800w, /assets/langkawi-app/orkid-ria1.webp 1015w"
                  }
                  width={"1015"}
                />
              </picture>
            </div>
          </article>
          <article className={"journey-step"}>
            <div className={"journey-copy"}>
              <span className={"step-number"}>{"02"}</span>
              <strong>{"Choose for your table."}</strong>
              <p>{"Share your group size and discuss portions."}</p>
            </div>
            <div className={"journey-photo"}>
              <picture className={"responsive-photo"}>
                <source
                  type={"image/avif"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria2-480.avif 480w, /assets/langkawi-app/orkid-ria2-800.avif 800w, /assets/langkawi-app/orkid-ria2.avif 1015w"
                  }
                  sizes={
                    "(max-width: 760px) max(90vw, 498px), max(60vw, calc(177.758svh - 327.08px), 1067px)"
                  }
                />
                <img
                  alt={"Pavilion dining beside the water"}
                  decoding={"async"}
                  height={"571"}
                  loading={"lazy"}
                  sizes={
                    "(max-width: 760px) max(90vw, 498px), max(60vw, calc(177.758svh - 327.08px), 1067px)"
                  }
                  src={"/assets/langkawi-app/orkid-ria2.webp"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria2-480.webp 480w, /assets/langkawi-app/orkid-ria2-800.webp 800w, /assets/langkawi-app/orkid-ria2.webp 1015w"
                  }
                  width={"1015"}
                />
              </picture>
            </div>
          </article>
          <article className={"journey-step"}>
            <div className={"journey-copy"}>
              <span className={"step-number"}>{"03"}</span>
              <strong>{"Confirm before cooking."}</strong>
              <p>
                {
                  "Agree on seafood weight, preparation and total price before ordering."
                }
              </p>
            </div>
            <div className={"journey-photo"}>
              <picture className={"responsive-photo"}>
                <source
                  type={"image/avif"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria3-480.avif 480w, /assets/langkawi-app/orkid-ria3-800.avif 800w, /assets/langkawi-app/orkid-ria3.avif 1015w"
                  }
                  sizes={
                    "(max-width: 760px) max(90vw, 498px), max(60vw, calc(177.758svh - 327.08px), 1067px)"
                  }
                />
                <img
                  alt={"Lantern-lit terrace at sunset"}
                  decoding={"async"}
                  height={"571"}
                  loading={"lazy"}
                  sizes={
                    "(max-width: 760px) max(90vw, 498px), max(60vw, calc(177.758svh - 327.08px), 1067px)"
                  }
                  src={"/assets/langkawi-app/orkid-ria3.webp"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria3-480.webp 480w, /assets/langkawi-app/orkid-ria3-800.webp 800w, /assets/langkawi-app/orkid-ria3.webp 1015w"
                  }
                  width={"1015"}
                />
              </picture>
            </div>
          </article>
          <article className={"journey-step"}>
            <div className={"journey-copy"}>
              <span className={"step-number"}>{"04"}</span>
              <strong>{"Seafood & Shared Plates"}</strong>
              <p className={"source-note"}>
                {
                  "These photographs show menu highlights, not a full current menu. Please confirm availability, preparation options and prices with the restaurant."
                }
              </p>
            </div>
            <div className={"journey-photo"}>
              <picture className={"responsive-photo"}>
                <source
                  type={"image/avif"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria4-480.avif 480w, /assets/langkawi-app/orkid-ria4-800.avif 800w, /assets/langkawi-app/orkid-ria4.avif 1015w"
                  }
                  sizes={
                    "(max-width: 760px) max(90vw, 498px), max(60vw, calc(177.758svh - 327.08px), 1067px)"
                  }
                />
                <img
                  alt={"Lobster and seafood to share"}
                  decoding={"async"}
                  height={"571"}
                  loading={"lazy"}
                  sizes={
                    "(max-width: 760px) max(90vw, 498px), max(60vw, calc(177.758svh - 327.08px), 1067px)"
                  }
                  src={"/assets/langkawi-app/orkid-ria4.webp"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria4-480.webp 480w, /assets/langkawi-app/orkid-ria4-800.webp 800w, /assets/langkawi-app/orkid-ria4.webp 1015w"
                  }
                  width={"1015"}
                />
              </picture>
            </div>
          </article>
          <article className={"journey-step"}>
            <div className={"journey-copy"}>
              <span className={"step-number"}>{"05"}</span>
              <strong>{"Make it your meal."}</strong>
              <p>
                {
                  "Please discuss allergies and dietary requirements with the team before ordering."
                }
              </p>
            </div>
            <div className={"journey-photo"}>
              <picture className={"responsive-photo"}>
                <source
                  type={"image/avif"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria5-480.avif 480w, /assets/langkawi-app/orkid-ria5-800.avif 800w, /assets/langkawi-app/orkid-ria5.avif 1015w"
                  }
                  sizes={
                    "(max-width: 760px) max(90vw, 498px), max(60vw, calc(177.758svh - 327.08px), 1067px)"
                  }
                />
                <img
                  alt={"The restaurant bar and dining room"}
                  decoding={"async"}
                  height={"571"}
                  loading={"lazy"}
                  sizes={
                    "(max-width: 760px) max(90vw, 498px), max(60vw, calc(177.758svh - 327.08px), 1067px)"
                  }
                  src={"/assets/langkawi-app/orkid-ria5.webp"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria5-480.webp 480w, /assets/langkawi-app/orkid-ria5-800.webp 800w, /assets/langkawi-app/orkid-ria5.webp 1015w"
                  }
                  width={"1015"}
                />
              </picture>
            </div>
          </article>
        </section>
        <aside
          className={"experience-grid section"}
          aria-label={"Explore Orkid Ria"}
          aria-labelledby={"experience-title"}
        >
          <div className={"experience-heading"}>
            <p className={"eyebrow"}>{"Dining Experience"}</p>
            <h2 className={"section-title"} id={"experience-title"}>
              {"A place to gather in Pantai Tengah"}
            </h2>
          </div>
          <Link
            to="/restaurant/"
            aria-label={"The Orkid Ria Experience"}
            className={"feature-card rotating-card"}
          >
            <picture className={"responsive-photo"}>
              <source
                type={"image/avif"}
                srcSet={
                  "/assets/2026/feb-07-480.avif 480w, /assets/2026/feb-07-800.avif 800w, /assets/2026/feb-07-1200.avif 1200w, /assets/2026/feb-07.avif 1400w"
                }
                sizes={
                  "(max-width: 760px) max(90vw, 672px), max(53.1vw, 896px)"
                }
              />
              <img
                alt={""}
                aria-hidden={"true"}
                className={"card-photo is-current"}
                decoding={"async"}
                height={"1000"}
                loading={"lazy"}
                sizes={
                  "(max-width: 760px) max(90vw, 672px), max(53.1vw, 896px)"
                }
                src={"/assets/2026/feb-07.webp"}
                srcSet={
                  "/assets/2026/feb-07-480.webp 480w, /assets/2026/feb-07-800.webp 800w, /assets/2026/feb-07-1200.webp 1200w, /assets/2026/feb-07.webp 1400w"
                }
                width={"1400"}
              />
            </picture>
            <picture className={"responsive-photo"}>
              <source
                type={"image/avif"}
                srcSet={
                  "/assets/langkawi-app/orkid-ria1-480.avif 480w, /assets/langkawi-app/orkid-ria1-800.avif 800w, /assets/langkawi-app/orkid-ria1.avif 1015w"
                }
                sizes={
                  "(max-width: 760px) max(90vw, 854px), max(53.1vw, 1138px)"
                }
              />
              <img
                alt={""}
                aria-hidden={"true"}
                className={"card-photo"}
                decoding={"async"}
                height={"571"}
                loading={"lazy"}
                sizes={
                  "(max-width: 760px) max(90vw, 854px), max(53.1vw, 1138px)"
                }
                src={"/assets/langkawi-app/orkid-ria1.webp"}
                srcSet={
                  "/assets/langkawi-app/orkid-ria1-480.webp 480w, /assets/langkawi-app/orkid-ria1-800.webp 800w, /assets/langkawi-app/orkid-ria1.webp 1015w"
                }
                width={"1015"}
              />
            </picture>
            <picture className={"responsive-photo"}>
              <source
                type={"image/avif"}
                srcSet={
                  "/assets/langkawi-app/orkid-ria2-480.avif 480w, /assets/langkawi-app/orkid-ria2-800.avif 800w, /assets/langkawi-app/orkid-ria2.avif 1015w"
                }
                sizes={
                  "(max-width: 760px) max(90vw, 854px), max(53.1vw, 1138px)"
                }
              />
              <img
                alt={""}
                aria-hidden={"true"}
                className={"card-photo"}
                decoding={"async"}
                height={"571"}
                loading={"lazy"}
                sizes={
                  "(max-width: 760px) max(90vw, 854px), max(53.1vw, 1138px)"
                }
                src={"/assets/langkawi-app/orkid-ria2.webp"}
                srcSet={
                  "/assets/langkawi-app/orkid-ria2-480.webp 480w, /assets/langkawi-app/orkid-ria2-800.webp 800w, /assets/langkawi-app/orkid-ria2.webp 1015w"
                }
                width={"1015"}
              />
            </picture>
            <picture className={"responsive-photo"}>
              <source
                type={"image/avif"}
                srcSet={
                  "/assets/langkawi-app/orkid-ria5-480.avif 480w, /assets/langkawi-app/orkid-ria5-800.avif 800w, /assets/langkawi-app/orkid-ria5.avif 1015w"
                }
                sizes={
                  "(max-width: 760px) max(90vw, 854px), max(53.1vw, 1138px)"
                }
              />
              <img
                alt={""}
                aria-hidden={"true"}
                className={"card-photo"}
                decoding={"async"}
                height={"571"}
                loading={"lazy"}
                sizes={
                  "(max-width: 760px) max(90vw, 854px), max(53.1vw, 1138px)"
                }
                src={"/assets/langkawi-app/orkid-ria5.webp"}
                srcSet={
                  "/assets/langkawi-app/orkid-ria5-480.webp 480w, /assets/langkawi-app/orkid-ria5-800.webp 800w, /assets/langkawi-app/orkid-ria5.webp 1015w"
                }
                width={"1015"}
              />
            </picture>
            <div className={"experience-panel"}>
              <span className={"feature-label"}>
                {"The Orkid Ria Experience"}
              </span>
              <p className={""}>
                {
                  "Walk past the illuminated entrance into a setting of dining pavilions, indoor tables and a water feature. The restaurant’s spaces give you a closer look at Orkid Ria today."
                }
              </p>
              <span className={"book-button"}>{"Dining Experience ↗"}</span>
            </div>
          </Link>
          <div className={"feature-card video-card"}>
            <video
              controls={true}
              muted={true}
              playsInline={true}
              preload={"none"}
              poster={"/assets/restaurant-preview-poster.webp"}
              width={"720"}
              height={"1280"}
              aria-label={"Orkid Ria restaurant video preview"}
            >
              <source
                src={"/assets/Orkid%20Rid%20Preview%20of%20Restaurant.mp4"}
                type={"video/mp4"}
              />
              {"Your browser does not support embedded video. "}
              <a href={"/assets/Orkid%20Rid%20Preview%20of%20Restaurant.mp4"}>
                {"Watch the restaurant preview"}
              </a>
              {"."}
            </video>
          </div>
        </aside>
        <section
          className={"section guest-stories"}
          aria-labelledby={"guest-stories-title"}
        >
          <div className={"guest-stories-heading"}>
            <div>
              <p className={"eyebrow"}>{"From our guests · 22 testimonials"}</p>
              <h2 className={"section-title"} id={"guest-stories-title"}>
                {"Their visits."}
                <br />
                {"Their stories."}
              </h2>
            </div>
            <p>
              {
                "Guest photographs and selected reviews, with additional reviews paired with restaurant photographs. Translated summaries are labeled; follow each review link for the full context."
              }
            </p>
          </div>
          <div
            className={"photo-rail guest-story-rail"}
            tabIndex={0}
            aria-label={"Guest reviews and photographs"}
            aria-live={"off"}
          >
            <article className={"guest-story"}>
              <figure>
                <a
                  className={"guest-story-photo neon-frame"}
                  href={
                    "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1077721918-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                  }
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  aria-label={
                    "View Janine W’s photographs and review on Tripadvisor"
                  }
                >
                  <picture className={"responsive-photo"}>
                    <source
                      type={"image/avif"}
                      srcSet={
                        "/assets/2026/sep-janine-480.avif 480w, /assets/2026/sep-janine-800.avif 800w, /assets/2026/sep-janine-1200.avif 1200w, /assets/2026/sep-janine.avif 1400w"
                      }
                      sizes={"(max-width: 760px) 82vw, 448px"}
                    />
                    <img
                      src={"/assets/2026/sep-janine.webp"}
                      srcSet={
                        "/assets/2026/sep-janine-480.webp 480w, /assets/2026/sep-janine-800.webp 800w, /assets/2026/sep-janine-1200.webp 1200w, /assets/2026/sep-janine.webp 1400w"
                      }
                      sizes={"(max-width: 760px) 82vw, 448px"}
                      width={"1400"}
                      height={"1000"}
                      alt={
                        "Visitor photograph shared with Janine W’s Tripadvisor review"
                      }
                      loading={"lazy"}
                      decoding={"async"}
                    />
                  </picture>
                </a>
                <figcaption>{"Photo: Janine W · Tripadvisor"}</figcaption>
              </figure>
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1077721918-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {
                  "“We had a wonderful evening at Orkid Ria Seafood Restaurant.”"
                }
              </blockquote>
              <p className={"guest-attribution"}>
                {"Janine W "}
                <span>
                  {"· "}
                  <time dateTime={"2026-09-14"}>{"14 September 2026"}</time>
                </span>
              </p>
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1077721918-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
            </article>
            <article className={"guest-story"}>
              <figure>
                <a
                  className={"guest-story-photo neon-frame"}
                  href={
                    "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1045098689-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                  }
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  aria-label={
                    "View Oana M’s photographs and review on Tripadvisor"
                  }
                >
                  <picture className={"responsive-photo"}>
                    <source
                      type={"image/avif"}
                      srcSet={
                        "/assets/gallery/32-23-a9-39-480.avif 480w, /assets/gallery/32-23-a9-39-800.avif 800w, /assets/gallery/32-23-a9-39.avif 1200w"
                      }
                      sizes={"(max-width: 760px) 82vw, 448px"}
                    />
                    <img
                      src={"/assets/gallery/32-23-a9-39.webp"}
                      srcSet={
                        "/assets/gallery/32-23-a9-39-480.webp 480w, /assets/gallery/32-23-a9-39-800.webp 800w, /assets/gallery/32-23-a9-39.webp 1200w"
                      }
                      sizes={"(max-width: 760px) 82vw, 448px"}
                      width={"1200"}
                      height={"1000"}
                      alt={
                        "Visitor photograph shared with Oana M’s Tripadvisor review"
                      }
                      loading={"lazy"}
                      decoding={"async"}
                    />
                  </picture>
                </a>
                <figcaption>{"Photo: Oana M · Tripadvisor"}</figcaption>
              </figure>
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1045098689-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“The food was amazing!”"}
              </blockquote>
              <p className={"guest-attribution"}>
                {"Oana M "}
                <span>
                  {"· "}
                  <time dateTime={"2026-01-06"}>{"6 January 2026"}</time>
                </span>
              </p>
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1045098689-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
            </article>
            <article className={"guest-story"}>
              <figure>
                <a
                  className={"guest-story-photo neon-frame"}
                  href={
                    "https://www.tripadvisor.ca/Restaurant_Review-g26498275-d32829545-Reviews-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                  }
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  aria-label={
                    "View Rene R’s photographs and review on Tripadvisor"
                  }
                >
                  <picture className={"responsive-photo"}>
                    <source
                      type={"image/avif"}
                      srcSet={
                        "/assets/gallery/32-5c-64-aa-480.avif 480w, /assets/gallery/32-5c-64-aa-800.avif 800w, /assets/gallery/32-5c-64-aa.avif 1120w"
                      }
                      sizes={"(max-width: 760px) 82vw, 448px"}
                    />
                    <img
                      src={"/assets/gallery/32-5c-64-aa.webp"}
                      srcSet={
                        "/assets/gallery/32-5c-64-aa-480.webp 480w, /assets/gallery/32-5c-64-aa-800.webp 800w, /assets/gallery/32-5c-64-aa.webp 1120w"
                      }
                      sizes={"(max-width: 760px) 82vw, 448px"}
                      width={"1120"}
                      height={"840"}
                      alt={
                        "Visitor photograph shared with Rene R’s Tripadvisor review"
                      }
                      loading={"lazy"}
                      decoding={"async"}
                    />
                  </picture>
                </a>
                <figcaption>{"Photo: Rene R · Tripadvisor"}</figcaption>
              </figure>
              <h3>{"Through a visitor’s lens."}</h3>
              <p>
                {
                  "Explore traveller photographs of the restaurant and shared meals."
                }
              </p>
              <p className={"guest-attribution"}>
                {"Rene R "}
                <span>
                  {"· "}
                  <time dateTime={"2026-02-03"}>{"3 February 2026"}</time>
                </span>
              </p>
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/Restaurant_Review-g26498275-d32829545-Reviews-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"View visitor photographs on Tripadvisor ↗"}
              </a>
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1079947317"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment6.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment6.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Dining pavilion beside the reflecting pool at night"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1079947317-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“Try the fried squid and green chicken curry - AMAZING!”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"Monique T "}
                <span>
                  {"· "}
                  <time dateTime={"2026-09"}>{"Published September 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1079947317-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1074421437"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment7.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment7.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Waterside dining tables and lanterns at Orkid Ria"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Translated review summary · Dutch"}
              </p>
              {"\n"}
              <p className={"guest-review-summary"}>
                {
                  "Mike M praised the restaurant’s attractive setting and welcoming atmosphere."
                }
              </p>
              {"\n"}
              <p className={"guest-attribution"}>
                {"Mike M "}
                <span>
                  {"· "}
                  <time dateTime={"2026-08"}>{"Published August 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1074421437-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1082261146"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment1.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment1.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Guests dining beneath pendant lights at Orkid Ria"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1082261146-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“Service was fast and efficient. Food was excellent.”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"drzulkarnain1969 "}
                <span>
                  {"· "}
                  <time dateTime={"2026-10"}>{"Published October 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1082261146-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1054642070"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment5.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment5.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Outdoor dining tables at Orkid Ria at night"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1054642070-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“All in all a great restaurant.”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"Reacher666 "}
                <span>
                  {"· "}
                  <time dateTime={"2026-03"}>{"Published March 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1054642070-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1046756619"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment3.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment3.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Bar counter and illuminated shelving at Orkid Ria"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Translated review summary · Russian"}
              </p>
              {"\n"}
              <p className={"guest-review-summary"}>
                {"Светлана Л praised the fresh seafood and attentive service."}
              </p>
              {"\n"}
              <p className={"guest-attribution"}>
                {"Светлана Л "}
                <span>
                  {"· "}
                  <time dateTime={"2026-01"}>{"Published January 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1046756619-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1047585879"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment2.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment2.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Live seafood tanks inside Orkid Ria"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1047585879-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“Portions are generous.”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"suttung "}
                <span>
                  {"· "}
                  <time dateTime={"2026-01"}>{"Published January 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1047585879-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1053593662"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment4.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment4.webp 382w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"382"}
                    height={"510"}
                    alt={
                      "Pendant lights beneath the dining pavilion roof at Orkid Ria"
                    }
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1053593662-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“Delicious choice of Chinese and seafood dishes.”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"Liam S "}
                <span>
                  {"· "}
                  <time dateTime={"2026-03"}>{"Published March 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1053593662-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1059742979"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment6.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment6.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Dining pavilion beside the reflecting pool at night"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1059742979-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“Fantastic food and service”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"I D "}
                <span>
                  {"· "}
                  <time dateTime={"2026-05"}>{"Published May 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1059742979-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1055774663"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment7.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment7.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Waterside dining tables and lanterns at Orkid Ria"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1055774663-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“Had amazing food and top class service”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"StuartCraig "}
                <span>
                  {"· "}
                  <time dateTime={"2026-04"}>{"Published April 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1055774663-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1054503643"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment1.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment1.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Guests dining beneath pendant lights at Orkid Ria"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1054503643-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“it was the best food by far”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"Ruth F "}
                <span>
                  {"· "}
                  <time dateTime={"2026-03"}>{"Published March 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1054503643-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1054469006"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment5.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment5.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Outdoor dining tables at Orkid Ria at night"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1054469006-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“Delightful food, lovely atmosphere”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"RKDaveytravel "}
                <span>
                  {"· "}
                  <time dateTime={"2026-03"}>{"Published March 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1054469006-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1053323224"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment3.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment3.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Bar counter and illuminated shelving at Orkid Ria"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1053323224-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“It was the best sea food experience I ever had.”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"Emre K "}
                <span>
                  {"· "}
                  <time dateTime={"2026-03"}>{"Published March 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1053323224-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1051639073"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment2.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment2.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Live seafood tanks inside Orkid Ria"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1051639073-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“Beautiful air con restaurant, good food fair prices.”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"ffort "}
                <span>
                  {"· "}
                  <time dateTime={"2026-03"}>{"Published March 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1051639073-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1048032174"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment4.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment4.webp 382w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"382"}
                    height={"510"}
                    alt={
                      "Pendant lights beneath the dining pavilion roof at Orkid Ria"
                    }
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Translated review summary · French"}
              </p>
              {"\n"}
              <p className={"guest-review-summary"}>
                {"The reviewer recommended the restaurant’s setting and food."}
              </p>
              {"\n"}
              <p className={"guest-attribution"}>
                {"fernandorH7952NT "}
                <span>
                  {"· "}
                  <time dateTime={"2026-01"}>{"Published January 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1048032174-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1045688711"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment6.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment6.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Dining pavilion beside the reflecting pool at night"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1045688711-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“A nice dinner was spent here.”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"uzmelissa "}
                <span>
                  {"· "}
                  <time dateTime={"2026-01"}>{"Published January 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1045688711-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1073073890"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment7.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment7.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Waterside dining tables and lanterns at Orkid Ria"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1073073890-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“Seafood excellent from fried crabs to seabass”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"alberto201011 "}
                <span>
                  {"· "}
                  <time dateTime={"2026-08"}>{"Published August 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1073073890-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1072160777"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment1.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment1.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Guests dining beneath pendant lights at Orkid Ria"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1072160777-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“Prompt service! Excellent food, drinks & attentive staff.”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"Dolly D "}
                <span>
                  {"· "}
                  <time dateTime={"2026-08"}>{"Published August 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1072160777-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1084192727"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment5.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment5.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Outdoor dining tables at Orkid Ria at night"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1084192727-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {"“Staff so helpful & attentive.”"}
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"Christine "}
                <span>
                  {"· "}
                  <time dateTime={"2026-11"}>{"Published November 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1084192727-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1081257930"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment3.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment3.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Bar counter and illuminated shelving at Orkid Ria"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Guest review · Tripadvisor"}
              </p>
              {"\n"}
              <blockquote
                cite={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1081257930-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
              >
                {
                  "“Wanted somewhere nice to eat and this exceeded our expectations.”"
                }
              </blockquote>
              {"\n"}
              <p className={"guest-attribution"}>
                {"MisBubble "}
                <span>
                  {"· "}
                  <time dateTime={"2026-10"}>{"Published October 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1081257930-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
            {"\n"}
            <article className={"guest-story"} data-review-id={"1065193349"}>
              {"\n"}
              <figure>
                <picture className={"responsive-photo guest-story-photo"}>
                  <img
                    src={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment2.webp"
                    }
                    srcSet={
                      "/assets/environment/Orkid%20Ria%20Seafood%20Environment2.webp 680w"
                    }
                    sizes={"(max-width: 760px) 82vw, 448px"}
                    width={"680"}
                    height={"510"}
                    alt={"Live seafood tanks inside Orkid Ria"}
                    loading={"lazy"}
                    decoding={"async"}
                  />
                </picture>
                <figcaption>
                  {"Restaurant photograph · illustrative"}
                </figcaption>
              </figure>
              {"\n"}
              <p className={"guest-review-label"}>
                {"Translated review summary · Portuguese"}
              </p>
              {"\n"}
              <p className={"guest-review-summary"}>
                {
                  "João R returned three times and praised the food and service."
                }
              </p>
              {"\n"}
              <p className={"guest-attribution"}>
                {"João R "}
                <span>
                  {"· "}
                  <time dateTime={"2026-06"}>{"Published June 2026"}</time>
                </span>
              </p>
              {"\n"}
              <a
                className={"guest-source-link"}
                href={
                  "https://www.tripadvisor.ca/ShowUserReviews-g26498275-d32829545-r1065193349-Orkid_Ria_Seafood_Restaurant-Kedawang_Langkawi_District_Kedah.html"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Read the full review on Tripadvisor ↗"}
              </a>
              {"\n"}
            </article>
          </div>
          <div className={"rail-controls"}>
            <button
              type={"button"}
              data-rail-direction={"-1"}
              aria-label={"Previous guest stories"}
            >
              {"←"}
            </button>
            <button
              type={"button"}
              data-rail-direction={"1"}
              aria-label={"Next guest stories"}
            >
              {"→"}
            </button>
          </div>
        </section>
        <section className={"editorial-scene"}>
          <figure className={"story-image"}>
            <picture className={"responsive-photo"}>
              <source
                type={"image/avif"}
                srcSet={
                  "/assets/2026/feb-08-480.avif 480w, /assets/2026/feb-08-800.avif 800w, /assets/2026/feb-08-1200.avif 1200w, /assets/2026/feb-08.avif 1400w"
                }
                sizes={
                  "(max-width: 760px) max(100vw, 896px), max(100vw, 1120px)"
                }
              />
              <img
                alt={"Dining pavilion beside the water at Orkid Ria"}
                decoding={"async"}
                height={"1000"}
                loading={"lazy"}
                sizes={
                  "(max-width: 760px) max(100vw, 896px), max(100vw, 1120px)"
                }
                src={"/assets/2026/feb-08.webp"}
                srcSet={
                  "/assets/2026/feb-08-480.webp 480w, /assets/2026/feb-08-800.webp 800w, /assets/2026/feb-08-1200.webp 1200w, /assets/2026/feb-08.webp 1400w"
                }
                width={"1400"}
              />
            </picture>
          </figure>
          <div className={"editorial-panel"}>
            <h2>
              {"By the water."}
              <br />
              {"Around the table."}
            </h2>
            <p>
              {
                "Come for a meal with family or friends, from an afternoon gathering to dinner as the lights come on around the water."
              }
            </p>
            <Link to="/about/" className={"book-button"}>
              {"Dining Experience ↗"}
            </Link>
          </div>
        </section>
        <section
          aria-busy={"true"}
          aria-labelledby={"reviews-title"}
          className={"google-reviews"}
          data-google-reviews={""}
          hidden={true}
          id={"google-reviews"}
        >
          {"\n"}
          <div className={"reviews-heading"}>
            <div>
              <p className={"eyebrow"}>{"From our guests · Google reviews"}</p>
              <h2 className={"section-title"} id={"reviews-title"}>
                {"Around the table."}
              </h2>
              <p className={"reviews-summary"} data-review-summary={""}></p>
            </div>
            <a
              className={"review-google-link"}
              data-review-google={""}
              hidden={true}
              rel={"noopener noreferrer"}
              target={"_blank"}
            >
              {"View on Google ↗"}
            </a>
          </div>
          {"\n"}
          <div className={"reviews-grid"} data-review-list={""}></div>
          {"\n"}
          <p
            aria-live={"polite"}
            className={"reviews-status"}
            data-review-status={""}
            role={"status"}
          >
            {"Loading Google reviews…"}
          </p>
          {"\n"}
          <div className={"reviews-actions"}>
            <button data-review-more={""} hidden={true} type={"button"}>
              {"Load more"}
            </button>
            <button data-review-retry={""} hidden={true} type={"button"}>
              {"Try again"}
            </button>
          </div>
          {"\n"}
          <noscript>
            <p>{"Enable JavaScript to load Google reviews."}</p>
          </noscript>
          {"\n"}
        </section>
        <section className={"section home-faq"} id={"plan-your-visit"}>
          <div className={"faq-intro"}>
            <p className={"eyebrow"}>{"Plan your visit"}</p>
            <h2 className={"section-title"}>{"Before you get in touch."}</h2>
            <p>
              {
                "Call or WhatsApp our team with your date, preferred time and number of guests to check availability."
              }
            </p>
            <Link to="/reservation/" className={"book-button"}>
              {"Contact us ↗"}
            </Link>
          </div>
          <div className={"faq-list"}>
            <details className={"faq-row"}>
              <summary>
                <span>{"01"}</span>
                {"Where is Orkid Ria now?"}
              </summary>
              <div className={"faq-answer"}>
                {
                  "Our current restaurant is at Lot 418, Jalan Pantai Tengah, Langkawi. Older travel guides describe our former Pantai Cenang location. Use our "
                }
                <a
                  href={"https://maps.app.goo.gl/AVcjjYDYoPyyYBx16"}
                  rel={"noopener noreferrer"}
                  target={"_blank"}
                >
                  {"current Google Maps directions"}
                </a>
                {" for your journey, and visit "}
                <Link to="/about/">{"our story page"}</Link>
                {" for the earlier chapter."}
              </div>
            </details>
            <details className={"faq-row"}>
              <summary>
                <span>{"02"}</span>
                {"What time do you open?"}
              </summary>
              <div className={"faq-answer"}>
                {
                  "We’re open every day from 1:00 pm to 11:00 pm. If you are planning a late arrival or a visit on a public holiday, "
                }
                <a href={"tel:+60176144128"}>{"call +60 17-614 4128"}</a>
                {" to check arrangements with the team."}
              </div>
            </details>
            <details className={"faq-row"}>
              <summary>
                <span>{"03"}</span>
                {"How do I request a table?"}
              </summary>
              <div className={"faq-answer"}>
                {
                  "Contact us with your preferred date, time and number of guests. A phone or WhatsApp enquiry is a request; please wait for the restaurant to confirm your table. "
                }
                <Link to="/reservation/">
                  {"See contact and reservation details"}
                </Link>
                {"."}
              </div>
            </details>
            <details className={"faq-row"}>
              <summary>
                <span>{"04"}</span>
                {"Where can I see the menu?"}
              </summary>
              <div className={"faq-answer"}>
                {
                  "These photographs show menu highlights, not a full current menu. Please confirm availability, preparation options and prices with the restaurant."
                }
              </div>
            </details>
            <details className={"faq-row"}>
              <summary>
                <span>{"05"}</span>
                {"How do I confirm the price?"}
              </summary>
              <div className={"faq-answer"}>
                {
                  "Agree on seafood weight, preparation and total price before ordering."
                }
              </div>
            </details>
            <details className={"faq-row"}>
              <summary>
                <span>{"06"}</span>
                {"What if I have a food allergy?"}
              </summary>
              <div className={"faq-answer"}>
                {
                  "Please discuss allergies and dietary requirements with the team before ordering."
                }
              </div>
            </details>
            <details className={"faq-row"}>
              <summary>
                <span>{"07"}</span>
                {"Can I plan a group meal?"}
              </summary>
              <div className={"faq-answer"}>
                {
                  "Planning for a group? Share your date, preferred time and number of guests so we can discuss availability. Please wait for the team to confirm your table."
                }
              </div>
            </details>
            <details className={"faq-row"}>
              <summary>
                <span>{"08"}</span>
                {"How do I choose my seafood?"}
              </summary>
              <div className={"faq-answer"}>
                {
                  "Start with the seafood selection and a conversation with our team. Ask what is available, discuss how you would like it cooked, and confirm the weight and price before ordering."
                }
              </div>
            </details>
            <details className={"faq-row"}>
              <summary>
                <span>{"09"}</span>
                {"What is the dining setting like?"}
              </summary>
              <div className={"faq-answer"}>
                {
                  "Walk past the illuminated entrance into a setting of dining pavilions, indoor tables and a water feature. The restaurant’s spaces give you a closer look at Orkid Ria today."
                }
              </div>
            </details>
            <details className={"faq-row"}>
              <summary>
                <span>{"10"}</span>
                {"Is a message a confirmed reservation?"}
              </summary>
              <div className={"faq-answer"}>
                {
                  "A message is a table request. Your reservation is confirmed only when the restaurant confirms it."
                }
              </div>
            </details>
            <details className={"faq-row"}>
              <summary>
                <span>{"11"}</span>
                {"Where can I find directions?"}
              </summary>
              <div className={"faq-answer"}>
                <Link to="/restaurant/">{"Get directions"}</Link>
                {" · "}
                <a
                  href={"https://maps.app.goo.gl/AVcjjYDYoPyyYBx16"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  {"Open in Google Maps ↗"}
                </a>
              </div>
            </details>
            <details className={"faq-row"}>
              <summary>
                <span>{"12"}</span>
                {"Where can I read the restaurant’s story?"}
              </summary>
              <div className={"faq-answer"}>
                <Link to="/about/">{"Langkawi Roots. A Place to Gather."}</Link>
              </div>
            </details>
          </div>
        </section>
        <section className={"section home-gallery"}>
          <h2 className={"section-title"}>
            {"By the water. Around the table."}
            <br />
            {"A closer look at your next visit."}
          </h2>
          <div className={"rail-controls"}>
            <button
              type={"button"}
              data-rail-direction={"-1"}
              aria-label={"Previous restaurant photographs"}
            >
              {"←"}
            </button>
            <button
              type={"button"}
              data-rail-direction={"1"}
              aria-label={"Next restaurant photographs"}
            >
              {"→"}
            </button>
          </div>
          <div
            className={"photo-rail gallery-rail"}
            tabIndex={0}
            aria-label={"Restaurant gallery"}
          >
            <figure className={"gallery-item"}>
              <a
                aria-label={
                  "View full-size photo: Entrance and reflecting pool at dusk"
                }
                href={"/assets/langkawi-app/orkid-ria1.jpg"}
                rel={"noopener"}
                target={"_blank"}
                className={"neon-frame"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria1-480.avif 480w, /assets/langkawi-app/orkid-ria1-800.avif 800w, /assets/langkawi-app/orkid-ria1.avif 1015w"
                    }
                    sizes={
                      "(max-width: 760px) max(85vw, 676px), max(960px, 1138px)"
                    }
                  />
                  <img
                    alt={"Entrance and reflecting pool at dusk"}
                    decoding={"async"}
                    height={"571"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 760px) max(85vw, 676px), max(960px, 1138px)"
                    }
                    src={"/assets/langkawi-app/orkid-ria1.webp"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria1-480.webp 480w, /assets/langkawi-app/orkid-ria1-800.webp 800w, /assets/langkawi-app/orkid-ria1.webp 1015w"
                    }
                    width={"1015"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Entrance and reflecting pool at dusk"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={
                  "View full-size photo: Pavilion dining beside the water"
                }
                href={"/assets/langkawi-app/orkid-ria2.jpg"}
                rel={"noopener"}
                target={"_blank"}
                className={"neon-frame"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria2-480.avif 480w, /assets/langkawi-app/orkid-ria2-800.avif 800w, /assets/langkawi-app/orkid-ria2.avif 1015w"
                    }
                    sizes={
                      "(max-width: 760px) max(60vw, 676px), max(400px, 1138px)"
                    }
                  />
                  <img
                    alt={"Pavilion dining beside the water"}
                    decoding={"async"}
                    height={"571"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 760px) max(60vw, 676px), max(400px, 1138px)"
                    }
                    src={"/assets/langkawi-app/orkid-ria2.webp"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria2-480.webp 480w, /assets/langkawi-app/orkid-ria2-800.webp 800w, /assets/langkawi-app/orkid-ria2.webp 1015w"
                    }
                    width={"1015"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Pavilion dining beside the water"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={
                  "View full-size photo: Lantern-lit terrace at sunset"
                }
                href={"/assets/langkawi-app/orkid-ria3.jpg"}
                rel={"noopener"}
                target={"_blank"}
                className={"neon-frame"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria3-480.avif 480w, /assets/langkawi-app/orkid-ria3-800.avif 800w, /assets/langkawi-app/orkid-ria3.avif 1015w"
                    }
                    sizes={
                      "(max-width: 760px) max(85vw, 676px), max(960px, 1138px)"
                    }
                  />
                  <img
                    alt={"Lantern-lit terrace at sunset"}
                    decoding={"async"}
                    height={"571"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 760px) max(85vw, 676px), max(960px, 1138px)"
                    }
                    src={"/assets/langkawi-app/orkid-ria3.webp"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria3-480.webp 480w, /assets/langkawi-app/orkid-ria3-800.webp 800w, /assets/langkawi-app/orkid-ria3.webp 1015w"
                    }
                    width={"1015"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Lantern-lit terrace at sunset"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={
                  "View full-size photo: Lobster and seafood to share"
                }
                href={"/assets/langkawi-app/orkid-ria4.jpg"}
                rel={"noopener"}
                target={"_blank"}
                className={"neon-frame"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria4-480.avif 480w, /assets/langkawi-app/orkid-ria4-800.avif 800w, /assets/langkawi-app/orkid-ria4.avif 1015w"
                    }
                    sizes={
                      "(max-width: 760px) max(60vw, 676px), max(400px, 1138px)"
                    }
                  />
                  <img
                    alt={"Lobster and seafood to share"}
                    decoding={"async"}
                    height={"571"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 760px) max(60vw, 676px), max(400px, 1138px)"
                    }
                    src={"/assets/langkawi-app/orkid-ria4.webp"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria4-480.webp 480w, /assets/langkawi-app/orkid-ria4-800.webp 800w, /assets/langkawi-app/orkid-ria4.webp 1015w"
                    }
                    width={"1015"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Lobster and seafood to share"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={
                  "View full-size photo: The restaurant bar and dining room"
                }
                href={"/assets/langkawi-app/orkid-ria5.jpg"}
                rel={"noopener"}
                target={"_blank"}
                className={"neon-frame"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria5-480.avif 480w, /assets/langkawi-app/orkid-ria5-800.avif 800w, /assets/langkawi-app/orkid-ria5.avif 1015w"
                    }
                    sizes={
                      "(max-width: 760px) max(85vw, 676px), max(960px, 1138px)"
                    }
                  />
                  <img
                    alt={"The restaurant bar and dining room"}
                    decoding={"async"}
                    height={"571"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 760px) max(85vw, 676px), max(960px, 1138px)"
                    }
                    src={"/assets/langkawi-app/orkid-ria5.webp"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria5-480.webp 480w, /assets/langkawi-app/orkid-ria5-800.webp 800w, /assets/langkawi-app/orkid-ria5.webp 1015w"
                    }
                    width={"1015"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"The restaurant bar and dining room"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Dining beside the water"}
                href={"/assets/2026/feb-08.jpg"}
                rel={"noopener"}
                target={"_blank"}
                className={"neon-frame"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/2026/feb-08-480.avif 480w, /assets/2026/feb-08-800.avif 800w, /assets/2026/feb-08-1200.avif 1200w, /assets/2026/feb-08.avif 1400w"
                    }
                    sizes={
                      "(max-width: 760px) max(60vw, 532px), max(400px, 896px)"
                    }
                  />
                  <img
                    alt={
                      "Dining beside the water at Orkid Ria Seafood Restaurant"
                    }
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 760px) max(60vw, 532px), max(400px, 896px)"
                    }
                    src={"/assets/2026/feb-08.webp"}
                    srcSet={
                      "/assets/2026/feb-08-480.webp 480w, /assets/2026/feb-08-800.webp 800w, /assets/2026/feb-08-1200.webp 1200w, /assets/2026/feb-08.webp 1400w"
                    }
                    width={"1400"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Dining beside the water"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Crab served with vegetables"}
                href={"/assets/2026/feb-0c.jpg"}
                rel={"noopener"}
                target={"_blank"}
                className={"neon-frame"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/2026/feb-0c-480.avif 480w, /assets/2026/feb-0c-800.avif 800w, /assets/2026/feb-0c-1200.avif 1200w, /assets/2026/feb-0c.avif 1400w"
                    }
                    sizes={
                      "(max-width: 760px) max(85vw, 532px), max(960px, 896px)"
                    }
                  />
                  <img
                    alt={"Crab served with vegetables"}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 760px) max(85vw, 532px), max(960px, 896px)"
                    }
                    src={"/assets/2026/feb-0c.webp"}
                    srcSet={
                      "/assets/2026/feb-0c-480.webp 480w, /assets/2026/feb-0c-800.webp 800w, /assets/2026/feb-0c-1200.webp 1200w, /assets/2026/feb-0c.webp 1400w"
                    }
                    width={"1400"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Crab served with vegetables"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Seafood and shared plates"}
                href={"/assets/2026/feb-0a.jpg"}
                rel={"noopener"}
                target={"_blank"}
                className={"neon-frame"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/2026/feb-0a-480.avif 480w, /assets/2026/feb-0a-800.avif 800w, /assets/2026/feb-0a-1200.avif 1200w, /assets/2026/feb-0a.avif 1400w"
                    }
                    sizes={
                      "(max-width: 760px) max(60vw, 532px), max(400px, 896px)"
                    }
                  />
                  <img
                    alt={
                      "Seafood and shared plates at Orkid Ria Seafood Restaurant"
                    }
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 760px) max(60vw, 532px), max(400px, 896px)"
                    }
                    src={"/assets/2026/feb-0a.webp"}
                    srcSet={
                      "/assets/2026/feb-0a-480.webp 480w, /assets/2026/feb-0a-800.webp 800w, /assets/2026/feb-0a-1200.webp 1200w, /assets/2026/feb-0a.webp 1400w"
                    }
                    width={"1400"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Seafood and shared plates"}</figcaption>
            </figure>
          </div>
        </section>
        <section className={"section closing-cta"}>
          <p className={"eyebrow"}>{"Reservations"}</p>
          <h2 className={"section-title"}>
            {"Let’s Plan"}
            <br />
            {"Your Table."}
          </h2>
          <Link to="/reservation/" className={"book-button"}>
            {"Plan Your Visit ↗"}
          </Link>
        </section>
      </main>
      <footer className={"footer"}>
        <div className={"footer-grid"}>
          <div className={"footer-brand"}>
            <img
              src={"/assets/Orkid%20Rid%20Logo.png"}
              alt={""}
              width={"1755"}
              height={"1805"}
            />
            <span>{"ORKID RIA"}</span>
          </div>
          <div>
            <h3>{"Explore"}</h3>
            <nav>
              <Link to="/">{"Home"}</Link>
              <Link to="/menu/">{"Menu"}</Link>
              <Link to="/about/">{"Dining Experience"}</Link>
              <Link to="/restaurant/">{"Visit"}</Link>
              <Link to="/reservation/">{"Reservations"}</Link>
            </nav>
          </div>
          <div>
            <h3>{"Contact"}</h3>
            <p>
              {"+60 17-614 4128"}
              <br />
              {"Daily, 1:00 pm - 11:00 pm"}
            </p>
          </div>
        </div>
        <section
          className={"footer-contact"}
          aria-label={"Contact and opening hours"}
        >
          <div className={"contact-cta"}>
            <a
              className={"book-button primary call-cta neon-frame"}
              href={"tel:+60176144128"}
            >
              <span>{"Call the Restaurant"}</span>
              <span className={"cta-number"}>{"+60 17-614 4128"}</span>
            </a>
            <a
              className={"whatsapp-cta neon-frame"}
              href={"https://wa.me/60176144128"}
              rel={"noopener noreferrer"}
              target={"_blank"}
            >
              {"WhatsApp us "}
              <span aria-hidden={"true"}>{"↗"}</span>
            </a>
          </div>
          <section className={"hours"}>
            <p className={"hours-title"}>{"Opening Hours"}</p>
            <div className={"hours-row"}>
              <span>{"Monday - Sunday"}</span>
              <span className={"dots"}></span>
              <span>{"1:00 pm"}</span>
            </div>
            <div className={"hours-row"}>
              <span>{"Closing time"}</span>
              <span className={"dots"}></span>
              <span>{"11:00 pm"}</span>
            </div>
            <div className={"social-row"}>
              <a href={"tel:+60176144128"}>{"+60 17-614 4128"}</a>
              <span>{"·"}</span>
              <Link to="/restaurant/">{"Get Directions"}</Link>
            </div>
          </section>
          <div className={"info-card"}>
            <h3>{"Your table in Pantai Tengah"}</h3>
            <p>{"Open daily, 1:00 pm–11:00 pm."}</p>
            <p>{"Find us at Lot 418, Jalan Pantai Tengah."}</p>
            <p>
              <Link to="/restaurant/">{"Get directions"}</Link>
              {" · "}
              <a href={"tel:+60176144128"}>{"Call the restaurant"}</a>
            </p>
          </div>
          <div className={"journey-contact"}>
            <div className={"contact-actions"}>
              <a
                className={"book-button primary neon-frame"}
                href={"tel:+60176144128"}
              >
                {"Call the restaurant"}
              </a>
              <a
                className={"whatsapp-cta neon-frame"}
                href={
                  "https://wa.me/60176144128?text=Hello%20Orkid%20Ria%2C%20I%20would%20like%20to%20ask%20about%20a%20table.%20Date%3A%20%20Time%3A%20%20Guests%3A%20"
                }
                rel={"noopener noreferrer"}
                target={"_blank"}
              >
                {"WhatsApp us "}
                <span aria-hidden={"true"}>{"↗"}</span>
              </a>
            </div>
            <p>
              <Link to="/restaurant/">
                {"Find our Pantai Tengah restaurant"}
              </Link>
              {"."}
            </p>
          </div>
        </section>
        <div className={"copyright"}>
          {"Orkid Ria Seafood Restaurant, Langkawi."}
        </div>
        <div className={"footer-bottom"}>
          <div className={"footer-location"}>
            <address className={"business-address"}>
              <strong>{"Orkid Ria Seafood Restaurant"}</strong>
              <br />
              {
                "Lot 418, Jalan Pantai Tengah, Jalan Teluk Baru, Mukim Kedawang,"
              }
              <br />
              {"07100 Langkawi, Kedah, Malaysia · "}
              <a href={"tel:+60176144128"}>{"+60 17-614 4128"}</a>
            </address>
            <nav
              aria-label={"Find Orkid Ria online"}
              className={"social-links"}
            >
              <a
                href={
                  "https://www.facebook.com/pages/Orkid-Ria-Seafood-Restaurant/162433680476359"
                }
                rel={"noopener noreferrer"}
                target={"_blank"}
              >
                {"Facebook ↗"}
              </a>
              <a
                href={"https://maps.app.goo.gl/AVcjjYDYoPyyYBx16"}
                rel={"noopener noreferrer"}
                target={"_blank"}
              >
                {"Google Maps ↗"}
              </a>
            </nav>
          </div>
          <div
            className={"footer-discovery"}
            role={"group"}
            aria-label={"Find us on Langkawi App and Google"}
          >
            {"\n"}
            <a
              className={"langkawi-badge neon-frame"}
              href={
                "https://langkawi.app/business/orkid-ria-seafood-restaurant"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
              aria-label={"Find Orkid Ria on Langkawi App (opens in a new tab)"}
            >
              <span className={"langkawi-badge-icon"}>
                <img
                  src={"/assets/langkawi-app-logo.webp"}
                  srcSet={"/assets/langkawi-app-logo.webp 112w"}
                  sizes={"34px"}
                  alt={""}
                  width={"34"}
                  height={"34"}
                  loading={"lazy"}
                  decoding={"async"}
                />
              </span>
              <span className={"langkawi-badge-copy"}>
                <span>{"Find us on"}</span>
                <strong>{"Langkawi App"}</strong>
              </span>
              <span className={"langkawi-badge-arrow"} aria-hidden={"true"}>
                {"↗"}
              </span>
            </a>
            {"\n"}
            <a
              className={"preferred-source neon-frame"}
              href={"https://www.google.com/preferences/source?q=langkawi.app"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <img
                src={"/assets/google-preferred-source-en.png"}
                srcSet={"/assets/google-preferred-source-en.png 676w"}
                sizes={"220px"}
                alt={
                  "Add Langkawi.app as a preferred source on Google (opens in a new tab)"
                }
                width={"676"}
                height={"213"}
                loading={"lazy"}
                decoding={"async"}
              />
            </a>
            {"\n"}
          </div>
        </div>
        <div className={"site-info"}>
          <span>
            {
              "© 2026 Orkid Ria Seafood Restaurant, Langkawi. All rights reserved."
            }
          </span>
          <span>
            {"Supported by "}
            <a href={"https://novamas.online"}>{"Novamas"}</a>
          </span>
          <span>{"Release 261104.01 (Early Release)"}</span>
        </div>
      </footer>
      {"\n\n"}
      {"\n"}
      {"\n\n\n\n\n\n\n\n"}
    </>
  );
}
