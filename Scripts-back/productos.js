window.onload = (event) =>{
    //const encodeData = window.location.hash.substring(1);
    //const data = JSON.parse(atob(encodeData));
    //console.log(data);
    loadProductos()

    const createProductos = document.getElementById('createProducto');

    createProductos.addEventListener('click', function(event){

        window.location.href = '/Paginas/createProductos.html'
    })
};

async function loadProductos() {
    try {
        const response = await fetch('http://localhost:3000/getproductos',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
        const productos = await response.json();
        console.log(productos);

        const tbody = document.getElementById('productosTBody');
        tbody.innerHTML= '';

        productos.forEach(producto => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = producto.id;
            
            const idProductoCell = document.createElement('td');
            idProductoCell.textContent = producto.id_producto;

            const tipoProductoCell = document.createElement('td');
            tipoProductoCell.textContent = producto.tipo_producto;

            const nombreCell = document.createElement('td');
            nombreCell.textContent = producto.nombre;

            const tallaCell = document.createElement('td');
            tallaCell.textContent = producto.talla;

            const colorCell = document.createElement('td');
            colorCell.textContent = producto.color;

            const existenciasCell = document.createElement('td');
            existenciasCell.textContent = producto.existencias;

            const estadoCell = document.createElement('td');
            estadoCell.textContent = producto.estado;

            row.appendChild(idCell);
            row.appendChild(idProductoCell);
            row.appendChild(tipoProductoCell);
            row.appendChild(nombreCell);
            row.appendChild(tallaCell);
            row.appendChild(colorCell);
            row.appendChild(existenciasCell);
            row.appendChild(estadoCell);

            tbody.appendChild(row);
        });
    
    } catch (error) {
        console.error(error);
    }
};