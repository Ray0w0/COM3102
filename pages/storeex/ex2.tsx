import {useState} from 'react';

const Demo: React.FC = function () {
  const [item, setItem] = useState<string>('');
  const [item2, setItem2] = useState<string>('');

  function save() {
    sessionStorage.setItem('data', item);
    sessionStorage.setItem('data2', item2);
    console.log('Data is saved');
  }

  function load() {
    const read = sessionStorage.getItem('data');
    const read2 = sessionStorage.getItem('data2');
    if (read && read2) {
      setItem(read);
      setItem2(read2);
      console.log('Loading is done');
    } else {
      console.log('No data is found');
    }
  }

  function clear() {
    sessionStorage.removeItem('data');
    sessionStorage.removeItem('data2');
    console.log('Data is cleared');
  }

  return (
    <div>
      Data 1: <input value={item} onChange={x => setItem(x.target.value)} />
      <br />
      Data 2: <input value={item2} onChange={x => setItem2(x.target.value)} />
      <br />
      <button onClick={save}>Save to session storage</button>
      <button onClick={load}>Load from session storage</button>
      <button onClick={clear}>Clear session storage</button>
    </div>
  );
};

export default Demo;
