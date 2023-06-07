import AppHeader from "../../app-header/app-header";
import notFoundImage from "../../../images/404.png";
import styles from "./not-found-page.module.css";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <>
      <AppHeader />
      <main
        className={styles.main}
        style={{ backgroundImage: `url('${notFoundImage}')` }}
      >
        <p className="text text_type_main-large">Упс...404</p>
        <p className="text text_type_main-default">
          Кажется, страницы не существует.
        </p>
        <p className="text text_type_main-default">
          Не переживайте, бургеры останутся горячими, они ждут вас{" "}
          <Link className={styles.link} to="/">
            тут
          </Link>
          .
        </p>
      </main>
    </>
  );
}
