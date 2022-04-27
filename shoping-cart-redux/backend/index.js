import express from 'express';
import { itemList } from './data/data.js'

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    return res.json({itemList})
})

app.post('/api/add', (req, res) => {
    console.log(req.body)
    return res.json({...req.body})
})

app.delete('/api/remove/:id', (req, res) => {
    console.log(req.params);
    res.json(req.params);
})

app.listen(5555, () => console.log('app is running'));