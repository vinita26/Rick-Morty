const GitOperations = require('./../services/gitOperations.js');
const $gitOps = new GitOperations();


// const InvokeRecast = require('./../services/recastOperations.js');
// const $reCast = new InvokeRecast();

// module.exports = $(document).ready(function () {

    // $('#userTextBox').keyup(function (e) {
    //     var code = (e.keyCode ? e.keyCode : e.which);
    //     if (code == 13) {
    //         //$reCast.invokeReact();
    //     }
    // });


    //Buttton Click Events
    // $("#createRepoOk").on('click', function () {  // Ok Button in Create Repo
    //     debugger;
    //     document.getElementById("createRepoClose").click();
    //     var repoName = document.getElementById("create-repo-repoName").value;
    //     var repoDesc = document.getElementById("create-repo-repoDesc").value;
    //     let url = 'https://api.github.com/user/repos';
    //     var newRepoJson = {
    //         "name": repoName,
    //         "description": repoDesc,
    //         "homepage": "https://github.com",
    //         "private": false,
    //         "has_issues": true,
    //         "has_wiki": true
    //     }
    //     var objData = {};
    //     objData.url = url;
    //     objData.method = "POST";
    //     objData.jsonData = newRepoJson;
    //     objData.operation = "createRepo";
    //     $gitOps.processFetchApiWithPost(objData);

    // });

//})