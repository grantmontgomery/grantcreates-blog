import * as React from "react";
import css from "./Article.module.css";

// interface Props {
//   imageSrc: string;
//   link: string;
//   title: string;
//   date: string;
// }

export const Article: React.FC = () => {
  return (
    <div className={css.articleLink}>
      <div className={css.imageWrapper}>
        <img src="" alt="" />
      </div>

      <div className={css.linksWrapper}></div>
      <a>
        <h2></h2>
      </a>
    </div>
  );
};
