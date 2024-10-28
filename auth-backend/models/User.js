const mongoose = require('mongoose');

// Définir le schéma de l'utilisateur
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Fullname is required'],
        trim: true
    },
    dob: {
        type: Date,
        required: [true, 'Date of birth is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please provide a valid email address'] // Simple regex for email validation
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    }
}, { timestamps: true });

// Créer un index unique sur le champ email pour performance
userSchema.index({ email: 1 }, { unique: true });

// Exporter le modèle
module.exports = mongoose.model('User', userSchema);
