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
     

}

function clearAkanOutput(){
  document.getElementById("generate-akan").innerHTML = ("");
}