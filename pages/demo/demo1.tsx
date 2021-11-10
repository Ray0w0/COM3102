const Demo1: React.FC = function () {
  console.log('For normal debugging info');
  console.error('For errors');
  return (
    <div>
      <p> Yay, we are at another page. </p>
      <p>
        Note the file extension... It is tsx, not ts. In general, if there is
        react element (i.e., it is UI-related), use tsx. Otherwise, use ts.
      </p>
      <p>
        Note that the changes on the codes are reflected on the web almost
        instantly.
      </p>
      <p> It makes web development testing easier. </p>
      <p>Remember to check the console too. I have printed something there.</p>
      <p> Press F12 for Google Chrome to open the console. </p>
    </div>
  );
};

export default Demo1;
