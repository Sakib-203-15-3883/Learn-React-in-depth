const Card = ({ CardInformation }) => {
  const { title, heading, content } = CardInformation;

  return (
    <>
      <div className="grid place-content-center m-10 p-5 rounded-lg border-4 bg-black text-white max-w-40">
        <h1 className="m-3">{title}</h1>
        <h3 className="m-3">{heading}</h3>
        <p className="m-3">{content}</p>
      </div>
    </>
  );
};

export default Card;
