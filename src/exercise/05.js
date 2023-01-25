// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react';
import '../box-styles.css';

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

function Box({className = '', style, size, ...otherProps}) {
  const sizeClassname = size ? `box--${size}` : '';
  return (
    <div
      className={`box ${sizeClassname} ${className}`}
      style={{fontStyle: 'italic', fontWeight: 'bold', ...style}}
      {...otherProps}
    />
  );
}

const smallBox = (
  <Box style={{fontStyle: 'italic', backgroundColor: 'lightblue'}} size="small">
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box style={{fontStyle: 'italic', backgroundColor: 'pink'}} size="medium">
    medium pink box
  </Box>
);
const largeBox = (
  <Box style={{fontStyle: 'italic', backgroundColor: 'orange'}} size="large">
    large orange box
  </Box>
);

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box>Sizeless Box</Box>
    </div>
  );
}

export default App;
