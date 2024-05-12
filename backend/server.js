import express from 'express'
import cors from 'cors';

import usuarioRoutes from './routes/usuarioRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Permitir solicitudes CORS
app.use(cors()); 

app.use(express.json());

// Routes
app.use('/api/usuario', usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});