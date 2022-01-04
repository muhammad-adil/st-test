import React, { useState } from "react";
import { HiOutlineLightningBolt } from "react-icons/hi";
import "./ActionHeader.css";
import { FaRegPlayCircle } from "react-icons/fa";
export default function ActionHeader(props) {
  const [showBtn, setShowBtn] = useState(false);

  const handleChangeBtn = () => {
    setShowBtn(!showBtn);
  };
  console.log(props, "props in ActionHeaderjs");

  return (
    <div className="action-header-container">
      <div className="action-header">
        <div className="btn-action">
          {showBtn ? (
            <div>
              <button
                className="btn-red"
                onClick={() => {
                  handleChangeBtn();
                  props.handleChangeShowActionCheckBox();
                }}
              >
                <i>
                  <HiOutlineLightningBolt />
                </i>
                Stop Action
              </button>
              <form>
                <label className="action-box-checkbox">
                  Select All
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={props.isActive}
                    onChange={() => props.toggleActiveClass()}
                  />
                  <span className="checkmark"></span>
                </label>
              </form>
            </div>
          ) : (
            <button
              onClick={() => {
                handleChangeBtn();
                props.handleChangeShowActionCheckBox();
              }}
            >
              <i>
                <HiOutlineLightningBolt />
              </i>
              Start Action
            </button>
          )}
          {/* <button><i><HiOutlineLightningBolt/></i>Start Action</button> */}
        </div>

        <div className="total-items">
          <p>223 items</p>
        </div>
        <div className="action-status play-btn">
          <FaRegPlayCircle />
        </div>
      </div>
    </div>
  );
}
