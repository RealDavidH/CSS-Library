    

//!!!!!!COOKIE POP UP FUNCTION!!!!!!
        //New popup code
        function closeCookie() {
            let checkbox = document.getElementById("cookie_check_Box")
            let alert2 = document.getElementById("hidden_alert")
            if (checkbox.checked == true) {
                document.getElementById("cookie-popup").style.display = "none";
            } else {
                alert('YOU MUST SELL US YOUR SOUL')
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