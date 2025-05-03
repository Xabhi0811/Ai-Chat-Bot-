const app = require('./src/app');
require('dotenv').config();

app.listen(3000, () => {    
    console.log('Server is running on port 3000') }
);
