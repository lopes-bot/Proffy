import React from 'react';
import logoImg from '../../assets/images/logo.svg'; 

// import { Container } from './styles';

const Landing: React.FC = () => {
  return (<>
  
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt=""/>

                </div>
            </div>

        </div>
  </>);
}

export default Landing;