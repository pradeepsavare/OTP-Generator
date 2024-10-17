 let otpgenerator = () => {
    let otp = ""
    for(i=  0 ;i < 4; i++){
        otp += Math.floor(Math.random() * 10).toString();
    }
    // return otp;
    document.getElementById("otpDisplay").innerText = `${otp}`;
}

document.getElementById("otpBtn").addEventListener("click", otpgenerator);

window.addEventListener("load", generateOTP);

