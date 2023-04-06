function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    let a=(params.name.length);
    let b=(params.email.length);
    let c=(params.message.length);


    const serviceID ="service_rya05ac";
    const templateID ="template_v1uqz9a";
    
    if(a>0 && b>0 && c>0){

        emailjs.send(serviceID,templateID,params)
        .then(
            res =>{
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message send successfully");
        
            }
        )
        
        .catch(err=>console.log(er));
    }
}
