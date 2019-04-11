import React, { useState } from 'react';

const Hooks1 = () => {
  const [count, setCount] = useState(0);
  return(
    <div>
      <p> you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Hooks1;