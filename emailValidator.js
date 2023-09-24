var submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", async (e) => {  //make it async because await works in await function
  e.preventDefault(); 
   var resultContainer = document.getElementById("resultContainer");
   resultContainer.innerHTML= `<div class="loader">
   <div class="scanner">
     <span>Loading...</span>
   </div>
 </div>`
  var email = document.getElementById("email").value;
  var key = "ema_live_5TlXmJyCSUdJiCzmUZHhYQFg8M8qe2c6mTptTmPn";
  var url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  var res = await fetch(url);  //use for url to load fully
  var result = await res.json();
  let str = ``;
  for (var items in result) {
 
    str = str + `<div>${items} : ${result[items]}</div>`;
  
  }


  resultContainer.innerHTML = str;

  /* My own ideas*/

  //{
  if (
    resultContainer.firstElementChild.nextSibling.nextSibling.nextSibling
      .nextSibling.innerHTML == `smtp_check : false`
  ) {
    document.getElementById("finalAnswer").innerHTML = "Invalid email";
  } else if (
    resultContainer.firstElementChild.nextSibling.nextSibling.nextSibling
      .nextSibling.innerHTML == `smtp_check : true`
  ) {
    document.getElementById("finalAnswer").innerHTML = "valid email";
  }

  var loader = document.getElementById("loader"); //For starting loading
  loader.style.display = "flex";

  setTimeout(() => {
    //For closing the loading
    if (resultContainer.innerHTML != " ") loader.style.display = "none";
  }, 1000);
  //}
});
