function Button({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-[1px]  border-gray-400 rounded-md w-[10rem] bg-white my-1 flex gap-2 items-center px-2 text-black "
    >
      {title}
    </button>
  );
}

export default Button;
