
const path = require('path')
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3003 || process.env.PORT;
server.listen(PORT, () => console.log(`Server is online and running on port ${PORT} `))




