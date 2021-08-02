import * as React from "react";
import css from "./HomePage.module.css";
import { Article } from "../../components";
export const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <div className={css.contentWrapper}>
        <main className={css.main}>
          <section className={css.topArticle}>
            {/* <div className={css.loadingLine}></div> */}
          </section>
          <section className={css.moreArticles}>
            <Article></Article>
            <Article></Article>
          </section>
        </main>
        <aside className={css.articlesAside}></aside>
      </div>
    </React.Fragment>
  );
};
