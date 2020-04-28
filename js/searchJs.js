
$(document).ready(function(){
  let searchBox;
  let returnedList;
  let searchBtn;
  let searchForm;
	$(".search").click(function(){

		///////REFRESH PAGE////////////////////
	$('#searchBtn').click(function() {
					    location.reload();
							// $( "#teamDiv" ).empty();
					});
			$("#teamDiv").hide();
			$("#crimeDiv").hide();
			$("#teamCrimeDiv").hide();
      $("#playersDiv").hide();
			$("#searchForm").show();
		});
			});

			$(document).ready(function(){
				$("#go-Btn").click(function(){
					let allDataUrl = "http://nflarrest.com/api/v1/";
						$.ajax({url: allDataUrl, success: function(json){
							// $("#div1").html(result);
								// return result.json();
							// console.log(json);
							const allData = json;
							allData.forEach(function(data){
							console.log(data);
							});
					// }});
			const searchTerm = allData.filter(function(data){
			  if(data.team>=2000){
			    return true;
			  }else{
			    return false;
			  }
			})
			console.log(searchTerm)
			// SEARCH BOX STUFF/////////////////////////////
			}});
			function clearSearchResults(){
					while(matchList.firstChild){
						matchList.removeChild(matchList.firstChild);
					}
			}
			function doSearch()
			{
				clearSearchResults()
				const searchTerm = searchBox.value.toLowerCase();
				if(searchTerm.length<2){
					return;
				}
				console.log(`The search term is ${searchTerm}.`);
				const matchList = searchData(searchTerm);
				displayResults(matchingData);
			}

			function init(){
				searchBox = document.querySelector("#searchBox");
				searchBtn = document.querySelector("#searchBtn");
				searchBox.focus();
				matchList = document.querySelector("#searchDiv");
				goBtn.addEventListener("click",doSearch);
				searchBox.addEventListener("keyup",doSearch);
			}

			window.addEventListener("load", init, false);
		});
	});
