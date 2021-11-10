import {useState} from 'react';

const Demo: React.FC = function () {
  const [data, setData] = useState<string>('');

  function save() {
    document.cookie = `data2=${data};`;
    console.log('Data is saved');
  }

  function load() {
    const read = document.cookie;
    if (read !== '') {
      setData(read);
      console.log('Loading is done');
    } else {
      console.log('No data is found');
    }
  }

  function clear() {
    document.cookie = 'data=; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    console.log('Data is cleared');
  }

  return (
    <div>
      Data: <input value={data} onChange={x => setData(x.target.value)} />
      <br />
      <button onClick={save}>Save to cookie</button>
      <button onClick={load}>Load from cookie</button>
      <button onClick={clear}>Clear cookie</button>
      <p> document.cookie is NOT like a variable. Check the next demo. </p>
      <p> Cookie will be sent back to the server! </p>
      <p> A problem of cookie is that it can be used to track a user</p>
      <p>
        Limit: cookie is small, around several KB and you can't set too many
        items too. Depends on browsers.
      </p>
    </div>
  );
};

export default Demo;
