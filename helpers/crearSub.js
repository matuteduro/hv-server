const axios = require('axios');

const data = {
  preapproval_plan_id: "2c93808489a1a6340189a7f5499e0265",
  reason: "Yoga classes",
  external_reference: "YG-1234",
  payer_email: "test_user@testuser.com",
  card_token_id: "e3ed6f098462036dd2cbabe314b9de2a",
  auto_recurring: {
    frequency: 1,
    frequency_type: "months",
    start_date: "2020-06-02T13:07:14.260Z",
    end_date: "2022-07-20T15:59:52.581Z",
    transaction_amount: 10,
    currency_id: "ARS"
  },
  back_url: "https://www.mercadopago.com.ar",
  status: "authorized"
};

axios.post('https://api.mercadopago.com/preapproval', data, {
  headers: {
    'Authorization': 'Bearer TEST-8666608579559349-073013-570510b6b297fee2c09af2999414ff95-42806944',
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
