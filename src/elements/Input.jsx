const Input = (props) => {
  const { type, name, value, onChange, label } = props;

  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-[#F8F8F8] py-[14px] w-full placeholder:font-[400] placeholder:text-[12px] px-5 focus:outline-sky-700 rounded-lg z-50"
      />

      <label
        htmlFor={name}
        className={`absolute cursor-text top-[13px] left-5  ${
          value.length >= 1 ? "hidden" : ""
        }`}
      >
        {label}
        <span className="text-red-500">*</span>
      </label>
    </div>
  );
};

export default Input;
