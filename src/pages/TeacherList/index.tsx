import React from 'react';
import PageHeader from '../../components/pageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';
// import { Container } from './styles';

const TeacherList: React.FC = () => {
  return (<>
  <div id="page-teacher-list" className="container"> 
    <PageHeader title="Estes são os proffy disponíveis.">
      <form id="search-teachers">
        <div className="input-block">
          <label htmlFor="subject">Matéria</label>
          <input type="text" id="subject"></input>
        </div>
        <div className="input-block">
          <label htmlFor="week_day">Dia da Semana</label>
          <input type="text" id="week_day"></input>
        </div>
        <div className="input-block">
          <label htmlFor="time">Hora</label>
          <input type="text" id="time"></input>
        </div>
      </form>
    </PageHeader>
    <main>
      <article className="teacher-item">
        <img src="https://avatars3.githubusercontent.com/u/57242661?s=460&u=fce2873b8deda01718edae22c328d13c625b4950&v=4" alt="André Lopes"/>
        <div>
          <strong>André Lopes</strong>
          <small>Desenvolvimento Web</small>
          <p>
           Entusiasta das Melhores Tecnologias da web.
           <br></br>
           Apaixonado por desenvolver sistemas e interfaces Web
           e por Mudar a vida das pessoas atravez dessas tecnologias.
          </p>
        </div>
        <footer>
          <p>
            Preço/hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="whatsapp"></img>
          </button>
        </footer>
      </article>
    </main>
  </div>
  </>);
}

export default TeacherList;