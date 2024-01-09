const SelectedList = ({ selectedButton }) => {
  return (

    <>

      <div className="grid place-content-center ml-40 mr-40 m-5 border border-blue-500 border-4 p-5  border-5 min-w-40 ">

        {selectedButton === "Fruits" ? <ul>
          <li >Fruit 1 </li>
          <li>Fruit 2</li>
          <li>Fruit 3</li>
        </ul> : null}


        {selectedButton === "Sports" ? <ul>
          <li>Sports 1 </li>
          <li>Sports 2</li>
          <li>Sports 3</li>
        </ul> : null}

      </div>




    </>
  )
};

export default SelectedList;
