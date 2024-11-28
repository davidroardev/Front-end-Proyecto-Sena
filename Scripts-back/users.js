window.onload = (event) =>{
    //const encodeData = window.location.hash.substring(1);
    //const data = JSON.parse(atob(encodeData));
    //console.log(data);
    loadUsers()

};

const apiUrl = 'https://proyecto-sena-bkend.vercel.app'

async function loadUsers() {
    try {
        const response = await fetch(`${apiUrl}/getusers`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
        const users = await response.json();
        console.log(users);

        const tbody = document.getElementById('productosTBody');
        tbody.innerHTML= '';

        users.forEach(user => {
            const row = document.createElement('tr');

            const userNameCell = document.createElement('td');
            userNameCell.textContent = user.user_name;
            
            const apellidoCell = document.createElement('td');
            apellidoCell.textContent = user.apellido;

            const celularCell = document.createElement('td');
            celularCell.textContent = user.numero_telefonico;

            const direccionCell = document.createElement('td');
            direccionCell.textContent = user.direccion;

            const emailCell = document.createElement('td');
            emailCell.textContent = user.correo_electronico;

            row.appendChild(userNameCell);
            row.appendChild(apellidoCell);
            row.appendChild(celularCell);
            row.appendChild(direccionCell);
            row.appendChild(emailCell);

            tbody.appendChild(row);
        });
    
    } catch (error) {
        console.error(error);
    }
};