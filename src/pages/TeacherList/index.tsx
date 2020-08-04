import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';  
import logoImg from '../../assets/images/logo.svg';
import './style.css';

// import { Container } from './styles';

const TeacherList: React.FC = () => {
  return (<>
  <div id="page-techer-list" className="container">
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="volta"></img>
        </Link>
        <img src={logoImg} alt="proffy"></img>
      </div>
      <div className="header-content"> 
        <strong>Estes são os proffy disponíveis.</strong>
      </div>

    </header>

  </div>
  </>);
}

export default TeacherList;