function GetCoordsFromLoc(input) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + input + "&limit=50&appid=f3646ecb50d236f2655587bc51a330df", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}