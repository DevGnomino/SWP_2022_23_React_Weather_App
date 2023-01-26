export default class WeatherAPI {
  /*constructor() {
    this.fullAPIResponse = "";
    this.GetWeatherFromAPI();
    //console.log(this.fullAPIResponse);
  }*/

  async GetWeatherFromAPI() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    

      //Token einfügen, lat und lon als Parameter übergeben, exclude verwenden
    return await fetch("https://api.openweathermap.org/data/3.0/onecall?lat=47&lon=9&appid=f3646ecb50d236f2655587bc51a330df", requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));
    //console.log(this.fullAPIResponse);
  }


  GetDateTime() {
    console.log(new Date(1674724702*1000)); //-(3600*1000)
  }
}