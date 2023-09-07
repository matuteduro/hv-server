const axios = require('axios');

let data = {
    back_url: "https://www.google.com",
    reason: "Test Subscription",
    auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        start_date: "2020-06-02T13:07:14.260Z",
        end_date: "2022-07-20T15:59:52.581Z",
        transaction_amount: 10,
        currency_id: "ARS"
    },
    payer_email: "test_user+1020927396@testuser.com",
    card_token_id: "{{EL_CARD_TOKEN_QUE_CREASTE}}",
    status: "authorized"
};

axios({
    method: 'post',
    url: 'https://api.mercadopago.com/preapproval?access_token=APP_USR-????????',
    headers: {
        'Content-Type': 'application/json',
        'X-scope': 'stage'
    },
    data: data
}).then((response) => {
    // console.log(response);
}).catch((error) => {
    console.error(error);
});
