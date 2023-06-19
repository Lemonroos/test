import { useParams } from "react-router-dom";
import { players } from "../shared/ListOfPlayers";

export default function Detail() {
  const userName = useParams();
  const player = players.find((obj) => {
    return obj.id == userName.id;
  });
  let cost = player.cost.toLocaleString();
  return (
    <div className="container">
      <div className="product-card">
        <div className="badge">{player.name}</div>
        <div className="product-tumb">
          <img src={`../${player.img}`} alt="" />
        </div>
        <div className="product-details">
          <h4>{player.club}</h4>
          <div className="product-price">Market value: € {cost}</div>

          <div className="product-bottom-details"><p>{player.info}</p></div>
        </div>
      </div>
    </div>
  );
}
