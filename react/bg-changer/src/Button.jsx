const Button = (props) => {
  const { color, setColor } = props;
  return (
    <button
      className="border px-3 py-2 rounded-full justify-center items-center outline-none shadow-lg"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    >
      {color}
    </button>
  );
};

export default Button;
