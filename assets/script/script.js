
// Validation using function Starts

const register = (e) => {
    event.preventDefault();

    const name = e.target.name.value.trim();
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const user = e.target.username.value;
    const password = e.target.password.value;
    const cpassword = e.target.cPassword.value;

    const arr = ["male", "female", "other"];
    let gender;
    arr.forEach((gen) => {
        if (document.getElementById(gen).checked) {
            gender = gen;
        }

    });

    let isValid = true;

    // Validation function for name
    const checkName = ()=>{

        for(let char of name)
        {
            if(!((char>='a' && char<='z') || (char>='A' && char<='Z') || char===" "))
            {
                return true;
            }
        }
    
    }

    if (name.length === 0 || checkName()) {
        isValid = false;
        let name = e.target.name;
        name.style.animation = "vibrate 0.1s linear 5 alternate";
        name.style.border = "1px solid var(--tertiaryColor)";
        document.getElementById('nameError').style.display = "block"
        name.addEventListener("animationend", (e) => e.target.style.animation = '');
    }


    if (phone.includes('e') || phone.includes('E') || isNaN(phone) || phone.length !== 10 ) {
        isValid = false;
        let phone = e.target.phone;
        phone.style.animation = "vibrate 0.1s linear 5 alternate";
        phone.style.border = "1px solid var(--tertiaryColor)";
        document.getElementById('phoneError').style.display = "block"
        phone.addEventListener("animationend", (e) => e.target.style.animation = '');
    }

    //Validation function for email
    const checkEmail = ()=> {

        if (!email) {
            return false;
        }
    
        const atIndex = email.indexOf('@');
        if (atIndex === -1 || atIndex === 0 || atIndex === email.length - 1) {
            return false;
        }
    
        const dotIndex = email.indexOf('.', atIndex);
        if (dotIndex === -1 || dotIndex === atIndex + 1 || dotIndex === email.length - 1) {
            return false;
        }
    
        return true;
    }

    if (!checkEmail()) {
        isValid = false;
        let email = e.target.email;
        email.style.animation = "vibrate 0.1s linear 5 alternate";
        email.style.border = "1px solid var(--tertiaryColor)";
        document.getElementById('emailError').style.display = "block"
        email.addEventListener("animationend", (e) => e.target.style.animation = '');
    }

    if (gender === undefined) {
        isValid = false;
        let gender = document.getElementById("radio");
        gender.style.animation = "none";
        gender.style.animation = "vibrate 0.1s linear 5 alternate";
        document.getElementById('genderError').style.display = "block"
        gender.addEventListener("animationend", (e) => e.target.style.animation = '');
    }

    if (user.length < 3 || user.includes(" ")) {
        isValid = false;
        let usertag = e.target.username;
        usertag.style.animation = "vibrate 0.1s linear 5 alternate";
        usertag.style.border = "1px solid var(--tertiaryColor)";
        document.getElementById('userError').style.display = "block";
        if(user.includes(" "))
        {
            document.getElementById('userError').innerHTML = "username can't contain spaces*"
        }

        usertag.addEventListener("animationend", (e) => e.target.style.animation = '');
    }

    // Validating function for password for having atleast one character,both cases and digit.
    const checkPassword = ()=>{
        let hasUpperCase = false;
        let hasLowerCase = false;
        let hasDigit = false;
        let hasSpecialChar = false;
    
        for (let char of password) {
            if (char >= 'A' && char <= 'Z') {
                hasUpperCase = true;
            } else if (char >= 'a' && char <= 'z') {
                hasLowerCase = true;
            } else if (char >= '0' && char <= '9') {
                hasDigit = true;
            } else {
                hasSpecialChar = true;
            }
        }
    
        return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
    }

    document.getElementById('passError').style.display = "none";
    document.getElementById('cPassError').style.display = "none";

    if (password.length === 0 || password.length < 5 || !checkPassword()) {
        isValid = false;
        let password = e.target.password;
        password.style.animation = "vibrate 0.1s linear 5 alternate";
        password.style.border = "1px solid var(--tertiaryColor)";
        document.getElementById('passError').style.display = "block"
        document.getElementById('passError').innerHTML = "Password must be 5+ characters with at least one spc. character, uppercase, lowercase, and digit*"
        password.addEventListener("animationend", (e) => e.target.style.animation = '');
    }


    else if (password !== cpassword) {
        isValid = false;
        let password = e.target.password;
        let cpassword = e.target.cPassword;
        password.style.animation = "vibrate 0.1s linear 5 alternate";
        password.style.border = "1px solid var(--tertiaryColor)";
        cpassword.style.animation = "vibrate 0.1s linear 5 alternate";
        cpassword.style.border = "1px solid var(--tertiaryColor)";
        document.getElementById('passError').style.display = "block";
        document.getElementById('cPassError').style.display = "block";
        document.getElementById('passError').innerHTML = "Both password should match*"
        document.getElementById('cPassError').innerHTML = "Both password should match*"
        password.addEventListener("animationend", (e) => e.target.style.animation = '');
        cpassword.addEventListener("animationend", (e) => e.target.style.animation = '');
    }


    if (isValid) {
        const loader = document.getElementById("load");
        loader.style.display = "grid";

        let data = { name, phone, email, user, gender, password, cpassword };
        


        localStorage.setItem('data', JSON.stringify(data));

        setTimeout(() => {
            location.href = "http://127.0.0.1:5500/profile.html"
        }, 2000);

        document.getElementById("form").reset();
    }
}

