import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="my-10 p-4 w-6/12 m-auto bg-gray-100">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className=" ">
        <ItemList items={cartItems} />
      </div>
      {cartItems.length !== 0 && (
        <button
          className="p-2 m-2 border border-black rounded-lg "
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
      {cartItems.length === 0 && (
        <div>Cart is empty. Add items to the cart</div>
      )}
    </div>
  );
};
export default Cart;
