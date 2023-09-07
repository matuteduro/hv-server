const axios = require('axios');

const data = {
  reason: "Yoga classes",
  auto_recurring: {
    frequency: 1,
    frequency_type: "months",
    repetitions: 12,
    billing_day: 10,
    billing_day_proportional: true,
    free_trial: {
      frequency: 1,
      frequency_type: "months"
    },
    transaction_amount: 10,
    currency_id: "ARS"
  },
  payment_methods_allowed: {
    payment_types: [{}],
    payment_methods: [{}]
  },
  back_url: "https://www.yoursite.com"
};

axios.post('https://api.mercadopago.com/preapproval_plan', data, {
  headers: {
    'Authorization': 'Bearer TEST-8666608579559349-073013-570510b6b297fee2c09af2999414ff95-42806944',
    'Content-Type': 'application/json'
  }
})
.then(response => {
  // console.log(response.data);
})
.catch(error => {
  console.error(error);
});