const validateName = (e) => {

    document.getElementById('nameError').style.display = 'none';
    const name = document.getElementById("name");
    name.style.border = "none"
    // if (!isNaN(e.key) && e.key !== " ") {
    //     document.getElementById('nameError').style.display = 'block';
    //     name.style.animation = "vibrate 0.1s linear 5 alternate";
    //     name.style.border = "1px solid var(--tertiaryColor)"
    //     event.preventDefault();
    // }

    if (!((e.key >= "A" && e.key <= "Z") || (e.key >= "a" && e.key <= "z")) && e.key !== " ") {
        document.getElementById('nameError').style.display = 'block';
        name.style.animation = "vibrate 0.1s linear 5 alternate";
        name.style.border = "1px solid var(--tertiaryColor)"
        name.addEventListener("animationend", (e) => e.target.style.animation = '');
        event.preventDefault();
    }
}

const validatePhone = (e) => {
    document.getElementById('phoneError').style.display = 'none';
    const phone = document.getElementById("phone");
    phone.style.border = "none"
    if (isNaN(e.key)) {
        document.getElementById('phoneError').style.display = 'block';
        phone.style.animation = "vibrate 0.1s linear 5 alternate";
        phone.style.border = "1px solid var(--tertiaryColor)"
        phone.addEventListener("animationend", (e) => e.target.style.animation = '');
        event.preventDefault();
    }

    if (e.target.value.length === 10) {
        event.preventDefault();
    }
}

const validateEmail = (e) => {

    document.getElementById('emailError').style.display = 'none';
    const email = document.getElementById("email");
    email.style.border = "none"
    if (e.key === " ") {
        document.getElementById('emailError').style.display = 'block';
        email.style.animation = "vibrate 0.1s linear 5 alternate";
        email.style.border = "1px solid var(--tertiaryColor)"
        email.addEventListener("animationend", (e) => e.target.style.animation = '');
        event.preventDefault();
    }
}

const validateUser = (e) => {

    document.getElementById('userError').style.display = 'none';
    const user = document.getElementById("username");
    user.style.border = "none"
    if (e.key === " ") {
        document.getElementById('userError').style.display = 'block';
        user.style.animation = "vibrate 0.1s linear 5 alternate";
        user.style.border = "1px solid var(--tertiaryColor)"
        user.addEventListener("animationend", (e) => e.target.style.animation = '');
        event.preventDefault();
    }
}

const validatePassword = (e) => {

    document.getElementById('passError').style.display = 'none';
    const password = document.getElementById("password");
    password.style.border = "none"
    if (e.key === " ") {
        document.getElementById('passError').innerHTML = "Password can't contain spaces";
        document.getElementById('passError').style.display = 'block';
        password.style.animation = "vibrate 0.1s linear 5 alternate";
        password.style.border = "1px solid var(--tertiaryColor)"
        password.addEventListener("animationend", (e) => e.target.style.animation = '');
        event.preventDefault();
    }
}

