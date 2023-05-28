import React from "react";
import './Popup.css';

function Project(props) {
  function handleClick() {
    props.setShow(false);
  }

  return props.show ? (
    <div className="popup">
      <p className="popup__backToHome" onClick={handleClick}>
        ⟵BACK TO HOME
      </p>
      {props.children}
    </div>
  ) : "";
}
  
export default Project;
  