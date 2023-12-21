const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB 
mongoose.connect('mongodb+srv://admin:1234@clusteryenni.h70iube.mongodb.net/gatitos', { useNewUrlParser: true, useUnifiedTopology: true });

// Definición del esquema de datos
const gatoSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    // Agrega más campos
});

const Gato = mongoose.model('Gato', gatoSchema);

// Rutas CRUD
app.post('/api/gatos', async (req, res) => {
    try {
        const newGato = new Gato(req.body);
        await newGato.save();
        res.status(201).send(newGato);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/api/gatos', async (req, res) => {
    try {
        const gatos = await Gato.find({});
        res.status(200).send(gatos);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/api/gatos/:id', async (req, res) => {
    try {
        const gatoId = req.params.id;
        const gato = await Gato.findById(gatoId);
        res.status(200).send(gato);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put('/api/gatos/:id', async (req, res) => {
    try {
        const gatoId = req.params.id;
        const gato = await Gato.findByIdAndUpdate(gatoId, req.body, { new: true });
        res.status(200).send(gato);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/api/gatos/:id', async (req, res) => {
    try {
        const gatoId = req.params.id;
        await Gato.findByIdAndDelete(gatoId);
        res.status(200).send(`Gato ${ gatoId } eliminado correctamente.`);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});