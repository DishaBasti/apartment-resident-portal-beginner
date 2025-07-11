function validate() {
    var num = document.myform.number.value.trim();
    var numError = document.getElementById("numloc");

    if (num === "" || isNaN(num)) {
        numError.innerHTML = "Enter numeric value only";
        return false;
    } else {
        numError.innerHTML = "";
        return true;
    }
}

function pass_Validate() {
    var password = document.getElementById("Password").value.trim();
    var confirmPassword = document.getElementById("ConfirmPassword").value.trim();
    var passError = document.getElementById("wor");

    if (password === "" || confirmPassword === "") {
        passError.innerHTML = "Password fields cannot be empty";
        return false;
    }

    if (password !== confirmPassword) {
        passError.innerHTML = "Password is not matching";
        return false;
    } else {
        passError.innerHTML = "";
        window.alert("Login successful. Click Next");
        return true;
    }
}

function validateForm() {
    return validate() && pass_Validate();
}
