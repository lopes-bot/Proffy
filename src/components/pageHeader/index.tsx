import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';  
import logoImg from '../../assets/images/logo.svg';
import './style.css'


// import { Container } from './styles';
interface PageHeaderProps{
    title:string;
    description?:string;

}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (<>
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="volta"></img>
        </Link>
        <img src={logoImg} alt="proffy"></img>
      </div>
      <div className="header-content"> 
         <strong>{props.title}</strong>
          {props.description ? <p>{props.description}</p> : null}
        {props.children} 
      </div>
      
    </header>
  
  </>);
}

export default PageHeader;