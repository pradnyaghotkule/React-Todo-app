import React from 'react';
import LogoComponent from './LogoComponent';
import logo from '../logo.svg';


class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            headerText:'Todo App using React'
        };
    }
    render(){
       return(
           <div>
           <h2>{this.state.headerText}</h2>
           <LogoComponent logoSrc={logo}/>
          </div>
       )
    }
}

export default HeaderComponent;