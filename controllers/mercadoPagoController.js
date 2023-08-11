class MercadoPagoController {
    constructor(mercadoPagoService) {
      this.mercadoPagoService = mercadoPagoService;
    }
  
    async getMercadoPagoSubscriptionLink(req, res) {

        const { email, amount, plan} = req.body;

      const getLink = await this.mercadoPagoService.getSubscriptionLink(email, amount, plan);
      if (getLink) {
        res.status(200).json({
          msg: "Link creado correctamente",
          link: getLink
        });
      } else {
        res.status(500).json({
          error: true,
          msg: "Hubo un error al crear el link"
        });
      }
    }
  }
  
  module.exports = MercadoPagoController;
  