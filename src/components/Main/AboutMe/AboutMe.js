import './AboutMe.css';
import Title from '../Title/Title';
import photo from '../../../images/about-me__photo.jpg';

function AboutMe() {
    return (
    <section className='about-me'>
        <Title text="Студент" />
        <div className="about-me__info">
          <div className="about-me__group">
            <h2 className="about-me__name">Наталья</h2>
            <p className="about-me__age-and-profession">Фронтенд-разработчик, 26 лет</p>
            <p className="about-me__biography">Я родилась и живу в Москве, закончила факультет начального образования МПГУ. Люблю слушать музыку и заниматься творчеством. Три года проработа в школе и поняла что хочу попробовать другую профессию. Прошла курс по веб-разработке в Практикуме и поняла, что хочу развиваться и расти в этом направлении.
            </p>
            <a className="about-me__link" href="https://github.com/NatalyaG07">Github</a>
          </div>

          <img className="about-me__photo" src={photo} alt="Фото"></img>
        </div>
    </section>
  )
}

export default AboutMe;