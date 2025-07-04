const express = require('express');
const app = express();
const logRoutes = require('./routes/logRoutes');
const PORT = 5000;
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true // Optional: Allows cookies/credentials if needed
}));

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Logs endpoint working!');
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

app.use("/log", logRoutes);
