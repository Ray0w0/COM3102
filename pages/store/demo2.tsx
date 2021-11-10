import {useState} from 'react';

const Demo: React.FC = function () {
  const [data, setData] = useState<string>('');

  function save() {
    sessionStorage.setItem('data', data);
    console.log('Data is saved');
  }

  function load() {
    const read = sessionStorage.getItem('data');
    if (read) {
      setData(read);
      console.log('Loading is done');
    } else {
      console.log('No data is found');
    }
  }

  function clear() {
    sessionStorage.removeItem('data');
    console.log('Data is cleared');
  }

  return (
    <div>
      Data: <input value={data} onChange={x => setData(x.target.value)} />
      <br />
      <button onClick={save}>Save to session storage</button>
      <button onClick={load}>Load from session storage</button>
      <button onClick={clear}>Clear session storage</button>
      <p> Simple API to save your data at the client computer.</p>
      <p> Limit: 5MB per web application. (Depends on browsers)</p>
      <p> Session storage is NOT shared between tabs.</p>
      <p>
        The session storage is cleared when the tab is closed. It survives in
        refresh.
      </p>
      <p>
        Store <strong> string </strong> only, in key-value pairs.
      </p>
    </div>
  );
};

export default Demo;
