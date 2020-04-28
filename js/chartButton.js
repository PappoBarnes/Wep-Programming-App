let chartBtn;
document.getElementById("chartBtn").onclick = chartBtn;


//- Using an anonymous function:
chartBtn = document.getElementById("chartBtn").onclick = function () {
// location.reload();
 clearPage();
document.getElementById("teamDiv").style.display="none";
document.getElementById("mapDiv").style.display="none";
document.getElementById("map").style.display="none";
document.getElementById("teamCrimeDiv").style.display="none";
document.getElementById("searchForm").style.display="none";
document.getElementById("searchDiv").style.display="none";
document.getElementById("chartTitle").style.display="block";
document.getElementById("titleDiv").style.display="none";
document.getElementById("infoDiv").style.display="none";
document.getElementById("crimeDiv").style.display="none";
document.getElementById("chartContainer_1").style.display="block";
document.getElementById("chartContainer_2").style.display="none";
document.getElementById("playersDiv").style.display="none";
document.getElementById("chartContainer_3").style.display="block";

// 3: And there's attaching a function to the event handler using Javascript:

var el = document.getElementById("chartBtn");
if (el.addEventListener)
    el.addEventListener("click", chartBtn, false);
else if (el.attachEvent)
    el.attachEvent('onclick', chartBtn);

// PAGE HEADING

    // const chartTitle = document.createElement("div");
    // const chartHeading = document.createElement("h3");
    // const newTitle = document.createTextNode(`Top Offenders`);
    // chartTitle.appendChild(chartHeading);
    // chartHeading.appendChild(newTitle);
    // titleDiv.appendChild(chartTitle);

//TEAM CHART
var svgTeam = dimple.newSvg("#chartContainer_1", 300, 450);

//TEAM JSON DATA
      var data = [
       { "Team":"Vikings", "Arrest Count":51 },
       { "Team":"Broncos", "Arrest Count":51 },
       { "Team":"Bengals", "Arrest Count":44 },
       { "Team":"Jaguars", "Arrest Count":41 },
       { "Team":"Bucs", "Arrest Count":37 },
       { "Team":"Browns", "Arrest Count":36 },
       { "Team":"Titans", "Arrest Count":36 },
       { "Team":"Colts", "Arrest Count":35},
       { "Team":"Chiefs", "Arrest Count":34 },
       { "Team":"Dolphins", "Arrest Count":34 }
      ];

      var teamChart = new dimple.chart(svgTeam, data);
        teamChart.setBounds(20, 20, 250, 400);
        teamChart.height=300;
        // chart.addCategoryAxis("x", "Team");
        teamChart.addMeasureAxis("p", "Arrest Count");
        // chart.addSeries("Owner",)
      var ring = teamChart.addSeries("Team", dimple.plot.pie);
        ring.innerRadius = "50%";
        teamChart.addLegend(140, 330, 200, 100, "left");
        // legend.fontSize = "22px";
        teamChart.draw();

// CREATES THE CRIME CHART
    var svgCrime = dimple.newSvg("#chartContainer_3", 365, 500);
    var data = [
         	{ "Crime":"DUI", "Arrest Count":224 },
          { "Crime":"Drugs", "Arrest Count":110 },
          { "Crime":"Dom/Violence", "Arrest Count":107 },
          { "Crime":"Assault", "Arrest Count":78 },
          { "Crime":"D/Conduct", "Arrest Count":51},
          { "Crime":"Gun", "Arrest Count":34},
          { "Crime":"Battery", "Arrest Count":21},
          { "Crime":"Intoxiction", "Arrest Count":20 },
          { "Crime":"license", "Arrest Count":19 },
          { "Crime":"Alcohol", "Arrest Count":17}


        ];

        var chartCrime = new dimple.chart(svgCrime, data);
         chartCrime.setBounds(60, 20,350,350)
         chartCrime.addMeasureAxis("y", "Arrest Count");
         chartCrime.addCategoryAxis("x", "Crime");
         chartCrime.addMeasureAxis("z", "Arrest Count");
         chartCrime.addSeries(null, dimple.plot.bubble);
         // chartCrime.addLegend(60, 10, 20, 220, "right");
         chartCrime.draw();


// CLEAR PAGE WHILE LOOP FUNCTION
      function clearPage(){
          while(chartContainer_1.firstChild){
            chartContainer_1.removeChild(chartContainer_1.firstChild);
            // while(chartContainer_2.firstChild){
            //   chartContainer_2.removeChild(chartContainer_2.firstChild);
              while(chartContainer_3.firstChild){
                chartContainer_3.removeChild(chartContainer_3.firstChild);
    }
  // }
    }
  }



  //END
  };
