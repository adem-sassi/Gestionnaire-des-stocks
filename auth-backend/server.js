const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Ajouter cela
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// Ajouter le middleware CORS pour autoriser les requêtes depuis votre frontend
app.use(cors({
    origin: 'http://localhost:3000', // Remplacez par l'URL de votre frontend React
    credentials: true, // Si vous devez envoyer des cookies avec les requêtes
}));

app.use(express.json()); // Pour analyser le corps en tant que JSON

// Connecter à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Routes d'authentification
app.use('/api/auth', authRoutes);
app.use('/api', homeRoute);  // Make sure '/api/home' is accessible

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
