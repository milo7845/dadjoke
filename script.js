const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")
const apiKey = "/5d5cVhOSFXs3kqjQqZg2w==28TM7bXtO3iLrgGU"

const option = {
    method:"GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1" 

 async function getJoke(){
   const response = await fetch(apiURL, option)
   const data = await response.json();

  jokeEl.innerText = data[0].joke;
}


btnEl.addEventListener("click", getJoke)