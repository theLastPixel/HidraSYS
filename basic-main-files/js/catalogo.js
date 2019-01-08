
var cantidadCarrito;
var error;

function addCarrito()
{
    error = false;

    try
    {
        cantidadCarrito = document.getElementById("cantidadCarrito").value;
            
        // if(cantidadCarrito != Number)
        // {
        //      throw "Ingrese un valor nuemerico";
        // }
        
        if(isNaN(cantidadCarrito))
        {
            throw "Datos invalidos";
        }
    }
    catch(Exception)
    {
        alert("Error " + Exception)
        error = true;
    }

    if(!isNaN(cantidadCarrito))
    {
        console.log(cantidadCarrito);
    }
}

