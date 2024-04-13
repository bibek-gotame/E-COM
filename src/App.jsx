import { useEffect, useState } from "react";

function App() {
const [Products, setProducts] = useState(null)

  const url = 
  'https://dummyjson.com/products?limit=5'
    // 'https://dummyjson.com/products/category/automotive'
   
  const getData = async () => {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
setProducts(json.products)
  };
  
 
  useEffect(() => {
   
  getData();
  }, []);

  return <>
  WELCOME TO ECOM
  <div className="flex gap-2 flex-wrap">
    {Products?.map((product)=> (
    <div  key={product.id} className="w-[25rem]"> 
    <h1>{product.title}</h1>
    <h1>{product.description }</h1>
    <img className="w-[10rem]" src={product.images[0]} alt="hello" />

    </div>
    ))}
  </div>
  
  </>;
}

export default App;
