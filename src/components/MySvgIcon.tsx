import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Logo = styled(motion.svg)`
  width: 550px;
  height: 80px;
  margin: 0px -170px -40px -100px;
  fill: ${props => props.theme.color.point};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

const logoVariants = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    fillOpacity: [0, 1,0],
    transition: {
      repeat: Infinity,
    },
   
    
  },

};

const MySvgIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <Logo
  variants={logoVariants}
  whileHover="active"
  animate="normal"
  xmlns="http://www.w3.org/2000/svg"
  width="240"
          height="auto"
  viewBox="0 0 1024 276.742"
  >
    <g>
      <motion.path
        style={{ opacity: 1 }}
        fill="#fe0000"
        d="M 100.5,6.5 C 108.543,7.0203 110.876,10.8536 107.5,18C 100.388,20.5545 96.888,18.0545 97,10.5C 98.3756,9.29493 99.5423,7.9616 100.5,6.5 Z"
      />
    </g>
    <g>
      <motion.path
        style={{ opacity: 1 }}
        fill="#fe0000"
        d="M 132.5,6.5 C 140.543,7.0203 142.876,10.8536 139.5,18C 132.388,20.5545 128.888,18.0545 129,10.5C 130.376,9.29493 131.542,7.9616 132.5,6.5 Z"
      />
    </g>
    <g>
      <motion.path
        style={{ opacity: 1 }}
        fill="#fe0000"
        d="M 17.5,22.5 C 20.3646,22.0548 22.8646,22.7215 25,24.5C 25.4999,37.8292 25.6666,51.1625 25.5,64.5C 37.8333,64.5 50.1667,64.5 62.5,64.5C 62.3334,51.1625 62.5001,37.8292 63,24.5C 65.6667,21.8333 68.3333,21.8333 71,24.5C 71.6667,55.1667 71.6667,85.8333 71,116.5C 68.3333,119.167 65.6667,119.167 63,116.5C 62.5001,101.837 62.3334,87.1705 62.5,72.5C 50.1667,72.5 37.8333,72.5 25.5,72.5C 25.6666,87.1705 25.4999,101.837 25,116.5C 22.3333,119.167 19.6667,119.167 17,116.5C 16.1818,85.1247 16.3485,53.7914 17.5,22.5 Z"
      />
    </g>
    <g>
      <motion.path
        style={{ opacity: 1 }}
        fill="#fe0000"
        d="M 92.5,22.5 C 94.7925,22.2436 96.9592,22.5769 99,23.5C 99.3333,48.5 99.6667,73.5 100,98.5C 103.004,107.337 109.17,111.671 118.5,111.5C 127.407,111.765 133.573,107.765 137,99.5C 137.333,74.1667 137.667,48.8333 138,23.5C 140.333,22.1667 142.667,22.1667 145,23.5C 145.667,49.5 145.667,75.5 145,101.5C 140.557,113.815 131.723,119.815 118.5,119.5C 104.732,119.88 95.8986,113.546 92,100.5C 91.1767,74.4278 91.3434,48.4278 92.5,22.5 Z"
      />
    </g>
    <g>
      <motion.path
        style={{ opacity: 1 }}
        fill="#fe0000"
        d="M 166.5,22.5 C 170.664,22.1429 173.831,23.8095 176,27.5C 187.856,51.2112 199.689,74.8779 211.5,98.5C 212.333,73.5067 212.833,48.5067 213,23.5C 215.592,22.0183 217.925,22.3517 220,24.5C 220.667,55.1667 220.667,85.8333 220,116.5C 216.4,119.354 213.4,118.687 211,114.5C 198.651,90.4687 186.318,66.4687 174,42.5C 173.667,67.1667 173.333,91.8333 173,116.5C 170.667,119.167 168.333,119.167 166,116.5C 165.175,85.095 165.342,53.7617 166.5,22.5 Z"
      />
    </g>
    <g>
      <motion.path
        style={{ opacity: 1 }}
        fill="#fe0000"
        d="M 242.5,22.5 C 259.411,22.1749 276.244,22.5082 293,23.5C 293.758,25.7695 293.591,27.9361 292.5,30C 278.171,30.4999 263.837,30.6666 249.5,30.5C 249.5,42.5 249.5,54.5 249.5,66.5C 256.508,66.3337 263.508,66.5004 270.5,67C 272.648,69.0749 272.982,71.4082 271.5,74C 264.174,74.4997 256.841,74.6663 249.5,74.5C 249.833,88.5159 249.499,102.516 248.5,116.5C 246.211,118.592 243.711,118.926 241,117.5C 240.333,86.5 240.333,55.5 241,24.5C 241.717,23.9558 242.217,23.2891 242.5,22.5 Z"
      />
    </g>
    <g>
      <motion.path
        style={{ opacity: 1 }}
        fill="#fe0000"
        d="M 306.5,22.5 C 309.044,22.1043 311.211,22.771 313,24.5C 313.5,53.1647 313.667,81.8314 313.5,110.5C 326.504,110.333 339.504,110.5 352.5,111C 353.833,113.333 353.833,115.667 352.5,118C 336.926,118.824 321.426,118.657 306,117.5C 305.175,85.7617 305.342,54.095 306.5,22.5 Z"
      />
    </g>
    <g>
      <motion.path
        style={{ opacity: 1 }}
        fill="#fe0000"
        d="M 366.5,22.5 C 369.365,22.0548 371.865,22.7215 374,24.5C 374.667,54.8333 374.667,85.1667 374,115.5C 371.633,118.932 368.966,119.265 366,116.5C 365.175,85.095 365.342,53.7617 366.5,22.5 Z"
      />
    </g>
    <g>
      <motion.path
        style={{ opacity: 1 }}
        fill="#fe0000"
        d="M 389.5,22.5 C 392.325,22.0807 394.491,23.0807 396,25.5C 402.246,37.6596 408.746,49.6596 415.5,61.5C 422.6,49.8806 429.1,37.8806 435,25.5C 440.714,20.7612 443.381,22.0945 443,29.5C 435.438,42.7908 428.271,56.2908 421.5,70C 428.51,83.8522 435.677,97.6855 443,111.5C 444.316,115.128 443.149,117.461 439.5,118.5C 438.186,117.687 437.019,116.687 436,115.5C 429.674,102.845 422.841,90.5114 415.5,78.5C 408.412,91.0073 401.579,103.674 395,116.5C 389.481,119.666 387.148,117.999 388,111.5C 395.833,97.9996 403,84.1662 409.5,70C 402.744,56.3223 395.577,42.8223 388,29.5C 387.167,26.829 387.667,24.4957 389.5,22.5 Z"
      />
    </g>
    <g>
      <motion.path
        style={{ opacity: 1 }}
        fill="#fe0000"
        d="M 470.5,25.5 C 499.835,25.3334 529.169,25.5 558.5,26C 568,28.8333 574.167,35 577,44.5C 577.667,63.1667 577.667,81.8333 577,100.5C 574.355,110.07 568.188,115.903 558.5,118C 529.167,118.667 499.833,118.667 470.5,118C 461.573,114.74 455.739,108.573 453,99.5C 452.333,80.8333 452.333,62.1667 453,43.5C 455.683,34.318 461.517,28.318 470.5,25.5 Z M 472.5,33.5 C 502.23,33.0237 531.897,33.5237 561.5,35C 564.762,37.592 567.262,40.7587 569,44.5C 569.95,63.8852 569.616,83.2186 568,102.5C 565.408,105.762 562.241,108.262 558.5,110C 529.5,110.667 500.5,110.667 471.5,110C 466.641,107.808 463.141,104.308 461,99.5C 460.333,81.1667 460.333,62.8333 461,44.5C 462.789,38.5412 466.622,34.8745 472.5,33.5 Z"
      />
    </g>
    <g>
      <motion.path
        style={{ opacity: 1 }}
        fill="#fe0000"
        d="M 499.5,41.5 C 512.581,51.0736 525.248,61.2403 537.5,72C 525.29,82.5453 512.79,92.712 500,102.5C 499.5,82.1694 499.333,61.8361 499.5,41.5 Z"
      />
    </g>
  </Logo>
);

export default MySvgIcon;
