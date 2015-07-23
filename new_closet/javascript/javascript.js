var ref = new Firebase("https://fashionimages.firebaseio.com/");

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
  
  //OUTFITS
  var outfitsButton = document.getElementById('outfits-button');
  //finds button
  var outfitsTakePhoto = function() {
    //asks user for input
    var person = prompt("Enter the image URL here:");
    if (person != null) {
      document.getElementById("outfits-picture").setAttribute("src", person);
    }
   }
  outfitsButton.onclick = outfitsTakePhoto;
  
  //TOPS
  var topsButton = document.getElementById('tops-button');
  //finds button
  var topsTakePhoto = function() {
    //asks user for input
    var person = prompt("Enter the image URL here:");
    if (person != null) {
      document.getElementById("tops-picture").setAttribute("src", person);
    }
   }
  topsButton.onclick = topsTakePhoto;
  
  //
  var topsButton = document.getElementById('tops-button');
  //finds button
  var topsTakePhoto = function() {
    //asks user for input
    var person = prompt("Enter the image URL here:");
    if (person != null) {
      document.getElementById("tops-picture").setAttribute("src", person);
    }
   }
  topsButton.onclick = topsTakePhoto;
  
}

  ref.limitToLast(10).on('child_added', function (snapshot) {
  var data = snapshot.val();
  takePhoto(data.image);
});
