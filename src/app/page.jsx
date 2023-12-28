"use client";
import BoxComponent from "@/components/BoxComponent";
import { BoxComponent_content } from "@/components/concept_list/index"

export default function Home() {
  return (
    <>
      <div className="grid gap-10 m-10">


        {BoxComponent_content.map((item, index) => (

          <BoxComponent
            key={index}
            title={item.title}
            button_content={item.button_content}
            link={item.link}
          />

        ))}


      </div>
    </>
  );
}
