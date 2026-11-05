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
          <Link to="/about/" className={"nav-link"}>
            {"Dining Experience"}
          </Link>
          <Link
            to="/restaurant/"
            aria-current={"page"}
            className={"nav-link active nav-visit"}
          >
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
          <span aria-current={"page"}>{"Visit"}</span>
        </nav>
        <section className={"split-hero"}>
          <div className={"image-hero"}>
            <picture className={"responsive-photo"}>
              <source
                type={"image/avif"}
                srcSet={
                  "/assets/2026/feb-07-480.avif 480w, /assets/2026/feb-07-800.avif 800w, /assets/2026/feb-07-1200.avif 1200w, /assets/2026/feb-07.avif 1400w"
                }
                sizes={"(max-width: 760px) max(90vw, 532px), max(45vw, 840px)"}
              />
              <img
                alt={"Orkid Ria Restaurant entrance"}
                decoding={"async"}
                fetchPriority={"high"}
                height={"1000"}
                sizes={"(max-width: 760px) max(90vw, 532px), max(45vw, 840px)"}
                src={"/assets/2026/feb-07.webp"}
                srcSet={
                  "/assets/2026/feb-07-480.webp 480w, /assets/2026/feb-07-800.webp 800w, /assets/2026/feb-07-1200.webp 1200w, /assets/2026/feb-07.webp 1400w"
                }
                width={"1400"}
                loading={"eager"}
              />
            </picture>
            <span className={"image-caption"}>
              {"Jalan Pantai Tengah, Langkawi"}
            </span>
          </div>
          <div className={"content-hero"}>
            <p className={"eyebrow"}>{"Visit Orkid Ria"}</p>
            <h1 className={"page-title"}>
              {"Find Us in"}
              <br />
              {"Pantai Tengah."}
            </h1>
            <p className={"lede"}>
              {
                "Visit Orkid Ria at Lot 418, Jalan Pantai Tengah, Langkawi. We’re open daily from 1:00 pm to 11:00 pm."
              }
            </p>
          </div>
        </section>
        {"\n"}
        <section className={"section reveal"}>
          <div className={"info-grid"}>
            <div className={"info-card"}>
              <div className={"details"}>
                <div>
                  <p className={"eyebrow"}>{"Opening Hours"}</p>
                  <p>
                    {"Monday - Sunday"}
                    <br />
                    <span className={"eyebrow"}>{"1:00 pm - 11:00 pm"}</span>
                  </p>
                  <p>
                    <a
                      className={"book-button primary"}
                      href={"tel:+60176144128"}
                    >
                      {"Call the Restaurant"}
                    </a>
                  </p>
                </div>
                <div>
                  <p className={"eyebrow"}>{"Address"}</p>
                  <p>
                    {"Lot 418, Jalan Pantai Tengah"}
                    <br />
                    {"Jalan Teluk Baru, Mukim Kedawang"}
                    <br />
                    {"07100 Langkawi, Kedah"}
                  </p>
                  <p className={"eyebrow"}>{"Contact"}</p>
                  <p>
                    <a href={"tel:+60176144128"}>{"+60 17-614 4128"}</a>
                  </p>
                </div>
              </div>
              <div className={"visit-actions"}>
                <a
                  className={"book-button primary"}
                  href={"https://maps.app.goo.gl/AVcjjYDYoPyyYBx16"}
                  rel={"noopener noreferrer"}
                  target={"_blank"}
                >
                  {"Open in Google Maps ↗"}
                </a>
              </div>
            </div>
            <iframe
              className={"map"}
              loading={"lazy"}
              src={
                "https://www.google.com/maps?q=Orkid+Ria+Seafood+Restaurant+Lot+418+Jalan+Pantai+Tengah+Langkawi&output=embed"
              }
              title={"Orkid Ria Seafood Restaurant location"}
            ></iframe>
          </div>
        </section>
        {"\n"}
        <section
          aria-labelledby={"visit-answers-title"}
          className={"section visit-answers"}
        >
          {"\n"}
          <div className={"section-head"}>
            <p className={"eyebrow"}>{"Plan your visit"}</p>
            <h2 className={"section-title"} id={"visit-answers-title"}>
              {"Finding Orkid Ria today."}
            </h2>
          </div>
          {"\n"}
          <div className={"visit-answer-grid"}>
            {"\n"}
            <article>
              <h3>{"Where is Orkid Ria now?"}</h3>
              <p>
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
              </p>
            </article>
            {"\n"}
            <article>
              <h3>{"What time do you open?"}</h3>
              <p>
                {
                  "We’re open every day from 1:00 pm to 11:00 pm. If you are planning a late arrival or a visit on a public holiday, "
                }
                <a href={"tel:+60176144128"}>{"call +60 17-614 4128"}</a>
                {" to check arrangements with the team."}
              </p>
            </article>
            {"\n"}
            <article>
              <h3>{"How do I request a table?"}</h3>
              <p>
                {
                  "Contact us with your preferred date, time and number of guests. A phone or WhatsApp enquiry is a request; please wait for the restaurant to confirm your table. "
                }
                <Link to="/reservation/">
                  {"See contact and reservation details"}
                </Link>
                {"."}
              </p>
            </article>
            {"\n"}
          </div>
        </section>
        <section
          aria-labelledby={"gallery-title"}
          className={"section restaurant-gallery"}
          id={"gallery"}
        >
          <div className={"section-head gallery-heading"}>
            <div>
              <p className={"eyebrow"}>{"Gallery · Orkid Ria"}</p>
              <h2 className={"section-title"} id={"gallery-title"}>
                {"Around Orkid Ria."}
              </h2>
            </div>
            <p>
              {"By the water. Around the table."}
              <br />
              {"A closer look at your next visit."}
            </p>
          </div>
          <div className={"gallery-grid"}>
            <figure className={"gallery-item"}>
              <a
                aria-label={
                  "View full-size photo: Entrance and reflecting pool at dusk"
                }
                href={"/assets/langkawi-app/orkid-ria1.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria1-480.avif 480w, /assets/langkawi-app/orkid-ria1-800.avif 800w, /assets/langkawi-app/orkid-ria1.avif 1015w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Entrance and reflecting pool at dusk"}
                    decoding={"async"}
                    height={"571"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
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
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria2-480.avif 480w, /assets/langkawi-app/orkid-ria2-800.avif 800w, /assets/langkawi-app/orkid-ria2.avif 1015w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Pavilion dining beside the water"}
                    decoding={"async"}
                    height={"571"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
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
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria3-480.avif 480w, /assets/langkawi-app/orkid-ria3-800.avif 800w, /assets/langkawi-app/orkid-ria3.avif 1015w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Lantern-lit terrace at sunset"}
                    decoding={"async"}
                    height={"571"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
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
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria4-480.avif 480w, /assets/langkawi-app/orkid-ria4-800.avif 800w, /assets/langkawi-app/orkid-ria4.avif 1015w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Lobster and seafood to share"}
                    decoding={"async"}
                    height={"571"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
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
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/langkawi-app/orkid-ria5-480.avif 480w, /assets/langkawi-app/orkid-ria5-800.avif 800w, /assets/langkawi-app/orkid-ria5.avif 1015w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"The restaurant bar and dining room"}
                    decoding={"async"}
                    height={"571"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
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
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/2026/feb-08-480.avif 480w, /assets/2026/feb-08-800.avif 800w, /assets/2026/feb-08-1200.avif 1200w, /assets/2026/feb-08.avif 1400w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
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
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
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
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/2026/feb-0c-480.avif 480w, /assets/2026/feb-0c-800.avif 800w, /assets/2026/feb-0c-1200.avif 1200w, /assets/2026/feb-0c.avif 1400w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Crab served with vegetables"}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
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
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/2026/feb-0a-480.avif 480w, /assets/2026/feb-0a-800.avif 800w, /assets/2026/feb-0a-1200.avif 1200w, /assets/2026/feb-0a.avif 1400w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
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
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
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
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: A table made for sharing"}
                href={"/assets/gallery/32-23-a9-39.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-23-a9-39-480.avif 480w, /assets/gallery/32-23-a9-39-800.avif 800w, /assets/gallery/32-23-a9-39.avif 1200w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={
                      "A table made for sharing at Orkid Ria Seafood Restaurant"
                    }
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/gallery/32-23-a9-39.webp"}
                    srcSet={
                      "/assets/gallery/32-23-a9-39-480.webp 480w, /assets/gallery/32-23-a9-39-800.webp 800w, /assets/gallery/32-23-a9-39.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"A table made for sharing"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Oysters on the half shell"}
                href={"/assets/gallery/32-40-c2-fa.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fa-480.avif 480w, /assets/gallery/32-40-c2-fa-800.avif 800w, /assets/gallery/32-40-c2-fa.avif 1200w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Oysters on the half shell"}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/gallery/32-40-c2-fa.webp"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fa-480.webp 480w, /assets/gallery/32-40-c2-fa-800.webp 800w, /assets/gallery/32-40-c2-fa.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Oysters on the half shell"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Squid with vegetables"}
                href={"/assets/gallery/32-40-c2-fb.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fb-480.avif 480w, /assets/gallery/32-40-c2-fb-800.avif 800w, /assets/gallery/32-40-c2-fb.avif 1200w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={
                      "Squid with vegetables at Orkid Ria Seafood Restaurant"
                    }
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/gallery/32-40-c2-fb.webp"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fb-480.webp 480w, /assets/gallery/32-40-c2-fb-800.webp 800w, /assets/gallery/32-40-c2-fb.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Squid with vegetables"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Seafood soup"}
                href={"/assets/gallery/32-40-c2-fc.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fc-480.avif 480w, /assets/gallery/32-40-c2-fc-800.avif 800w, /assets/gallery/32-40-c2-fc.avif 1200w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Seafood soup at Orkid Ria Seafood Restaurant"}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/gallery/32-40-c2-fc.webp"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fc-480.webp 480w, /assets/gallery/32-40-c2-fc-800.webp 800w, /assets/gallery/32-40-c2-fc.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Seafood soup"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Whole fish to share"}
                href={"/assets/gallery/32-40-c2-fd.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fd-480.avif 480w, /assets/gallery/32-40-c2-fd-800.avif 800w, /assets/gallery/32-40-c2-fd.avif 1200w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Whole fish to share at Orkid Ria Seafood Restaurant"}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/gallery/32-40-c2-fd.webp"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fd-480.webp 480w, /assets/gallery/32-40-c2-fd-800.webp 800w, /assets/gallery/32-40-c2-fd.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Whole fish to share"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Our sign after dark"}
                href={"/assets/gallery/32-40-c2-fe.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fe-480.avif 480w, /assets/gallery/32-40-c2-fe-800.avif 800w, /assets/gallery/32-40-c2-fe.avif 1200w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Our sign after dark at Orkid Ria Seafood Restaurant"}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/gallery/32-40-c2-fe.webp"}
                    srcSet={
                      "/assets/gallery/32-40-c2-fe-480.webp 480w, /assets/gallery/32-40-c2-fe-800.webp 800w, /assets/gallery/32-40-c2-fe.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Our sign after dark"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: An evening arrival"}
                href={"/assets/gallery/32-40-c2-ff.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-40-c2-ff-480.avif 480w, /assets/gallery/32-40-c2-ff-800.avif 800w, /assets/gallery/32-40-c2-ff.avif 1200w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"An evening arrival at Orkid Ria Seafood Restaurant"}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/gallery/32-40-c2-ff.webp"}
                    srcSet={
                      "/assets/gallery/32-40-c2-ff-480.webp 480w, /assets/gallery/32-40-c2-ff-800.webp 800w, /assets/gallery/32-40-c2-ff.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"An evening arrival"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Prawns with a crisp topping"}
                href={"/assets/gallery/32-40-c3-00.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-40-c3-00-480.avif 480w, /assets/gallery/32-40-c3-00-800.avif 800w, /assets/gallery/32-40-c3-00.avif 1200w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Prawns with a crisp topping"}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/gallery/32-40-c3-00.webp"}
                    srcSet={
                      "/assets/gallery/32-40-c3-00-480.webp 480w, /assets/gallery/32-40-c3-00-800.webp 800w, /assets/gallery/32-40-c3-00.webp 1200w"
                    }
                    width={"1200"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Prawns with a crisp topping"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Seafood displayed on ice"}
                href={"/assets/gallery/32-5c-64-aa.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-5c-64-aa-480.avif 480w, /assets/gallery/32-5c-64-aa-800.avif 800w, /assets/gallery/32-5c-64-aa.avif 1120w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Seafood displayed on ice"}
                    decoding={"async"}
                    height={"840"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/gallery/32-5c-64-aa.webp"}
                    srcSet={
                      "/assets/gallery/32-5c-64-aa-480.webp 480w, /assets/gallery/32-5c-64-aa-800.webp 800w, /assets/gallery/32-5c-64-aa.webp 1120w"
                    }
                    width={"1120"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Seafood displayed on ice"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Crispy chicken wings"}
                href={"/assets/gallery/32-5c-64-ac.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-5c-64-ac-480.avif 480w, /assets/gallery/32-5c-64-ac-800.avif 800w, /assets/gallery/32-5c-64-ac.avif 840w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Crispy chicken wings at Orkid Ria Seafood Restaurant"}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/gallery/32-5c-64-ac.webp"}
                    srcSet={
                      "/assets/gallery/32-5c-64-ac-480.webp 480w, /assets/gallery/32-5c-64-ac-800.webp 800w, /assets/gallery/32-5c-64-ac.webp 840w"
                    }
                    width={"840"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Crispy chicken wings"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Live seafood tanks"}
                href={"/assets/gallery/32-5c-64-ad.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-5c-64-ad-480.avif 480w, /assets/gallery/32-5c-64-ad-800.avif 800w, /assets/gallery/32-5c-64-ad.avif 1120w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Live seafood tanks at Orkid Ria Seafood Restaurant"}
                    decoding={"async"}
                    height={"840"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/gallery/32-5c-64-ad.webp"}
                    srcSet={
                      "/assets/gallery/32-5c-64-ad-480.webp 480w, /assets/gallery/32-5c-64-ad-800.webp 800w, /assets/gallery/32-5c-64-ad.webp 1120w"
                    }
                    width={"1120"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Live seafood tanks"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Welcome to Orkid Ria"}
                href={"/assets/gallery/32-5c-64-af.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/gallery/32-5c-64-af-480.avif 480w, /assets/gallery/32-5c-64-af-800.avif 800w, /assets/gallery/32-5c-64-af.avif 840w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Welcome to Orkid Ria at Orkid Ria Seafood Restaurant"}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/gallery/32-5c-64-af.webp"}
                    srcSet={
                      "/assets/gallery/32-5c-64-af-480.webp 480w, /assets/gallery/32-5c-64-af-800.webp 800w, /assets/gallery/32-5c-64-af.webp 840w"
                    }
                    width={"840"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Welcome to Orkid Ria"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: The restaurant after dark"}
                href={"/assets/2026/feb-07.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/2026/feb-07-480.avif 480w, /assets/2026/feb-07-800.avif 800w, /assets/2026/feb-07-1200.avif 1200w, /assets/2026/feb-07.avif 1400w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={
                      "The restaurant after dark at Orkid Ria Seafood Restaurant"
                    }
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/2026/feb-07.webp"}
                    srcSet={
                      "/assets/2026/feb-07-480.webp 480w, /assets/2026/feb-07-800.webp 800w, /assets/2026/feb-07-1200.webp 1200w, /assets/2026/feb-07.webp 1400w"
                    }
                    width={"1400"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"The restaurant after dark"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Seafood tanks at Orkid Ria"}
                href={"/assets/2026/feb-0b.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/2026/feb-0b-480.avif 480w, /assets/2026/feb-0b-800.avif 800w, /assets/2026/feb-0b-1200.avif 1200w, /assets/2026/feb-0b.avif 1400w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={"Seafood tanks at Orkid Ria"}
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/2026/feb-0b.webp"}
                    srcSet={
                      "/assets/2026/feb-0b-480.webp 480w, /assets/2026/feb-0b-800.webp 800w, /assets/2026/feb-0b-1200.webp 1200w, /assets/2026/feb-0b.webp 1400w"
                    }
                    width={"1400"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Seafood tanks at Orkid Ria"}</figcaption>
            </figure>
            <figure className={"gallery-item"}>
              <a
                aria-label={"View full-size photo: Gather around the table"}
                href={"/assets/2026/sep-janine.jpg"}
                rel={"noopener"}
                target={"_blank"}
              >
                <picture className={"responsive-photo"}>
                  <source
                    type={"image/avif"}
                    srcSet={
                      "/assets/2026/sep-janine-480.avif 480w, /assets/2026/sep-janine-800.avif 800w, /assets/2026/sep-janine-1200.avif 1200w, /assets/2026/sep-janine.avif 1400w"
                    }
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                  />
                  <img
                    alt={
                      "Gather around the table at Orkid Ria Seafood Restaurant"
                    }
                    decoding={"async"}
                    height={"1000"}
                    loading={"lazy"}
                    sizes={
                      "(max-width: 560px) 90vw, (max-width: 1000px) 45vw, 30vw"
                    }
                    src={"/assets/2026/sep-janine.webp"}
                    srcSet={
                      "/assets/2026/sep-janine-480.webp 480w, /assets/2026/sep-janine-800.webp 800w, /assets/2026/sep-janine-1200.webp 1200w, /assets/2026/sep-janine.webp 1400w"
                    }
                    width={"1400"}
                  />
                </picture>
                <span aria-hidden={"true"} className={"gallery-expand"}>
                  {"↗"}
                </span>
              </a>
              <figcaption>{"Gather around the table"}</figcaption>
            </figure>
          </div>
        </section>
        {"\n"}
        <section className={"section dining-guide"}>
          <p className={"eyebrow"}>{"Before your visit"}</p>
          <h2 className={"section-title"}>
            {"A little planning. A shared meal."}
          </h2>
          <h3>{"Planning a group meal?"}</h3>
          <p>
            <Link to="/reservation/">{"Call or WhatsApp us"}</Link>
            {" with your preferred date, time and number of guests."}
          </p>
          <h3>{"Looking for the menu?"}</h3>
          <p>
            {"Explore our "}
            <Link to="/menu/">{"seafood highlights"}</Link>
            {", then ask the restaurant about current availability and prices."}
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
