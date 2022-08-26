let form = document.getElementById("form");
form.addEventListener("submit", optionSelection);
let rate_value;

//Option Selection
function optionSelection(e) {
  e.preventDefault();
  var choise = document.getElementsByName("choise");

  for (var i = 0; i < choise.length; i++) {
    if (choise[i].checked) {
      rate_value = choise[i].value;
    }
  }

  if (!rate_value) {
    document.getElementById("myAlert").style.display = "block";
    $(".alert").addClass("show");
    $(".alert").removeClass("hidealert");
    $(".alert").addClass("showAlert");
    setTimeout(function () {
      document.getElementById("myAlert").style.display = "none";
      $(".alert").removeClass("show");
      $(".alert").addClass("hidealert");
    }, 3000);
    return false;
  }
  console.log(rate_value);

  document.getElementById("btn-1").innerText = "Going Forward...";

  setTimeout(() => {
    document.getElementById("form").style.display = "none";
    document.getElementById("form-2").style.display = "block";
    document.getElementById("submit").style.display = "none";
  }, 2000);
}

// Alert closing button
$(".close-btn").click(function () {
  document.getElementById("myAlert").style.display = "none";
  document.getElementById("myAlert2").style.display = "none";
  $(".alert").removeClass("show");
  $(".alert").addClass("hidealert");
});

let chkBtn = document.getElementById("check");
chkBtn.addEventListener("click", checkEmail);

let randomValue = ["demo", "demo2", "123456789", "demo3", "grade8"];

function checkEmail(e) {
  document.getElementById("check").innerText = "Checking...";
  let email = document.getElementById("email").value;

  let res = ValidateEmail(email);

  if (res) {
    if (email !== "demo@gmail.com") {
      let elem = document.getElementsByClassName("myInpt");
      document.getElementById("form2head").innerText = "Enter Your Details";
      document.getElementById("email").readOnly = "readonly";
      for (let i = 0; i < elem.length; i++) {
        console.log(elem[i]);
        elem[i].style.display = "block";
      }
    } else {
      let elem = document.getElementsByClassName("myInpt");

      for (let i = 0; i < elem.length; i++) {
        let el = elem[i].querySelector(".inpt");
        console.log(el);
        el.required = false;
      }
    }

    setTimeout(() => {
      document.getElementById("check").style.display = "none";
      document.getElementById("submit").style.display = "block";
    }, 1000);
  } else {
    document.getElementById("check").innerText = "Check";
  }
}

let form2 = document.getElementById("form-2");
form2.addEventListener("submit", submitDetails);

function submitDetails(e) {
  e.preventDefault();
  console.log("details submitted", rate_value);

  let email = document.getElementById("email").value;

  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let contact = document.getElementById("contact").value;
  let childname = document.getElementById("childname").value;
  let grade = document.getElementById("grade").value;

  let newDiv = document.createElement("div");
  newDiv.id = "result";

  form2.innerHTML = "";
  form2.style.display = "flex";
  form2.style.alignItems = "center";

  newDiv.innerText = "You have successfully registred for the demo class";
  form2.append(newDiv);

  console.log(firstName, lastName, email, contact, childname, grade);
}

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    // alert("Valid email address!");
    // document.getElementById("email").focus
    return true;
  } else {
    document.getElementById("myAlert2").style.display = "block";
    $(".alert").addClass("show");
    $(".alert").removeClass("hidealert");
    $(".alert").addClass("showAlert");
    setTimeout(function () {
      document.getElementById("myAlert2").style.display = "none";
      $(".alert").removeClass("show");
      $(".alert").addClass("hidealert");
    }, 3000);
    return false;
  }
}

function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}
