import {HomeStyles} from "../style/Home.styles";

const Home = () => {
    return (
        <HomeStyles>
            <h2>Привет! Это проект Консоль.</h2>
            <p> Консоль — это тестовые задания из примеров кода на JavaScript и вариантов ответов на извечный вопрос
                “Что выведется в консоль”.</p>
            <p>Вопросы собираются из разных источников: личного опыта, занятных постов из социальных сетей, часть
                вопросов взята из <a href="https://github.com/lydiahallie/javascript-questions" target="_blank"
                                     rel="noreferrer">репозитория
                    Lydia Hallie</a>.</p>
            <p>Цель проекта помочь junior разработчикам прорешивать задания для собеседований.</p>
            <p>Консоль — open source проект. Вы можете предлагать свои вопросы для тестовых заданий в открытом
                репозитории на <a href="https://github.com/oxitenko/js-tests" target="_blank"
                                  rel="noreferrer">GitHub</a>.</p>
        </HomeStyles>
    );
};

export default Home;