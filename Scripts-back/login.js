window.onload = (event) =>{
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    const registerForm = document.getElementById('registerForm');
    const registerMessage = document.getElementById('registerMessage');

     const apiUrl = 'https://proyecto-sena-bkend.vercel.app'

    loginForm.addEventListener('submit', async function(event){

        event.preventDefault();//Previene que se envie el formulario y nos redirija a otr apagina
        
        const Name = document.getElementById('userName').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch(`${apiUrl}/api/login` ,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userName:Name, password: password})
            });

            const data = await response.json();
            console.log(data);
            const encodeData = btoa(JSON.stringify(data));
            console.log(encodeData);
            if (response.ok){
                loginMessage.textContent = 'Login Exitoso';
                loginMessage.style.color = 'green';
                window.location.href = `/Paginas/dashboard/dashboard.html#${encodeData}`;
            }else{
                loginMessage.textContent = data.message||'Error en el login';
                loginMessage.style.color = 'red';
            }
        } catch (error) {
            console.error(error)
            loginMessage.textContent = 'Error en el servidor';
            loginMessage.style.color = 'red';
        }
    });

    registerForm.addEventListener('submit', async function(event){

        event.preventDefault();//Previene que se envie el formulario y nos redirija a otr apagina
        
        const apiUrl = 'https://proyecto-sena-bkend.vercel.app'

        const NewUserName = document.getElementById('newUserName').value;
        const Newpassword = document.getElementById('newPassword').value;
        const apellido = document.getElementById('name').value
        const numeroTelefono = document.getElementById('phoneNumber').value
        const direccion = document.getElementById('address').value
        const email = document.getElementById('email').value
        
        try {
            const response = await fetch(`${apiUrl}/user/register`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userName: NewUserName, password: Newpassword, apellido: apellido,numeroTelefonico: numeroTelefono,direccion: direccion,correoElectronico: email})
            });

            const data = await response.json();
            console.log(data);
            if (response.ok){
                registerMessage.textContent = 'Registro Exitoso';
                registerMessage.style.color = 'green';
                window.alert('registro exitoso');
                location.reload();
            }else{
                registerMessage.textContent = data.message||'Error en el Registro';
                registerMessage.style.color = 'red';
            }
        } catch (error) {
            console.error(error)
            registerMessage.textContent = 'Error en el servidor del Registro';
            registerMessage.style.color = 'red';
        }
    });
};