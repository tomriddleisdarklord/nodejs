const app = require('./app.js')

app.listen(8000, () => {
    console.log(`Example app listening at http://localhost:8000`)
})

module.exports = app;
