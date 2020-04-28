let searchBtn;
let searchButton;


document.getElementById("searchButton").onclick = searchButton;
//- Using an anonymous function:
searchButton = document.getElementById("searchButton").onclick = function () {
// location.reload();
 clearPage();
 document.getElementById("searchDiv").style.display="block";
document.getElementById("teamDiv").style.display="none";
document.getElementById("mapDiv").style.display="none";
document.getElementById("map").style.display="none";
// document.getElementById("crimeDiv").style.display="none";
document.getElementById("searchForm").style.display="none";
document.getElementById("searchForm").style.visibility="hidden";
document.getElementById("searchCrimeForm").style.display="block";
document.getElementById("teamDiv").style.display="none";
document.getElementById("playersDiv").style.display="none";
document.getElementById("infoDiv").style.display="none";
document.getElementById("chartContainer_3").style.display="none";

// 3: And there's attaching a function to the event handler using Javascript:

var el = document.getElementById("searchButton");
if (el.addEventListener)
    el.addEventListener("click", searchButton, false);
else if (el.attachEvent)
    el.attachEvent('onclick', searchButton);

}



// let searchCrimes;
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


searchTerm = searchBox.value.toLowerCase();
searchedCrimes = crimes.filter(function(crime){
     if(crime.Category.toLowerCase().search(searchTerm)>-1){
       return true;
     }else{
       return false;
     }


});
console.log(searchedCrimes);
return;
const searchFragment = document.createDocumentFragment();
 searchedCrimes.forEach(function(crime){
     const newLi = document.createElement("li"); 	//create a <li> element
     // const newBtn = document.createElement("button");
     newLi.setAttribute("class", "crimeButton");
     const newText = document.createTextNode(`${searchedCrimes.Category} Total Arrest :${searchedCrimes.arrest_count}`); //create some text
     newLi.appendChild(newText); //insert the text into the <p>
     searchDiv.appendChild(newLi);
     // newBtn.setAttribute("width", "150px");
     // newBtn.setAttribute("height", "150px");
     // newBtn.setAttribute("text", `${team.Team_preffered_name}`);
     // teamDiv.appendChild(newLi); //insert the <li> into the fragment
     // teamDiv.appendChild(newImg);
 });
 searchDiv.appendChild(searchFragment);

  }});
}
//
// //
// // function displayResults(matchingCrimes){
// // 	const resultsFragment = document.createDocumentFragment()
// // 	matchingCrimes.forEach(function(crime) {
// //   	const li = document.createElement('li')
// //   	li.textContent = crime.Category;
// //   	resultsFragment.appendChild(li)
// // 	})
// // 	searchDiv.appendChild(resultsFragment)
// // }
//
// //
// function searchCrimes(searchTerm, crimes){
//     // const crimes = getAjax();
//  //  searchedCrimes = crimes.filter(function(crime){
//  //       if(crime.Category.toLowerCase().search(searchTerm)>-1){
//  //         return crime.Category.toLowerCase().search(searchTerm)>-1;
//  //       }else{
//  //         return false;
//  //       }
//  //        console.log(searchedCrimes);
//  //        return;
//  //
//  // });
//
//   };

function clearPage(){
  while(searchDiv.firstChild){
    searchDiv.removeChild(searchDiv.firstChild);
  }
}
function doSearch()
{
  // clearPage();

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
