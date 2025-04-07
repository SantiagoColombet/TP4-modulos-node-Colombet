import url from 'url'
function parsearUrl(urlstring) {
    try{
        const aux = new URL(urlstring); 
        const objeto = {
            host: aux.host,
            pathname: aux.pathname,
            parametros: aux.searchParams,
        }
        return objeto
    }catch(error)
    {
        console.log("hubo un error")
    }

}

export default parsearUrl