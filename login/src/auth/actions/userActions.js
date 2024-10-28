import axios from 'axios';

export const signupUser = (credentials, history, setFieldError, setSubmitting) => {
    axios.post("http://localhost:5000/api/auth/signup", credentials, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        const { data } = response;
        console.log("Response data:", data); // Log response data for debugging

        if (data.message === "User created successfully!") {
            console.log("Signup successful!", data);
            history.push("/login"); // Rediriger vers la page de connexion après l'inscription
        } else {
            setFieldError("general", data.message); // Afficher le message d'erreur
        }
        setSubmitting(false); // Arrêter l'état de soumission
    }).catch(err => {
        console.error(err);
        setFieldError("general", "An error occurred. Please try again."); // Message d'erreur général
        setSubmitting(false); // Assurez-vous que setSubmitting est appelé en cas d'erreur
    });
};
    