const validateCPassword = (e) => {

    document.getElementById('cPassError').style.display = 'none';
    const cpassword = document.getElementById("cPassword");
    cpassword.style.border = "none"
    if (e.key === " ") {
        document.getElementById('cPassError').innerHTML = "Password can't contain spaces";
        document.getElementById('cPassError').style.display = 'block';
        cpassword.style.animation = "vibrate 0.1s linear 5 alternate";
        cpassword.style.border = "1px solid var(--tertiaryColor)"
        cpassword.addEventListener("animationend", (e) => e.target.style.animation = '');
        event.preventDefault();
    }
}

document.querySelectorAll("input").forEach((tag)=>{
    tag.addEventListener("focusout",(event)=>{
        event.target.style.border="none";
        document.querySelector(`#${event.target.attributes.id.nodeValue}+.error`).style.display="none"
    })
})

// Validation using function Ends














// Validation using Regex

// const register = (e) => {
//     event.preventDefault();

//     const name = e.target.name.value.trim();
//     const phone = e.target.phone.value;
//     const email = e.target.email.value;
//     const user = e.target.username.value;
//     const password = e.target.password.value;
//     const cpassword = e.target.cPassword.value;

//     const arr = ["male", "female", "other"];
//     let gender;
//     arr.forEach((gen) => {
//         if (document.getElementById(gen).checked) {
//             gender = gen;
//         }

//     });

//     let isValid = true;


//     const nameRegex = /^[a-zA-Z\s]+$/;
//     if (!nameRegex.test(name)) {
//         isValid = false;
//         let name = e.target.name;
//         name.style.animation = "vibrate 0.1s linear 5 alternate";
//         name.style.border = "1px solid var(--tertiaryColor)";
//         document.getElementById('nameError').style.display = "block"
//         name.addEventListener("animationend", (e) => e.target.style.animation = '');
//     }

//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(phone)) {
//         isValid = false;
//         let phone = e.target.phone;
//         phone.style.animation = "vibrate 0.1s linear 5 alternate";
//         phone.style.border = "1px solid var(--tertiaryColor)";
//         document.getElementById('phoneError').style.display = "block"
//         phone.addEventListener("animationend", (e) => e.target.style.animation = '');
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@.]+$/;
//     if (!emailRegex.test(email)) {
//         isValid = false;
//         let email = e.target.email;
//         email.style.animation = "vibrate 0.1s linear 5 alternate";
//         email.style.border = "1px solid var(--tertiaryColor)";
//         document.getElementById('emailError').style.display = "block"
//         email.addEventListener("animationend", (e) => e.target.style.animation = '');
//     }

//     document.getElementById('genderError').style.display = "none"
//     if (gender === undefined) {
//         isValid = false;
//         let gender = document.getElementById("radio");
//         gender.style.animation = "none";
//         gender.style.animation = "vibrate 0.1s linear 5 alternate";
//         document.getElementById('genderError').style.display = "block"
//         gender.addEventListener("animationend", (e) => e.target.style.animation = '');
//     }

//     const userRegex = /^\S*$/;
//     if (!userRegex.test(user) || user.length === 0) {
//         isValid = false;
//         let user = e.target.username;
//         user.style.animation = "vibrate 0.1s linear 5 alternate";
//         user.style.border = "1px solid var(--tertiaryColor)";
//         document.getElementById('userError').style.display = "block"
//         user.addEventListener("animationend", (e) => e.target.style.animation = '');
//     }

//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;


//     if (!passwordRegex.test(password)) {
//         isValid = false;
//         let password = e.target.password;
//         password.style.animation = "vibrate 0.1s linear 5 alternate";
//         password.style.border = "1px solid var(--tertiaryColor)";
//         document.getElementById('passError').style.display = "block"
//         document.getElementById('passError').innerHTML = "Password must be 5+ characters with at least one spc. character, uppercase, lowercase, and digit*"
//         password.addEventListener("animationend", (e) => e.target.style.animation = '');
//     }


//     else if (password !== cpassword) {
//         isValid = false;
//         let password = e.target.password;
//         let cpassword = e.target.cPassword;
//         password.style.animation = "vibrate 0.1s linear 5 alternate";
//         password.style.border = "1px solid var(--tertiaryColor)";
//         cpassword.style.animation = "vibrate 0.1s linear 5 alternate";
//         cpassword.style.border = "1px solid var(--tertiaryColor)";
//         document.getElementById('passError').style.display = "block";
//         document.getElementById('cPassError').style.display = "block";
//         document.getElementById('passError').innerHTML = "Both password should match*"
//         document.getElementById('cPassError').innerHTML = "Both password should match*"
//         password.addEventListener("animationend", (e) => e.target.style.animation = '');
//         cpassword.addEventListener("animationend", (e) => e.target.style.animation = '');
//     }


