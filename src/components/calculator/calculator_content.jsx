import Button from "@/components/ToDoApp/Button"
const CalculatorContent = () => {

  const calculatorButtonContent = ["c", "del", "%", "÷", "7", "8", "9", "*", "4", "5", "6", "+", "1", "2", "3", "-", "0", ".", "="];



  return (

    <div>

      <ul className="grid grid-cols-4 gap-4 p-10 m-10">
        {

          calculatorButtonContent.map((item, index) => {
            return (

              <li key={index}> <Button

                onClick={() => { }}
                label={item}
                bgColor="blue-500"
                textColor="white"

              />   </li>

            )
          })
        }
      </ul>


    </div>
  )
}

export default CalculatorContent;