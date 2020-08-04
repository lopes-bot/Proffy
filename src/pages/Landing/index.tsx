import React from 'react';
import logoImg from '../../assets/images/logo.svg'; 
import landingImg from '../../assets/images/landing.svg';

// import { Container } from './styles';

const Landing: React.FC = () => {
  return (<>
  
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={landingImg} alt="plataforma de estudos"></img>
            </div>

        </div>
  </>);
}

export default Landing;