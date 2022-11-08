import './Portfolio.css';
import arrow from '../../../images/portfolio__arrow.svg';

function Portfolio() {
    return (
    <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
          <nav>
            <ul className="portfolio__links">
              <li>
                <a className="portfolio__link" href="https://github.com/NatalyaG07/how-to-learn" target="_blank" rel="noreferrer">
                  <p className="portfolio__paragraph">Статичный сайт</p>
                  <img className="portfolio__arrow" src={arrow} alt="стрелка"></img>
                </a>
              </li>

              <li>
                <a className="portfolio__link" href="https://github.com/NatalyaG07/russian-travel" target="_blank" rel="noreferrer">
                  <p className="portfolio__paragraph">Адаптивный сайт</p>
                  <img className="portfolio__arrow" src={arrow} alt="стрелка"></img>
                </a>
              </li>

              <li>
                <a className="portfolio__link" href="https://github.com/NatalyaG07/react-mesto-auth" target="_blank" rel="noreferrer">
                  <p className="portfolio__paragraph">Одностраничное приложение</p>
                  <img className="portfolio__arrow" src={arrow} alt="стрелка"></img>
                </a>
              </li>
            </ul>
          </nav>
    </section>
  )
}

export default Portfolio;