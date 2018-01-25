front-end-project

The Star Foodie is a web application designed to help users find the best quality restaurants nearest to them using google's API's. On the star foodie we help you find the best dining experience in your area by cross checking the best food reviews to make sure that only the best restaurants that pay close attention to detail and excellent customer service are availible for your selection.

concept:
Use google's geolocation to recieve the users latitude and longtitude origin.

the app will then locate and return all restaurants in a set radius with a four star review or higher.

the user will have the choice to search through the list of restaurants until they find one of intrest and then get directions to the resturant.

execution:
After collecting geolocation, we are provided a location for the user in the form of lat/long cordinates.  Google requires these cordinates to be in their own syntax.  Then the user location will appear on the map.  We used google's places API to make an array that can be cycled through to show different restaurants within our radius.  We used other details from this API to add rating, reviews, and a picture.  Pressing Get Directions can allow you to find a route from your location to your desired restaurant. The new map will show up in a modal because we didn't want two maps on one page.

Team Members:
Akil
Amir

What We Used:
HTML5
CSS3
Google Places API
Javascript
Jquery
Bootstrap
Google Maps API

3 contributions worth adding to this project:
1. Show the distance between your location and the restaurant.
2. Fix the CSS so the page looks good across all formats.
3. Finish the bototm links so they are real pages
