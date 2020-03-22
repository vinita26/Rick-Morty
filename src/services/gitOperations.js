
const DomOperations = require('./../view/domOpeartions.js');
const $domOp = new DomOperations();

const url = 'https://rickandmortyapi.com/api/character/';

module.exports = class GitOperations {
    //results[0].name
    processFetchApiWithGet() {
        //debugger;
        var statusCode;
        var myArray = [];

        fetch(url)
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