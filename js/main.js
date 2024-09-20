

function displayQuote()
{
    var button = document.getElementById("quote-area");

        button.style.display = "block";
    

}

async function generateQuote() {
  try {
    const response = await fetch("assets/quotes.txt");
    const data = await response.text();


    const linesArray = data.split("\n");
    const cleanedArray = linesArray
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const randomIndex = Math.floor(Math.random() * cleanedArray.length);

    const randomQuote = cleanedArray[randomIndex];

    console.log("random quote: " + randomQuote);
    return randomQuote; 
  } catch (error) {
    console.error("Error reading the file:", error);
  }
}

async function getQuote()
{
   try {
     const quote = await generateQuote(); // Wait for the quote to be returned
     console.log("quote in 2 function = " + quote);
     document.getElementById("quote").innerText = quote; 
     displayQuote();
   } catch (error) {
     console.error("Error getting the quote:", error);
   }
}
