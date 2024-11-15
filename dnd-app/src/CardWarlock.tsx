import warlockPic from "./assets/warlockPic.png";

function CardWarlock() {
  return (
    <div
      style={{
        position: "absolute",
        left: "60%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className="card"
    >
      <img src={warlockPic} className="card-img"></img>
      <h2 className="card-title">Warlock</h2>
      <p className="card-test">
        Warlocks quest for knowledge that lies hidden in the fabric of the
        multiverse. They make pacts with mysterious beings of supernatural power
      </p>
      <button>read more</button>
    </div>
  );
}
export default CardWarlock;
