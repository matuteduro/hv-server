
const { Router } = require('express');
const { check } = require('express-validator');
const { getDataFromFront } = require('../controllers/holaVet');
// const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

// const { validarCampos, validarJWT, esAdminRole, tieneRole} = require('../middlewares/index')

const router = Router();

router.get('/', function (req, res) {
  res.send('Hello')
  res.send('World')
})


// router.put('/:id', [
//     // check('id', 'No es un ID valido').isMongoId(),
//     check('id').custom(existeUsuarioPorId),
//     check('rol').custom( esRoleValido ),
//     validarCampos
// ] ,usuariosPut);

router.post('/',[
    // check('password','El password debe ser de mas de 6 letras').isLength({ min: 6}),
    // check('nombre','El nombre es obligatorio').not().isEmpty(),
    // // check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    // check('correo','El correo no es valido').isEmail(),
    // check('correo').custom( emailExiste ),
    // check('rol').custom( esRoleValido ),
    // validarCampos
], getDataFromFront);

module.exports = router;