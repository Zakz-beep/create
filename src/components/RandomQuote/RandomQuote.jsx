import { useState } from "react";
import './RandomQuote.css'
import Twitter from '../Assets/twitter-svgrepo-com.svg'

const RandomQuote = () => {
    const [quote, setQuote] = useState({
        "author": "Jordi",
        "quote": "Nice Try Boy!"
    });
    let quotes = [{
        "author": "Jordi",
        "quote": "Well played!"
    }, {
        "author": "Akbar",
        "quote": "Im A Proud!"
    }]

    function LoadQuotes(){
        let random = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[random]);
    }
    return (
        <div className="container">
            <div className="heading">
                <h1>RandomQuote</h1>
            </div>
            <div className="quote">{quote.quote}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">
                        {quote.author}
                    </div>
                    <div className="icons">
                        <img src={Twitter} alt="" onClick={LoadQuotes}  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomQuote;