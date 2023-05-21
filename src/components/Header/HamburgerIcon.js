import React from 'react';

const HamburgerIcon = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    <path
      fill="currentColor"
      d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
    />
  </svg>
);

export default HamburgerIcon;