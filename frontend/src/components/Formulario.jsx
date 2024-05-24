import React, { useState } from 'react';
import { postUsuario } from '../services/usuarioService';

import { Button } from 'primereact/button';
        
function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      nombre,
      email,
      mensaje
    };

    try {
      const response = await postUsuario(formData);
      console.log('Respuesta del servidor:', response);
      // Realizar cualquier acción adicional después de enviar el formulario, como limpiar los campos o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Manejar errores de manera adecuada, como mostrar un mensaje de error al usuario
    }
  };

  return (
    <div>
      <Button label="Submit" />
      
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
