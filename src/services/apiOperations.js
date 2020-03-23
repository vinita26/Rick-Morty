
const DomOperations = require('../view/domOpeartions.js');
const $domOp = new DomOperations();

let url = 'https://rickandmortyapi.com/api/character/';
//let url = "https://rickandmortyapi.com/api/character/?page=2&name=";

module.exports = class APIOperations {

    processFetchApiWithGet(textValue) {

        var statusCode;
        var myArray = [];
        console.log('textvalue', textValue)
        if (textValue) {
            url = "https://rickandmortyapi.com/api/character/?page=2&name=" + textValue;
            console.log('url with text', url);
        }

        fetch(url)
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
                $domOp.createCharacterCards(myArray, statusCode);
                return myArray;
            })
            .catch((err) => {
                console.log("Error:", err.message);
            })
    }

}