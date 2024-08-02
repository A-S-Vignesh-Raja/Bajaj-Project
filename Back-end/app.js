import express from 'express';
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            user_id: null,
            message: 'Invalid input'
        });
    }

    const userId = 'Avinash_31122002';
    const email = 'ma2382@srmist.edu.in';
    const rollNumber = 'RA2111003020529';

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && typeof item === 'string');

    const highestAlphabet = alphabets.reduce((highest, current) => {
        if (!highest) return current;
        return current.toLowerCase() > highest.toLowerCase() ? current : highest;
    }, null);

    res.json({
        is_success: true,
        user_id: userId,
        email,
        rollNumber,
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});