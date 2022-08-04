import "./styles.css";

export default function Massege(props) {
  return (
    <div>

      <div className="true" style={{ display: props.displayGreen }}>
        Логин и пароль верные
      </div>

      <div className={"false"} style={{ display: props.displayRed }}>
        Логин и пароль неверные
      </div>
      
    </div>
  );
}
