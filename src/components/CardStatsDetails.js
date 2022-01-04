import React, { useState } from "react";
import "./Card.css";

export default function CardStatsDetails(props) {
  return (
    <div>
      <div
        className="grid-container"
        key={Math.random().toString(36).substr(2, 9)}
      >
        <div className="tshirt-img">
          <img src={props.tshirt_img} alt="" />
          <div className="tshirt_id">
            <p>
              {props.wear_type} - {props.tshirt_id}
            </p>
          </div>
        </div>

        <table className="card-table">
          <thead>
            <tr>
              <th>WE:{props.we}</th>
              <th className="mr-11">Actions:</th>
              <th>{props.actions}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales rate</td>
              <td className="align-right mr-11">{props.sales_rate}</td>
              <td>
                <span className={`dot-${props.status_color}-15`}></span>
              </td>
            </tr>
            <tr>
              <td>1st Sales</td>
              <td className="align-right mr-11">{props.first_sales}</td>
              <td>
                <span className="dot-green-15"></span>
                {/* {props.status === "green" ? (
                  <span className="dot-green-15"></span>
                ) : null}
                {props.status === "orange" ? (
                  <span className="dot-orange-15"></span>
                ) : null}
                {props.status === "red" ? (
                  <span className="dot-red-15"></span>
                ) : null} */}
                {/* {props.status === "open" && (
                  <span className="dot-green-15"></span>
                )}
                {props.status === "pause" && (
                  <span className="dot-orange-15"></span>
                )}
                {props.status === "stop" && (
                  <span className="dot-red-15"></span>
                )} */}

                {/* {props.status === "open" ? (
                  <span className="dot-green-15"></span>
                ) : props.status === "pause" ? (
                  <span className="dot-orange-15"></span>
                ) : props.status === "stop" ? (
                  <span className="dot-red-15"></span>
                ) : (
                  <span className={`dot-${props.status_color}-15`}></span>
                )} */}
              </td>
            </tr>
            <tr>
              <td>Items per week</td>
              <td className="align-right mr-11">{props.items_per_week}</td>
              <td>
                <span className="dot-green-15"></span>
              </td>
            </tr>
            <tr>
              <td>Return rate</td>
              <td className="align-right mr-11">{props.return_rate}</td>
              <td>
                <span className="dot-green-15"></span>
              </td>
            </tr>
            <tr>
              <td>Sale Price</td>
              <td className="align-right">{props.sale_price}&nbsp;</td>
              <td>{props.sale_currency}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid__container-bottom">
        <div className="stat__card">
          <div className="stat__container">
            <div className="stat__title">Preorder</div>
            <div className="stat__content">{props.preorder}</div>
          </div>
          <div className="stat__container">
            <div className="stat__title">Reorder</div>
            <div className="stat__content">{props.reorder}</div>
          </div>
          <div className="stat__container">
            <div className="stat__title">Rearrangemt.</div>
            <div className="stat__content">{props.rearrangement}</div>
          </div>
          <div className="stat__container">
            <div className="stat__title">Delivered</div>
            <div className="stat__content">{props.delivered}</div>
          </div>
          <div className="stat__container">
            <div className="stat__title">Returned</div>
            <div className="stat__content">{props.returned}</div>
          </div>
          <div className="stat__container">
            <div className="stat__title">Sold</div>
            <div className="stat__content">{props.sold}</div>
          </div>
          <div className="stat__container">
            <div className="stat__title">Correction</div>
            <div className="stat__content">{props.correction}</div>
          </div>
          <div className="stat__container">
            <div className="stat__title">Stock</div>
            <div className="stat__content">{props.stock}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
