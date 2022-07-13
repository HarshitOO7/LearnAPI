//use webstorage API
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
var ret1;
var ret2;
var ret3;
var ret4;
function myfunc() {
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("firstname",  document.getElementById("firstname").value);
        localStorage.setItem("lastname", document.getElementById("lastname").value);
        localStorage.setItem("age", document.getElementById("age").value);
        localStorage.setItem("email", document.getElementById("email").value);

        // Retrieve
        document.getElementById("ret1").innerHTML = "Firstname: " + localStorage.getItem("firstname");
        document.getElementById("ret2").innerHTML = "Lastname: " + localStorage.getItem("lastname");
        document.getElementById("ret3").innerHTML = "Age: " + localStorage.getItem("age");
        document.getElementById("ret4").innerHTML = "Email: " +localStorage.getItem("email");

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    console.log(document.getElementById("firstname").value);
    console.log(localStorage.getItem("firstname"));
}
function myfunc2() {
    if (typeof (Storage) !== "undefined") {
        // Store
        sessionStorage.setItem("firstname2",  document.getElementById("firstname2").value);
        sessionStorage.setItem("lastname2", document.getElementById("lastname2").value);
        sessionStorage.setItem("age2", document.getElementById("age2").value);
        sessionStorage.setItem("email2", document.getElementById("email2").value);

        // Retrieve
        document.getElementById("ret5").innerHTML = "Firstname: " + sessionStorage.getItem("firstname2");
        document.getElementById("ret6").innerHTML = "Lastname: " + sessionStorage.getItem("lastname2");
        document.getElementById("ret7").innerHTML = "Age: " + sessionStorage.getItem("age2");
        document.getElementById("ret8").innerHTML = "Email: " +sessionStorage.getItem("email2");

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
function print() {
    document.getElementById("result10").innerHTML = "Firstname: " + localStorage.getItem("firstname");
    document.getElementById("result11").innerHTML = "Lastname: " + localStorage.getItem("lastname");
    document.getElementById("result12").innerHTML = "Age: " + localStorage.getItem("age");
    document.getElementById("result13").innerHTML = "Email: " +localStorage.getItem("email");
}
function print2() {
    document.getElementById("result14").innerHTML = "Firstname: " + sessionStorage.getItem("firstname2");
    document.getElementById("result15").innerHTML = "Lastname: " + sessionStorage.getItem("lastname2");
    document.getElementById("result16").innerHTML = "Age: " + sessionStorage.getItem("age2");
    document.getElementById("result17").innerHTML = "Email: " +sessionStorage.getItem("email2");
}
function getLocation() {
    x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Your Location:<br>"+ 
    "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
