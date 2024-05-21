require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./Routes/router");
const PORT = process.env.PORT || 6010
let bookAppointment = require("./models/bookAppointment");

app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("./uploads"));
app.use("/files",express.static("./public/files"));

app.use(router);

app.post('/api/bookAppointment', async (req, res) => {
    try {
      const { firstname, lastname, address,phonenumber,selectyourproblem } = req.body;
      const newAppontment = new bookAppointment({ firstname, lastname, address,phonenumber,selectyourproblem });
      await newAppontment.save();
      res.status(201).json({ message: 'successfully booked appointment' });
    } catch (error) {
      console.error('Error saving review:', error);
      res.status(500).json({ error: 'Error saving review' });
    }
  });
app.listen(PORT,()=>{
    console.log(`Server start at port no ${PORT}`)
})