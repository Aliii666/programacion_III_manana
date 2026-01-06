import { useState, useDeferredValue } from 'react';

export default function FormularioDiferido() {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [password, setPassword] = useState('');
  const [enviado, setEnviado] = useState(false);

  const emailDiferido = useDeferredValue(email);

  const esValido =
    emailDiferido.includes('@') && emailDiferido.includes('.') &&
    nombre !== '' &&
    apellido !== '' &&
    password !== '';

  const manejarEnvio = () => {
    setEnviado(true);
  };

  return (
    <>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Tu correo electrónico"
      /><br />

      <input
        type="text"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Tu nombre"
      /><br />

      <input
        type="text"
        value={apellido}
        onChange={e => setApellido(e.target.value)}
        placeholder="Tu apellido"
      /><br />

      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Ingresa tu contraseña"
      /><br />

      <button onClick={manejarEnvio}>
        Enviar
      </button>

      {enviado && (
        <p style={{ color: esValido ? 'lightgreen' : 'salmon' }}>
          {esValido ? 'Registro Exitoso' : 'Registro Inválido'}
        </p>
      )}
    </>
  );
}