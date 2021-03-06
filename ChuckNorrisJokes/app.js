// *First get the url endpoint link where we will fetch our jokes

const api_url = 'https://api.chucknorris.io/jokes/random';

const Zlatan_Api =
  ' https://cors-anywhere.herokuapp.com/http://www.zlatanjokes.site/joke ';
// * Next, get the nodes to our button and the P element where we will display our jokes

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

// * now we can take our button and add a click event where whenever it is pressed we will make an api call and display random jokes.

btn.addEventListener('click', () => {
  displayData(api_url);
});

// * this function is responsible for displaying the data we get back from the api

// * Async await format

displayData = async (url) => {
  try {
    let data = await fetch(url);
    let response = await data.json();
    content.textContent = response.value;
  } catch (error) {
    console.log(error);
  }
};
