const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
      {label}
      <img
        src={iconURL}
        alt="arrow right"
        className="rounded-full ml-2 w-5 h-5"
      />
    </button>
  );
};

export default Button;
