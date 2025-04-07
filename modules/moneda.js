import countryToCurrency from 'country-to-currency';

function moneda(pais)
{
    return countryToCurrency[pais];
}

export default moneda