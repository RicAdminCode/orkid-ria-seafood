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
            aria-current={"page"}
            className={"nav-link active nav-reserve"}
          >
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
          <span aria-current={"page"}>{"Reservations"}</span>
        </nav>
        <section className={"reservation-layout"}>
          <div className={"image-hero"}>
            <picture className={"responsive-photo"}>
              <source
                type={"image/avif"}
                srcSet={
                  "/assets/langkawi-app/orkid-ria4-480.avif 480w, /assets/langkawi-app/orkid-ria4-800.avif 800w, /assets/langkawi-app/orkid-ria4.avif 1015w"
                }
                sizes={"(max-width: 760px) max(90vw, 676px), max(45vw, 1067px)"}
              />
              <img
                alt={"Seafood and shared dishes on a table at Orkid Ria"}
                decoding={"async"}
                fetchPriority={"high"}
                height={"571"}
                sizes={"(max-width: 760px) max(90vw, 676px), max(45vw, 1067px)"}
                src={"/assets/langkawi-app/orkid-ria4.webp"}
                srcSet={
                  "/assets/langkawi-app/orkid-ria4-480.webp 480w, /assets/langkawi-app/orkid-ria4-800.webp 800w, /assets/langkawi-app/orkid-ria4.webp 1015w"
                }
                width={"1015"}
                loading={"eager"}
              />
            </picture>
            <span className={"image-caption"}>
              {"Plan a meal together in Langkawi"}
            </span>
          </div>
          <article className={"form-card"}>
            <p className={"eyebrow"}>{"Table request"}</p>
            <h1 className={"page-title"}>
              {"Let’s Plan"}
              <br />
              {"Your Table."}
            </h1>
            <p className={"lede"}>
              {
                "Call or WhatsApp our team with your date, preferred time and number of guests to check availability."
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
            <p className={"reservation-note"}>
              {
                "A message is a table request. Your reservation is confirmed only when the restaurant confirms it."
              }
            </p>
          </article>
        </section>
        <section className={"section dining-guide"}>
          <p className={"eyebrow"}>{"Planning your meal"}</p>
          <h2 className={"section-title"}>{"Before you get in touch."}</h2>
          <p>
            {
              "Have your date, arrival time and group size ready. Let the team know about any dietary requirements or questions about the menu."
            }
          </p>
          <p>
            {
              "Open daily, 1:00 pm–11:00 pm, at Lot 418, Jalan Pantai Tengah, Langkawi."
            }
          </p>
          <p>
            <Link to="/restaurant/">{"Get directions"}</Link>
            {" or browse our "}
            <Link to="/menu/">{"seafood highlights"}</Link>
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
            <h3>{"Direct Contact"}</h3>
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
