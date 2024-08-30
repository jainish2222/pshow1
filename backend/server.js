const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const {FormData} = require('./db')

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());


app.post('/submit-form', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});