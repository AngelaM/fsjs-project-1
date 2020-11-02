/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Array of quotes
const quotes = [
  {quote: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
    source: "Abidail Adams",
    citation: "Letter to John Quincy Adams",
    year: 1780
  },  
  {quote: "For all knowledge and wonder (which is the seed of knowledge) is an impression of pleasure in itself.",
    source: "Francis Bacon",
    citation: "The Advancement of Learning",
    year: 1605,
    country: 'England'
  },
  {quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "Mahatma Gandhi",
    country: 'India'
  },
  {quote: "Any fool can know. The point is to understand.",
    source: "Albert Einstein",
  },
  {quote: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena...",
    source: "Theodore Roosevelt",
    country: 'United States'
  }
]

//Return a randomly chosen item from an array
function getRandomQuote(array) {
  let index = Math.floor(Math.random() * (array.length));
  return array[index];
}

//Create a random background color
function getRandomColor() {
  function hex() {
    let randomNum = Math.floor(Math.random() * 256);
    return ("0"+String(randomNum.toString(16))).slice(-2);
  }
  let color = "#"+hex()+hex()+hex();
  return color;
}

//Display a random quote in the '.quote-box' element of page
function printQuote() {
  let quoteBackground = getRandomColor();
  document.querySelector('body').style.background = quoteBackground;
  let chosenQuote = getRandomQuote(quotes);
  let html = `<p class="quote">${chosenQuote.quote}</p>
              <p class="source">${chosenQuote.source}`;
  if (chosenQuote.citation){
    html += `<span class="citation">${chosenQuote.citation}</span>`
  }
  if (chosenQuote.year) {
    html += `<span class="year">${chosenQuote.year}</span>`
  }
  if (chosenQuote.country) {
    html += `<span class="country">${chosenQuote.country}</span>`
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html; 
}

setInterval(printQuote, 8000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

