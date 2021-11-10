const data = ['Ann', 'Bob', 'Cat'];

const Demo2: React.FC = function () {
  return (
    <div>
      <p> We can display data in TS on the webpage</p>
      <p> Hi, {data.join(', ')} </p>
      <p> When there is a loop, we need to provide a unique key property. </p>
      {data.map(d => (
        <p key={d}>Hi, {d}</p>
      ))}
      <p> You can check the console. Try to make sure there is no error. </p>
    </div>
  );
};

export default Demo2;
