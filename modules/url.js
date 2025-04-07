import url from 'url'
function parsearUrl(urlstring) {
    try{
        const aux = new URL(urlstring); 
        const ojbeto = {
            host: aux.host,
            pathname: aux.pathname,
            parametros: aux.searchParams,
        }
        return ojbeto
    }catch(error)
    {
        console.log("hubo un error")
    }

}

export default parsearUrl