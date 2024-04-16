import ItemCount from "./ItemCount";

export const ItemDetail = ({ item }) => {

  const handleAdd = (quantity) => {
    console.log(`Agregando ${quantity} unidades de ${item.nombre} al carrito`);
  }

  return (
    <><div className="flex flex-row ">
        <div className="mx-auto my-auto flex flex-col bg-blue-300 w-fit" >
          <h2 className="bg-blue-500">{item.nombre}</h2>
          <img src={item.imagen} alt={item.nombre} />
          <p>{item.descripcion}</p> 
          <p>Precio: {item.precio}</p>
         
          <p>Stock: {item.stock}</p>
          {item.isOnDiscount && <p>¡En descuento!</p>} 
         <p>Categoría: {item.categoria}</p>
          <ItemCount stock={item.stock} initial={0} onAdd={handleAdd} />
        </div>
      </div>
    </>
  );
}



