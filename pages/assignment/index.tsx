import {ButtonGroup, Card, HTMLSelect, Toaster} from '@blueprintjs/core';
import {Text} from '@blueprintjs/core';
import {Button} from '@blueprintjs/core';
import React, {useMemo, useState} from 'react';
import {getAllItems, Item} from './core';
import {FocusStyleManager} from '@blueprintjs/core';
import {Drawer} from '@blueprintjs/core';
import {Tooltip2} from '@blueprintjs/popover2';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import '@blueprintjs/core/lib/css/blueprint.css';

FocusStyleManager.onlyShowFocusOnTabs();
const NUM_ITEMS_PER_PAGE = 5;
const toaster = typeof window !== 'undefined' ? Toaster.create() : undefined;

interface LineItem {
  quantity: number;
  item: Item;
}

const Assignment: React.FC = function () {
  const [cart, setCart] = useState<Record<string, LineItem>>({});
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const allItems = getAllItems();

  const numPage = useMemo(
    () =>
      1 + Math.max(0, Math.ceil((allItems.length - 1) / NUM_ITEMS_PER_PAGE)),
    [allItems]
  );
  const items = allItems.slice(
    page * NUM_ITEMS_PER_PAGE,
    Math.min((page + 1) * NUM_ITEMS_PER_PAGE, allItems.length)
  );
  const pages = useMemo(() => Array.from(Array(numPage).keys()), [numPage]);

  const cartLen = Object.values(cart).length;

  function addItem(item: Item) {
    const id = item.id;
    if (cart[id] !== undefined) {
      if (toaster !== undefined) {
        toaster.show({
          message: 'Item already exists in the cart',
          intent: 'danger',
        });
      }
    } else {
      cart[id] = {item: item, quantity: 1};
      if (toaster !== undefined) {
        toaster.show({
          message: 'Item added to the cart',
          intent: 'success',
        });
      }
      setCart({...cart});
    }
  }

  function deleteItem(id: string) {
    delete cart[id];
    setCart({...cart});
  }

  function setQuantity(id: string, q: number) {
    const item = cart[id];
    if (item !== undefined) {
      item.quantity = q;
      setCart({...cart});
    }
  }

  return (
    <div
      style={{
        backgroundColor: '#fcf003',
      }}
    >
      <div
        style={{
          textAlign: 'right',
          backgroundColor: '#5ca832',
        }}
      >
        <Button
          icon="shopping-cart"
          intent="primary"
          onClick={() => setCartVisible(!cartVisible)}
          large
        >
          {'Shopping cart' + (cartLen > 0 ? ` [${cartLen}]` : '')}
        </Button>
      </div>
      <h1> Look at my products. Buy now. </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        {items.map(item => (
          <Card
            style={{
              width: '15%',
              backgroundColor:
                cart[item.id] !== undefined ? 'lightgreen' : 'lightgray',
            }}
            key={item.id}
            interactive
          >
            <div>
              <div
                style={{
                  textAlign: 'center',
                }}
              >
                <h3> {item.title} </h3>
              </div>
              <Text> {item.description} </Text>
              <Text> Price: ${item.price} </Text>
              <div
                style={{
                  marginTop: '10px',
                  textAlign: 'center',
                }}
              >
                <Button intent="success" onClick={() => addItem(item)}>
                  Add
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Button
          minimal
          icon="caret-left"
          onClick={() => setPage(Math.max(page - 1, 0))}
        />
        Page
        <HTMLSelect
          value={page}
          onChange={x => setPage(parseInt(x.target.value))}
        >
          {pages.map(p => (
            <option key={p} value={p}>
              {p + 1}
            </option>
          ))}
        </HTMLSelect>
        <Button
          minimal
          icon="caret-right"
          onClick={() => setPage(Math.min(page + 1, numPage - 1))}
        />
      </div>
      <Drawer
        isOpen={cartVisible}
        size="40%"
        title="Shopping cart"
        onClose={() => setCartVisible(false)}
      >
        <fieldset>
          <legend>Items</legend>
          {cartLen > 0 ? (
            <table style={{width: '100%'}}>
              <thead>
                <tr>
                  <th style={{textAlign: 'left'}}>Product</th>
                  <th style={{textAlign: 'right'}}>Quantity</th>
                  <th style={{textAlign: 'right'}}>Sub-total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Object.values(cart).map(item => {
                  const x = item.item;
                  const q = item.quantity;
                  return (
                    <tr key={x.id}>
                      <td>
                        <Tooltip2 position="bottom" content={x.description}>
                          <Text>{x.title}</Text>
                        </Tooltip2>
                      </td>
                      <td style={{textAlign: 'right'}}>
                        {q > 1 && (
                          <Button
                            small
                            minimal
                            intent="primary"
                            icon="minus"
                            onClick={() => setQuantity(x.id, q - 1)}
                          />
                        )}
                        {q}@${x.price}
                        <Button
                          small
                          minimal
                          intent="primary"
                          icon="plus"
                          onClick={() => setQuantity(x.id, q + 1)}
                        />
                      </td>
                      <td style={{textAlign: 'right'}}>${x.price * q}</td>
                      <td>
                        <Button
                          small
                          minimal
                          icon="cross"
                          intent="danger"
                          onClick={() => deleteItem(item.item.id)}
                        />
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td></td>
                  <td style={{textAlign: 'right'}}> Total: </td>
                  <td
                    style={{textAlign: 'right', borderTop: '1px solid black'}}
                  >
                    $
                    {Object.values(cart).reduce(
                      (sum, item) => sum + item.item.price * item.quantity,
                      0
                    )}
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div style={{textAlign: 'center'}}> No item </div>
          )}
        </fieldset>
        <ButtonGroup fill>
          <Button icon="reset" onClick={() => setCart({})}>
            Clear cart
          </Button>
          <Button
            intent="primary"
            icon="credit-card"
            onClick={() => alert('Payment is not implemented')}
          >
            Checkout
          </Button>
        </ButtonGroup>
      </Drawer>
    </div>
  );
};

export default Assignment;
