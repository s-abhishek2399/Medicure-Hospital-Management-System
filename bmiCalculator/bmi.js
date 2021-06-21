// input output js start

const searchForm = document.querySelector("form");
let weightANDheight = "";

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    weightANDheight = document.querySelector("input").value.trim();
    fetchResult(weightANDheight);
});

const fetchResult = (weightANDheight) => {
    fetch(`https://gabamnml-health-v1.p.rapidapi.com/bmi?weight=${weightANDheight}&height=${weightANDheight}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "34c56a009cmsh75304c52976b92ep1a7325jsnba6430a4ce52",
                "x-rapidapi-host": "gabamnml-health-v1.p.rapidapi.com"
            }
        })
        .then((res) => res.json().then((data) => showResult(data)))
        .catch((err) => showResult("No  result Found!!", true));
};

const showResult = (data, isError = false) => {
    console.log(isError);

    const resultDiv = document.querySelector(".result");

    if (!isError) {
        const status = data.status;
        const result = data.result;



        resultDiv.innerHTML = `    <div class="box response textCenter">
        <h1 id="search1" class="title is-size-3">Your Weight & Height is : ${weightANDheight}</h1>
        <div id="search2" class="box ">
            <p> The BMI ststus : ${status}</p>
        </div>
        <br>
        <div id="text1" class="result1">
            <h1> <strong>BMI range is : </strong> </h1>

            ${result}

        </div>
        <div id="text1" class="id_weight">
            <h1> <strong> Ideal BMI is :</strong>  <br> <br>  In the 18.5 to 24.9 range.</h1>

            

        </div>
        <br>
    </div>

  </div>`;
    } else {
        resultDiv.innerHTML = `    <div class="result container">
    <div class="box response textCenter">
      <h1 class="title is-size-3">${weightANDheight}</h1>
      <div class="box definition">
        <p>${data}</p>
      </div>
      <br>
      <br>
    </div>
  </div>`;
    }
};

// input output js ended