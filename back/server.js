const app = require('express')();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const memberRouter = require('./routes/memberRouter');

const PORT = process.env.PORT || 3001;
// logs all connections
app.use(logger('dev'));
// makes urls compatible with all OS
app.use(bodyParser.json());
// supports encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/members',memberRouter);

app.listen(PORT, () => console.log('listening on port: ', PORT));