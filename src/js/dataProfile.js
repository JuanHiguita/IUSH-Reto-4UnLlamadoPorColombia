let loggedUser = JSON.parse(localStorage.getItem("user"));
console.log(loggedUser);
//destructuring de la informacion del usuario
let name = loggedUser.firstName + " " + loggedUser.lastName;
let disability = loggedUser.disability;
let addres = loggedUser.addres;
let phone = loggedUser.phone;
let photo = loggedUser.photoUrl;

//Creacion y Ubicacion del espacio designado al avatar del usuario
let profileImageContainer = document.getElementById("profileImageContainer");

let profileImage = document.createElement("img");
profileImage.classList.add("profileImage");
profileImage.src = photo;

profileImageContainer.appendChild(profileImage);

//llenado de datos correspondientes al usuario loggeado
document.getElementById("userName").innerHTML = name;
document.getElementById("userDisability").innerHTML = disability;
document.getElementById("userAddres").innerHTML = addres;
document.getElementById("userPhone").innerHTML = phone;
