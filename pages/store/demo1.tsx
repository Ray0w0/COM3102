import {useState} from 'react';

const Demo: React.FC = function () {
  const [data, setData] = useState<string>('');

  function save() {
    localStorage.setItem('data', data);
    console.log('Data is saved');
  }

  function load() {
    const read = localStorage.getItem('data');
    if (read) {
      setData(read);
      console.log('Loading is done');
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
      Data: <input value={data} onChange={x => setData(x.target.value)} />
      <br />
      <button onClick={save}>Save to local storage</button>
      <button onClick={load}>Load from local storage</button>
      <button onClick={clear}>Clear local storage</button>
      <p> Simple API to save your data at the client computer.</p>
      <p> Limit: 5MB per web application. (Depends on browsers)</p>
      <p> Local storage is shared between tabs too.</p>
      <p>
        Store <strong> string </strong> only, in key-value pairs.
      </p>
    </div>
  );
};

export default Demo;
