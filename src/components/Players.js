/*

EX6

import React, { Component } from "react";
export default class Player extends Component {
  render() {
    return (
      <div className="container">
        <div className="column">
          <div className="card">
            <img src="assets/images/cr.jpg" alt="Christiano Ronaldo img"/>
            
            <h3>Cristiano Ronaldo</h3>
            <p className="title">Manchester United</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="assets/images/kante.jpg"alt="Kante img" />
            <h3>Kante</h3>
            <p className="title">Chelsea</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="assets/images/messi.jpg" alt="Messi img"/>
            <h3>Messi</h3>
            <p className="title">PSG</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="assets/images/neymar.jpg" alt="Neymar img"/>
            <h3>Neymar</h3>
            <p className="title">PSG</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="assets/images/kane.jpg" alt="Kane img"/>
            <h3>Kane</h3>
            <p className="title">Tottemham</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="assets/images/haaland.jpg" alt="Haaland img"/>
            <h3>Haaland</h3>
            <p className="title">Manchester City</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}*/

//EX7

// import React, { Component } from "react"
// import { players } from "../shared/ListOfPlayers"
// export default class Players extends Component {
//   render() {
//     return (
//       <div className="container">
//         {players.map((player) => (
//           <div className="column">
//             <div className="card">
//               <img src={player.img} />
//               <h3>{player.name}</h3>
//               <p className="title">{player.club}</p>
//               <p>
//                 <button>Detail</button>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

//BAI 8 9 10 11
// import React from "react";
// import { players } from "../shared/ListOfPlayers";

// export default function Players() {
//   return (
//     <div className="container">
//       {players.map((player) => ( BAI 8 9 10 11
//         <div className="column">
//           <div className="card">
//             <img src={player.img} />
//             <h3>{player.name}</h3>
//             <p className="title">{player.club}</p>
//             <p>
//               <button>Detail</button>
//             </p>
//           </div>
//         </div>
//       ))}

//EX12
// import React from "react";
// import { players } from "../shared/ListOfPlayers";
// import { Link } from "react-router-dom";

// export default function Players() {
//   return (
//     <div className="container">
//       {players.map((player) => (
//         <div className="column">
//           <div className="card">
//             <img src={player.img} />
//             <h3>{player.name}</h3>
//             <p className="title">{player.club}</p>

//               <Link to={`detail/${player.id}`}>
//                 <p>
//                   <button>Detail</button>
//                 </p>
//               </Link>

//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";
import { players } from "../shared/ListOfPlayers";
import { Link } from "react-router-dom";
import { Icon, CardTitle, Row, Col, Card, Container } from "react-materialize";

export default function Players({ playersPerRow = 3 }) {
  return (
    <Container>
      <Row>
        {players.map((player, index) => (
          <Col s={12 / playersPerRow} key={index}>
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={player.img}></CardTitle>}
              reveal={
                <p>
                  <h4>{player.club}</h4>
                  {player.info}
                </p>
              }
              revealIcon={<Icon>more_vert</Icon>}
              title={player.name}
            >
              {/* <p >
                {player.club}
              </p> */}
              <Link to={`detail/${player.id}`}>Detail</Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
