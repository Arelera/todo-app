import React, { useState } from 'react';

const Togglable = ({ buttonLabel, children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div>
      {expanded ? (
        <>
          {children}
          {/* <button onClick={() => setExpanded(!expanded)}>{buttonLabel}</button> */}
          <button onClick={() => setExpanded(!expanded)}>cancel</button>
        </>
      ) : (
        <button onClick={() => setExpanded(!expanded)}>{buttonLabel}</button>
      )}
    </div>
  );
};

export default Togglable;
