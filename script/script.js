const adminUser = "admin"
const adminPassword = "admin123"

const demoUser = "user"
const demoPassword = "user123"

function getInputValue() {

    var u = document.getElementById("uname").value;
    var p = document.getElementById("upass").value;
    // Displaying the value
    //alert(u+p);
    /*
    if(u==adminUser){
        alert("root user");
    }
    */
    if (u == adminUser) {
        if (p == adminPassword) {
            //alert("correct")
            window.open("admin.html", "_self")
        } else {
            document.getElementById("warning").innerHTML = "incorrect entry, try again"
        }
    }

    if (u == demoUser) {
        if (p == demoPassword) {
            //alert("correct")
            window.open("user.html", "_self")
        } else {
            document.getElementById("warning").innerHTML = "incorrect entry, try again"
        }
    }
    if (u == "" && p == "") {
        document.getElementById("warning").innerHTML = "incomplete entry, try again"
    }
}

function signup(){
    window.open("signup.html", "_self")
}