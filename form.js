function buat_login(){
  var elem = document.getElementById("X");
  elem.parentElement.removeChild(elem);
  var par = document.createElement("P");
  par.className = "tulisan_login";
  par.innerHTML = "SILAHKAN MENDAFTAR";
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(par);
  var form = document.createElement("FORM");
  element.appendChild(form);
  //NAMA USER
  var label = document.createElement("label");
  label.innerHTML = "Nama User";
  form.appendChild(label);
  var input_namauser = document.createElement("input");
  input_namauser.type = "text";
  input_namauser.name = "namauser";
  input_namauser.className = "form_login";
  input_namauser.placeholder = "Nama User..";
  form.appendChild(input_namauser);
  //NOMOR HANDPHONE
  var label1 = document.createElement("label");
  label1.innerHTML = "Nomor Handphone";
  form.appendChild(label1);
  var input_nomor = document.createElement("input");
  input_nomor.type = "number";
  input_nomor.name = "nomorhp";
  input_nomor.className = "form_login";
  input_nomor.placeholder = "Nomor Handphone.";
  form.appendChild(input_nomor);
  //INPUT USERNAME
  var label2 = document.createElement("label");
  label2.innerHTML = "Username";
  form.appendChild(label2);
  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.placeholder = "Username atau Email ..";
  form.appendChild(input_username);
  //INPUT PASSWORD
  var label3 = document.createElement("label");
  label3.innerHTML = "Password";
  form.appendChild(label3);
  var input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.className = "form_login";
  input_password.placeholder = "Password .."
  form.appendChild(input_password);
  //TOMBOL submit
  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  tombol.value = "DAFTAR SEKARANG";
  form.appendChild(tombol);
}
