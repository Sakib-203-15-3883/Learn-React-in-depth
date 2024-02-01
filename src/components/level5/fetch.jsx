//https://jsonplaceholder.typicode.com/photos
import { useState, useEffect } from "react";
import Image from "next/image";

const Fetch = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res);

        return res.json();
      })

      .then((data) => {
        console.log(data);
        const dataThatINeed = data.slice(0, 10);
        setImages(dataThatINeed);
      });
  }, []);

  return (
    <>

      <h1 className="m-10 grid place-content-center font-bold text-3xl">Image from Api using  Build in fetch() method </h1>
      <div className="grid grid-cols-5 gap-5 m-10">


        {images.map((image, index) => {
          return (
            <>
              <Image
                src={image.url}
                width={200}
                height={200}
                alt="it,s an image "
                key={index.id}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Fetch;

//https://jsonplaceholder.typicode.com/photos



