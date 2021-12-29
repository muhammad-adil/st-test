import React from 'react'
import {HiOutlineLightningBolt} from 'react-icons/hi';
import './ActionHeader.css';
import { FaRegPlayCircle } from 'react-icons/fa';
export default function ActionHeader() {
    return (
    <div className="container">
    <div className="action-header">
        <div className="btn-action">
        <button><i><HiOutlineLightningBolt/></i>Start Action</button>
        </div>

        <div className="total-items">
        <p>223 items</p>
        </div>
        <div className="action-status play-btn"><FaRegPlayCircle /></div>
    </div>
    </div>
    )
}
