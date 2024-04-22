const ButtonComponent = (props) => {
  console.log(props);
  return (
    <>
      <button className={props.className}>{props.text} </button>
    </>
  );
};

export default ButtonComponent;
