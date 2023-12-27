"use client"
import { useRouter } from "next/navigation";
import BoxComponent from "@/components/BoxComponent";


export default function Home() {

  const router = useRouter();
  return (
    <>

      <div className="grid gap-10 m-10">


        <BoxComponent>


          <p className=" grid place-content-center mt-10 mb-10 text-xl font-bold ">Learn All About components  </p>
          <div className="ml-28 text-lg ">

            <button type="button" onClick={() => router.push('./learn_components')} className="bg-blue-500 text-white p-2 rounded-md"  >Click Here To Learn </button>


          </div>



        </BoxComponent>

        {/* To Do app Ui  */}

        <BoxComponent>


          <p className=" grid place-content-center mt-10 mb-10 text-xl font-bold ">To Do app UI  </p>
          <div className="ml-28 text-lg ">

            <button type="button" onClick={() => router.push('./to_do_app_ui')} className="bg-blue-500 text-white p-2 rounded-md"  >Click Here To See </button>


          </div>



        </BoxComponent>





      </div>



    </>
  );
}
