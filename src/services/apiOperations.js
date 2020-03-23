
const DomOperations = require('../view/domOpeartions.js');
const $domOp = new DomOperations();

let url = 'https://rickandmortyapi.com/api/character/';
//let url = "https://rickandmortyapi.com/api/character/?page=2&name=";

module.exports = class APIOperations {

    processFetchApiWithGet(query) {

        var statusCode;
        var myArray = [];
        console.log('textvalue', query)
        if (query) {
            url = "https://rickandmortyapi.com/api/character/?page=1&" + query;
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