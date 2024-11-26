window.onload = (event) =>{
    const loginForm = document.getElementById('loginForm');
    const loginMessagge = document.getElementById('loginMessage');

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
                body: JSON.stringify({"userName":Name, "password": password})
            });

            const data = await response.json();
            console.log(data);
            if (response.ok){
                loginMessagge.textContent = 'Login Exitoso';
                loginMessagge.style.color = 'green';
            }else{
                loginMessagge.textContent = data.messge||'Error en el login';
                loginMessagge.style.color = 'red';
            }
        } catch (error) {
            console.error(error)
            loginMessagge.textContent = 'Error en el servidor';
            loginMessagge.style.color = 'red';
        }
    });
};