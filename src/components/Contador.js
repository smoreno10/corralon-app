import React, { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-warning"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>
        <button type="button" class="btn btn-light" disabled>
          <strong>{count}</strong>
        </button>
        <button
          type="button"
          class="btn btn-warning"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Contador;
