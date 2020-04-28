let searchBtn;
let searchButton;
let searchedCrimes;



document.getElementById("searchButton").onclick = searchButton;
//- Using an anonymous function:
searchButton = document.getElementById("searchButton").onclick = function () {
// location.reload();
clearPage();
document.getElementById("titleDiv").style.display="none";
document.getElementById("teamDiv").style.display="none";
document.getElementById("mapDiv").style.display="none";
document.getElementById("map").style.display="none";
document.getElementById("searchDiv").style.display="block";
document.getElementById("crimeDiv").style.display="none";
document.getElementById("searchForm").style.display="grid";
document.getElementById("searchForm").style.visibility="visible";
// document.getElementById("searchCrimeForm").style.visibility="visible";
// document.getElementById("searchCrimeForm").style.display="block";
document.getElementById("teamDiv").style.display="none";
document.getElementById("playersDiv").style.display="none";
document.getElementById("infoDiv").style.display="none";
document.getElementById("chartContainer_3").style.display="none";
document.getElementById("chartContainer_2").style.display="none";

// 3: And there's attaching a function to the event handler using Javascript:

var el = document.getElementById("searchButton");
if (el.addEventListener)
    el.addEventListener("click", searchButton, false);
else if (el.attachEvent)
    el.attachEvent('onclick', searchButton);

}



// GRAB AJAX DATA
function getAjax(){
let crimeUrl = "http://nflarrest.com/api/v1/crime";
let crimes;
  $.ajax({url: crimeUrl,success: function(json){
     crimes = json;
    // console.log(crimes);

    crimes.forEach(function(crime){
    console.log(crime.Category)
    return;
});

// FILTER THE DATA
searchTerm = searchBox.value.toLowerCase();
searchedCrimes = crimes.filter(function(crime){
     if(crime.Category.toLowerCase().search(searchTerm)>-1){
       return true;
     }else{
       return false;
     }


});

console.log(searchedCrimes);
// return;
// CREATE DOM FRAGMENT
const searchFragment = document.createDocumentFragment();
searchedCrimes.forEach(function(crime){

  const searchResults = document.createElement("div");
  searchResults.setAttribute("class", "searchResults");
  const searchedCrime = document.createElement("h3");
  const crimeCount = document.createElement("p");
  const crimeType = document.createTextNode(`${crime.Category}`); //create a heading
  const crimeRate = document.createTextNode(` Arrest Count: ${crime.arrest_count}`); //create the crime rate

  searchResults.appendChild(searchedCrime);
  searchedCrime.appendChild(crimeType);

  searchResults.appendChild(crimeCount);
  crimeCount.appendChild(crimeRate);

  searchDiv.appendChild(searchResults);

  console.log(crime.Category);

 });
 searchDiv.appendChild(searchFragment);

  }});
}

function doSearch()
{
  clearPage();

  crimes=getAjax();
	const searchTerm = searchBox.value.toLowerCase();
	if(searchTerm.length<2){
		return crimes.Category;
	}
	console.log(`The search term is ${searchTerm}.`);
	// const matchingCrimes = searchCrimes(searchTerm, crimes);

	// displayResults(matchingCrimes);
}
//
//
function init(){
	searchBox = document.querySelector("#searchBox");
	searchBtn = document.querySelector("#searchBtn");
	searchBox.focus();
	searchDiv = document.querySelector("#searchDiv");
	searchBtn.addEventListener("click",doSearch);
	// searchBox.addEventListener("keyup",doSearch);
}

window.addEventListener("load", init, false);

function clearPage(){
  while(searchDiv.firstChild){
    searchDiv.removeChild(searchDiv.firstChild);
  }
}
