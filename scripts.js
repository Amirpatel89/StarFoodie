
  var map;
  var infowindow;
  var restArray = [];
  var sorted;
  var globalThisLocation = [];
  var map2;
  var globalEndpoint = [];
  

$(document).ready(function() {
    $(".go-to-next").hide();
    $(".review-header").hide();
});

function getWhere(){
      navigator.geolocation.getCurrentPosition(function(position) {
      // console.log(`lat: ${position.coords.latitude} lng: ${position.coords.longitude}`);
      var thisLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
      console.log(thisLocation);
      console.log(position);
      // var defaultLocation = {lat: 36.169941, lng: -115.139830};
      // console.log(defaultLocation);
      initMap(thisLocation);
      globalThisLocation.push(thisLocation);
      $(".please-enable").hide();
      $(".go-to-next").show();




      // initMap(thisLocation);

     
    
  },


  );
}

// }



function initMap(location) {
          // var location = {where};   
          // lat: 33.8485720, lng: -84.3735560

  map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 11
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: location,
    radius: 50000,
    type: ['restaurant'],
  }, callback);


}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      if (results[i].rating >= 4){
          // sortedArray.push(results[i]);
        createMarker(results[i]);
        restArray.push(results[i]);
            // for (var b = 0, b < restArray.length; b++)
        }
      }
    }
    var reverseSorted = restArray.sort(function(a, b){
    return(a.rating-b.rating)
})
    sorted = reverseSorted.reverse();
    console.log(sorted);

}
    function showRest () {
            var sortedArray = sorted
              counter = 0;
              globalCounter = [];
            var globalThisRest = [];
            $('.go-to-next').click(function(){
              counter = (counter + 1) % sortedArray.length
              var thisRest = (sortedArray[counter]);
              // console.log(thisRest);
              globalThisRest.push(thisRest);
              console.log(globalThisRest[0]);
              globalCounter.push(counter);

            // $('.go-back').click(function(){
            //   counter2 = (globalCounter[0] - 1) % sortedArray.length
            //   var newRest = (sortedArray[counter2]);
            //   // console.log(newRest);
            //   globalThisRest.push(newRest);
            //   console.log(globalThisRest[0]);
            // });

            $('.name-of-restaurant').html(`${globalThisRest[0].name}`);
            $('.rating-of-restaurant').html(`Rating: ${globalThisRest[0].rating} Stars`);
            $(".review-header").show();


         
            var service = new google.maps.places.PlacesService(map);
                service.getDetails({placeId: `${thisRest.place_id}`}, function(place, status) {
                   if (status == google.maps.places.PlacesServiceStatus.OK) {
                    var photoUrl = place.photos[0].getUrl({maxWidth: 150});
                    $('.photo-of-restaurant').html( `<img src= ${photoUrl}>`);
                    // console.log(place.photos[5].getUrl({maxWidth: 150}));
                    var reviewCaption = place.reviews[0].text;
                    $('.review-of-restaurant').html(reviewCaption);
                    console.log(place);
                    globalEndpoint.push(globalThisRest);
                    console.log(globalEndpoint[0]);



                    };




            });

        });
                
};

                 


               

              



function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  var image = 'https://i.imgur.com/FRSwoOV.gif'
  
  var marker = new google.maps.Marker({
  map: map,
  position: globalThisLocation[0],
  icon: image,
  animation: google.maps.Animation.DROP,
  draggable: false,
  optimized:false 

   
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.setContent(globalThisLocation[0]);
    infowindow.open(map, this);

  });
}



// function initMap2() {
//         var directionsService = new google.maps.DirectionsService;
//         var directionsDisplay = new google.maps.DirectionsRenderer;
//         var map2 = new google.maps.Map(document.getElementById('map2'), {
//           zoom: 7,
//           center: globalThisLocation[0]
//         });
//         directionsDisplay.setMap(map2);

//         var onChangeHandler = function() {
//           calculateAndDisplayRoute(directionsService, directionsDisplay);
//         };
//         document.getElementById('start').addEventListener('change', onChangeHandler);
//         document.getElementById('end').addEventListener('change', onChangeHandler);
//       }

//       function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//         directionsService.route({
//           origin: globalThisLocation[0],
//           destination: {
//           globalEndpoint[0].geometry.location,lat(),
//           globalEndpoint[0].geometry.location,lng(),
//         }
//           travelMode: 'DRIVING'

//         }, function(response, status) {
//           if (status === 'OK') {
//             directionsDisplay.setDirections(response);
//           } else {
//             window.alert('Directions request failed due to ' + status);
//           }

//         });
//       }










