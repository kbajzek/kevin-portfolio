const express = require('express');
const path = require('path');

const app = express();

app.use("/resume", express.static(path.join(__dirname, 'client', 'public', 'KevinBajzekResume.pdf')));

let port = 5000;

if(JSON.stringify(process.env.NODE_ENV) !== JSON.stringify('development')){

    port = 8080;

    app.use(express.static('client/build'));
    
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}

app.listen(port, () => console.log(`Listening on port ${port}`));