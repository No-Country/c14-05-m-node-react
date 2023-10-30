import axios from "axios";

function Cludinary({ setUrl_Imagen, Url_Imagen }) {
  const ChangeUploadImage = async (e) => {
    const file = e.target.files[0];

    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "presetNoCountry");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dyi5mpfhx/image/upload",
      data,
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
    <>
      <label
        for="dropzone-file"
        class="  bg-grayc flex h-24 w-full cursor-pointer flex-col items-center justify-center  rounded-lg hover:bg-gray-100 "
      >
        <div class="flex flex-col items-center justify-center pb-6 pt-5">
          <img src="/crear-eventos/cameraicon.svg" alt="upload" />
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Agregar imagen</span>
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          class="hidden"
          onChange={ChangeUploadImage}
        />
      </label>

      <hr />
    </>
  );
}

export default Cludinary;
