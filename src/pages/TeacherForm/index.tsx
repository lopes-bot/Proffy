import React from 'react';

// import { Container } from './styles';
import PageHeader from '../../components/pageHeader';
const TeacherForm: React.FC = () => {
  return (<>
    <div id="page-teacher-form" className="container"> 
    <PageHeader 
    title="Que incrível que você quer da aulas."
    description="O primeiro passo é preencher esse formulario de inscrição"
    ></PageHeader>
  </div>
  </>);
}

export default TeacherForm;