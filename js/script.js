// Ini Javascript //


// Pop Up Masukin Nama 
function replaceName(){
    let name = prompt("Siapakah nama anda?");
    document.getElementById("name").innerHTML = name
    if (name == "") {
        alert("Tidak boleh ada yang kosong");
        return replaceName();
    }

    
}

// Slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
},     9000);

replaceName();


// Message
function validateForm() {
    const date = Date();
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(date, name, birthDate, gender, messages);

    return false;
}

function setSenderUI(date, name, birthDate, gender, messages) {
    document.getElementById("current-time").innerHTML = date;
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}