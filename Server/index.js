const express = require('express');
const PORT = process.env.PORT || 1901;
const server = express();

server.listen(PORT, ()=>{
    console.log(`Server listening on PORT : ${PORT}`);
});

server.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});