function login() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;

  if (user == "")
    alert("Nome de usuário vazio!");
  else if (password == "")
    alert("Senha de usuário vazia!");
  else
    window.location.assign("../pages/libeloPage.html");
}
