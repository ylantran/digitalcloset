//Firebase
var ref = new Firebase("https://fashionimages.firebaseio.com/");

//Weather
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

window.onload = function () {
  
  //OUTFITS
  var outfitsButton = document.getElementById('outfits-button');
  var outfitsTakePhoto = function() {
    var person = prompt("Enter the image URL here:");
    var img = document.createElement("img");
    img.src = person;
    
     document.getElementById("outfits-picture").appendChild(img);
      if (person != null) {
      document.getElementById("outfits-picture").setAttribute("src", person);
      var outfits = document.getElementById("outfits-picture");
      outfits.setAttribute("src", person);
      outfits.setAttribute("height", "100px");
      outfits.setAttribute("width", "auto");
    }
  };
  
  outfitsButton.onclick = outfitsTakePhoto;
  
  ref.limitToLast(10).on('child_added', function (snapshot) {
  var data = snapshot.val();
  outfitsTakePhoto(data.image);
  });
  
  //TOPS
  var topsButton = document.getElementById('tops-button');
  var topsTakePhoto = function() {
    var person = prompt("Enter the image URL here:");
    var img = document.createElement("img");
    img.src = person;
    
    document.getElementById("tops-picture").appendChild(img);
    if (person != null) {
    
      document.getElementById("tops-picture").setAttribute("src", person);
       var tops = document.getElementById("tops-picture");
      tops.setAttribute("src", person);
      tops.setAttribute("height", "200px");
      tops.setAttribute("width","auto");
    }
   };
  
  topsButton.onclick = topsTakePhoto;
  
  ref.limitToLast(10).on('child_added', function (snapshot) {
  var data = snapshot.val();
  topsTakePhoto(data.image);
  });
  
  //BOTTOMS
  var bottomsButton = document.getElementById('bottoms-button');
  var bottomsTakePhoto = function() {
    var person = prompt("Enter the image URL here:");
    var img = document.createElement("img");
    img.src = person;
    
    document.getElementById("bottoms-picture").appendChild(img);
    if (person != null) {
      document.getElementById("bottoms-picture").setAttribute("src", person);
      var bottoms = document.getElementById("bottoms-picture");
      bottoms.setAttribute("src", person);
      bottoms.setAttribute("height", "100px");
      bottoms.setAttribute("width", "auto");
    }
   };
  bottomsButton.onclick = bottomsTakePhoto;

  ref.limitToLast(10).on('child_added', function (snapshot) {
  var data = snapshot.val();
  bottomsTakePhoto(data.image);
  });
  
  //SHOES
  var shoesButton = document.getElementById('shoes-button');
  var shoesTakePhoto = function() {
    var person = prompt("Enter the image URL here:");
    var img = document.createElement("img");
    img.src = person;
      
      document.getElementById("shoes-picture").appendChild(img);
      if (person != null) {
      var shoes = document.getElementById("shoes-picture");
      shoes.setAttribute("src", person);
      shoes.setAttribute("height", "100px");
      shoes.setAttribute("width","auto");
    }
   };
  
  shoesButton.onclick = shoesTakePhoto;

  ref.limitToLast(10).on('child_added', function (snapshot) {
  var data = snapshot.val();
  shoesTakePhoto(data.image);
  });
  
  //BAGS
  var bagsButton = document.getElementById('bags-button');
  var bagsTakePhoto = function() {
    var person = prompt("Enter the image URL here:");
    var img = document.createElement("img")
    img.src = person
      
      document.getElementById("bags-picture").appendChild(img);
      if(person !=null){
      document.getElementById("bags-pictures").setAttribute("src",person);
      var outfits = document.getElementById("outfits-picture");
      bags.setAttribute("src", person);
      bags.setAttribute("height", "100px");
      bags.setAttribute("width","auto");
    }
   };
 
  bagsButton.onclick = bagsTakePhoto;

  ref.limitToLast(10).on('child_added', function (snapshot) {
  var data = snapshot.val();
  bagsTakePhoto(data.image);
  });
  
  //HATS
  var hatsButton = document.getElementById('hats-button');
  var hatsTakePhoto = function() {
    var person = prompt("Enter the image URL here:");
    var img= document.createElement("img");
    img.src = person;
    
    document.getElementById("hats-picture").appendChild(img);
      if (person != null) {
      document.getElementById("hats-picture").setAttribute("src", person);
      var hats = document.getElementById("hats-picture");
      hats.setAttribute("src", person);
      hats.setAttribute("height", "100px");
      hats.setAttribute("width","auto");
    }
   };
  
  hatsButton.onclick = hatsTakePhoto;

  ref.limitToLast(10).on('child_added', function (snapshot) {
  var data = snapshot.val();
  hatsTakePhoto(data.image);
  });

};