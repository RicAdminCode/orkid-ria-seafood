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
          <Link to="/menu/" aria-current={"page"} className={"nav-link active"}>
            {"Menu"}
          </Link>
          <Link to="/reservation/" className={"nav-link nav-reserve"}>
            {"Reservations"}
          </Link>
          <Link to="/about/" className={"nav-link"}>
            {"Dining Experience"}
          </Link>
          <Link to="/restaurant/" className={"nav-link nav-visit"}>
            {"Visit"}
          </Link>
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
      </header>
      {"\n"}
      <main className={"inner-page"} id={"main"}>
        <nav aria-label={"Breadcrumb"} className={"breadcrumbs"}>
          <Link to="/">{"Home"}</Link>
          <span aria-hidden={"true"}>{" / "}</span>
          <span aria-current={"page"}>{"Menu"}</span>
        </nav>
        <section className={"split-hero"}>
          <div className={"image-hero"}>
            <picture className={"responsive-photo"}>
              <source
                type={"image/avif"}
                srcSet={
                  "/assets/2026/feb-0c-480.avif 480w, /assets/2026/feb-0c-800.avif 800w, /assets/2026/feb-0c-1200.avif 1200w, /assets/2026/feb-0c.avif 1400w"
                }
                sizes={"(max-width: 760px) max(90vw, 532px), max(45vw, 840px)"}
              />
              <img
                alt={"Crab served with vegetables"}
                decoding={"async"}
                fetchPriority={"high"}
                height={"1000"}
                sizes={"(max-width: 760px) max(90vw, 532px), max(45vw, 840px)"}
                src={"/assets/2026/feb-0c.webp"}
                srcSet={
                  "/assets/2026/feb-0c-480.webp 480w, /assets/2026/feb-0c-800.webp 800w, /assets/2026/feb-0c-1200.webp 1200w, /assets/2026/feb-0c.webp 1400w"
                }
                width={"1400"}
                loading={"eager"}
              />
            </picture>
            <span className={"image-caption"}>
              {"Seafood selected for your table"}
            </span>
          </div>
          <div className={"content-hero"}>
            <p className={"eyebrow"}>{"Seafood menu"}</p>
            <h1 className={"page-title"}>
              {"Choose Your Seafood."}
              <br />
              {"Make It Your Meal."}
            </h1>
            <p className={"lede"}>
              {
                "Crab, fish, prawns and plates to share. Explore a few dishes from our tables, then ask our team about today’s selection and prices."
              }
            </p>
          </div>
        </section>
        {"\n"}
        <section className={"section reveal"}>
          <div className={"section-head"}>
            <h2 className={"section-title"}>{"Seafood & Shared Plates"}</h2>
          </div>
          <div className={"menu-grid"}>
            <figure className={"dish-card"}>
              <div className={"dish-photo"}>
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/2026/feb-0c-480.avif 480w, /assets/2026/feb-0c-800.avif 800w, /assets/2026/feb-0c-1200.avif 1200w, /assets/2026/feb-0c.avif 1400w"
                    }
                    sizes={"(max-width: 420px) 90vw, 45vw"}
                  />
                  <img
                    alt={"Crab served with vegetables."}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={"(max-width: 420px) 90vw, 45vw"}
                    src={"/assets/2026/feb-0c.webp"}
                    srcSet={
                      "/assets/2026/feb-0c-480.webp 480w, /assets/2026/feb-0c-800.webp 800w, /assets/2026/feb-0c-1200.webp 1200w, /assets/2026/feb-0c.webp 1400w"
                    }
                    width={"1400"}
                  />
                </picture>
              </div>
              <figcaption>
                <h3>{"Crab"}</h3>
                <p>{"Crab served with vegetables."}</p>
              </figcaption>
            </figure>
            <figure className={"dish-card"}>
              <div className={"dish-photo"}>
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fd-480.avif 480w, /assets/gallery/32-40-c2-fd-800.avif 800w, /assets/gallery/32-40-c2-fd.avif 1200w"
                    }
                    sizes={"(max-width: 420px) 90vw, 45vw"}
                  />
                  <img
                    alt={"Whole fish served at the table."}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={"(max-width: 420px) 90vw, 45vw"}
                    src={"/assets/gallery/32-40-c2-fd.webp"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fd-480.webp 480w, /assets/gallery/32-40-c2-fd-800.webp 800w, /assets/gallery/32-40-c2-fd.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
              </div>
              <figcaption>
                <h3>{"Whole Fish"}</h3>
                <p>{"Whole fish served at the table."}</p>
              </figcaption>
            </figure>
            <figure className={"dish-card"}>
              <div className={"dish-photo"}>
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-40-c3-00-480.avif 480w, /assets/gallery/32-40-c3-00-800.avif 800w, /assets/gallery/32-40-c3-00.avif 1200w"
                    }
                    sizes={"(max-width: 420px) 90vw, 45vw"}
                  />
                  <img
                    alt={"Prawns with a crisp topping."}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={"(max-width: 420px) 90vw, 45vw"}
                    src={"/assets/gallery/32-40-c3-00.webp"}
                    srcSet={
                      "/assets/gallery/32-40-c3-00-480.webp 480w, /assets/gallery/32-40-c3-00-800.webp 800w, /assets/gallery/32-40-c3-00.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
              </div>
              <figcaption>
                <h3>{"Prawns"}</h3>
                <p>{"Prawns with a crisp topping."}</p>
              </figcaption>
            </figure>
            <figure className={"dish-card"}>
              <div className={"dish-photo"}>
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fa-480.avif 480w, /assets/gallery/32-40-c2-fa-800.avif 800w, /assets/gallery/32-40-c2-fa.avif 1200w"
                    }
                    sizes={"(max-width: 420px) 90vw, 45vw"}
                  />
                  <img
                    alt={"Oysters served on the half shell."}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={"(max-width: 420px) 90vw, 45vw"}
                    src={"/assets/gallery/32-40-c2-fa.webp"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fa-480.webp 480w, /assets/gallery/32-40-c2-fa-800.webp 800w, /assets/gallery/32-40-c2-fa.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
              </div>
              <figcaption>
                <h3>{"Oysters"}</h3>
                <p>{"Oysters served on the half shell."}</p>
              </figcaption>
            </figure>
            <figure className={"dish-card"}>
              <div className={"dish-photo"}>
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/2026/feb-0a-480.avif 480w, /assets/2026/feb-0a-800.avif 800w, /assets/2026/feb-0a-1200.avif 1200w, /assets/2026/feb-0a.avif 1400w"
                    }
                    sizes={"(max-width: 420px) 90vw, 45vw"}
                  />
                  <img
                    alt={"Fried rice alongside seafood and vegetables."}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={"(max-width: 420px) 90vw, 45vw"}
                    src={"/assets/2026/feb-0a.webp"}
                    srcSet={
                      "/assets/2026/feb-0a-480.webp 480w, /assets/2026/feb-0a-800.webp 800w, /assets/2026/feb-0a-1200.webp 1200w, /assets/2026/feb-0a.webp 1400w"
                    }
                    width={"1400"}
                  />
                </picture>
              </div>
              <figcaption>
                <h3>{"Fried Rice & Shared Plates"}</h3>
                <p>{"Fried rice alongside seafood and vegetables."}</p>
              </figcaption>
            </figure>
            <figure className={"dish-card"}>
              <div className={"dish-photo"}>
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria4-480.avif 480w, /assets/langkawi-app/orkid-ria4-800.avif 800w, /assets/langkawi-app/orkid-ria4.avif 1015w"
                    }
                    sizes={"(max-width: 420px) 90vw, 45vw"}
                  />
                  <img
                    alt={"A spread of seafood and shared dishes."}
                    decoding={"async"}
                    height={"571"}
                    loading={"lazy"}
                    sizes={"(max-width: 420px) 90vw, 45vw"}
                    src={"/assets/langkawi-app/orkid-ria4.webp"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria4-480.webp 480w, /assets/langkawi-app/orkid-ria4-800.webp 800w, /assets/langkawi-app/orkid-ria4.webp 1015w"
                    }
                    width={"1015"}
                  />
                </picture>
              </div>
              <figcaption>
                <h3>{"Seafood to Share"}</h3>
                <p>{"A spread of seafood and shared dishes."}</p>
              </figcaption>
            </figure>
          </div>
          <p className={"source-note"}>
            {
              "These photographs show menu highlights, not a full current menu. Please confirm availability, preparation options and prices with the restaurant."
            }
          </p>
        </section>
        <section className={"section dining-guide"}>
          <p className={"eyebrow"}>{"Ordering at Orkid Ria"}</p>
          <h2 className={"section-title"}>{"Make the meal your own."}</h2>
          <ol className={"ordering-steps"}>
            <li>
              <strong>{"See what’s available."}</strong>
              <p>
                {
                  "Ask the team about the seafood selection and cooking options."
                }
              </p>
            </li>
            <li>
              <strong>{"Choose for your table."}</strong>
              <p>{"Share your group size and discuss portions."}</p>
            </li>
            <li>
              <strong>{"Confirm before cooking."}</strong>
              <p>
                {
                  "Agree on seafood weight, preparation and total price before ordering."
                }
              </p>
            </li>
          </ol>
          <p>
            {
              "Please discuss allergies and dietary requirements with the team before ordering."
            }
          </p>
          <div className={"contact-actions"}>
            <a className={"book-button primary"} href={"tel:+60176144128"}>
              {"Call the restaurant"}
            </a>
            <a
              className={"whatsapp-cta"}
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
            <Link to="/restaurant/">{"Find our Pantai Tengah restaurant"}</Link>
            {"."}
          </p>
        </section>
      </main>
      {"\n"}
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
      {"\n\n\n\n"}
    </>
  );
}
