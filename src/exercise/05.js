// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import PropTypes from 'prop-types';
import '../box-styles.css'

const Box = ({ size, backgroundColor }) => (
  <div
    className={`box box--${size}`}
    style={{ backgroundColor }}
  >
    {`${size} ${backgroundColor} box`}
  </div>
);

Box.propTypes = {
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  backgroundColor: PropTypes.string,
};

function App() {
  return (
    <div>
      <Box size="small" backgroundColor="lightblue" />
      <Box size="medium" backgroundColor="pink" />
      <Box size="large" backgroundColor="orange" />
    </div>
  )
}

export default App
