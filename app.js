const express =require('express');
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const routes = require('./routes/routes');

const app = express();

//middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

const PORT = 3000 || process.env.PORT;

app.get("/", function (req, res) {
    res.send("node is running")
})

app.use('/api/', routes)

app.listen(PORT, ()=> {
    console.log('Server started on port 3000')
});
