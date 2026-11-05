import { Link } from "@tanstack/react-router";

export default function PageContent() {
  return (
    <>
      <a className={"skip-link"} href={"#main"}>
        {"Skip to content"}
      </a>
      <main
        className={"content-hero"}
        id={"main"}
        style={{
          minHeight: "100vh",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p className={"eyebrow"}>{"404"}</p>
        <h1 className={"page-title"}>{"This table is empty."}</h1>
        <p className={"lede"}>{"The page you requested could not be found."}</p>
        <Link
          to="/"
          className={"book-button"}
          style={{ marginTop: "24px", minWidth: "220px" }}
        >
          {"Return Home "}
          <span>{"→"}</span>
        </Link>
      </main>
      {"\n"}
    </>
  );
}
