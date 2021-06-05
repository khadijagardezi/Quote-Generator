(function() {
    // Using Array 
    const quotes = [
        {
          quote:
            "When you encourage others, you in the process are encouraged because you're making a commitment and difference in that person's life. Encouragement really does make a difference.",
          author:
            " Zig Ziglar"
        },
        
      {
        quote:
          "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: " Life"
      },

      {
        quote:
        "You have to take risks. We will only understand the miracle of life fully when we allow the unexpected to happen.",
        author: "Paulo Coelho"
      },
      {
        quote:
          "God save me from my friends. I can protect myself from my enemies.",
        author: "Claude Louis Hector de Villars "
      },
      {
        quote: "The price of anything is the amount of life you exchange for it.",
        author: "David Thoreau"
      },
      {
        quote:
          "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        author: "Charles Lindbergh"
      },
      {
        quote:
          "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: "Tyne Daly"
      },
      {
       quote:
       "You never know when a moment and a few sincere words can have an impact on a life.",
       author:
       "Zig Ziglar"
      },
      {
          quote:
          "The way to write is well, and how is your own business.",
          author:
          "A. J. Liebling"
      },
      {
          quote:
          "When it comes to luck, you make your own.",
          author: 
          "Bruce Springsteen"
      },
      {
          quote:
          "Life is far too important a thing ever to talk seriously about.",
          author:
          "Oscar Wilde"
      }
    ];

    const btn = document.getElementById("newQuote");

    btn.addEventListener("click", function() {

    // Math Random : will return a number
   // we use Math.floor if we want it to be a integer  
    
    let changeEverytime = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[changeEverytime].quote;
    document.querySelector(".author").textContent = quotes[changeEverytime].author;
});
})();