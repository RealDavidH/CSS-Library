//!!!!!!COOKIE POP UP FUNCTION!!!!!!
//New popup code

function closeCookie() {
    let main = document.querySelector("#main");
    let checkbox = document.querySelector("#cookie_check_Box");
    let alert2 = document.querySelector("#hidden_alert");
    if (checkbox.checked == true) {
        document.getElementById("cookie-popup").style.display = "none";
        main.classList.remove("blur");
    } else {
        // alert("YOU MUST AGREE TO GIVE US YOUR SOUL!")
        alert2.style.display = "block";
    }
}

// When the user clicks on div, open the popup
// older code
// function open() {
//   document.getElementById("myForm").style.display = "block";
// }
// function close() {
//   document.getElementById("myForm").style.display = "none";
// }
//      If you want a text to display when you check the check mark. Make this function not a comment and the html on line 87
//     function checkBox() {
//         let checkBox = document.getElementById("cookie_check_Box");
//         let text = document.getElementById("text");
//         if (checkBox.checked == true) {
//             text.style.display = "block";
//         } else {
//             text.style.display = "none";
//         }
//     }
//!!!!!!COOKIE POP UP FUNCTION!!!!!!

//!!!!!! Button even lister, that when you click on button the number of likes goes up by 1.!!!!!!!!!!!!!!!!
let btn_Yellow = document.querySelector(".btn_Yellow");
function addEvent() {
    btn_Yellow.addEventListener("click", changeLike());
}

let like = 0;
function changeLike() {
    like++; // makes the buttons number value go up by one, every time this function is run
    alert("You have liked this!"); //Alerts user that the have clicked the like button
    btn_Yellow.value = "likes: " + like;
}

// If you for some reason, like me, have two yellow buttons you use two of these functions like so
// let btn_Yellow2 = document.querySelector(".btn_Yellow2");
// function addEvent2(){
//     btn_Yellow2.addEventListener("click", changeLike2());
// }

// let like2 = 0;
//     function changeLike2(){
//         like++;
//             btn_Yellow2.value = "likes: "+like;
// }
//!!!!!! Button event lister!!!!!!!!!

//Changes a button from login to logout
let btn_Normal = document.querySelector(".btn");
function login() {
    if (btn_Normal.value == "Login") {
        btn_Normal.value = "Log out";
    } else btn_Normal.value = "Login";
}
