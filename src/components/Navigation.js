// import React, { Component } from "react";
// export default class Navigation extends Component {
//   render() {
//     return (
//       <div>
//         <nav>
//           <ul>
//             <li><a className="active" href="#home">Home</a></li>
//             <li><a href="#news">News</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     );
//   }
// }


//BAI 8 9 (10) 
// import React from "react";
// export default function Navigation() {
//   return (
//         <div>
//           <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
//               <ul>
//                   <li><a className='active' href='#home'>Home</a></li>
//                   <li><a href='#news'>News</a></li>
//                   <li><a href='#about'>About</a></li>
//                   <li><a href='#contact'>Contact</a></li>
//     </ul>
//               <div style={{position: 'relative'}}>
//               <a className='switch-mode' href='#' onClick={toggle}
//               style={{
//                 backgroundColor: theme.backgroundColor,
//                 color: theme.color,
//                 outline: 'none'
//               }} data-testid="toggle-theme-btn"
//             >
//               Switch Nav to {!dark ? 'Dark' : 'Light'} mode
//              </a>
//              </div>
//           </nav>
//         </div>
//       )
// }


import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
const textColor={  color: theme.color }
  return (
    <div>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <ul >
              <li><a style={textColor} className='active' href='#home'>Home</a></li>
              <li><a style={textColor}href='#news'>News</a></li>
              <li><a style={textColor}href='#about'>About</a></li>
              <li><a style={textColor}href='#contact'>Contact</a></li>
</ul>
          <div style={{position: 'absolute' }}>
          <a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>
      </nav>
    </div>
  )
}