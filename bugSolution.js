```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the component mounts
    console.log('Mounted!');
    //This will not cause error
    setCount(prevCount => prevCount + 10);
    return () => {
      console.log('Unmounted!');
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default MyComponent;
```