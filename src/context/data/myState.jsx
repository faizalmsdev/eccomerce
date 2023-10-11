import MyContext from "./myContext"; // step 1 import context

    function myState(props) { // create my state function
        const state = { // creating a new state to pass it
            name:"Faizal Mohamed",
            rollno : 21
        }

        const color = "red";
        return (
            <MyContext.Provider value={{state,color}}>  {/*using provider passing state to all the components*/}
                {props.children}
            </MyContext.Provider>
        )
    }

    export default myState
