



// GET Players stats DATA/////////////////////////////
let crimeBtn;


document.getElementById("crimeBtn").onclick = crimeBtn;

crimeBtn = document.getElementById("crimeBtn").onclick = function () {
// $(document).ready(function(){
 clearPage();
 // document.getElementById("chartContainer").style.display="block";
 document.getElementById("teamDiv").style.display="none";
 document.getElementById("mapDiv").style.display="none";
 document.getElementById("map").style.display="none";
 document.getElementById("teamCrimeDiv").style.display="none";
 document.getElementById("crimeDiv").style.display="grid";
 document.getElementById("searchForm").style.visibility="hidden";
 document.getElementById("playersDiv").style.display="none";
 document.getElementById("infoDiv").style.display="none";
 document.getElementById("chartContainer_1").style.display="none";
 document.getElementById("chartContainer_2").style.display="none";
 document.getElementById("chartContainer_3").style.display="none";



        	 // START////////////////////////////
 let crimeUrl = "http://nflarrest.com/api/v1/crime";
	 $.ajax({url: crimeUrl, success: function(json){
		 console.log(json);
		 const crimes = json;
		 crimes.forEach(function(crime){
		 // console.log(crimes);
		 });
			 // END////////////////////////////

			 const teamFragment = document.createDocumentFragment();
	 			crimes.forEach(function(crime){
	 					const newLi = document.createElement("li"); 	//create a <li> element
	 					// const newBtn = document.createElement("button");
	 					newLi.setAttribute("class", "crimeButton");
	 					const newText = document.createTextNode(`${crime.Category} Total Arrest :${crime.arrest_count}`); //create some text
	 					newLi.appendChild(newText); //insert the text into the <p>
	 					crimeDiv.appendChild(newLi);
	 					// newBtn.setAttribute("width", "150px");
	 					// newBtn.setAttribute("height", "150px");
	 					// newBtn.setAttribute("text", `${team.Team_preffered_name}`);
	 					// teamDiv.appendChild(newLi); //insert the <li> into the fragment
	 					// teamDiv.appendChild(newImg);
	 			});
	 			crimeDiv.appendChild(teamFragment);
				}});
	}

	function clearPage(){
	    while(crimeDiv.firstChild){
	      crimeDiv.removeChild(crimeDiv.firstChild);
	    }
	  }
