import React,{InputHTMLAttributes} from 'react';

// import { Container } from './styles';
interface Inputprops  extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
    name:string;
     
}

const Input: React.FC <Inputprops> = ({label , name , ...rest}) => {
  return (
      <div className="input-block">
          <label htmlFor={name}>{label}</label>
          <input type="text" id={name} {...rest}></input>
      </div>
  );
}

export default Input;