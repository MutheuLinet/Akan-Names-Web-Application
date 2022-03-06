function getAkanName() {

    let myInputedBirthYear = document.getElementById("year").value;
    let CC =  myInputedBirthYear.substring(0,2);
    let YY = myInputedBirthYear.substring(2,4);
    let MM = document.getElementById("month").value;
    let DD = document.getElementById("day").value;
    let myGender = document.querySelector("#gender").value;

    let dayBorn = parseInt( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

    console.log(dayBorn);
    console.log(typeof(dayBorn));
    console.log(Math.round(dayBorn));
    let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     
    if (MM <= 0 || MM > 12) {
      alert("Invalid month"); 
    }    
    else if (DD <= 0 || DD > 31) {
      alert("Invalid day");
    }
    else if (Math.round(dayBorn) === 0 && myGender === "Male") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Male gender.  Your Akan name is " + maleAkanNames[0] + "!");
    }
    else if (Math.round(dayBorn) === 1 || Math.round(dayBorn) === -1 && myGender === "Male") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Male gender. Your Akan name is " + maleAkanNames[1] + "!");
    }
    else if (Math.round(dayBorn) === 2 || Math.round(dayBorn) === -2 && myGender === "Male") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Male gender. Your Akan name is " + maleAkanNames[2] + "!");
    }
    else if (Math.round(dayBorn) === 3 || Math.round(dayBorn) === -3 && myGender === "Male") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Male gender. Your Akan name is " + maleAkanNames[3] + "!");
    }
    else if (Math.round(dayBorn) === 4 || Math.round(dayBorn) === -4 && myGender === "Male") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Male gender. Your Akan name is " + maleAkanNames[4] + "!");
    }  
    else if (Math.round(dayBorn) === 5 || Math.round(dayBorn) === -5 && myGender === "Male") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Male gender. Your Akan name is " + maleAkanNames[5] + "!");
    }
    else if (Math.round(dayBorn) === 6 || Math.round(dayBorn) === -6 && myGender === "Male") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Male gender. Your Akan name is " + maleAkanNames[6] + "!");
    }    
    else if (Math.round (dayBorn) === 0 && myGender === "Female") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Female gender. Your Akan name is " + femaleAkanNames[0] + "!")
    }
    else if (Math.round(dayBorn) === 1 || Math.round(dayBorn) === -1 && myGender === "Female") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Female gender. Your Akan name is " + femaleAkanNames[1] + "!");
    }
    else if (Math.round(dayBorn) === 2 || Math.round(dayBorn) === -2 && myGender === "Female") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Female gender. Your Akan name is " + femaleAkanNames[2] + "!");
    }
    else if (Math.round(dayBorn) === 3 || Math.round(dayBorn) === -3 && myGender === "Female") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Female gender. Your Akan name is " + femaleAkanNames[3] + "!");
    }
    else if (Math.round(dayBorn) === 4 || Math.round(dayBorn) === -4 && myGender === "Female") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Female gender. Your Akan name is " + femaleAkanNames[4] + "!");
    }
    else if (Math.round(dayBorn) === 5 || Math.round(dayBorn) === -5 && myGender === "Female") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Female gender. Your Akan name is " + femaleAkanNames[5] + "!");
    }
    else if (Math.round(dayBorn) === 6 || Math.round(dayBorn) === -6 && myGender === "Female") {
      document.getElementById("generate-akan").innerHTML = ("You were born on a " + days[dayBorn] + " and are of Female gender. Your Akan name is " + femaleAkanNames[6] + "!");
    }
    else {
      alert("Oops! Something is missing. Please fill out every field");
    }
}

function clearAkanOutput(){
  document.getElementById("generate-akan").innerHTML = ("");
}