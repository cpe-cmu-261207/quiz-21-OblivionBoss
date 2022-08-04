async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  p-name.style.display = ""
  p-email.style.display = ""
  p-adress.style.display = ""
  btn-random.style.display = ""
  if(resp.data[0])
}

btn-random.onclicked = async () =>{
  callApi();
}