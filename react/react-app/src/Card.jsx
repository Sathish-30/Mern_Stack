const Card = (props) => {
  const { name = "rowdy" } = props;
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl ">{name}</h1>
      <img
        className="w-fit h-[200px]"
        src="https://cms-cdn.placeholder.co/Home_page1_PRIORITY_077711842c.webp?width=1080"
        alt="A card image"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
        totam?
      </p>
    </div>
  );
};

export default Card;
