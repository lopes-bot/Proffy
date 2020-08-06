import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';
// import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (<>
   <article className="teacher-item">
        <header>
          <img src="https://avatars3.githubusercontent.com/u/57242661?s=460&u=fce2873b8deda01718edae22c328d13c625b4950&v=4" alt="André Lopes"/>
        <div>
          <strong>André Lopes</strong>
          <span>Desenvolvimento Web</span>
         
        </div> 
        
        </header>
        <p>
           Entusiasta das Melhores Tecnologias da web.
           <br></br><br></br>
           Apaixonado por desenvolver sistemas e interfaces Web
           e por Mudar a vida das pessoas atravez dessas tecnologias.
          </p> 
        <footer>
          <p>
            Preço/hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="whatsapp"></img>
            Entre em Contato
          </button>
        </footer>
      </article>
  </>);
}

export default TeacherItem;