const profile = ()=>{

    const data = JSON.parse(localStorage.getItem('data'));
    const name = data.name;
    document.getElementById("welcome").innerHTML =`Welcome, ${name.substring(0,name.indexOf(" "))}`;
    document.getElementById("username").innerHTML=`@${data.user}`;
    document.getElementById("name").innerHTML=name;
    document.getElementById("phone").innerHTML=data.phone;
    document.getElementById("email").innerHTML=data.email;
    document.getElementById("gender").innerHTML=data.gender;
    document.getElementById("password").innerHTML=`xxxxx${data.password.slice(-4)}`;
}

profile();