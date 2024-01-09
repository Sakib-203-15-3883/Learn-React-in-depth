import Card from "./card";
const Renders_Card = () => {
  const CardInformation = [
    {
      title: "product 1",
      heading: "T - shirt",
      content: "Information all about t-shirt",
    },

    {
      title: "product 2",
      heading: "T - shirt",
      content: "Information all about t-shirt",
    },

    {
      title: "product 3",
      heading: "T - shirt",
      content: "Information all about t-shirt",
    },
    {
      title: "product 4",
      heading: "T - shirt",
      content: "Information all about t-shirt",
    },

    {
      title: "product 5",
      heading: "T - shirt",
      content: "Information all about t-shirt",
    },

    {
      title: "product 6",
      heading: "T - shirt",
      content: "Information all about t-shirt",
    },
  ];
  return (
    <>
      <div className="grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3" >

        {CardInformation.map((item, index) => {
          return (
            <>
              <Card key={index} CardInformation={item} />
            </>
          );
        })}


      </div>

    </>
  );
};

export default Renders_Card;
