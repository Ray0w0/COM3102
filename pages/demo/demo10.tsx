import {useState} from 'react';

interface Item {
  id: string;
  title: string;
  price: number;
}

const shopItems: Item[] = [
  {
    id: '101',
    title: 'PS5 Router',
    price: 3499,
  },
  {
    id: '307',
    title: 'Hello Melody',
    price: 199,
  },
  {
    id: '299',
    title: 'Acelook',
    price: 150,
  },
];

interface LineItem {
  item: string;
  quantity: number;
}

const Demo: React.FC = function () {
  const [cart, setCart] = useState<LineItem[]>([]);

  function addItemToCart(item: Item) {
    setCart([...cart, {item: item.id, quantity: 1}]);
  }

  function removeItem(index: number) {
    cart.splice(index, 1);
    setCart([...cart]);
  }
  return (
    <div>
      <p> Items: </p>
      {shopItems.map(item => (
        <ShopItem key={item.id} item={item} onAdd={() => addItemToCart(item)} />
      ))}
      <p> Cart items: </p>
      {cart.map((item, index) => (
        <CartItem
          key={item.item}
          item={item}
          onRemove={() => removeItem(index)}
        />
      ))}
    </div>
  );
};

const ShopItem: React.FC<{
  item: Item;
  onAdd: () => void;
}> = function ({item, onAdd}) {
  const {title, price} = item;
  return (
    <div>
      <p>Item: {title}</p>
      <p>Price: {price}</p>
      <button onClick={onAdd}> Add to shopping cart</button>
    </div>
  );
};

const CartItem: React.FC<{
  item: LineItem;
  onRemove: () => void;
}> = function ({item: lineitem, onRemove}) {
  const {item, quantity} = lineitem;
  return (
    <div>
      <p>Item ID: {item}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={onRemove}>Remove item</button>
    </div>
  );
};

export default Demo;
