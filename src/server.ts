import express from 'express';

const server = express();

server.listen(8080, () => {
    console.log('🚀 Server started!');
    console.log('http://localhost:8080');
});
