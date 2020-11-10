const config = require('../src/config');
const app = require('./app');

app.listen(config.PORT, () =>{
    console.log(`Running on ${config.PORT}`)
});