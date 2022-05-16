import React from 'react'

function Loader({ show }) {
  return show ? <div className="border-8 border-solid border-indigo-700 "></div> : null;
}

export default Loader