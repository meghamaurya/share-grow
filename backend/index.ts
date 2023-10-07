const express = require('express');

const app = express();

app.get("/", (req :any, res: any) => {
    res.send("hello backend")
});

app.listen(
    5000, () => console.log('backend is running')
)