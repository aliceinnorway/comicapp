import React from 'react';
import './Image.css';

class Image extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comicImage: '',
            isLoaded: false,
            number: 0,
            url: '',
        }
    }

    componentDidMount() {
        const max = 999
        const min = 1
        const randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;
        this.setState({number: randomNumber});
        console.log(this.number);
        const url = `http://xkcd.com/${randomNumber}/info.0.json`;
        this.setState({url: url})
    }

    async getImage(url) {
        const response = await fetch(url, { mode: 'no-cors' });
        const jsonResponse = await response.json();
        if (!jsonResponse.img) {
            return console.log("no image");
        }
        else {
            this.setState({
                isLoaded: true,
                comicImage: jsonResponse.img,
            });
        }
    }


    render() {
        const { comicImage , isLoaded , number } = this.state;
        
        if (!isLoaded ) {
            return (
                <h3>Loading comic number {number}...</h3>
            )
        } else { 
            return (
            <img src={comicImage} alt="comic"></img>
            );
        }
    };

}

export default Image;
