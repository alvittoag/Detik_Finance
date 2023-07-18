const Button = ({ children, className }) => {
  return (
    <button
      className={"py-3 px-5 text-white bg-[#3EB7DD] font-semibold rounded-md "}
    >
      {children}
    </button>
  );
};

export default Button;
