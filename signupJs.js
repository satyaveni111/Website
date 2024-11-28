let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let emailValue = emailEl.value;
let rguktString = "rguktsklm";
nameEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Please enter your name...";
  } else {
    nameErrMsgEl.textContent = "";
  }
});

emailEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Please enter your email...";
  } else {
    emailErrMsgEl.textContent = "";
  }
});

myFormEl.addEventListener("submit", function(event) {
    let emailVal = emailEl.value
    if(!emailVal.includes("rguktsklm")){
        event.preventDefault();
        emailErrMsgEl.textContent = "Enter University Mail id..";
    }else{
        emailErrMsgEl.textContent = "";
        event.preventDefault();
        emailErrMsgEl.style.color = "green";
        window.location.href = "domains.html"
    }
});
function vlsiFunction(){
  window.location.href = "vlsiSubDomains.html"
}
function embeddedFunction(){
  window.location.href = "embeddedSubDomains.html"
}
function communicationFunction(){
  window.location.href = "communicationSubDomains.html"
}
function IoTFunction(){
  window.location.href = "IotSubDomains.html"
}

//verilog difficulty page redirection

function verilogSelectDifficulty(){
  var verilogSelectDifficulty = document.getElementById("verilogDropDown").value;
  if(verilogSelectDifficulty){
    window.location.href = verilogSelectDifficulty;
  }
}

//sv difficult page redirection

function svSelectDifficulty(){
  var svSelectDifficulty = document.getElementById("svDropDown").value;
  if(svSelectDifficulty){
    window.location.href = svSelectDifficulty;
  }
}

//DE difficulty page redirection
function deSelectDifficulty(){
  var deSelectDifficulty = document.getElementById("deDropDown").value;
  if(deSelectDifficulty){
    window.location.href = deSelectDifficulty;
  }
}

