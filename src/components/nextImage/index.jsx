
import Image from "next/image";
const NextImagePractice = () => {


  return (

    <>

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