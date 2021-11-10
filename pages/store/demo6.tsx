interface Item {
  id: string;
  reference?: Item;
}

const Demo: React.FC = function () {
  const item: Item = {id: '1'};
  item.reference = item;

  const item2: Set<string> = new Set(['1', '2', '2']);

  function run() {
    console.log(JSON.stringify(item));
  }

  function run2() {
    console.log(JSON.stringify(item2));
  }

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={run2}>Run 2</button>
      <p>The object must be serializable.</p>
    </div>
  );
};

export default Demo;
