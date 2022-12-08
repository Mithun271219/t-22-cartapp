import React from 'react'
import ReactDOM from 'react-dom';
import "./index.css"

import App from './Deck'
import Navbar from './Navbarrr'
import Hdr from './Header';

ReactDOM.render(<Navbar />, document.getElementById('nav'))
ReactDOM.render(<Hdr />, document.getElementById("headere"))
ReactDOM.render(<App />, document.getElementById("maincontet"));

