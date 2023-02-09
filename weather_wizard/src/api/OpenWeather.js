export default async function GetWeatherFromAPI() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const res = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat=47.50311&lon=9.7471&exclude=minutely&appid=93235a2363a8ed97a74f27111965409e&units=metric", requestOptions)
      .catch(err => console.log(err.message));
  if (!res) return "";
  return await res.json();
}

export function GetDateTime() {
  console.log(new Date(1674726742*1000)); //-(3600*1000)
}