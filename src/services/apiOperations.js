
const DomOperations = require('../view/domOpeartions.js');
const $domOp = new DomOperations();

//let url = 'https://rickandmortyapi.com/api/character/';
let url = "https://rickandmortyapi.com/api/character/?page=2&name=";


module.exports = class APIOperations {

    processFetchApiWithGet() {
        console.log('in git op url', url)
        // console.log('in git op passedurl', passedURL)
        debugger;
        var statusCode;
        var myArray = [];
        // var myURL = passedURL ? passedURL : url;
        const text = document.getElementById('searchBoxInput').value;
        console.log('text value', text);

        // let text = document.getElementById("userTextBox").value;
        // let url = "https://rickandmortyapi.com/api/character/?page=2&name=";

        fetch(url + text)
            .then((response) => {
                //debugger;
                statusCode = response.status;
                if (response.ok) {
                    return response.clone().json();
                } else {
                    //debugger;
                    console.log('Error in response', response);
                    //$domOp.setResponseInWidget( myArray, statusCode);
                }
            })
            .then((jsonData) => {
                myArray = jsonData;
                console.log('array', myArray)
                $domOp.createCharaterCards(myArray, statusCode);
            })
            .catch((err) => {
                console.log("Error:", err.message);
            })
    }

}