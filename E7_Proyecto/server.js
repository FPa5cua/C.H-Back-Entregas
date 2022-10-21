const express = require("express");
const app = express();

app.use(express.static("public"));


const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});
server.on('error', err => console.log( 'Error at server: ' + err ));