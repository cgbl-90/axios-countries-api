function generateCall(options) {
  axios
    .request(options)
    .then(function (response) {
      printData(response.data[0]);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function printData(array) {
  console.log(array);
  let flag = document.getElementById("flag");
  let coat = document.getElementById("coat");
  let country = document.getElementById("country");
  let capital = document.getElementById("capital");
  let ccode = document.getElementById("country-code");
  let region = document.getElementById("region");
  let subregion = document.getElementById("subregion");
  let size = document.getElementById("size");
  let phone = document.getElementById("phone");
  let time = document.getElementById("time");
  coat.src = array.coatOfArms.png !== undefined ? array.coatOfArms.png : "N/A";
  flag.src = array.flags.png !== undefined ? array.flags.png : "N/A";
  country.innerHTML =
    array.name.common !== undefined ? array.name.common : "N/A";
  capital.innerHTML = array.capital !== undefined ? array.capital : "N/A";
  ccode.innerHTML = array.cca2 !== undefined ? array.cca2 : "N/A";
  region.innerHTML = array.region !== undefined ? array.region : "N/A";
  subregion.innerHTML = array.subregion !== undefined ? array.subregion : "N/A";
  size.innerHTML = array.population !== undefined ? array.population : "N/A";
  phone.innerHTML = array.idd.root !== undefined ? array.idd.root : "N/A";
  time.innerHTML =
    array.timezones[0] !== undefined ? array.timezones[0] : "N/A";
}

let btns = document.querySelectorAll("button");

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    let code = e.target.innerHTML;
    let options = {
      method: "GET",
      url: "https://restcountries.com/v3.1/alpha?codes=" + code,
    };
    generateCall(options);
  })
);
