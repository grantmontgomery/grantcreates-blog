import * as React from "react";
// import "./HomePage.css";
import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <React.Fragment>
      <div className={css.contentWrapper}>
        <main className={css.main}>
          <section className={css.topArticle}>
            <div className={css.loadingLine}></div>
          </section>
          <section className={css.moreArticles}></section>
        </main>
        <aside className={css.articlesAside}></aside>
      </div>
    </React.Fragment>
  );
};
