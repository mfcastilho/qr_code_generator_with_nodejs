import axios from 'axios';

const url = document.querySelector('.qrcode-address-form__input');

const button = document.querySelector('.qrcode-address-form__button');

button.addEventListener('click', handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  
  if (url) {
    try {
      const response = await axios.post('http://localhost:5050/create-qrcode', {
        url: url.value
      });
  
      console.log(response.data.message);
      
    } catch (error) {
      console.log(error.data.message);
      
    }
 }
}


