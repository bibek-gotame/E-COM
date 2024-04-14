import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  return (
    <div className="h-16 bg-black w-full  flex justify-between text-white px-6 items-center font-bold text-2xl">
      <div onClick={()=>{
navigate('/productList')
      }} className="cursor-pointer">E-COM</div>
      <div className="flex">
        <p className="cursor-pointer" onClick={()=>{ navigate('/cart')}}>Cart</p>
        <p></p>
      </div>
    </div>
  )
}

export default Header