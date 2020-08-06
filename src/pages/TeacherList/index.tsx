import React from 'react';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/teacherItem';
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
     <TeacherItem></TeacherItem>
    </main>
  </div>
  </>);
}

export default TeacherList;