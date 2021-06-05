(function() {
    // Using Array 
    const quotes = [
        {
          quote:
            "انسان کی انسانیت تب ختم ہوتی ہے جب اسے دوسروں کے دکھوں پر ہنسی آنے لگے",
        },
        
      {
        quote:
          "اپنے کل کو بہتر کرنے کے لیے اپنا آج سنوارو"
      },

      {
        quote:
        "لوگ اچھا پڑھنے اور اچھا لکھنے والے کو قابل انسان سمجھتے ہیں جبکہ حقیقت میں قابل وہ ہے جو اچھا سوچیں اور اچھا بولے"
      },
      {
        quote:
          
          "مشکل وقت میں دوسروں کے کام آیا کرو کیوں کے مشکل وقت سب پر آتا ہے کسی کا صبر دیکھنے کے لیے اور کسی کا ظرف "
      },

    ];

    const btn = document.getElementById("newQuote");

    btn.addEventListener("click", function() {

    // Math Random : will return a number
   // we use Math.floor if we want it to be a integer  
    
    let changeEverytime = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[changeEverytime].quote;
});
})();