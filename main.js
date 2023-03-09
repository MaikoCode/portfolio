
const form = document.querySelector("form")
const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
const inputMessage = document.querySelector('.input-message');
const borderInput = document.querySelectorAll('.border-input');
const alerts = document.querySelectorAll(".alert");



form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let send = true;
    if(inputName.value.replace(/\s/g, "") === ""){
        send = false;
        borderInput[0].style.backgroundColor = "rgba(255, 111, 91, 1)";
        alerts[0].style.display = "block";

    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailRegex.test(inputEmail.value)){
        send = false;
        borderInput[1].style.backgroundColor = "rgba(255, 111, 91, 1)";
        alerts[1].style.display = "block";

    }


    if(inputMessage.value.length < 8){
        send = false;
        borderInput[2].style.backgroundColor = "rgba(255, 111, 91, 1)";
        alerts[2].style.display = "block";

    }


    
    if(send){
       for(let i = 0; i < borderInput.length; i++){
        borderInput[i].style.backgroundColor = "rgba(255, 255, 255, 1)";
        alerts[i].style.display = "none";
    }
    e.target.reset();
}

    

})


