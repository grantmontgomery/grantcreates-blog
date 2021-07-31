import * as React from "react";
// import "./HomePage.css";
import css from "./HomePage.module.css";

export const HomePage = () => {
  console.log(css);
  return (
    <React.Fragment>
      <div className={css["content-wrapper"]}>
        <main className={css.main}>
          <section className={css["main-article"]}></section>
          <section className={css["more-articles"]}></section>
        </main>
        <aside className={css["articles-aside"]}></aside>
      </div>
    </React.Fragment>
  );
};
