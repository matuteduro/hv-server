const { response, request } = require('express');
const { getRegistrosRequest, getPreciosRequest } = require('../helpers/soapUtils');
const url = 'http://crm2.ar-vida.com:3040/WSGRCRM/getFromCRM.asmx';
const axios = require('axios');
const xml2js = require('xml2js');

const getRegistros = async (req, res = response) => {
    const { nombreRegistro } = req.body;
    const soapBody = getRegistrosRequest(nombreRegistro);
    const headers = {
        'Content-Type': 'text/xml',
        'SOAPAction': 'http://tempuri.org/GetRegistros'
    };

    try {
        const { data } = await axios.post(url, soapBody, { headers });
        
        xml2js.parseString(data, (err, result) => {
            if (err) {
                return res.status(500).send({ error: 'Error parsing XML response.' });
            }

            const responseResult = result['soap:Envelope']['soap:Body'][0]['GetRegistrosResponse'][0]['GetRegistrosResult'][0];
            if (responseResult && responseResult['ResponseTarget'] && responseResult['ResponseTarget'][0]['Message'] && responseResult['ResponseTarget'][0]['Message'][0] === 'Error') {
                return res.status(400).send({ error: responseResult['ResponseTarget'][0]['Descripcion'][0] });
            }
            
            res.json({ resultado: responseResult });
        });

    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error fetching data from GetRegistros.' });
    }
};

const getPrecios = async (req, res = response) => {
    const { idPoliza } = req.body;
    const soapBody = getPreciosRequest(idPoliza);
    
    try {
        const { data } = await axios.post(url, soapBody, {
            headers: {
                'Content-Type': 'text/xml',
                'SOAPAction': 'http://tempuri.org/getPrecios'  // Adjust if necessary based on WSDL
            }
        });

        xml2js.parseString(data, (err, result) => {
            if (err) {
                return res.status(500).send({ error: 'Error parsing XML response.' });
            }

            // Assuming the error structure is similar to getRegistros; adjust as needed
            const responseResult = result['soap:Envelope']['soap:Body'][0]['getPreciosResponse'][0]['getPreciosResult'][0];
            if (responseResult && responseResult['ResponseTarget'] && responseResult['ResponseTarget'][0]['Message'] && responseResult['ResponseTarget'][0]['Message'][0] === 'Error') {
                return res.status(400).send({ error: responseResult['ResponseTarget'][0]['Descripcion'][0] });
            }

            res.json({ resultado: responseResult });
        });

    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error fetching prices from getPrecios.' });
    }
}

module.exports = {
    getRegistros,
    getPrecios
};
