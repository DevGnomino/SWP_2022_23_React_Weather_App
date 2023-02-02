export default async function GetWeatherFromAPI() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bregenz,at&appid=06e572964e1e549dffb981af5fe641ff", requestOptions)
      .catch(err => console.log(err.message));
  if (!res) return "";
  return await res.json();
}

export function GetDateTime() {
  console.log(new Date(1674726742*1000)); //-(3600*1000)
}