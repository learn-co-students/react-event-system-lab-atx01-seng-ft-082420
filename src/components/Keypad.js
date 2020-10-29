// Code Keypad Component Here
import React from "react";

const Keypad = () => {
  return (
    <div>
      <input
        onKeyUp={() => console.log("Entering password...")}
        type="password"
      />
    </div>
  );
};

export default Keypad;
