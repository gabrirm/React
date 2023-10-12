import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='py-3 px-4 flex flex-col'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className='font-semibold mt-7 self-center'>Your cart is still empty. Start adding some pizzas :)</p>
      <img className='w-40 h-40 self-center mt-10' src="https://htmlstream.com/front/assets/svg/illustrations/oc-empty-cart.svg" alt="Empty cart" />
    </div>
  );
}

export default EmptyCart;
