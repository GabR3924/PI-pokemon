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

  useEffect(() => {
    const getTypes = async () => {
      const response = await axios.get("http://localhost:3001/types");
      setTypes(response.data);
    };
    getTypes();
  }, []);

  // useEffect(() => {
  //   console.log("Types:", types);
  // }, [types]);

  useEffect(() => {
    console.log("Valor actual de file:", file);
  }, [file]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(
      "name",
      name,
      "image",
      file,
      "vida",
      vida,
      "ataque",
      ataque,
      "defensa",
      defensa,
      "velocidad",
      velocidad,
      "altura",
      altura,
      "peso",
      peso
    );

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

    await axios.post("http://localhost:3001/pokemon/new", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setMessage("Pokémon creado correctamente");
  };

  const handleTypeClick = async () => {};

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setFile(file);
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
                <option key={index} onClick={() => handleTypeClick(type)}>
                  {type}
                </option>
              ))}
          </select>
        </div>
        <button className={css.submit} type="submit">Crear</button>
      </form>
    </div>
  );
}

export default Crear;
