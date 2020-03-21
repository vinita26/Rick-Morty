

module.exports = class DomOperations {

    setResponseInWidget(operationType, myArray, statusCode) {
        debugger;

        alert("setResponseInWidget : " + statusCode);

        if (document.getElementById("command_result")) {
            var parent = document.getElementById('myWidget');
            var child = document.getElementById("command_result");
            parent.removeChild(child);
        }


        if (operationType == "createRepo") {
            if (statusCode == 201) {

                var tablearea = document.getElementById('myWidget');
                var table = document.createElement('table');

                table.setAttribute("id", "command_result");

                //create table data
                debugger;
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var repoNameTag = document.createTextNode("Repo Name");  //Repo Name
                var repoName = document.createTextNode(myArray.name);
                td1.appendChild(repoNameTag);
                td2.appendChild(repoName);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var repoDescTag = document.createTextNode("Repo Desc");     ////Repo Desc
                var repoDesc = document.createTextNode(myArray.description);
                td1.appendChild(repoDescTag);
                td2.appendChild(repoDesc);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var repoIdTag = document.createTextNode("Repo Id");  //Repo Id
                var repoId = document.createTextNode(myArray.id);
                td1.appendChild(repoIdTag);
                td2.appendChild(repoId);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var repoCloneUrlTag = document.createTextNode("Repo Clone Url"); //Repo Clone URL
                var repoCloneUrl = document.createTextNode(myArray.clone_url);
                td1.appendChild(repoCloneUrlTag);
                td2.appendChild(repoCloneUrl);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var repoOwnerIdTag = document.createTextNode("Repo Owner Id");  //Repo Owner Id
                var repoOwnerId = document.createTextNode(myArray.owner.login);
                td1.appendChild(repoOwnerIdTag);
                td2.appendChild(repoOwnerId);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var repoOwnerNameTag = document.createTextNode("Repo Owner Login"); //Repo Owner Login
                var repoOwnerName = document.createTextNode(myArray.name);
                td1.appendChild(repoOwnerNameTag);
                td2.appendChild(repoOwnerName);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);
                tablearea.appendChild(table);
            } //201 ends
            else if (statusCode == 422) {
                var tablearea = document.getElementById('myWidget');
                var table = document.createElement('table');
                table.setAttribute("id", "command_result");


                var tr = document.createElement('tr');
                var td = document.createElement('td');
                td.style.border = "1px solid blue";

                var errorMsg = document.createTextNode("Repo with this name already exists");  //error msg
                td.appendChild(errorMsg);
                tr.appendChild(td);

                table.appendChild(tr);
                table.style.border = "3px solid black";
                tablearea.appendChild(table);
            }
        } //createRepo ends

    }

}