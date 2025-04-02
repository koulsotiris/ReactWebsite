import React from 'react';
import './UnderConstructure.css';
import { FaHammer, FaHardHat, FaTools } from 'react-icons/fa';

export default function UnderConstructure() {
  return (
    <div className="under-construction">
      <div className="icon-row">
        <FaHammer className="icon swing" />
        <FaHardHat className="icon bounce" />
        <FaTools className="icon spin" />
      </div>
      <h1>Oops! This page is under construction </h1>
      <p>We're probably too busy lifting some weights at this moment.</p>
      <p>Either way, this page will be deadlifted soon </p>
      <span className="mini-tag">~ FitBro Dev Team</span>
    </div>
  );
}
