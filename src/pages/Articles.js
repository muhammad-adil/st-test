import React, { useState } from "react";
import Card from "../components/Card.js";
import ActionHeader from "../components/ActionHeader.js";

function Articles() {
  const [showActionCheckBox, setShowActionCheckBox] = useState(false); //{showActionCheckBox: ""}
  const [isActive, setActive] = useState(false);

  const toggleActiveClass = () => {
    setActive(!isActive);
    // console.log(setActive, "toggleActiveClass Fired in Articles.js", isActive);
  };
  const handleToggleActiveClass = () => {
    if (isActive === true) {
      setActive(isActive === false);
    } else {
      setActive(isActive === true);
    }
  };

  // const handleInputChange = () =>{} // Function for individual input

  const handleChangeShowActionCheckBox = () => {
    setShowActionCheckBox(!showActionCheckBox);
    // console.log("handleChangeShowActionCheckBox Fired in Articles.js");
  };

  return (
    <div className="articles p-lr-20">
      <ActionHeader
        handleChangeShowActionCheckBox={handleChangeShowActionCheckBox}
        isActive={isActive}
        toggleActiveClass={toggleActiveClass}
        handleToggleActiveClass={handleToggleActiveClass}
      />
      <Card
        isActive={isActive}
        setActive={setActive}
        toggleActiveClass={toggleActiveClass}
        setShowActionCheckBox={showActionCheckBox}
      />
      {/* toggleActiveClass={toggleActiveClass} */}
    </div>
  );
}

export default Articles;
