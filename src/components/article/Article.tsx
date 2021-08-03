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
    <div className={css.articleWrapper}>
      <div className={css.imageWrapper}>
        <img src="" alt="" />
      </div>

      <div className={css.linksWrapper}>
        <a className={css.userLink}>
          <div className={css.iconWrapper}>
            <img></img>
          </div>
          <p></p>
        </a>
        <a className={css.articleLink}>
          <h3>Title</h3>
        </a>
      </div>
      <a>
        <h2></h2>
      </a>
    </div>
  );
};
