//const RequestHandler = require("./requestHandler.js");

import './../scss/mystyles.scss';
import './../css/mystyles.css';


const APIOperations = require('./services/apiOperations.js');
const $apiOps = new APIOperations();
$apiOps.processFetchApiWithGet()

let searchBox = document.getElementById("searchBoxInput");

//let text = document.getElementById('userTextBox').value;
// const text = document.getElementById('userTextBox').value;

// console.log('text value', text);
//var url = "https://rickandmortyapi.com/api/character/?page=2&name=" + text;
searchBox.addEventListener('click', $apiOps.processFetchApiWithGet());
// searchBox.addEventListener('input', alert(text));

// $('#userTextBox').keyup(function (e) {
//     // var code = (e.keyCode ? e.keyCode : e.which);
//     // if (code == 13) {
//     //     $apiOps.processFetchApiWithGet();
//     // }
//     $apiOps.processFetchApiWithGet();
// });

