import { API_HOST } from "../config";

export const getUsuario = async (formData) => {
  try {
    const response = await fetch(`${API_HOST}/api/usuario`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (!response.ok) {
      throw new Error('Error al enviar datos del usuario');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postUsuario = async (formData) => {
    try {
      const response = await fetch(`${API_HOST}/api/usuario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Error al enviar datos del usuario');
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };
  