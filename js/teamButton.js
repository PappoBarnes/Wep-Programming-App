// function teamBtn(){
let teamBtn;
document.getElementById("teamBtn").onclick = teamBtn;

//- Using an anonymous function:
teamBtn = document.getElementById("teamBtn").onclick = function () {
// location.reload();
 clearPage();
 document.getElementById("titleDiv").style.display="none";
document.getElementById("teamDiv").style.display="grid";
document.getElementById("mapDiv").style.display="none";
document.getElementById("map").style.display="none";
document.getElementById("teamCrimeDiv").style.display="none";
document.getElementById("searchForm").style.display="none";
document.getElementById("playersDiv").style.display="none";
document.getElementById("searchDiv").style.display="none";

document.getElementById("infoDiv").style.display="none";
document.getElementById("crimeDiv").style.display="none";
document.getElementById("chartContainer_1").style.display="none";
document.getElementById("chartContainer_2").style.display="none";
document.getElementById("chartContainer_3").style.display="none";

// document.querySelector('.teamInfo').style.display="none";
// document.querySelector('.teamNick').style.display="none";

// document.getElementById("teamData").style.display="none";


// 3: And there's attaching a function to the event handler using Javascript:

var el = document.getElementById("teamBtn");
if (el.addEventListener)
    el.addEventListener("click", teamBtn, false);
else if (el.attachEvent)
    el.attachEvent('onclick', teamBtn);



    let teamUrl = "http://nflarrest.com/api/v1/team";
      $.ajax({url: teamUrl, success: function(json){
        const teams = json;
        teams.forEach(function(team){
        console.log(team);
        });

        // CREATE DOCUMENT FRAGEMNT/////////////////////////////
        const teamFragment = document.createDocumentFragment();
          teams.forEach(function(team){



            // const newH = document.createElement("h2"); 	//create a <li> element
            const teamData = document.createElement("div");
            teamData.setAttribute("class", "teamData");
            const teamH1 = document.createElement("h3");
            const teamPar = document.createElement("p");
            const teamPar2 = document.createElement("p");


            const teamPrefName = document.createTextNode(`${team.Team_preffered_name}`); //create some text
            const teamNick = document.createTextNode(`Nickname : ${team.Team_name}`); //create some text
            const teamCount = document.createTextNode(` Total Arrest Count: ${team.arrest_count} `); //create some text


            teamData.appendChild(teamH1);
            teamH1.appendChild(teamPrefName);
            teamData.appendChild(teamPar);
            teamPar.appendChild(teamNick);
            teamData.appendChild(teamPar2);
            teamPar2.appendChild(teamCount);
            teamDiv.appendChild(teamData);

              });

              teamDiv.appendChild(teamFragment);




}});
function clearPage(){
    while(teamDiv.firstChild){
      teamDiv.removeChild(teamDiv.firstChild);
    }
  }

  };


  // function doIt()
  // {
  //     console.log("button was clicked");
  // }
  // const btn=document.querySelector(".teamName"); //get hold of the button
  // btn.addEventListener("click", doIt, false); //when the button is clicked run the function doIt()
