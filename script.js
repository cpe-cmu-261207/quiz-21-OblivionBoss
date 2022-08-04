const pname = document.getElementById("p-name");
const pemail = document.getElementById("p-email");
const paddress = document.getElementById("p-address");
const pic = document.getElementById("img-profile");
const gendemo = document.getElementById("span-gender-icon");
const people = document.getElementById("div-user-card");
const btnrandom = document.getElementById("btn-random");
const load = document.getElementById("div-loading-card");
callApi();

pic.onload = () => {
  load.style.display = "none";
  people.style.display = "";
};

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  pic.src = resp.data.results[0].picture.large;
  pname.innerText = `${resp.data.results[0].name.first} ${resp.data.results[0].name.last}`;
  pemail.innerText = resp.data.results[0].email;
  paddress.innerText = `${resp.data.results[0].location.city} ${resp.data.results[0].location.state} ${resp.data.results[0].location.country} ${resp.data.results[0].location.postcode}`;
  if (resp.data.results[0].gender == "male") {
    gendemo.innerText = "👨";
  } else {
    gendemo.innerText = "👩";
  }
  load.style.display = "none";
  people.style.display = "";
}

btnrandom.onclick = () => {
  callApi();
  load.style.display = "";
  people.style.display = "none";
};
