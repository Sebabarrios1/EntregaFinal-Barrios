import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import categories from '../utils/MocksAsync.json'
import { fakeApiCall } from "../utils/fakeApiCall";
import {doc,getDoc, getFirestore, onSnapshot} from "firebase/firestore";

const ItemListContainer = () => {
  const { id } = useParams();
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fakeApiCall(categories).then(res => { setResponse(res); setLoading(false) })

  }, [])

  if (loading) return <h1>Cargando...</h1>


  const getProductosByCategory = (catId) => {
    if (catId) {
      return response.productos.filter((product) => product.categoria === parseInt(catId))
    }
  }

useEffect(()=>{

  const db = getFirestore();

  const prodRef = doc(db, "productos", "gCCkoFdJD9eZ2LykbHYF")
  getDoc(prodRef).then((Snapshot)=>{
    if(Snapshot.exists()){
      console.log(...Snapshot.data)
    }
  })

},[])

  const productsPorCategoria = getProductosByCategory(id)

  return (<>
    <div className="flex  flex-col items-center mt-3">
      <h1>Categorias</h1>
      <br />
      <div>
        {response.categorias.map((cat) => {
          return <Link key={cat.id} to={`/category/${cat.id}`}>
            <h2>{cat.nombre}</h2>
          </Link>
        })}
      </div>
    </div>
    {
      productsPorCategoria && (
        productsPorCategoria.map((producto) => {
          console.log(producto)
          return (<Link key={producto.id} to={`/item/${producto.id}`} className=" flex flex-col  items-center mt-3 bg-blue-500 ">
            <h2>{producto.nombre}</h2>
          </Link>)
        })
      )
    }

  </>);
}

export default ItemListContainer;