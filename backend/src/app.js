const express = require('express');
const qrCode = require('qrcode');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5050;

app.use(express.json());

app.use(cors());

app.post('/create-qrcode', (req, res) => {
  const { url } = req.body;
  console.log(url);
  
  try {
    if (url) {
      qrCode.toFile(path.resolve('images', 'qrcode.png'), url, (err) => {
        if (err) {
          throw err;
        }
  
        console.log('QR Code was generate with success');
        return res.status(201).json({ message: 'QR Code was generate with success' });
      });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
