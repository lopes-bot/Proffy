import React from 'react';

// import { Container } from './styles';
import PageHeader from '../../components/pageHeader';
import './style.css';
const TeacherForm: React.FC = () => {
  return (<>
    <div id="page-teacher-form" className="container"> 
    <PageHeader 
    title="Que incrível que você quer da aulas."
    description="O primeiro passo é preencher esse formulario de inscrição"
    ></PageHeader>
    <main>
      <fieldset>
        <legend>Seus dados</legend>

        <div className="input-block">
          <label htmlFor="name">Nome Completo</label>
          <input type="text" id="name"></input>
        </div>

        <div className="input-block">
          <label htmlFor="avatar">Avatar</label>
          <input type="text" id="avatar"></input>
        </div>

        <div className="input-block">
          <label htmlFor="whatsapp">whatsapp</label>
          <input type="text" id="whatsapp"></input>
        </div>
      </fieldset>
    </main>
  </div>
  </>);
}

export default TeacherForm;