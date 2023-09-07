const SoapRequest = (petData, formData, currentDate, opcion) => {
    // Extract the required data
    const {
        nombre, apellido, dni, email, direccion, codigoPostal, localidad,
        fechaVenta, inicioVigencia, finVigencia,
        sexoTitular, TipoDocumentoTitular, fechaNacimientoTitular,selectedDate,
        telefono, telefonoMovilTitular, cuit,
        provinciaTitular, nombreApellidoPagador, dniPagador, formaPago,
        banco, cbu, tipoCuenta, tarjeta, nroTarjeta, nroPin, mesVencimiento, anoVencimiento,
        plan, Poliza, Endoso, fechaNacimiento
    } = formData;   
    
    

    const mascotas = petData.map(pet => `
        <tem:Mascota>
            <tem:Nombre>${pet.nombre}</tem:Nombre>
            <tem:FechaNacimiento>2022-09-07</tem:FechaNacimiento>
            <tem:Edad>${pet.edad}</tem:Edad>
            <tem:Especie>${pet.isCatSelected ? "100000001" : "100000000"}</tem:Especie>
            <tem:Raza>${pet.raza}</tem:Raza>
            <tem:Genero>${pet.genero === "Masculino" ? "100000000" : "100000001"}</tem:Genero>
            <tem:Descripcion>${pet.descripcion || ''}</tem:Descripcion>
        </tem:Mascota>
    `).join("");

    return `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
        <soapenv:Body>
            <tem:HolaVet>
                <tem:cargaSolicitudHolaVet>
                    <tem:Poliza>${Poliza}</tem:Poliza>
                    <tem:Endoso>${Endoso}</tem:Endoso>
                    <tem:Opción>${opcion}</tem:Opción>
                    <tem:FechaVenta>${currentDate}</tem:FechaVenta>
                    <tem:InicioVigencia>${currentDate}</tem:InicioVigencia>
                    <tem:FinVigencia>2025-12-31</tem:FinVigencia>
                    <tem:NombresTitular>${nombre}</tem:NombresTitular>
                    <tem:ApellidoTitular>${apellido}</tem:ApellidoTitular>
                    <tem:sexoTitular>${sexoTitular}</tem:sexoTitular>
                    <tem:tipoDocumentoTitular>${TipoDocumentoTitular}</tem:tipoDocumentoTitular>
                    <tem:nroDocumentoTitular>${dni}</tem:nroDocumentoTitular>
                    <tem:CUIT></tem:CUIT>
                    <tem:FechaNacimientoTitular>${fechaNacimiento}</tem:FechaNacimientoTitular>
                    <tem:TelefonoParticularTitular>${telefono}</tem:TelefonoParticularTitular>
                    <tem:TelefonoMovilTitular>${telefono}</tem:TelefonoMovilTitular>
                    <tem:CorreoElectronicoTitular>${email}</tem:CorreoElectronicoTitular>
                    <tem:DomicilioTitular>${direccion}</tem:DomicilioTitular>
                    <tem:CodPostal>${codigoPostal}</tem:CodPostal>
                    <tem:Localidad>${localidad}</tem:Localidad>
                    <tem:ProvinciaTitular>${localidad}</tem:ProvinciaTitular>
                    <tem:NombreApellidoPagador>${nombre}</tem:NombreApellidoPagador>
                    <tem:DNIPagador>${dni}</tem:DNIPagador>
                    <tem:formaPago>2</tem:formaPago>
                    <tem:Banco></tem:Banco>
                    <tem:CBU></tem:CBU>
                    <tem:TipoCuenta></tem:TipoCuenta>
                    <tem:Tarjeta>Visa</tem:Tarjeta>
                    <tem:NroTarjeta>1111222233334444</tem:NroTarjeta>
                    <tem:NroPin>123</tem:NroPin>
                    <tem:MesVencimiento>2023-09-07</tem:MesVencimiento>
                    <tem:AñoVencimiento>2029-09-07</tem:AñoVencimiento>
                    <tem:Mascotas>${mascotas}</tem:Mascotas>
                </tem:cargaSolicitudHolaVet>
            </tem:HolaVet>
        </soapenv:Body>
    </soapenv:Envelope>
    `;
}

module.exports = {
    SoapRequest
}
