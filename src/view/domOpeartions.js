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

                    let charTitle = data.name;
                    let charID = data.id;
                    var d = new Date();
                    let currentYear = d.getFullYear();
                    let charCreated = currentYear - data.created.split('-')[0];
                    let charImageURL = data.image;
                    let charStatus = data.status;
                    let charSpecies = data.species;
                    let charGender = data.gender;
                    let charOrigin = data.origin.name.split('(')[0].trim();
                    let charLastLocation = data.location.name.split('(')[0].trim();

                    var cardContent = '<div class="character-card bg-dark my-3"><div class="card-img-caption"><img class="card-img-top character-img" src=' + charImageURL + ' alt = "Card image cap"></img> <div class="char-title">' + charTitle + '</br><span>id: ' + charID + '</span><span> - </span><span>created  ' + charCreated + ' years ago</span></div><div class="card-body" > <ul class="list-group list-group-flush bg-secondary character-features"> <li class="list-group-item bg-secondary character-features-item" style="border: none;"> <strong>STATUS</strong> <div class="text-warning character-features-value">' + charStatus + '</div> </li> <li class="list-group-item bg-secondary character-features-item" style="border: none"> <strong>SPECIES</strong><span class="list-group text-warning character-features-value">' + charSpecies + '</span></li> <li class="list-group-item bg-secondary character-features-item" style="border: none"><strong>GENDER</strong><span class="list-group text-warning character-features-value">' + charGender + '</span> </li>  <li class="list-group-item bg-secondary character-features-item" style="border: none"> <strong>ORIGIN</strong> <span class="list-group text-warning character-features-value">' + charOrigin + '</li><li class="list-group-item bg-secondary character-features-item" style="border: none"> <strong>LAST LOCATION</strong> <span class="list-group text-warning character-features-value"}>' + charLastLocation + '</span> </li > </ul ></div ></div > ';

                    div1.innerHTML = cardContent;
                    parent.appendChild(div1);
                }
            }
        }

    }

}