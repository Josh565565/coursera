(function () {
  "use strict";
  let convertType = "miles";
  const heading = document.querySelector("h1");
  const intro = document.querySelector("p");
  const answerDiv = document.getElementById("answer");
  const form = document.getElementById("convert");

  document.addEventListener("keydown", (e) => {
    //Handle M and K key
    var key = e.code;

    if (key === "KeyM") {
      convertType = "miles";
      heading.innerHTML = "Miles to Kilometers Converter";
      intro.innerHTML =
        "Type in a number of miles and click the button to convert the distance to kilometers.";
    } else if (key === "KeyK") {
      convertType = "kilometers";
      heading.innerHTML = "Kilometers to Miles Converter";
      intro.innerHTML =
        "Type in a number of kilometers and click the button to convert the distance to miles.";
    }
  });

  form.addEventListener("submit", (e) => {
    //Handle form submit
    e.preventDefault();

    var distance = parseFloat(document.getElementById("distance").value);

    if (distance) {
      // convert M to K 1.609344
      // convert K to M 0.621371192
      if (convertType == "miles") {
        const answer = (distance * 1.609344).toFixed(3);
        answerDiv.innerHTML = `${distance} miles converts to ${answer} kilometers`;
      } else {
        var answer = (distance * 0.621371192).toFixed(3);
        answerDiv.innerHTML = `${distance} kilometers converts to ${answer} miles`;
      }
    } else {
      answerDiv.innerHTML = "Please enter a Number!";
    }
  });
})();
