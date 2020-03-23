import './../scss/mystyles.scss';
import './../css/mystyles.css';


const APIOperations = require('./services/apiOperations.js');
const $apiOps = new APIOperations();

const DOMOperations = require('./view/domOpeartions');
const $domOps = new DOMOperations();

let charCollection = $apiOps.processFetchApiWithGet();

let searchButton = document.getElementById("search-button");
const textValue = document.getElementById('searchBoxInput').value;

// console.log('text value', text);
//var url = "https://rickandmortyapi.com/api/character/?page=2&name=" + text;
searchButton.addEventListener('click', findCharacterByGivenName);

function findCharacterByGivenName() {
    const textValue = document.getElementById('searchBoxInput').value;
    let query = "name=" + textValue;
    $domOps.emptyScreenCards();
    $apiOps.processFetchApiWithGet(query);
}


document.getElementById('sort-ascending').addEventListener('click', sortDataInAscendingID);
// document.getElementById('sort-descending').addEventListener('click', sortDataInDescendingID);

function sortDataInAscendingID() {
    $domOps.createCharacterCards(charCollection, 200);
    console.log('inside sort', '')
    console.log('index myaray', myArray);
}