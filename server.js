const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const assistanceRoutes = require('./routes/assistance');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/earthquake_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);
app.use('/api/assistance', assistanceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});