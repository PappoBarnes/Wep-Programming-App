//Typically this data would be loaded using Ajax
// location.reload();
let mapBtn;
let initmap;
//- Using a function pointer:
document.getElementById("mapBtn").onclick = mapBtn;

//- Using an anonymous function:
mapBtn = document.getElementById("mapBtn").onclick = function () {

   clearPage();
   document.getElementById("titleDiv").style.display="none";

document.getElementById("mapDiv").style.display="block";
document.getElementById("map").style.display="block";
document.getElementById("teamCrimeDiv").style.display="none";
// document.getElementById("searchCrimeForm").style.display="none";
document.getElementById("searchForm").style.visibility="hidden";
document.getElementById("searchForm").style.display="none";
document.getElementById("teamDiv").style.display="none";
document.getElementById("titleDiv").style.display="none";
document.getElementById("searchDiv").style.display="none";

document.getElementById("playersDiv").style.display="none";
document.getElementById("infoDiv").style.display="none";
document.getElementById("chartContainer_1").style.display="none";
document.getElementById("chartContainer_2").style.display="none";
document.getElementById("chartContainer_3").style.display="none";




 // attaching a function to the event handler :

var el = document.getElementById("mapBtn");
if (el.addEventListener)
    el.addEventListener("click", mapBtn, false);
else if (el.attachEvent)
    el.attachEvent('onclick', mapBtn);


//Gets Json data
let nflStadiums;
fetch("./json/stadiumData.json").then(function(response){
	return response.json();
}).then(function(json) {
	console.log(json);  //outputs stad to the console}
	nflStadiums = json;
	// return;
});
function clearPage(){
    while(teamDiv.firstChild){
      teamDiv.removeChild(teamDiv.firstChild);
    }
  }

//declare variable for elements from the HTML document
let infoDiv;
let nameDiv = document.getElementById("teamName");
let descDiv = document.getElementById("teamDesc");
let arrestCount = document.getElementById("arrestCount");


function getShowInfo(nflStadium){
	return function(evnt){
    document.getElementById("infoDiv").style.display="block";
		nameDiv.textContent=nflStadium.properties.name
		descDiv.textContent=nflStadium.properties.description
    arrestCount.textContent=nflStadium.properties.arrest_count
	}
}

function initMap(lat,lng){
	myMap = L.map('map').setView([lat,lng], 14);
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	 	// attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
	    maxZoom: 18
	 }).addTo(myMap);

	let bounds = L.latLngBounds()
	bounds.extend(L.latLng(lat, lng));
	let marker = L.marker([lat,lng]).addTo(myMap);
	marker.bindPopup("You are here").openPopup();


	nflStadiums.forEach(function(nflStadium){
		console.log(nflStadium.properties.name);
		let latitude = nflStadium.geometry.coordinates[0];
		let longitude = nflStadium.geometry.coordinates[1];
		let tMarker = L.marker([latitude,longitude]).addTo(myMap);
		tMarker.addEventListener("mouseover",getShowInfo(nflStadium),false);
		bounds.extend(L.latLng(latitude, longitude));
	})

	myMap.fitBounds(bounds);

}




function itWorks(position)
{
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	console.log('latitude: '+latitude);
	console.log('longitude: '+longitude);
	initMap(latitude,longitude)
}

function itDoesntWork(error)
{
	console.log('There is an error '+error);
}

function getUserPosition()
{
    navigator.geolocation.getCurrentPosition(itWorks, itDoesntWork);
}

function init()
{

	getUserPosition()
}

init()

};
   clearPage();
