import "./Page404.css";
import { Link } from "react-router-dom";

function Page404() {

  return (
    <section className="page-404">
        <h1 className="page-404__code">404</h1>
        <p className="page-404__text">Страница не найдена</p>
        <Link className="page-404__link" to="/">Назад</Link>
    </section>
  );
}

export default Page404;