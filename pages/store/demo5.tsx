import {useState} from 'react';

interface Item {
  id: string;
  title: string;
  price: number;
}

const Demo: React.FC = function () {
  const [item, setItem] = useState<Item>({
    id: '1',
    title: 'New item',
    price: 10,
  });

  function save() {
    const data = JSON.stringify(item);
    localStorage.setItem('data', data);
    console.log('Data is saved');
    console.log(data);
  }

  function load() {
    const read = localStorage.getItem('data');
    if (read) {
      setItem(JSON.parse(read) as Item);
      console.log('Loading is done');
      console.log(read);
    } else {
      console.log('No data is found');
    }
  }

  function clear() {
    localStorage.removeItem('data');
    console.log('Data is cleared');
  }

  return (
    <div>
      <div>
        ID:
        <input
          value={item.id}
          onChange={x => setItem({...item, id: x.target.value})}
        />
      </div>
      <div>
        Title:
        <input
          value={item.title}
          onChange={x => setItem({...item, title: x.target.value})}
        />
      </div>
      <div>
        Price:
        <input
          value={item.price}
          onChange={x => setItem({...item, price: parseInt(x.target.value)})}
        />
      </div>
      <br />
      <button onClick={save}>Save to local storage</button>
      <button onClick={load}>Load from local storage</button>
      <button onClick={clear}>Clear local storage</button>
      <p> Save the object as JSON.</p>
    </div>
  );
};

export default Demo;
