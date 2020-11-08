      
import React, { Fragment } from 'react';
import ReceiveMeg from '../receiveMsg';
import SentMsg from '../sentMsg';
import YouConnectedOn from '../youConnectedOn';

import "./index.css"


export default function Chating() {
  return (
    <div  className="col-sm-12 hidden-xs overflow-auto main-contain">
      <YouConnectedOn />
      <ReceiveMeg />
      <ReceiveMeg />
      <ReceiveMeg />
      <ReceiveMeg />
      <SentMsg />
      <SentMsg />
      <SentMsg />
    </div>
  )

}