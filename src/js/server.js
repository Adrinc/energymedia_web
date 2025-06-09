const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Configuración del transportador de correo
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'tu_correo@gmail.com', // Cambia esto
    pass: 'tu_contraseña',       // Cambia esto (usa App Password si tienes 2FA)
  },
});

// Endpoint para procesar el formulario
app.post('/send', async (req, res) => {
  const { nombre, email, telefono, ayuda } = req.body;

  const mailOptions = {
    from: email,
    to: 'DESTINATORIO@gmail.com',// CAMBIAR ESTO
    subject: 'Nuevo mensaje del formulario de contacto',
    text: `Nombre: ${nombre}\nCorreo: ${email}\nTeléfono: ${telefono}\nMensaje: ${ayuda}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar correo:', error);
    res.status(500).send('Error al enviar el correo');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
