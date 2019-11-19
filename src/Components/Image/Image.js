import React from 'react';
import './Image.css';

class Image extends React.Component {



    generateNumber() {
        const max = 999
        const min = 1
        return Math.floor(Math.random() * (+max - +min)) + +min;
    }

    render() {
        return (
        <h1>{this.generateNumber()}</h1>
        )
    }

}

export default Image;