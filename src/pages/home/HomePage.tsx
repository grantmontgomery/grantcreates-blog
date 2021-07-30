import * as React from "react";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <React.Fragment>
      <header>
        <nav></nav>
      </header>
      <div className="content-wrapper">
        <main>
          <section className="top-article"></section>
          <section></section>
        </main>
        <aside className="article-suggestions"></aside>
      </div>
    </React.Fragment>
  );
};
