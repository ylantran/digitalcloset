if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
  });
});

$(document).ready(function() {
  loadWeather('Seattle',''); 
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<ul><h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';  
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
window.onload = function (){
  var button = document.getElementById('button');
   function takePhoto() {
      var person = prompt("Enter the image URL here:");
      if (person != null) {
        document.getElementById("demo").innerHTML =
        person;
        document.getElementById("picture").setAttribute("src", person);
        
      }
      
       var data={};
      data.image= person;
      
      messagesRef.push(data);
   }
  button.onclick = takePhoto;
};
var messagesRef = new Firebase("https://fashionimages.firebaseio.com/");