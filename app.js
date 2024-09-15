const path = require('path');
const express = require('express');
const axios = require('axios');
const app = express();

const Ticker = require('./models/model');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/get-wazirx-data', async (req, res) => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickers = response.data;

    const top10Tickers = Object.keys(tickers).slice(0, 10).map(key => tickers[key]);

    await Ticker.deleteMany({});

    await Ticker.insertMany(top10Tickers.map(ticker => ({
      name: ticker.name,
      last: parseFloat(ticker.last),
      buy: parseFloat(ticker.buy),
      sell: parseFloat(ticker.sell),
      volume: parseFloat(ticker.volume),
      base_unit: ticker.base_unit
    })));

    res.render('data', { title: 'Home', tickers: top10Tickers });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});