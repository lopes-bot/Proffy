import React from 'react';

// import { Container } from './styles';
import PageHeader from '../../components/pageHeader';
import Input from '../../components/input';
import warningIcon from '../../assets/images/icons/warning.svg';
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
          <Input name="name" label="Nome Completo"></Input>
          <Input name="avatar" label="Avatar"></Input>
          <Input name="whatsapp" label="Whatsapp"></Input>
      </fieldset>
      <fieldset>
        <legend>Sobre a Aula</legend>
          <Input name="subject" label="Matéria"></Input>
          <Input name="cost" label="Custo da sua hora por aula"></Input>
          <Input name="whatsapp" label="Whatsapp"></Input>
      </fieldset>
      <footer>
        <p>
          <img src={warningIcon} alt="Aviso Importante"></img>
          Importante! <br></br>
          Preencha todos os dados
        </p>
        <button type="button">
          Salvar Cadastro
        </button>
      </footer>
    </main>
  </div>
  </>);
}

export default TeacherForm;