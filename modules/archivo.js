import fs from 'fs'

function leer (nombreArchivo) 
{
    const contenido = fs.readFileSync(nombreArchivo)
    return contenido 
}

function escribir (nombreArchivoViejo, nombreArchivoNuevo)
{   
    let contenido = leer(nombreArchivoViejo)
    fs.writeFileSync(nombreArchivoNuevo, contenido)
}

export default escribir