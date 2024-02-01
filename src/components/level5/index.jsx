
import Image from "next/image";

const NextImagePractice = () => {


  return (

    <>

      <h1 className="m-10 grid place-content-center font-bold text-3xl">Display some images with NextJs image component  </h1>

      <div className="grid  grid-cols-3 gap-10 pt-10    ">

        <Image

          src="/image1.jfif"
          width={500}
          height={500}
          alt="It,s an image "
          className="p-6 "

        />



        <Image

          src="/image5.png"
          width={500}
          height={500}
          alt="It,s an image "
          className="p-6 "

        />

        <Image

          src="/image1.jfif"
          width={500}
          height={500}
          alt="It,s an image "
          className="p-6 "

        />
      </div>

    </>
  )
}

export default NextImagePractice;