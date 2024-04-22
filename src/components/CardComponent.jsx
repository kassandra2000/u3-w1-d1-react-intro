const CardComponent = (props) => {
  console.log(props);
  return (
    <div className={props.classNameDiv}>
      <img className={props.className} src={props.src}  alt="img-card" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.text}
        </p>
        <a href="#" className="btn button">
         {props.textBtn}
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
