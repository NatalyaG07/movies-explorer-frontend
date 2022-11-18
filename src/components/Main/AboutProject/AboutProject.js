import './AboutProject.css';
import Title from '../Title/Title';

function AboutProject() {
    return (
    <section className='about-project'>
        <Title text="О проекте" />
        <ul className="about-project__texts">
            <li className='about-project__text'>
                <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                <p className="about-project__info">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </li>
            <li className='about-project__text'>
                <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                <p className="about-project__info">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </li>
        </ul>
        <div className="time">
            <div className="time__line time__line_black">1 неделя</div>
            <div className="time__line">4 недели</div>
            <div className="time__info">Back-end</div>
            <div className="time__info">Front-end</div>
        </div>

    </section>
  )
}

export default AboutProject;