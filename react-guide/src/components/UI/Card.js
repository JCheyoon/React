import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // class를 2개 붙여야 해서 'card (공백)' + props의 class이름
  return <div className={classes}>{props.children}</div>;
}

export default Card;
