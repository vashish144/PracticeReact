import React from "react";
import ReactDom from "react-dom";

function PortalDemo() {
  return ReactDom.createPortal(
    <div>PortalDemo component</div>,
    document.getElementById("root-portal")
  );
}

export default PortalDemo;
