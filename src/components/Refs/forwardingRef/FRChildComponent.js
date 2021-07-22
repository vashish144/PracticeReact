import React from "react";

const FRChildComponent = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});
export default FRChildComponent;
