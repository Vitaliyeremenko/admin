import React from 'react';

import '../../styles/UI/Loader.sass';

const Loader = () => {
  return (
    <div className='loader'>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;