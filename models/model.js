const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tickers')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

const tickerSchema = new mongoose.Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String
}, { timestamps: true });

const Ticker = mongoose.model('Ticker', tickerSchema);

module.exports = Ticker;
