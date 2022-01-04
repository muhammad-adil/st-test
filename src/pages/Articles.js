import React, { useState } from "react";
import Card from "../components/Card.js";
import ActionHeader from "../components/ActionHeader.js";

function Articles() {
  const [showActionCheckBox, setShowActionCheckBox] = useState(false); //{showActionCheckBox: ""}
  const [isActive, setActive] = useState(false);

  const toggleActiveClass = () => {
    setActive(!isActive);
    // props.setActive(props.isActive ? true : false); // testing
    // props.setActive(props.isActive ? false : true);
    console.log(setActive, "toggleActiveClass Fired in Articles.js", isActive);
  };

  // const handleInputChange = () =>{} // Function for individual input

  const handleChangeShowActionCheckBox = () => {
    setShowActionCheckBox(!showActionCheckBox);
    // setShowActionCheckBox(showActionCheckBox ? false : true);
    console.log("handleChangeShowActionCheckBox Fired in Articles.js");
  };

  return (
    <div className="articles p-lr-20">
      <ActionHeader
        handleChangeShowActionCheckBox={handleChangeShowActionCheckBox}
        isActive={isActive}
        toggleActiveClass={toggleActiveClass}
      />
      <Card
        isActive={isActive}
        setActive={setActive}
        // setActive={setActive}
        toggleActiveClass={toggleActiveClass}
        setShowActionCheckBox={showActionCheckBox}
      />
      {/* toggleActiveClass={toggleActiveClass} */}
    </div>
    // <div className='articles container'>
    //   <h2>Dashboard <span>&gt;</span> Articles</h2>
    //   <Article/>
    // </div>
  );
}

export default Articles;
