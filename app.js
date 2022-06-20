// Express Server code .
const express = require('express')
 const app = express()
 app.get('/' ,(req,res) => {
  res.send("Hey whatsup from express")
})
 app.listen(3000);

