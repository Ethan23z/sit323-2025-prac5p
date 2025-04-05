const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    res.json({ result: a + b });
});

app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    res.json({ result: a - b });
});

app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    res.json({ result: a * b });
});

app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    if (b === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed' });
    }
    res.json({ result: a / b });
});

app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});
