
const DomOperations = require('../view/domOpeartions.js');
const $domOp = new DomOperations();

const url = 'https://rickandmortyapi.com/api/character/';



var text = document.getElementById("userTextBox").value;
console.log('text value', text);

module.exports = class APIOperations {

    processFetchApiWithGet(passedURL) {
        console.log('in git op url', url)
        console.log('in git op passedurl', passedURL)
        //debugger;
        var statusCode;
        var myArray = [];
        var myURL = passedURL ? passedURL : url;

        fetch(myURL)
            .then((response) => {
                //debugger;
                statusCode = response.status;
                if (response.ok) {
                    console.log('data:', response.clone().json())
                    return response.clone().json();
                } else {
                    //debugger;
                    $domOp.setResponseInWidget(objData.operation, myArray, statusCode);
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