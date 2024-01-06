import Card from "./card";
const Renders_Card = () => {
  const CardInformation = [
    {
      title: "product 1",
      heading: "T - shirt",
      content: "Information all about t-shirt",
    },

    {
      title: "product 1",
      heading: "T - shirt",
      content: "Information all about t-shirt",
    },

    {
      title: "product 1",
      heading: "T - shirt",
      content: "Information all about t-shirt",
    },
  ];
  return (
    <>
      {CardInformation.map((item, index) => {
        return (
          <>
            <Card key={index} CardInformation={item} />
          </>
        );
      })}
    </>
  );
};

export default Renders_Card;
