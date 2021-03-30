import react from 'react';
import axios from 'axios';

export default axios.create({
  baseURL: `https://605f3470e96e5c0017408646.mockapi.io/api/crud/`
});