//     if (isValid) {
//         const loader = document.getElementById("load");
//         loader.style.display = "grid";

//         let data = { name, phone, email, user, gender, password, cpassword };
        

//         console.log(data);

//         localStorage.setItem('data', JSON.stringify(data));

//         setTimeout(() => {
//             location.href = "http://127.0.0.1:5500/profile.html"
//         }, 2000);

//         document.getElementById("form").reset();
//     }
// }

// const validateName = (e) => {

//     const value = e.target.value+e.key;
//     const regex = /^[a-zA-Z\s]+$/;
//     document.getElementById('nameError').style.display = 'none';
//     const name = document.getElementById("name");
//     name.style.border = "none"

//     if (!regex.test(value)) {
//         document.getElementById('nameError').style.display = 'block';
//         name.style.animation = "vibrate 0.1s linear 5 alternate";
//         name.style.border = "1px solid var(--tertiaryColor)"
//         name.addEventListener("animationend", (e) => e.target.style.animation = '');
//         event.preventDefault();
//     }
// }

// const validatePhone = (e) => {
//     const value = e.target.value+e.key;
//     const regex = /^\d+$/;

//     document.getElementById('phoneError').style.display = 'none';
//     const phone = document.getElementById("phone");
//     phone.style.border = "none"
//     if (!regex.test(value)) {
//         document.getElementById('phoneError').style.display = 'block';
//         phone.style.animation = "vibrate 0.1s linear 5 alternate";
//         phone.style.border = "1px solid var(--tertiaryColor)"
//         phone.addEventListener("animationend", (e) => e.target.style.animation = '');
//         event.preventDefault();
//     }

//     if (value.length > 10) {
//         event.preventDefault();
//     }
// }

// const validateUser = (e) => {


//     const value = e.target.value+e.key;
//     const regex = /^\S*$/;

//     document.getElementById('userError').style.display = 'none';
//     const user = document.getElementById("username");
//     user.style.border = "none"
//     if (!regex.test(value)) {
//         document.getElementById('userError').style.display = 'block';
//         user.style.animation = "vibrate 0.1s linear 5 alternate";
//         user.style.border = "1px solid var(--tertiaryColor)"
//         user.addEventListener("animationend", (e) => e.target.style.animation = '');
//         event.preventDefault();
//     }
// }

// const validatePassword = (e) => {
//     const value = e.target.value+e.key;
//     const regex = /^\S*$/;

//     document.getElementById('passError').style.display = 'none';
//     const password = document.getElementById("password");
//     password.style.border = "none"
//     if (!regex.test(value)) {
//         document.getElementById('passError').innerHTML = "Password can't contain spaces";
//         document.getElementById('passError').style.display = 'block';
//         password.style.animation = "vibrate 0.1s linear 5 alternate";
//         password.style.border = "1px solid var(--tertiaryColor)"
//         password.addEventListener("animationend", (e) => e.target.style.animation = '');
//         event.preventDefault();
//     }
// }

// const validateCPassword = (e) => {
//     const value = e.target.value+e.key;
//     const regex = /^\S*$/;

//     document.getElementById('cPassError').style.display = 'none';
//     const cpassword = document.getElementById("cPassword");
//     cpassword.style.border = "none"
//     if (!regex.test(value)) {
//         document.getElementById('cPassError').innerHTML = "Password can't contain spaces";
//         document.getElementById('cPassError').style.display = 'block';
//         cpassword.style.animation = "vibrate 0.1s linear 5 alternate";
//         cpassword.style.border = "1px solid var(--tertiaryColor)"
//         cpassword.addEventListener("animationend", (e) => e.target.style.animation = '');
//         event.preventDefault();
//     }
// }

// document.querySelectorAll("input").forEach((tag)=>{
//     tag.addEventListener("focusout",(event)=>{
//         event.target.style.border="none";
//         document.querySelector(`#${event.target.attributes.id.nodeValue}+.error`).style.display="none"
//     })
// })
