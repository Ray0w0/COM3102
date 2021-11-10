import {useEffect, useState} from 'react';

const Demo: React.FC = function () {
  const [data, setData] = useState<string>('');

  function run() {
    document.cookie = 'a=3;';
    document.cookie = 'b=4;';
    document.cookie = 'b=5;';
    document.cookie = 'c=6;';
    document.cookie = 'd=7;';
    document.cookie = 'c=3; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    document.cookie = 'e=10;';
    setData(document.cookie);
  }

  function clear() {
    document.cookie = 'a=; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    document.cookie = 'b=; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    document.cookie = 'c=; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    document.cookie = 'd=; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    document.cookie = 'e=; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    setData(document.cookie);
  }

  // the following codes can access document.cookie
  useEffect(() => console.log(document.cookie));

  return (
    <div>
      Cookie contents: {data}
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
      <p> Guess the contents before you see the result! </p>
      <p>
        The codes cannot be run outside the function, because "document" refers
        to the HTML document
      </p>
      <p> You can't access "document" before you create it. </p>
      <p> Set a cookie item on a seperate assignment to document.cookie</p>
      <p>
        If there are more than one assignment in the string value set to
        document.cookie, assignments after the first one are settings for the
        first assignment, like expires
      </p>
    </div>
  );
};

export default Demo;
