import axios from 'axios';
import { useState } from 'react';
import css from './Crear.module.css';

function Crear() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [vida, setVida] = useState('');
  const [ataque, setAtaque] = useState('');
  const [defensa, setDefensa] = useState('');
  const [velocidad, setVelocidad] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Enviando datos al servidor:', { name, image, vida, ataque, defensa, velocidad, altura, peso });

    axios
      .post('http://localhost:3001/pokemon/new', {
        name,
        image,
        vida,
        ataque,
        defensa,
        velocidad,
        altura,
        peso,
      })
      .then((response) => {
        setMessage('Pokémon creado correctamente');
      });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file);

    await axios.post('http://localhost:3001/upload', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then((response) => {
      console.log('Recibido del servidor:', response.data);
      setImage(response.data.imageUrl);
      console.log('Estado actualizado:', image);
  
    });
  };

  return (
    <div className={css.section}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input type="file" onChange={handleFileChange} />
        <input
          type="text"
          placeholder="Vida"
          value={vida}
          onChange={(event) => setVida(event.target.value)}
        />
        <input
          type="text"
          placeholder="Ataque"
          value={ataque}
          onChange={(event) => setAtaque(event.target.value)}
        />
        <input
          type="text"
          placeholder="Defensa"
          value={defensa}
          onChange={(event) => setDefensa(event.target.value)}
        />
        <input
          type="text"
          placeholder="Velocidad"
          value={velocidad}
          onChange={(event) => setVelocidad(event.target.value)}
        />
        <input
          type="number"
          placeholder="Altura"
          value={altura}
          onChange={(event) => setAltura(event.target.value)}
        />
        <input
          type='number'
          placeholder="Peso"
          value={peso}
          onChange={(event) => setPeso(event.target.value)}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default Crear;
