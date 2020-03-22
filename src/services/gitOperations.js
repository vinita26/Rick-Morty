
const DomOperations = require('./../view/domOpeartions.js');
const $domOp = new DomOperations();

const url = 'https://rickandmortyapi.com/api/character/';

module.exports = class GitOperations {
    //results[0].name
    processFetchApiWithGet(passedURL) {
        console.log('in git op url', url)
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
                console.log('value', myArray.results[0].name)
                $domOp.createCharaterCards(myArray, statusCode);
            })
            .catch((err) => {
                console.log("Error:", err.message);
            })
    }

}