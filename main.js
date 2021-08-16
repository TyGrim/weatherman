//handle form submit
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputField = document.querySelector('input[type="number"]')

  fetch(
    `https://api.weatherbit.io/v2.0/current?key=e42bffcf84b34dd78ebcfacbb838eb3a&postal_code=${inputField.value}&country=US`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))

  document.getElementById('api-info').innerHTML 
  function getWeather(inputField){
    return data.vis
  }
  )
  
})
//get user input fields
//display result
//submit to api

//api info

/* 
e42bffcf84b34dd78ebcfacbb838eb3a
&postal_code=27601&country=US
https://api.weatherbit.io/v2.0/current
*/
  