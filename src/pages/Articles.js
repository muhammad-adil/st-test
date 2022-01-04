import React, { useState } from "react";
import Card from "../components/Card.js";
import ActionHeader from "../components/ActionHeader.js";

function Articles() {
  const [showActionCheckBox, setShowActionCheckBox] = useState(false); //{showActionCheckBox: ""}
  const [isActive, setActive] = useState(false);
  const [dataCountState, updateDatCountState] = useState();

  const handleDataCount = (dataCountState) => {
    updateDatCountState(dataCountState);
    console.log("handleDataCount Fired in Articles.js");
  };

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
        dataCountState={dataCountState}
        toggleActiveClass={toggleActiveClass}
        handleToggleActiveClass={handleToggleActiveClass}
        handleDataCount={handleDataCount}
      />
      <Card
        isActive={isActive}
        setActive={setActive}
        setShowActionCheckBox={showActionCheckBox}
        toggleActiveClass={toggleActiveClass}
        handleDataCount={handleDataCount}
      />
    </div>
  );
}

export default Articles;
