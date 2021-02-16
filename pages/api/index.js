import axios from "axios";

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


export default function handler(req, res) {
  // Get data from your database
  sendCallback(req.query);
  res.status(200).json({
    message: "Callback has been well Received",
    data: req.body
  })
}