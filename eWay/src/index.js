const express = require('express');
const bodyParser = require( 'body-parser');
const cors = require( 'cors');
const dotenv = require( 'dotenv');
const morgan = require( 'morgan');
const transactionRoutes = require( './routes/transactions');

dotenv.config();

const app = express();
app.enable('trust proxy');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

app.use('/api/transaction', transactionRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});