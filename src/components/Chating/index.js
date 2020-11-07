      
import React, { Fragment } from 'react';
import Message from '../message';
import YouConnectedOn from '../youConnectedOn';

import "./index.css"


export default function Chating() {
  return (
    <Fragment>
        <YouConnectedOn />
        <Message />
        <Message />
    </Fragment>
  )

}