//const RequestHandler = require("./requestHandler.js");

import './../scss/mystyles.scss';
import './../css/mystyles.css';


const APIOperations = require('./services/apiOperations.js');
const $apiOps = new APIOperations();
// $gitOps.processFetchApiWithGet();
// var text = document.getElementById("userTextBox").value;
// console.log('text value', text);
//var url = "https://rickandmortyapi.com/api/character/?page=2&name=rick";
document.getElementById('userTextBox').addEventListener('click', $gitOps.processFetchApiWithGet());





