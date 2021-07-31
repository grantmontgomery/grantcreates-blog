import * as React from "react";
// import "./HomePage.css";
import css from "./HomePage.module.css";

export const HomePage = () => {
  console.log(css);
  return (
    <React.Fragment>
      <div className={css.contentWrapper}>
        <main className={css.main}>
          <section className={css.topArticle}>Grant Creates Blog</section>
          <section className={css.moreArticles}></section>
        </main>
        <aside className={css.articlesAside}></aside>
      </div>
    </React.Fragment>
  );
};
