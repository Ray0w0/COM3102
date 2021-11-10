import React, {useMemo, useState} from 'react';

const options = ['AHCC', 'BBA', 'BA', 'DSBI'];

const Exercise: React.FC = function () {
  const [filter, setFilter] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [major, setMajor] = useState<string>('');

  const filtered = useMemo(
    () => options.filter(o => o.includes(filter) || filter === ''),
    [filter]
  );

  return (
    <div>
      <p>
        Name:
        <input value={name} onChange={x => setName(x.target.value)}></input>
      </p>
      <p>
        Filter:
        <input value={filter} onChange={x => setFilter(x.target.value)}></input>
      </p>
      <p>
        Major:
        <select value={major}>
          {filtered.map(o => (
            <option
              key={o}
              value={o}
              onSelect={x => setMajor(x.currentTarget.value)}
            >
              {o}
            </option>
          ))}
        </select>
      </p>
    </div>
  );
};

export default Exercise;
