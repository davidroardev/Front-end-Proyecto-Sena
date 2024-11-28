window.onload = async (event) =>{

    const apiUrl = 'https://proyecto-sena-bkend.vercel.app/'

    const idProductos = getQueryParams('id');
    const productos = await loadProducto(idProductos);
    console.log(productos);

    const productoForm = document.getElementById('productosForm');
    const idRegistro = document.getElementById('idRegistro');
    const idProducto = document.getElementById('idProducto');
    const tipoProducto = document.getElementById('tipoProducto');
    const nombre = document.getElementById('nombre');
    const talla = document.getElementById('talla');
    const color = document.getElementById('color');
    const existencias = document.getElementById('existencias');
    const estado = document.getElementById('estado');

    idRegistro.value = productos.id;
    idProducto.value = productos.id_producto;    
    tipoProducto.value = productos.tipo_producto;
    nombre.value = productos.nombre;
    talla.value = productos.talla;
    color.value = productos.color;
    existencias.value = productos.existencias;
    estado.value = productos.estado;

    productoForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        await updateProducto(idProductos, idProducto.value, tipoProducto.value, nombre.value, talla.value, color.value, 
            existencias.value, estado.value);
    });

}

const apiUrl = 'https://proyecto-sena-bkend.vercel.app'

function getQueryParams(params){
    const urlParams = new URLSearchParams(window.location.search);
    
    return urlParams.get(params);
};

async function loadProducto(id){
    try {
        const response = await fetch(`${apiUrl}/getproductosbyid/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const productos = await response.json();
        return productos[0];
    } catch (error) {
        console.error(error);
    }
};

async function updateProducto(id, id_producto, tipo_producto,nombre,talla,color,existencias,estado){
    try {
        const response = await fetch(`${apiUrl}/updateproducto/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({idProducto:id_producto,tipoProducto:tipo_producto,nombreproducto:nombre,
                tallaProducto:talla,colorProducto:color,existenciasProducto:existencias,estadoProducto:estado})
        });
            if (response.ok){
                window.alert('Producto Actualizado exitosamente');
                window.location.href = '/Paginas/dashboard/productos.html'
            }else{
                window.alert('No se pudo Actualizar El Producto');
            }
    } catch (error) {
        console.error(error);
        window.alert('hay problemas con el servidor');
        
    }
};