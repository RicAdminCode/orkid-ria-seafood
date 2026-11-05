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
          <Link to="/reservation/" className={"nav-link nav-reserve"}>
            {"Reservations"}
          </Link>
          <Link
            to="/about/"
            aria-current={"page"}
            className={"nav-link active"}
          >
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
          <span aria-current={"page"}>{"Dining Experience"}</span>
        </nav>
        <section className={"split-hero"}>
          <div className={"image-hero"}>
            <picture className={"responsive-photo"}>
              <source
                type={"image/avif"}
                srcSet={
                  "/assets/langkawi-app/orkid-ria5-480.avif 480w, /assets/langkawi-app/orkid-ria5-800.avif 800w, /assets/langkawi-app/orkid-ria5.avif 1015w"
                }
                sizes={"(max-width: 760px) max(90vw, 676px), max(45vw, 1067px)"}
              />
              <img
                alt={"Indoor dining room and bar at Orkid Ria"}
                decoding={"async"}
                fetchPriority={"high"}
                height={"571"}
                sizes={"(max-width: 760px) max(90vw, 676px), max(45vw, 1067px)"}
                src={"/assets/langkawi-app/orkid-ria5.webp"}
                srcSet={
                  "/assets/langkawi-app/orkid-ria5-480.webp 480w, /assets/langkawi-app/orkid-ria5-800.webp 800w, /assets/langkawi-app/orkid-ria5.webp 1015w"
                }
                width={"1015"}
                loading={"eager"}
              />
            </picture>
            <span className={"image-caption"}>
              {"A place to gather in Pantai Tengah"}
            </span>
          </div>
          <div className={"content-hero"}>
            <p className={"eyebrow"}>{"Our story · Our table"}</p>
            <h1 className={"page-title"}>
              {"Langkawi Roots."}
              <br />
              {"A Place to Gather."}
            </h1>
            <p className={"lede"}>
              {
                "From our Pantai Cenang beginnings to our home in Pantai Tengah, discover the story behind the name and the experience around the table."
              }
            </p>
          </div>
        </section>
        {"\n"}
        <section
          className={"section about-stories"}
          aria-label={"Our story and dining experience"}
        >
          {"\n"}
          <article
            className={"story-grid reveal"}
            id={"our-roots"}
            aria-labelledby={"our-roots-title"}
          >
            {"\n"}
            <figure className={"story-image"}>
              <picture className={"responsive-photo"}>
                <source
                  type={"image/avif"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria1-480.avif 480w, /assets/langkawi-app/orkid-ria1-800.avif 800w, /assets/langkawi-app/orkid-ria1.avif 1015w"
                  }
                  sizes={
                    "(max-width: 760px) max(90vw, 676px), max(45vw, 1067px)"
                  }
                />
                <img
                  alt={
                    "Illuminated entrance and water feature at the Pantai Tengah restaurant"
                  }
                  decoding={"async"}
                  height={"571"}
                  loading={"lazy"}
                  sizes={
                    "(max-width: 760px) max(90vw, 676px), max(45vw, 1067px)"
                  }
                  src={"/assets/langkawi-app/orkid-ria1.webp"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria1-480.webp 480w, /assets/langkawi-app/orkid-ria1-800.webp 800w, /assets/langkawi-app/orkid-ria1.webp 1015w"
                  }
                  width={"1015"}
                />
              </picture>
              <figcaption>{"Our Pantai Tengah home today"}</figcaption>
            </figure>
            {"\n"}
            <div className={"story-copy"}>
              {"\n"}
              <p className={"eyebrow"}>{"01 · Our Langkawi roots"}</p>
              {"\n"}
              <h2 id={"our-roots-title"}>
                {"A familiar name."}
                <br />
                {"A new chapter."}
              </h2>
              {"\n"}
              <p>
                {"Langkawi’s "}
                <cite>{"Bits & Eats"}</cite>
                {
                  " tourism guide traces Orkid Ria to a small wooden shop in Pantai Cenang in 1989. It records a rebuilding in 2004 after a fire—an earlier chapter in the restaurant’s island story."
                }
              </p>
              {"\n"}
              <p>
                {"Today, our home is in Pantai Tengah. In January 2025, "}
                <cite>{"The National"}</cite>
                {
                  " reported Orkid Ria’s return in this new setting after several years of closure."
                }
              </p>
              {"\n"}
              <p>
                {
                  "A different address, with seafood and shared tables at the heart of the visit."
                }
              </p>
              {"\n"}
              <details className={"story-sources"}>
                <summary>{"Read the historical sources"}</summary>
                <ul>
                  {"\n"}
                  <li>
                    <a
                      href={
                        "https://naturallylangkawi.my/wp-content/uploads/pdf/Bits_n_Eats_of_Langkawi.pdf"
                      }
                    >
                      {"Bits & Eats of Langkawi — tourism guide (PDF)"}
                    </a>
                  </li>
                  {"\n"}
                  <li>
                    <a
                      href={
                        "https://www.thenationalnews.com/travel/2025/01/30/malyasia-langkawi-new-hotels-experiences-things-to-do/"
                      }
                    >
                      {"The National — 30 January 2025"}
                    </a>
                  </li>
                  {"\n"}
                </ul>
              </details>
              {"\n"}
            </div>
            {"\n"}
          </article>
          {"\n"}
          <article
            className={"story-grid reveal story-grid--reverse"}
            id={"our-setting"}
            aria-labelledby={"our-setting-title"}
          >
            {"\n"}
            <figure className={"story-image"}>
              <picture className={"responsive-photo"}>
                <source
                  type={"image/avif"}
                  srcSet={
                    "/assets/2026/feb-08-480.avif 480w, /assets/2026/feb-08-800.avif 800w, /assets/2026/feb-08-1200.avif 1200w, /assets/2026/feb-08.avif 1400w"
                  }
                  sizes={
                    "(max-width: 760px) max(90vw, 532px), max(45vw, 840px)"
                  }
                />
                <img
                  alt={"Dining pavilion beside the water at Orkid Ria"}
                  decoding={"async"}
                  height={"1000"}
                  loading={"lazy"}
                  sizes={
                    "(max-width: 760px) max(90vw, 532px), max(45vw, 840px)"
                  }
                  src={"/assets/2026/feb-08.webp"}
                  srcSet={
                    "/assets/2026/feb-08-480.webp 480w, /assets/2026/feb-08-800.webp 800w, /assets/2026/feb-08-1200.webp 1200w, /assets/2026/feb-08.webp 1400w"
                  }
                  width={"1400"}
                />
              </picture>
            </figure>
            {"\n"}
            <div className={"story-copy"}>
              {"\n"}
              <p className={"eyebrow"}>{"02 · At home in Pantai Tengah"}</p>
              {"\n"}
              <h2 id={"our-setting-title"}>
                {"By the water."}
                <br />
                {"Around the table."}
              </h2>
              {"\n"}
              <p>
                {
                  "Walk past the illuminated entrance into a setting of dining pavilions, indoor tables and a water feature. The restaurant’s spaces give you a closer look at Orkid Ria today."
                }
              </p>
              {"\n"}
              <p>
                {
                  "Come for a meal with family or friends, from an afternoon gathering to dinner as the lights come on around the water."
                }
              </p>
              {"\n"}
              <p>
                {"Find us at Lot 418 on Jalan Pantai Tengah. "}
                <Link to="/restaurant/">
                  {"See our address and directions"}
                </Link>
                {", or "}
                <a href={"/restaurant/#gallery"}>
                  {"take a look around the gallery"}
                </a>
                {" before you visit."}
              </p>
              {"\n"}
            </div>
            {"\n"}
          </article>
          {"\n"}
          <article
            className={"story-grid reveal"}
            id={"your-seafood"}
            aria-labelledby={"your-seafood-title"}
          >
            {"\n"}
            <figure className={"story-image"}>
              <picture className={"responsive-photo"}>
                <source
                  type={"image/avif"}
                  srcSet={
                    "/assets/2026/feb-0b-480.avif 480w, /assets/2026/feb-0b-800.avif 800w, /assets/2026/feb-0b-1200.avif 1200w, /assets/2026/feb-0b.avif 1400w"
                  }
                  sizes={
                    "(max-width: 760px) max(90vw, 532px), max(45vw, 840px)"
                  }
                />
                <img
                  alt={"Live seafood tanks at Orkid Ria"}
                  decoding={"async"}
                  height={"1000"}
                  loading={"lazy"}
                  sizes={
                    "(max-width: 760px) max(90vw, 532px), max(45vw, 840px)"
                  }
                  src={"/assets/2026/feb-0b.webp"}
                  srcSet={
                    "/assets/2026/feb-0b-480.webp 480w, /assets/2026/feb-0b-800.webp 800w, /assets/2026/feb-0b-1200.webp 1200w, /assets/2026/feb-0b.webp 1400w"
                  }
                  width={"1400"}
                />
              </picture>
            </figure>
            {"\n"}
            <div className={"story-copy"}>
              {"\n"}
              <p className={"eyebrow"}>{"03 · From selection to supper"}</p>
              {"\n"}
              <h2 id={"your-seafood-title"}>
                {"Begin at the tanks."}
                <br />
                {"Make it your meal."}
              </h2>
              {"\n"}
              <p>
                {
                  "Start with the seafood selection and a conversation with our team. Ask what is available, discuss how you would like it cooked, and confirm the weight and price before ordering."
                }
              </p>
              {"\n"}
              <p>
                {
                  "Build a meal for your table with seafood, vegetables and rice to share. Our "
                }
                <Link to="/menu/">{"photographic menu highlights"}</Link>
                {
                  " offer a first look; availability, preparations and prices should be checked with the team."
                }
              </p>
              {"\n"}
              <p>
                {
                  "If you have a food allergy or dietary requirement, tell us before ordering and ask about ingredients and preparation."
                }
              </p>
              {"\n"}
            </div>
            {"\n"}
          </article>
          {"\n"}
          <article
            className={"story-grid reveal story-grid--reverse"}
            id={"shared-tables"}
            aria-labelledby={"shared-tables-title"}
          >
            {"\n"}
            <figure className={"story-image"}>
              <picture className={"responsive-photo"}>
                <source
                  type={"image/avif"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria4-480.avif 480w, /assets/langkawi-app/orkid-ria4-800.avif 800w, /assets/langkawi-app/orkid-ria4.avif 1015w"
                  }
                  sizes={
                    "(max-width: 760px) max(90vw, 676px), max(45vw, 1067px)"
                  }
                />
                <img
                  alt={
                    "A shared table of seafood, vegetables and other dishes at Orkid Ria"
                  }
                  decoding={"async"}
                  height={"571"}
                  loading={"lazy"}
                  sizes={
                    "(max-width: 760px) max(90vw, 676px), max(45vw, 1067px)"
                  }
                  src={"/assets/langkawi-app/orkid-ria4.webp"}
                  srcSet={
                    "/assets/langkawi-app/orkid-ria4-480.webp 480w, /assets/langkawi-app/orkid-ria4-800.webp 800w, /assets/langkawi-app/orkid-ria4.webp 1015w"
                  }
                  width={"1015"}
                />
              </picture>
            </figure>
            {"\n"}
            <div className={"story-copy"}>
              {"\n"}
              <p className={"eyebrow"}>{"04 · Better together"}</p>
              {"\n"}
              <h2 id={"shared-tables-title"}>
                {"Bring your people."}
                <br />
                {"Stay for the table."}
              </h2>
              {"\n"}
              <p>
                {
                  "A family meal, a catch-up with friends, or a gathering during your time in Langkawi—choose dishes together and leave a little time to enjoy them."
                }
              </p>
              {"\n"}
              <p>
                {
                  "Planning for a group? Share your date, preferred time and number of guests so we can discuss availability. Please wait for the team to confirm your table."
                }
              </p>
              {"\n"}
              <p>
                {"We’re open daily, 1:00 pm–11:00 pm. "}
                <Link to="/reservation/">{"Plan your visit with us"}</Link>
                {" or "}
                <a href={"tel:+60176144128"}>{"call +60 17-614 4128"}</a>
                {"."}
              </p>
              {"\n"}
            </div>
            {"\n"}
          </article>
          {"\n"}
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
            <h3>{"Opening Hours"}</h3>
            <p>
              {"Monday - Sunday"}
              <br />
              {"1:00 pm - 11:00 pm"}
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
