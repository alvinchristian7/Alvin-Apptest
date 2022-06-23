import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://simple-contact-crud.herokuapp.com/contact'
});

export default instance