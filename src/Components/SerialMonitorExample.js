import React, { useState, useEffect, useRef } from 'react';
import MyDialog from './MyDialog';
import SerialMonitor from './SerialMonitor';

const SerialMonitorExample = () => {
  return(
    <MyDialog title="Serial Monitor">
      <SerialMonitor />
    </MyDialog>
  )
};

export default SerialMonitorExample;
