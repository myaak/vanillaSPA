const express = require('express');
const path = require('path');

const PORT = 4000;

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "src")));

app.get('/*', (req, res) => {
   res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(PORT, () => {
   console.log(`Serving on ${PORT}`);
});
