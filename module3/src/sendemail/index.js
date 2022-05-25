const axios = require('axios');
var jsonData = {
    email: "robertkaruntu@hotmal.com",
    subject: "Voucher Redeemed Successfully",
    body: ""
};
let sendemail = async function (data) {
    try {console.log("email")
        const response = await axios.post("https://prod-69.eastus.logic.azure.com:443/workflows/fb30e68c5f2e4df9b5332635deade29c/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=mEq2BnUQicqs7aITEAhBgGZKBxBBYw-CKlm0GrkCwAc"
        , data);
        console.log(response.status);

    } catch (error) {
        console.log(error);
    }
}
export{
    sendemail,
    jsonData
}