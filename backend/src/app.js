const express = require("express");
const cors = require("cors");

const app = express();

const contactsRouter = require('./routers/customer.router');
const provinceRouter = require('./routers/province.router');
const districtRouter = require('./routers/district.router');
const wardsRouter = require('./routers/wards.router');
const productRouter = require('./routers/product.router');


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

app.use('/api/contacts', contactsRouter);
app.use('/api/provinces', provinceRouter);
app.use('/api/districts', districtRouter);
app.use('/api/wards', wardsRouter);
app.use('/api/product', productRouter);
module.exports = app;