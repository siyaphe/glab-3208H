import React from 'react'

const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('data', '<REQUIRED>');

const options = {
  method: 'POST',
  url: 'https://datasyntax.p.rapidapi.com/api/sql-query-wizard',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'c88ca5fb0dmsh1a0fd8edaaf2ed9p1be541jsn16b904e8c138',
    'X-RapidAPI-Host': 'datasyntax.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export default About;