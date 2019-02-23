import React from 'react';
window.useState = React.useState;
window.useEffect = React.useEffect;
window.Component = React.Component;

const s = document.createElement('style');
s.innerHTML = `
  .react-live-preview {
    padding-top: 20px;
    width: 30%;
    font-family: sans;
  }
  .react-live-preview div {
    margin-top: 20px;
    cursor: pointer;
    font-size: 200%;
  }
  .react-live-preview + div {
    width: 70%;
  }
  .live-func > pre > span:nth-child(-n+5),
  .live-func > pre > span:last-child
  {
    opacity: 0.2;
  }
`
document.head.appendChild(s);

