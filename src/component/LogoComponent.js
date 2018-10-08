import React from 'react';

class LogoComponent extends React.Component{

    render(){
       return(
           <img src={this.props.logoSrc} className="App-logo" alt="logo" />
       )
    }
}

export default LogoComponent;