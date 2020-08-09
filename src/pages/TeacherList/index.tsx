import React from 'react';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/teacherItem';
import Input from '../../components/input';
import './style.css';
// import { Container } from './styles';

const TeacherList: React.FC = () => {
  return (<>
  <div id="page-teacher-list" className="container"> 
    <PageHeader title="Estes são os proffy disponíveis.">
      <form id="search-teachers">
        <Input name="subject" label="Matéria"></Input>
        <Input name="week_day" label="Dia da semana"></Input>
        <Input type="time" name="time" label="Hora"></Input>
      </form>
    </PageHeader>
    <main>
     <TeacherItem></TeacherItem>
     <TeacherItem></TeacherItem>
     <TeacherItem></TeacherItem>
    </main>
  </div>
  </>);
}

export default TeacherList;