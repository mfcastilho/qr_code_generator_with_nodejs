const qrCode = require('qrcode');
const path = require('path');

const url = 'https://www.globo.com/';

qrCode.toFile(path.resolve('images','qrcode.png'), url, (err) => {
  if (err) {
    throw err;
  }

  console.log('QR Code was generate with success');
});