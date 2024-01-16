

const HowReactWorks = () => {

  return (
    <>
      <div className="m-4 p-6 ">

        <center className="font-bold text-2xl">How react works </center>

        <p className="m-4"><span className="font-bold text-xl">1.Root component : </span>  root component means starting point of react component tree . In next-js , root component is page.jsx/tsx file that is present inside app folder . this component is receive by RootLayout component as children prop and  RootLayout component render it inside HTML body tag .   </p>


        <p className="m-4"><span className="font-bold text-xl">2.virtual dom : </span>  it is ;a tree of components . Each components that we create is act like a node . when we change our component data[state or prop] that time react update the virtual dom . then react compares previous and current version of the virtual dom . Eventually only updated node is change in virtual dom , so we do not need to update entire dom    </p>


        <p className="m-4"><span className="font-bold text-xl">3.react dom : </span>  it,s a library that deals with rendering or convert components to the browser dom   </p>

      </div>

    </>
  )
}

export default HowReactWorks;