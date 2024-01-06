const Card = ({ CardInformation }) => {
  const { title, heading, content } = CardInformation;

  return (
    <>
      <div className="grid place-content-center m-10 p-5 rounded-lg border-4 bg-black text-white">
        <h1>{title}</h1>
        <h3>{heading}</h3>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Card;
