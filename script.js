//1
function createWindow() {
    var newWindow = window.open("", "New Window", "width=300,height=300");
    window.setTimeout(function() {
    newWindow.resizeTo(500, 500);
    }, 2000);
    window.setTimeout(function() {
    newWindow.moveTo(200, 200);
    }, 4000);
    window.setTimeout(function() {
    newWindow.close();
    }, 6000);
    }
    //3
    document.getElementById("button1").addEventListener("click", function() {
        document.body.style.backgroundColor = "blue";
      });
      document.getElementById("button2").addEventListener("dblclick", function() {
        document.body.style.backgroundColor = "pink";
      });
      document.getElementById("button3").addEventListener("mousedown", function() {
        document.body.style.backgroundColor = "brown";
      });
      
      document.getElementById("button3").addEventListener("mouseup", function() {
        document.body.style.backgroundColor = "white";
      });
      document.querySelector("a").addEventListener("mouseover", function() {
        document.body.style.backgroundColor = "yellow";
      });      
      document.querySelector("a").addEventListener("mouseout", function() {
        document.body.style.backgroundColor = "white";
      });
      //4
      var selectElement = document.getElementById("select");
document.getElementById("button").addEventListener("click", function() {
   var selectedOption = selectElement.options[selectElement.selectedIndex];
  selectElement.remove(selectElement.selectedIndex);
});
//5
var buttonElement = document.getElementById("button");
buttonElement.addEventListener("click", function() {
  alert("I was pressed!");
});
buttonElement.addEventListener("mouseover", function() {
  alert("Mouse on me!");
});
buttonElement.addEventListener("mouseout", function() {
  alert("Mouse is not on me!");
});
//6
var window = window;
window.onresize = function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  document.getElementById("size").innerHTML = "Width: " + width + ", Height: " + height;
};
//7
var countrySelect = document.getElementById("country");
var citySelect = document.getElementById("cities");
countrySelect.addEventListener("change", function() {
  var country = this.value;
  var cities = [
    "Berlin", "Munich", "Hamburg",
    "New York", "Los Angeles", "Chicago",
    "Kiev", "Kharkiv", "Odesa"
  ];
  citySelect.innerHTML = "";
  for (var i = 0; i < cities.length; i++) {
    var option = document.createElement("option");
    option.value = cities[i];
    option.text = cities[i];
    citySelect.appendChild(option);
  }
});
var countryName = countrySelect.options[countrySelect.selectedIndex].text;
var cityName = citySelect.options[citySelect.selectedIndex].text;
document.querySelector("p").innerHTML = "Country: " + countryName + ", City: " + cityName;
