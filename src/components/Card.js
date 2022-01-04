import React, { useState } from "react";
import {
  FaRegPlayCircle,
  FaRegPauseCircle,
  FaRegStopCircle
} from "react-icons/fa";
import CardStatsDetails from "./CardStatsDetails.js";
import ActionBox from "./ActionBox.js";
//1st way
import tshirtData from "../data/tshirt.json";
import "./Card.css";

export default function Card(props) {
  const [data, setData] = useState(tshirtData);
  // console.log(props, "props in Cardjs");
  console.log(data, "length", `${data.length}`);

  if (data) {
    // && props
    return (
      <div className="cards-container d-flex f-wrap">
        {data &&
          data.map((tshirt) => (
            <CardItem
              tshirt={tshirt}
              handleChangeShowActionCheckBox={() =>
                props.handleChangeShowActionCheckBox
              }
              toggleActiveClass={() => props.toggleActiveClass}
              setShowActionCheckBox={props.setShowActionCheckBox}
              isActive={props.isActive}
              setActive={props.setActive}
            />
          ))}
      </div>
    );
  }
  function CardItem({ tshirt, ...props }) {
    // console.log(props, "props in cardItem");

    const [show, setShow] = useState(false);
    const handleChange = () => {
      setShow(!show);
    };

    return (
      <div key={tshirt.id} className="cards">
        <div
          className={`card-main ${props.isActive ? "card-main-active" : ""}`}
          onClick={handleChange}
          // onClick={() => {
          //   handleChange();
          //   props.toggleActiveClass();
          // }}
        >
          <div className="grid-container-top">
            {tshirt.status === "open" && (
              <div className="play-btn text-align-left">
                <FaRegPlayCircle />
              </div>
            )}
            {tshirt.status === "pause" && (
              <div className="pause-btn text-align-left">
                <FaRegPauseCircle />
              </div>
            )}
            {tshirt.status === "stop" && (
              <div className="stop-btn text-align-left">
                <FaRegStopCircle />
              </div>
            )}
            <div className="card-heading text-align-center">
              <p>
                T-SHIRT
                <br />
                {tshirt.season}
              </p>
            </div>
            <div className="card-status text-align-right">
              <span className={`dot-green ${tshirt.status_color}`}></span>
            </div>
          </div>
          {show ? (
            <ActionBox />
          ) : (
            <CardStatsDetails
              tshirt_id={tshirt.tshirt_id}
              tshirt_img={tshirt.tshirt_img}
              wear_type={tshirt.wear_type}
              we={tshirt.we}
              actions={tshirt.actions}
              sales_rate={tshirt.sales_rate}
              first_sales={tshirt.first_sales}
              items_per_week={tshirt.items_per_week}
              return_rate={tshirt.return_rate}
              sale_price={tshirt.sale_price}
              sale_currency={tshirt.sale_currency}
              preorder={tshirt.preorder}
              reorder={tshirt.reorder}
              rearrangement={tshirt.rearrangement}
              delivered={tshirt.delivered}
              returned={tshirt.returned}
              sold={tshirt.sold}
              correction={tshirt.correction}
              stock={tshirt.stock}
              status_color={tshirt.status_color}
              handleChange={handleChange}
            />
          )}
          {/* <div className="action-box-overlay">
            <form>
              <label className="action-box-checkbox">
                Select item
                <input className="checkbox" type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </form>
          </div> */}

          {props.setShowActionCheckBox ? (
            <div className="action-box-overlay">
              <form>
                <label className="action-box-checkbox">
                  Select item
                  <input
                    className="checkbox"
                    type="checkbox"
                    onChange={() => props.toggleActiveClass()} //props.toggleActiveClass
                    // onClick={() => props.toggleActiveClass()}
                    checked={props.isActive}
                  />
                  <span className="checkmark"></span>
                </label>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  // function CardAction(props) {
  //   console.log(props, "props in CardActionBox");
  //   const toggleActiveClass = () => {
  //     props.setActive(!props.isActive);
  //     console.log(
  //       props.settActive,
  //       "toggleActiveClass Fired in CardActionBox",
  //       props.isActive
  //     );
  //   };
  //   return (
  //     <div>
  //       {data.map((t) => (
  //         <CardAction
  //           setShowActionCheckBox={props.setShowActionCheckBox}
  //           isActive={props.isActive}
  //           setActive={props.setActive}
  //         />
  //       ))}
  //     </div>
  //   );

  //   function CardAction(props) {
  //     console.log(props, "props in cardActionBox");
  //     return (
  //       <div className="">
  //         {props.setShowActionCheckBox ? (
  //           <div className="action-box-overlay">
  //             <form>
  //               <label className="action-box-checkbox">
  //                 Select item
  //                 <input
  //                   className="checkbox"
  //                   type="checkbox"
  //                   onChange={() => toggleActiveClass()}
  //                   checked={props.setActive}
  //                 />
  //                 <span className="checkmark"></span>
  //               </label>
  //             </form>
  //           </div>
  //         ) : null}
  //       </div>
  //     );
  //   }
  // }
}
