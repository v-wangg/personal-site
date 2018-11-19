const express = require('express');

const app = express();

require('./routes/root')(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    const path = require('path');
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

const PORT = process.env.PORT || 3030
app.listen(PORT);
console.log("Server listening on port", PORT);