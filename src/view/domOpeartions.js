module.exports = class DomOperations {

    createCharaterCards(myArray, statusCode) {
        //debugger;

        var characterCards = document.getElementsByClassName('character-card');
        if (characterCards.length > 1) {
            console.log('characterCards', characterCards)
            console.log('characterCards.length', characterCards.length)
            var parent = document.getElementById('card-area');
            for (var i = 0; i < characterCards.length; i++)
                parent.removeChild(characterCards[i]);
        } else {
            if (statusCode == 200) {
                let item;

                console.log('dom myArray', myArray.results[0])
                var parent = document.getElementById('card-area');

                for (var i = 0; i < myArray.results.length; i++) {
                    let div1 = document.createElement('div');
                    div1.className = 'my-card col-12 col-md-3';
                    div1.style.width = "240px"

                    // var div1 = document.getElementById('card-area');

                    let data = myArray.results[i];

                    let cardTitle = data.name;
                    console.log('card tite', cardTitle)
                    let charImageURL = data.image;
                    let charStatus = data.status;
                    let charSpecies = data.species;
                    let charGender = data.gender;
                    let charOrigin = data.origin.name.split('(')[0].trim();
                    let charLastLocation = data.location.name.split('(')[0].trim();

                    var cardContent = '<div class="character-card bg-dark my-3"><div class="card-img-caption"><img class="card-img-top character-img" src=' + charImageURL + ' alt = "Card image cap"></img> <div class="char-title">' + cardTitle + '</div></div><div class="card-body" > <ul class="list-group list-group-flush bg-secondary character-features"> <li class="list-group-item bg-secondary character-features-item" style="border: none;"> <strong>STATUS</strong> <div class="text-warning character-features-value">' + charStatus + '</div> </li> <li class="list-group-item bg-secondary character-features-item" style="border: none"> <strong>SPECIES</strong><span class="list-group text-warning character-features-value">' + charSpecies + '</span></li> <li class="list-group-item bg-secondary character-features-item" style="border: none"><strong>GENDER</strong><span class="list-group text-warning character-features-value">' + charGender + '</span> </li>  <li class="list-group-item bg-secondary character-features-item" style="border: none"> <strong>ORIGIN</strong> <span class="list-group text-warning character-features-value">' + charOrigin + '</li><li class="list-group-item bg-secondary character-features-item" style="border: none"> <strong>LAST LOCATION</strong> <span class="list-group text-warning character-features-value"}>' + charLastLocation + '</span> </li > </ul ></div ></div > ';

                    div1.innerHTML = cardContent;
                    parent.appendChild(div1);
                }
            }
        }

        // if (operationType == "createRepo") {
        //     if (statusCode == 201) {

        //         var tablearea = document.getElementById('myWidget');
        //         var table = document.createElement('table');

        //         table.setAttribute("id", "command_result");

        //         //create table data
        //         debugger;
        //         var tr = document.createElement('tr');
        //         var td1 = document.createElement('td');
        //         var td2 = document.createElement('td');
        //         td1.style.border = "1px solid blue";
        //         td2.style.border = "1px solid blue";
        //         var repoNameTag = document.createTextNode("Repo Name");  //Repo Name
        //         var repoName = document.createTextNode(myArray.name);
        //         td1.appendChild(repoNameTag);
        //         td2.appendChild(repoName);
        //         tr.appendChild(td1);
        //         tr.appendChild(td2);
        //         table.appendChild(tr);

        //         var tr = document.createElement('tr');
        //         var td1 = document.createElement('td');
        //         var td2 = document.createElement('td');
        //         td1.style.border = "1px solid blue";
        //         td2.style.border = "1px solid blue";
        //         var repoDescTag = document.createTextNode("Repo Desc");     ////Repo Desc
        //         var repoDesc = document.createTextNode(myArray.description);
        //         td1.appendChild(repoDescTag);
        //         td2.appendChild(repoDesc);
        //         tr.appendChild(td1);
        //         tr.appendChild(td2);
        //         table.appendChild(tr);

        //         var tr = document.createElement('tr');
        //         var td1 = document.createElement('td');
        //         var td2 = document.createElement('td');
        //         td1.style.border = "1px solid blue";
        //         td2.style.border = "1px solid blue";
        //         var repoIdTag = document.createTextNode("Repo Id");  //Repo Id
        //         var repoId = document.createTextNode(myArray.id);
        //         td1.appendChild(repoIdTag);
        //         td2.appendChild(repoId);
        //         tr.appendChild(td1);
        //         tr.appendChild(td2);
        //         table.appendChild(tr);

        //         var tr = document.createElement('tr');
        //         var td1 = document.createElement('td');
        //         var td2 = document.createElement('td');
        //         td1.style.border = "1px solid blue";
        //         td2.style.border = "1px solid blue";
        //         var repoCloneUrlTag = document.createTextNode("Repo Clone Url"); //Repo Clone URL
        //         var repoCloneUrl = document.createTextNode(myArray.clone_url);
        //         td1.appendChild(repoCloneUrlTag);
        //         td2.appendChild(repoCloneUrl);
        //         tr.appendChild(td1);
        //         tr.appendChild(td2);
        //         table.appendChild(tr);

        //         var tr = document.createElement('tr');
        //         var td1 = document.createElement('td');
        //         var td2 = document.createElement('td');
        //         td1.style.border = "1px solid blue";
        //         td2.style.border = "1px solid blue";
        //         var repoOwnerIdTag = document.createTextNode("Repo Owner Id");  //Repo Owner Id
        //         var repoOwnerId = document.createTextNode(myArray.owner.login);
        //         td1.appendChild(repoOwnerIdTag);
        //         td2.appendChild(repoOwnerId);
        //         tr.appendChild(td1);
        //         tr.appendChild(td2);
        //         table.appendChild(tr);

        //         var tr = document.createElement('tr');
        //         var td1 = document.createElement('td');
        //         var td2 = document.createElement('td');
        //         td1.style.border = "1px solid blue";
        //         td2.style.border = "1px solid blue";
        //         var repoOwnerNameTag = document.createTextNode("Repo Owner Login"); //Repo Owner Login
        //         var repoOwnerName = document.createTextNode(myArray.name);
        //         td1.appendChild(repoOwnerNameTag);
        //         td2.appendChild(repoOwnerName);
        //         tr.appendChild(td1);
        //         tr.appendChild(td2);
        //         table.appendChild(tr);
        //         tablearea.appendChild(table);
        //     } //201 ends
        //     else if (statusCode == 422) {
        //         var tablearea = document.getElementById('myWidget');
        //         var table = document.createElement('table');
        //         table.setAttribute("id", "command_result");


        //         var tr = document.createElement('tr');
        //         var td = document.createElement('td');
        //         td.style.border = "1px solid blue";

        //         var errorMsg = document.createTextNode("Repo with this name already exists");  //error msg
        //         td.appendChild(errorMsg);
        //         tr.appendChild(td);

        //         table.appendChild(tr);
        //         table.style.border = "3px solid black";
        //         tablearea.appendChild(table);
        //     }
        // } //createRepo ends

    }

}