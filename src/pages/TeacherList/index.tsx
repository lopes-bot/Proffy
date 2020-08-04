import React from 'react';
import PageHeader from '../../components/pageHeader';
import './style.css';
// import { Container } from './styles';

const TeacherList: React.FC = () => {
  return (<>
  <div id="page-teacher-list" className="container"> 
    <PageHeader title="Estes são os proffy disponíveis."></PageHeader>
  </div>
  </>);
}

export default TeacherList;