const MercadoPago = require("mercadopago");

class MercadoPagoService {
  constructor() {
    MercadoPago.configure({
      client_id: process.env.MERCADO_PAGO_CLIENT_ID,
      client_secret: process.env.MERCADO_PAGO_CLIENT_SECRET
    });
  }

  async getSubscriptionLink(email, amount, plan) {
    const preference = {
      payer_email: email,
      reason: plan,
      external_reference: "",
      back_url: "https://www.google.com",
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: 5,
        currency_id: "ARS"
      }
    };

    try {
      const mp = await MercadoPago.preapproval.create(preference);
      const linkCheckout = mp && mp.response && mp.response.init_point;
      return linkCheckout;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

module.exports = MercadoPagoService;