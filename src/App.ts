import express from 'express';
import { connectDB } from './db.ts';
import { drinkRoutes } from './routes/drinkRoutes.ts';

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());
app.use('/drinks', drinkRoutes);

app.use((_req, res) => {
    res.status(404).send('Route nicht gefunden.');
});

await connectDB();

app.listen(port, 'localhost', () => {
    console.log('http://localhost:' + port);
});
