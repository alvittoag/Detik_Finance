// ** Import React
import { useEffect, useState } from "react";

// ** Import Elements
import Input from "../elements/Input";
import assets from "../assets/assets";

const FormRegistrasi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [input, setInput] = useState({
    name: "",
    email: "",
    telephone: "",
    description: "",
    image: null,
    file: null,
    website: "",
    agrement: false,
  });

  const validate =
    input.name === "" ||
    input.email === "" ||
    input.telephone === "" ||
    input.description === "" ||
    !input.image ||
    input.website === "" ||
    !input.agrement;

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "image") {
      if (e.target.files[0]?.size >= 200000) {
        alert("file terlalu besar");
      } else {
        setInput({ ...input, image: e.target.files[0] });
      }
    } else if (name === "file") {
      if (e.target.files[0]?.size >= 20000000) {
        alert("file terlalu besar");
      } else {
        setInput({ ...input, file: e.target.files[0] });
      }
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handelRegister = () => {
    if (validate) {
      alert("Harap lengkapi semua data ");
    } else {
      alert("Anda berhasil register");

      setInput({
        name: "",
        email: "",
        telephone: "",
        description: "",
        image: null,
        file: null,
        website: "",
        agrement: false,
      });
    }
  };

  return (
    <div className="sm:absolute sm:top-[17rem] sm:left-0 sm:right-0 sm:mx-auto sm:w-[650px] lg:w-[700px] sm:h-[990px] bg-white p-8 sm:rounded-3xl space-y-5">
      {/* Input Nama Perusahaan */}
      <Input
        type="text"
        name="name"
        value={input.name}
        onChange={handleInput}
        label="Nama Perusahan"
      />

      {/* Input Email */}
      <Input
        type="email"
        name="email"
        value={input.email}
        onChange={handleInput}
        label="Email"
      />

      {/* Input No Telephone */}
      <div className="space-y-2">
        <Input
          type="number"
          name="telephone"
          value={input.telephone}
          onChange={handleInput}
          label="Nomor Telephone"
        />

        <p className="text-[12px] font-[400] text-[#828282]">Isi hanya angka</p>
      </div>

      {/* Input Description */}
      <div className="relative">
        <textarea
          onChange={handleInput}
          value={input.description}
          id="description"
          name="description"
          rows="5"
          className="w-full px-5 py-2 bg-[#F8F8F8] resize-none focus:outline-sky-700 rounded-lg z-50"
        ></textarea>

        <label
          htmlFor="description"
          className={`absolute top-[7px] left-5 cursor-text  ${
            input.description.length >= 1 ? "hidden" : ""
          }`}
        >
          Tentang Perusahaan (Max. 200 character)
          <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Input Gambar */}
      <div className="relative space-y-5 sm:space-y-0 sm:flex sm:items-center sm:gap-10">
        <div className=" sm:w-[200px] h-[200px] relative bg-[#F8F8F8] rounded-lg">
          <input
            type="file"
            onChange={handleInput}
            name="image"
            accept="image/png, image/jpg, image/jpeg"
            className="absolute w-full h-full opacity-0 cursor-pointer z-50"
          />

          {input.image ? (
            <img
              src={URL.createObjectURL(input.image)}
              className="h-full w-full rounded-lg"
            />
          ) : (
            <>
              <img
                src={assets.plus}
                alt="icon"
                className="absolute top-20 left-0 right-0 mx-auto"
              />

              <label
                htmlFor="description"
                className={`absolute bottom-5 left-0 right-0 text-center `}
              >
                Upload file logo
                <span className="text-red-500">*</span>
              </label>
            </>
          )}
        </div>

        <ol className=" px-5 sm:px-0 list-decimal font-[400] text-black">
          <li>Format file: .png, .jpg, .jpeg</li>
          <li>Maksimal ukuran file 200kb</li>
          <li>Hindari penggunaan logo berwarna putih</li>
          <li>Minimal lebar 300px</li>
        </ol>
      </div>

      {/* Input Berkas */}
      <div className="space-y-2">
        <div className="bg-[#F8F8F8] relative py-[14px] sm:px-5 rounded-lg">
          <label htmlFor="file" className="px-5 sm:px-0">
            {input.file
              ? `${input.file.name.substring(0, 50)}...`
              : "Profil Perusahaan atau Deck (opsional)"}
          </label>

          <input
            name="file"
            type="file"
            onChange={handleInput}
            accept="application/pdf"
            className="absolute top-3 sm:top-0 bottom-0 right-0 opacity-0 z-50 cursor-pointer"
          />

          <button className="bg-primary text-white px-14 hidden sm:block sm:absolute sm:right-0 sm:top-0 sm:bottom-0 rounded-lg font-semibold">
            Upload File
          </button>
        </div>

        <p className="text-[12px] font-[400] text-[#828282]">
          Format file .pdf , maksimal size 20mb
        </p>
      </div>

      {/* Input Webiste */}
      <div className="space-y-2">
        <Input
          type="text"
          name="website"
          value={input.website}
          onChange={handleInput}
          label="Link website"
        />

        <p htmlFor="website" className="text-[12px] font-[400] text-[#828282]">
          Website, Sosial Media, dll. Sertakan protokol URL (https:// atau
          http://).
        </p>
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-3">
        <input
          onChange={(e) => setInput({ ...input, agrement: e.target.checked })}
          type="checkbox"
          className={`w-8 h-4 sm:w-[14px] sm:h-[14px] rounded-sm  ${
            input.agrement
              ? " accent-[#C4C4C4] "
              : "appearance-none bg-[#C4C4C4]"
          } `}
        />

        <label className="text-[14px] font-[400] text-[#071424]">
          Dengan menekan tombol "Daftar", Saya menyetujui syarat dan ketentuan
          yang berlaku
        </label>
      </div>

      {/* Button Submit Register */}
      <div className="w-full">
        <button
          onClick={handelRegister}
          className=" text-white py-4 bg-primary font-semibold w-72 flex justify-center mx-auto rounded-lg"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default FormRegistrasi;
