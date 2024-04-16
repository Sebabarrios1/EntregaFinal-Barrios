import Cart from "../assets/carrito.png";
const Cartwidget = () => {
    return (<><div className="flex justify-center align-middle">
        <img className="w-20" src={Cart} />
        <span className="text-xl">(19)</span>
    </div></>);
}

export default Cartwidget;