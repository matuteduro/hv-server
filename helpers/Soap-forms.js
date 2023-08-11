const SoapRequest = (petData, formData) => {
    // Extract the required data
    const {
        nombre, apellido, dni, email, direccion, codigoPostal, localidad,
        poliza, endoso, opcion, fechaVenta, inicioVigencia, finVigencia,
        sexoTitular, tipoDocumentoTitular, fechaNacimientoTitular,
        telefonoParticularTitular, telefonoMovilTitular, cuit,
        provinciaTitular, nombreApellidoPagador, dniPagador, formaPago,
        banco, cbu, tipoCuenta, tarjeta, nroTarjeta, nroPin, mesVencimiento, anoVencimiento
    } = formData;

    const mascotas = petData.map(pet => `
        <tem:Mascota>
            <tem:Nombre>${pet.nombre}</tem:Nombre>
            <tem:FechaNacimiento>${pet.selectedDate}</tem:FechaNacimiento>
            <tem:Edad>${pet.edad}</tem:Edad>
            <tem:Especie>${pet.isCatSelected ? "100000001" : "100000000"}</tem:Especie>
            <tem:Raza>${pet.raza}</tem:Raza>
            <tem:Genero>${pet.genero === "Masculino" ? "100000000" : "100000001"}</tem:Genero>
            <tem:Descripcion>${pet.descripcion || ''}</tem:Descripcion>
            <tem:Peso>${pet.peso || ''}</tem:Peso>
        </tem:Mascota>
    `).join("");

    return `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
        <soapenv:Body>
            <tem:HolaVet>
                <tem:cargaSolicitudHolaVet>
                    <tem:Poliza>${poliza}</tem:Poliza>
                    <tem:Endoso>${endoso}</tem:Endoso>
                    <tem:Opción>${opcion}</tem:Opción>
                    <tem:FechaVenta>${fechaVenta}</tem:FechaVenta>
                    <tem:InicioVigencia>${inicioVigencia}</tem:InicioVigencia>
                    <tem:FinVigencia>${finVigencia}</tem:FinVigencia>
                    <tem:NombresTitular>${nombre}</tem:NombresTitular>
                    <tem:ApellidoTitular>${apellido}</tem:ApellidoTitular>
                    <tem:sexoTitular>${sexoTitular}</tem:sexoTitular>
                    <tem:tipoDocumentoTitular>${tipoDocumentoTitular}</tem:tipoDocumentoTitular>
                    <tem:nroDocumentoTitular>${dni}</tem:nroDocumentoTitular>
                    <tem:CUIT>${cuit}</tem:CUIT>
                    <tem:FechaNacimientoTitular>${fechaNacimientoTitular}</tem:FechaNacimientoTitular>
                    <tem:TelefonoParticularTitular>${telefonoParticularTitular}</tem:TelefonoParticularTitular>
                    <tem:TelefonoMovilTitular>${telefonoMovilTitular}</tem:TelefonoMovilTitular>
                    <tem:CorreoElectronicoTitular>${email}</tem:CorreoElectronicoTitular>
                    <tem:DomicilioTitular>${direccion}</tem:DomicilioTitular>
                    <tem:CodPostal>${codigoPostal}</tem:CodPostal>
                    <tem:Localidad>${localidad}</tem:Localidad>
                    <tem:ProvinciaTitular>${provinciaTitular}</tem:ProvinciaTitular>
                    <tem:NombreApellidoPagador>${nombreApellidoPagador}</tem:NombreApellidoPagador>
                    <tem:DNIPagador>${dniPagador}</tem:DNIPagador>
                    <tem:formaPago>${formaPago}</tem:formaPago>
                    <tem:Banco>${banco}</tem:Banco>
                    <tem:CBU>${cbu}</tem:CBU>
                    <tem:TipoCuenta>${tipoCuenta}</tem:TipoCuenta>
                    <tem:Tarjeta>${tarjeta}</tem:Tarjeta>
                    <tem:NroTarjeta>${nroTarjeta}</tem:NroTarjeta>
                    <tem:NroPin>${nroPin}</tem:NroPin>
                    <tem:MesVencimiento>${mesVencimiento}</tem:MesVencimiento>
                    <tem:AñoVencimiento>${anoVencimiento}</tem:AñoVencimiento>
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
