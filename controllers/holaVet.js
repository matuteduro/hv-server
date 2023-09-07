const { response } = require('express');
const { SoapRequest } = require('../helpers/Soap-forms');
const axios = require('axios');
const url = 'http://crm2.ar-vida.com:3040/WSCDSCRM/CrearCargaSolicitud.asmx';

const getDataFromFront = async (req, res = response) => {
    const { petData, formData, currentDate, opcion } = req.body;

    const soapBody = SoapRequest(petData, formData, currentDate, opcion);
    // console.log(soapBody);
    const headers = {
        'Content-Type': 'text/xml; charset=utf-8',
        // This SOAPAction might need to be adjusted based on WSDL or service documentation
        'SOAPAction': 'http://tempuri.org/HolaVet'  
    };

    try {
        const { data } = await axios.post(url, soapBody, { headers });
        res.json({ resultado: data });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Ocurrio un error al enviar la solicitud SOAP' });
    }
};

// const getDataFromFront = async (req, res = response) => {

//         res.json({ resultado: 'Ok' });

// };

const test = async (req, res = response) => {

      

};

module.exports = {
    getDataFromFront
};
