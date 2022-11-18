import './Footer.css';

const currentDate = new Date();
const date = currentDate.getFullYear();

function Footer() {
    return (
    <section className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__group">
          <div className="footer__date">&copy; {date}</div>
          <ul className="footer__links">
            <li>
              <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a className="footer__link" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default Footer;