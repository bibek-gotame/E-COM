function Button({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-[1px] border-gray-400 rounded-md w-[10rem] bg-white flex gap-2 items-center px-2 text-black "
    >
      {/* <input type="checkbox" id="checkbox" name="checkbox" /> */}
      {title}
    </button>
  );
}

export default Button;
