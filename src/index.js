//const RequestHandler = require("./requestHandler.js");

import './../scss/mystyles.scss';
import './../css/mystyles.css';
require('./eventHandlers/eventListener.js');


const GitOperations = require('./services/gitOperations.js');
const $gitOps = new GitOperations();
$gitOps.processFetchApiWithGet();

$('#userTextBox').keyup(function (e) {      //Moved to eventListener.js
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
        var command = document.getElementById('userTextBox').value;    //Moved to recastOperations.js
        var text = { "text": command };
        console.log('text', text)
        var url = "https://rickandmortyapi.com/api/character/?page=2&name=" + text;
        console.log('url', url)
        $gitOps.processFetchApiWithGet(url);
        var bodyRelevant = '';
        var intent = '';
        var intentData = {};

        //     fetch(url)
        //         .then(function (response) {
        //             response.json().then(function (body) {
        //                 debugger;
        //                 bodyRelevant = body.results;
        //                 if (!bodyRelevant.intents[0]) {           //Error Check 1
        //                     alert("Command Not Matched to Reacast");
        //                     return;
        //                 }
        //                 intent = bodyRelevant.intents[0]["slug"];
        //                 intentData = body.results.entities; //body.results.entities.git_repo[0].value;
        //                 debugger;
        //                 alert("intent is : " + intent);
        //                 displayModal(intent, intentData);
        //                 // processRequestsForGit(intent,intentData);                
        //             });
        //         })
        //         .catch(function (error) {
        //             console.error('Fetch Error =\n', error);
        //         });

    }
});




