import ReceiveChildrenProp from "@/components/children_prop/receiveChildrenProps"
import Task from "@/components/ToDoApp/Task"



const PassChildrenProp = () => {

  return (

    <div>

      <p className="p-10 m-10 text-xl font-bold">here , i will pass a my previous  component along with some element  </p>

      <ReceiveChildrenProp>

        <h1 className="p-10 m-10 text-xl font-bold"> Hello children props</h1>

        <Task

          name="sakib"
          date="12/30/2023"

        />

        <h1 className="p-10 m-10 text-xl font-bold"> End of Child props.</h1>



      </ReceiveChildrenProp>
    </div>
  )
}

export default PassChildrenProp;