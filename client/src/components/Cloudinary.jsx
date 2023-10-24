import { useState } from "react";
import axios from "axios";

function Cludinary() {
  const [Url_Imagen, setUrl_Imagen] = useState();

  const ChangeUploadImage = async (e) => {
    const file = e.target.files[0];

    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "presetNoCountry");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dyi5mpfhx/image/upload",
      data
    );
    console.log(response.data);
    setUrl_Imagen(response.data.secure_url);
  };

  const deleteImage = async () => {
    // await axios.delete(
    //   `https://api.cloudinary.com/v1_1/dyi5mpfhx/image/destroy/${Url_Imagen}`
    // );
    setUrl_Imagen("");
  };
  return (
    <div>
      <h1>Seleccionar imagen para subir</h1>
      <div>
        <input type="file" accept="image/*" onChange={ChangeUploadImage} />
        {Url_Imagen && (
          <div>
            <img src={Url_Imagen} />
            <button onClick={() => deleteImage()}>Eliminar Imagen</button>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
}

export default Cludinary;
