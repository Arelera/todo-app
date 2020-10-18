import React from 'react';
import { useSelector } from 'react-redux';

const Notification = ({ type }) => {
  const msg = useSelector((state) => state.notification);
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  );
};

export default Notification;
