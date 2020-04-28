
$(document).ready(function(){
$(".map").click(function(){
	// while(mapDiv.firstChild){
	// 	mapDiv.removeChild(mapDiv.firstChild);
	// }
	$("#mapDiv").show();
		$("#teamDiv").hide();
			$("#searchForm").hide();
			$("#playersDiv").hide();
				$("#crimeDiv").hide();

				});

	});


//Typically this data would be loaded using Ajax
const nflStadiums=[
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [33.5275, -112.2625]
	  },
	  "properties": {
	    "name": "Arizona Cardinals",
	    "description":"Cardinals"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.647828, -1.79016]
	  },
	  "properties": {
	    "name": "Atlanta Falcons",
	    "description":"Falcons"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [39.278056, -76.622778]
	  },
	  "properties": {
	    "name": "Baltimore Ravens",
	    "description":"`Ravens`"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [42.773611, -78.786944]
	  },
	  "properties": {
	    "name": "Buffalo Bills",
	    "description":"Bills"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [35.225833, -80.852778]
	  },
	  "properties": {
	    "name": "Carolina Panthers",
	    "description":"Panthers"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [41.8625, -87.616667]
	  },
	  "properties": {
	    "name": "Chicago Bears",
	    "description":"Bears"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "`Cincinnati Bengals`",
	    "description":"Bengals"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [41.506111, -81.699444]
	  },
	  "properties": {
	    "name": "Cleveland Browns",
	    "description":"Browns"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [32.747778, -97.092778]
	  },
	  "properties": {
	    "name": "Dallas Cowboys",
	    "description":"Cowboys"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "Denver Broncos",
	    "description":"Broncos"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "Detroit Lions",
	    "description":"Lions"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [44.501389, -88.062222]
	  },
	  "properties": {
	    "name": "Green Bay Packers",
	    "description":"Packers"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [29.684722, -95.410833]
	  },
	  "properties": {
	    "name": "Houston Texans",
	    "description":"Texans"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "Indianapolis Colts",
	    "description":"Colts"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "Jacksonville Jaguars",
	    "description":"Jaguars"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [39.048889, -94.483889]
	  },
	  "properties": {
	    "name": "Kansas City Chiefs",
	    "description":"Chiefs"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "Las Vegas Raiders",
	    "description":"Raiders"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "Los Angeles Chargers",
	    "description":"Chargers"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "Los Angeles Rams",
	    "description":"Rams"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [25.958056, -80.238889]
	  },
	  "properties": {
	    "name": "Miami Dolphins",
	    "description":"Dolphins"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "Minnesota Vikings",
	    "description":"Vikings"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "New England Patriots",
	    "description":"Patriots"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [29.950833, -90.081111]
	  },
	  "properties": {
	    "name": "New Orleans Saints",
	    "description":"Saints"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "New York Giants",
	    "description":"Giants"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "New York Jets",
	    "description":"Jets"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [39.900833, -75.1675]
	  },
	  "properties": {
	    "name": "Philidelphia Eagles",
	    "description":"Eagles"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "Pittsburgh Steelers",
	    "description":"Steelers"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "San Francisco 49ers",
	    "description":"49ers"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [47.595278, -122.331667]
	  },
	  "properties": {
	    "name": "Seattle Seahawks",
	    "description":"Seahawks"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "Tampa Bay Buccnaneers",
	    "description":"Bucks"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [36.166389, -86.771389]
	  },
	  "properties": {
	    "name": "Tennessee Titans",
	    "description":"Titans"
	  }
	},
	{
	  "type": "Feature",
	  "geometry": {
	    "type": "Point",
	    "coordinates": [53.658964, -1.788794]
	  },
	  "properties": {
	    "name": "Washington Redskins",
	    "description":"Redskins"
	  }
	}
];
//declare variable for elements from the HTML document
let infoDiv;
let nameDiv;
let descDiv;

function getShowInfo(nflStadium){
	return function(evnt){
		nameDiv.textContent=nflStadium.properties.name
		descDiv.textContent=nflStadium.properties.description
		infoDiv.classList.remove("hide");
	}
}

function initMap(lat,lng){
	myMap = L.map('map').setView([lat,lng], 14);
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	 	attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
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
		tMarker.addEventListener("click",getShowInfo(nflStadium),false);
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
	infoDiv = document.querySelector("#info");
	nameDiv = document.querySelector("#takeawayName");
	descDiv = document.querySelector("#takeawayDesc");
	getUserPosition()
}


init()

//1. Open the HTML page in a browser, make sure the console.log displays the latitude and longitude of your current location. Have a look at your code and try and work out which functions are being called and in what order.
//2.
//a) Add some code that will call the function initMap. This needs to be called after the browser has determined the user's current location. If you can get this to work a map should appear. Have a look at https://leafletjs.com/, see if you can make sense of the code in initMap().
//b) Sometimes I've had problems with the openstreetmap provider. See https://leaflet-extras.github.io/leaflet-providers/preview/ for alternative providers
//3. Modify initMap so that the map is centred on the user's current location. You will need to pass the latitude and longitude as arguments to the initMap() function.
//4. Add a marker to the map (see https://leafletjs.com/reference-1.6.0.html#marker) at the user's location.
//5. Add a popup to the marker that says 'You are here'. The popup should appear when the page loads.
//6. The variable takeaways (at the top of the script) is an array of objects. Add a forEach in the initMap() function that loops over this array and displays the name of each takeaway in the console.
//7. Modify this so that the loop also displays the latitude of each takeaway
//8. Modify this so that the loop  adds markers to the map showing the location of each takeaway. You might have to adjust the zoom level so you can see all the markers
//9. Modify the loop so that you make each marker clickable. When clicked the name of the takeaway should be displayed in the console. It would probably be a good idea to use a closure to do this. Have a look at the example from last week or https://github.com/CHT2531/functional-programming/blob/master/notes.md#closures---associating-data-with-dynamically-generated-elements.
//10. Instead of displaying the details for the takeaway in the console.log can you display them in the HTML page, in the div called 'info'. It already has some CSS applied so that it overlaps the map.
//11. Have a look at https://leafletjs.com/reference-1.6.0.html#latlngbounds. How can you make the map automatically adjust the zoom level to show all the markers?
