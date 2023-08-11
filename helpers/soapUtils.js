const getRegistrosRequest = (nombreRegistro) => `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
   <soapenv:Body>
      <tem:GetRegistros>
         <tem:RegistroRequest>
            <tem:NombreRegistro>${nombreRegistro}</tem:NombreRegistro>
         </tem:RegistroRequest >
      </tem:GetRegistros>
   </soapenv:Body>
</soapenv:Envelope>
`;

const getPreciosRequest = (idPoliza) => `
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">
   <soap:Body>
      <tem:getPrecios>
         <tem:PolizaRequest>
            <tem:IdPoliza>${idPoliza}</tem:IdPoliza>
         </tem:PolizaRequest>
      </tem:getPrecios>
   </soap:Body>
</soap:Envelope>
`;

module.exports = {
    getRegistrosRequest,
    getPreciosRequest
};
