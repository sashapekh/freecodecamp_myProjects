/**
 * Created by sashapekh on 4/24/16.
 */
var weather_url = 'http://api.openweathermap.org/data/2.5/weather?q=';
var weather_key = '&units=metric&APPID=f21ba253e9dc803c6cd0853040e12b12'

var get_localCity_url = 'http://ipinfo.io/json';


/*$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Kiev&APPID=f21ba253e9dc803c6cd0853040e12b12',function(json){
   return console.log(json)
});*/


$.getJSON(get_localCity_url,function(json){

   $.getJSON(weather_url+json.city+ weather_key,function(weather_data){
      /*return console.log(weather_data.weather[0]['main']);*/

      var weather_cur = weather_data.weather[0]['main'];
      var weather_desc = weather_data.weather[0]['description'];
      var weather_temp = Math.round(weather_data.main.temp);
      $('h1.city-country').text(json.city + "," + json.country);
      $('h1.temperature').html(weather_temp + ' &deg C');
      console.log(weather_cur);
      switch (weather_cur){
         case 'Clouds':
              $('div.weather-icon').html('<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>');
              break;
         case 'Snow':
              $('div.weather-icon').html('<div class="icon flurries"><div class="cloud"></div><div class="snow"><div class="flake"></div> <div class="flake"></div> </div> </div>');
              break;
         case 'Rain':
              $('div.weather-icon').html('<div class="icon sun-shower"><div class="cloud"></div><div class="rain"></div></div>');
              break;
         case 'Clear':
              $('div.weather-icon').html('<div class="icon sunny"><div class="sun"> <div class="rays"></div></div></div>')
         default:
              $('div.weather-icon').html('<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>');
              break;
      }
       $('h1.weather-description').text(weather_desc);
   });


});