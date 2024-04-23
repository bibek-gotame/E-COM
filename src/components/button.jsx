
function Button({title,onClick}) {
  return (
    <button onClick={onClick} className="border-2 rounded-md px-2  bg-black text-white font-bold">{title}</button>
)
}

export default Button