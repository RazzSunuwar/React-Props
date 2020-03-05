import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
    render(){
        return <h2>I am a {this.props.brand}!</h2>
    }
}

const myelment = <Car brand = "Buggati" />;


ReactDOM.render(myelment, document.getElementById('root'));

