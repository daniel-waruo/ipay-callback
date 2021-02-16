const axios = require('axios');


let URL_CALLBACK = process.env.URL_CALLBACK;

if (!URL_CALLBACK)
  URL_CALLBACK = 'https://edonation-api.herokuapp.com/';

const sendCallback = (data) => {
  axios.get(URL_CALLBACK, data)
    .then((res) => {
      console.log(`Status: ${res.status}`);
      console.log('Body: ', res.data);
    }).catch((err) => {
    console.error(err);
  });
}


module.exports = (req, res) => {
  sendCallback(req.query);
  res.status(200).send({message: "Callback has been well Received", data: req.body})
}