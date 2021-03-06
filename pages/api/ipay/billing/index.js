import axios from "axios";

let BILLING_CALLBACK = process.env.BILLING_CALLBACK;

export default async (req, res) => {
  let serverData;
  let serverStatus;
  await axios.get(BILLING_CALLBACK, req.query)
    .then((res) => {
      serverData = res.data;
      serverStatus = res.status
    }).catch((err) => {
      serverData = err.message;
      serverStatus = err.status ? err.status : 500
    });

  res.status(serverStatus).json({
    message: "Callback has been well Received",
    ...serverData
  })
}