const app = require('./app.js')

app.listen(8000, () => {
    console.log(`Example app listening at http://localhost:8080`)
})

module.exports = app;
