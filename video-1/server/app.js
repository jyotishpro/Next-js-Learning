const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect("mongodb://localhost:27017/react");

const app = express();
const port = 3004;
app.use(cors());


const studentSchema = new mongoose.Schema(
    {
        uniqueid:Number,
        name:String,
        class:String,
        roll: Number,
        
       
    }
)

const forms = mongoose.model("form",studentSchema)



app.get('/', async(req, res) => {
    let data = await forms.find()
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})