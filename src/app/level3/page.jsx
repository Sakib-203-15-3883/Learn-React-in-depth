"use client"
import PassChildrenProp from "@/components/children_prop/passChildrenProps"
import OnClick from "@/components/event-handling/onClick"
import OnChange from "@/components/event-handling/onChange"

const Level3 = () => {

  return (

    <div>
      <center className="p-10 m-10 border-4 border-green-600 rounded-md text-xl font-bold ">Handling Events</center>
      <OnClick />
      <OnChange />

      <center className="p-10 m-10 border-4 border-green-600 rounded-md text-xl font-bold ">Passing Components as Children</center>

      <PassChildrenProp />






    </div>
  )
}

export default Level3;