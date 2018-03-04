$(document).ready(function() {
  function getLocation() {
    navigator.geolocation.getCurrentPosition(logLocation);
  }
  function logAPI(response) {
   $(".location").html("<h1>"+ response.name+ ", " + response.sys.country+"</h1>")
    $(".weather").html(response.weather[0].main)
    $(".icon").attr("src", response.weather[0].icon);
     $(".temp").html((response.main.temp).toFixed(1));
      $("#degree").html("°C")
    console.log(response)
}    
    
$("#degree").click(function(){
  var degree = $("#degree").html(),
      temp = Number($(".temp").html()),
      degreeUnit = degree.replace(/[^0-9a-z]/gi, ''),
      fa = (temp * 1.8 + 32).toFixed(1);
      
  
  
  
if (degreeUnit == "C"){
  
 $(".temp").html(fa);
$("#degree").html("°F");}
  
  else
  { 
  getLocation();
  };
  
 

});
  
  
  function logLocation(position) {
    var latitude = position.coords.latitude.toFixed(2),
      longitude = position.coords.longitude.toFixed(2),
      apiURL =
        "https://fcc-weather-api.glitch.me/api/current?lat="+latitude +"&lon=" +longitude;
   $.getJSON(apiURL, logAPI);
  }
  
  getLocation();
});