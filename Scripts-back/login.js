window.onload = (event) =>{
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    const registerForm = document.getElementById('registerForm')

    loginForm.addEventListener('submit', async function(event){

        event.preventDefault();//Previene que se envie el formulario y nos redirija a otr apagina
        
        const Name = document.getElementById('userName').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/api/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'aplication/json'
                },
                body: JSON.stringify({userName:Name, password: password})
            });

            const data = await response.json();
            console.log(data);
            if (response.ok){
                loginMessage.textContent = 'Login Exitoso';
                loginMessage.style.color = 'green';
            }else{
                loginMessage.textContent = data.messge||'Error en el login';
                loginMessage.style.color = 'red';
            }
        } catch (error) {
            console.error(error)
            loginMessagge.textContent = 'Error en el servidor';
            loginMessagge.style.color = 'red';
        }
    });

    registerForm.addEventListener('submit', async function(event){

        const NewUserName = document.getElementById('NewUserName').value;
        const Newpassword = document.getElementById('Newpassword').value;
        const apellido = document.getElementById('name').value
        const numeroTelefono = document.getElementById('phoneNumber').value
        const direccion = document.getElementById('address').value
        const email = document.getElementById('email').value
        
        try {
            const response = await fetch('http://localhost:3000/user/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'aplication/json'
                },
                body: JSON.stringify({userName: NewUserName, password: Newpassword, apellido: apellido,numeroTelefonico: numeroTelefono,direccion: direccion,correoElectronico: email})
            });

            const data = await response.json();
            console.log(data);
            if (response.ok){
                loginMessage.textContent = 'Login Exitoso';
                loginMessage.style.color = 'green';
            }else{
                loginMessage.textContent = data.messge||'Error en el login';
                loginMessage.style.color = 'red';
            }
        } catch (error) {
            console.error(error)
            loginMessage.textContent = 'Error en el servidor';
            loginMessage.style.color = 'red';
        }
    });
};