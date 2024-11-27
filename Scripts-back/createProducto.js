window.onload = (event) =>{
    const productoForm = document.getElementById('productosForm');

    productoForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const idRegistro = document.getElementById('idRegistro').value;
        const idProducto = document.getElementById('idProducto').value;
        const tipoProducto = document.getElementById('tipoProducto').value;
        const nombre = document.getElementById('nombre').value;
        const talla = document.getElementById('talla').value;
        const color = document.getElementById('color').value;
        const existencias = document.getElementById('existencias').value;
        const estado = document.getElementById('estado').value;

        try {
            const response = await fetch('http://localhost:3000/createproductos',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id:idRegistro,idProducto:idProducto,tipoProducto:tipoProducto,nombreproducto:nombre,tallaProducto:talla,colorProducto:color,existenciasProducto:existencias,estadoProducto:estado})
            });

            const data = await response.json();
            if (response.ok){
                window.alert('Producto Creado exitosamente');
                window.location.href = '/Paginas/Productos.html'
            }else{
                window.alert('No se pudo crear la categoria');
            }
        } catch (error) {
            console.error(error);
            window.alert('hay problemas con el servidor');
        }
    })
};
