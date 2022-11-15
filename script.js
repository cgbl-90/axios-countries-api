function generateCall() {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

let btns = document.querySelectorAll("button");

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    console.log(e.target);
    let options = {
      method: "GET",
      url: "https://restcountries.com/v3.1/name/peru",
    };
  })
);
