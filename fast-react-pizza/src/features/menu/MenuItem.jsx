import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart, increaseItemQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const itemInCart = cart.map((item) => item.pizzaId).includes(id);
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      totalPrice: unitPrice * 1,
      quantity: 1,
    };
    if (cart.map((item) => item.pizzaId).includes(id))
      dispatch(increaseItemQuantity(id));
    else dispatch(addItem(newItem));
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded-full border border-stone-500 ${soldOut} ${
          soldOut ? "opacity-70 grayscale" : ""
        }`}
      />
      <div className="flex grow flex-col pt-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <div className="flex flex-col space-y-5 items-center">
            {!soldOut && !itemInCart && (
              <Button type="small" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            )}

            {itemInCart && (
              <>
                <UpdateItemQuantity pizzaId={id}/>
                <DeleteItem pizzaId={id} />
              </>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
