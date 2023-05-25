import axios from "axios";
import { useState, useEffect } from "react";
import css from "./Crear.module.css";

function Crear() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [vida, setVida] = useState("");
  const [ataque, setAtaque] = useState("");
  const [defensa, setDefensa] = useState("");
  const [velocidad, setVelocidad] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [message, setMessage] = useState("");
  const [types, setTypes] = useState([]);
  // const [pokemonId, setPokemonId] = useState(null);

  useEffect(() => {
    const getTypes = async () => {
      const response = await axios.get("http://localhost:3001/types");
      setTypes(response.data);
    };
    getTypes();
  }, []);

  useEffect(() => {
    console.log("Valor actual de file:", file);
  }, [file]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !name ||
      !vida ||
      !ataque ||
      !defensa ||
      !velocidad ||
      !altura ||
      !peso
    ) {
      setMessage("Por favor complete todos los campos");
      return;
    }
    if (!file) {
      setMessage("Por favor seleccione un archivo antes de crear el Pokémon");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);
    formData.append("vida", vida);
    formData.append("ataque", ataque);
    formData.append("defensa", defensa);
    formData.append("velocidad", velocidad);
    formData.append("altura", altura);
    formData.append("peso", peso);

    console.log("formData", formData);

    const response = await axios.post(
      "http://localhost:3001/pokemon/new",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    // setPokemonId(response.data.data.id);
    setMessage("Pokémon creado correctamente");
  };

  // useEffect(() => {
  //   console.log("Valor actual de pokemonId:", pokemonId);
  // }, [pokemonId]);

  // useEffect(() => {
  //   console.log("Valor actual de typeid:", type);
  // }, [pokemonId]);

  // const handleTypeClick = async (type, pokemonId) => {
  //   const typeId = type;

  //   await axios.post('http://localhost:3001/pokemon/addType', { pokemonId, typeId });
  //   console.log('clickIdPokemon=', pokemonId)
  //   console.log('type=', typeId)
  // };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    // setFile(file);
    if (!file.type.startsWith("image/")) {
      setMessage("Por favor seleccione un archivo de imagen válido");
      return;
      }
    const formData = new FormData();
    formData.append("file", file);
    console.log("formData", formData);

    try {
      const response = await axios.post(
        "http://localhost:3001/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("respuesta=", response);
      setFile(response.data);
    } catch (error) {
      console.log("Error al hacer la petición:", error);
    }
  };

  const isFormValid = () => {
    return (
    name &&
    vida &&
    ataque &&
    defensa &&
    velocidad &&
    altura &&
    peso &&
    file
    );
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
          type="number"
          placeholder="Peso"
          value={peso}
          onChange={(event) => setPeso(event.target.value)}
        />
        <div className={css.types}>
          <select>
            {Array.isArray(types) &&
              types.map((type, index) => (
                <option key={index}>{type.name}</option>
              ))}
            {/* onClick={() => handleTypeClick(type)}> */}
          </select>
        </div>
        <button className={css.submit} type="submit" disabled={!isFormValid()}>
          Crear
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Crear;
