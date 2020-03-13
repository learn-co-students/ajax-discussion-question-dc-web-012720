const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const button = document.querySelector("button");

  button.addEventListener("click", fetchData);

});

function fetchData() {
  fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(json => addPerson(json))
}

function addPerson(json) {
  debugger

  const firstName = json.results[0].name.first;
  const lastName = json.results[0].name.last;
  const profilePic = json.results[0].picture.medium;

  const street = json.results[0].location.street.number + json.results[0].location.street.name;
   
}