

// PLAYER BUTTON VARIABLE
let playerBtn;

//GRAB THE BUTTON
document.getElementById("playerBtn").onclick = playerBtn;
// ONCLICK FUNCTION
playerBtn = document.getElementById("playerBtn").onclick = function () {
// CLEAR PAGE FUNCTION
 clearPage();
 document.getElementById("titleDiv").style.display="block";

 document.getElementById("teamDiv").style.display="none";
 document.getElementById("mapDiv").style.display="none";
 document.getElementById("map").style.display="none";
 document.getElementById("teamCrimeDiv").style.display="none";
 document.getElementById("searchForm").style.visibility="hidden";
 document.getElementById("searchForm").style.display="none";
 document.getElementById("searchDiv").style.display="none";

 document.getElementById("playersDiv").style.display="grid";

document.getElementById("chartContainer_2").style.display="block";
document.getElementById("chartContainer_3").style.display="none";
document.getElementById("chartContainer_1").style.display="none";

 // document.getElementById("playersDiv").style.display="grid";
 document.getElementById("infoDiv").style.display="none";
 document.getElementById("crimeDiv").style.display="none";






// GET AJAX
			let playerDataUrl = "http://nflarrest.com/api/v1/player";
				$.ajax({url: playerDataUrl,success: function(json){
					const playerData = json;
						console.log(playerData);
// CREATE DOCUMENT FRAGMENT
				      const playerFragment = document.createDocumentFragment();
					    playerData.forEach(function(player){
              const playerInfo = document.createElement("div");
              playerInfo.setAttribute("class", "playerInfo");
							const playerName = document.createElement("h3"); 	//create a <h3> element
							const playerTeam = document.createElement("p");	//create a <p> element
							const playerCount = document.createElement("p");//create a <p> element
							const newName = document.createTextNode(`${player.Name}`); //create some text
							const newTeam = document.createTextNode(`${player.Team_name}`); //create some text
              const newCount = document.createTextNode(`Arrest Count: ${player.arrest_count}`); //create some text
// APPEND THE DIV WITH DATA
              playerInfo.appendChild(playerName);
              playerName.appendChild(newName);

              playerInfo.appendChild(playerTeam);
              playerTeam.appendChild(newTeam);

              playerInfo.appendChild(playerCount);
              playerCount.appendChild(newCount);
              playersDiv.appendChild(playerInfo);
					});

						playersDiv.appendChild(playerFragment);
				}});
	};

  const title = document.createElement("div");
  const pageHeading = document.createElement("h3");
  const newTitle = document.createTextNode(`Top Offenders`);
  title.appendChild(pageHeading);
  pageHeading.appendChild(newTitle);
  titleDiv.appendChild(title);
  // PLAYER JSON DATA
        var svgPlayer = dimple.newSvg("#chartContainer_2", 365, 400);
        var data = [
           { "Player":"Kenny Britt", "Arrest Count":7 },
            { "Player":"Adam Jones", "Arrest Count":6 },
            { "Player":"Chris Henry", "Arrest Count":6 },
            { "Player":"Aldon Smith", "Arrest Count":5 },
            { "Player":"Fred Davies", "Arrest Count":4 },
            { "Player":"Larry Johnson", "Arrest Count":4},
            { "Player":"Leonardo Carson", "Arrest Count":4},
            { "Player":"Adam Jones", "Arrest Count":4},
            { "Player":"Bryant Mckinnie", "Arrest Count":4 },
            { "Player":"Leroy Hill", "Arrest Count":4}
        ];

  // CREATES THE PLAYER CHART
      var chartPlayer = new dimple.chart(svgPlayer, data);
        chartPlayer.setBounds(20, 20, 360, 400);
        chartPlayer.height=300;
        // chart.addCategoryAxis("x", "Team");
        chartPlayer.addMeasureAxis("p", "Arrest Count");
        // chart.addSeries("Owner",)
      var ring = chartPlayer.addSeries("Player", dimple.plot.pie);
        ring.innerRadius = "50%";
        chartPlayer.addLegend(10, 70, 90, 100, "left");
         chartPlayer.draw();
  // END OF PLAYER CHART


// CLEAR PAGE FUNCTION
	function clearPage(){
	    while(playersDiv.firstChild){
	      playersDiv.removeChild(playersDiv.firstChild);
	    }
	  }



	// });
	// $(document).ready(function getAjax(playerDataUrl,callback)
	// {
	// 	$.ajax(playerDataUrl).then(function(response){
	// 		return response.json();
	// 	}).then(function(json) {
	// 		callback(json)
	// 		console.log(json)
	// 	});
	// }); //end of doAjax
