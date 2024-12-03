const connect = require('connect');
const url = require('url');
const http = require('http');

const app = connect();

app.use((req, res) => {
    const query = url.parse(req.url, true).query;
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);
    let result;

    
    switch (method) {
        case 'add':
            result = x + y;
            res.end(`${x} + ${y} = ${result}`);
            break;
        case 'subtract':
            result = x - y;
            res.end(`${x} - ${y} = ${result}`);
            break;
        case 'multiply':
            result = x * y;
            res.end(`${x} * ${y} = ${result}`);
            break;
        case 'divide':
            result = y !== 0 ? x / y : 'Error: Division by zero';
            res.end(`${x} / ${y} = ${result}`);
            break;
        default:
            res.end('Error: Invalid method. Please use add, subtract, multiply, or divide.');
    }
});

http.createServer(app).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
