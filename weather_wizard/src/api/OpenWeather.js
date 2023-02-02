export default function GetWeatherFromAPI() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  

    //Token einfügen, lat und lon als Parameter übergeben, exclude verwenden
  const apiResponse = fetch("https://api.openweathermap.org/data/3.0/onecall?lat=47&lon=9&appid=f3646ecb50d236f2655587bc51a330df", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));

  return apiResponse;
  //console.log(this.fullAPIResponse);
}

export function GetDateTime() {
  console.log(new Date(1674726742*1000)); //-(3600*1000)
}