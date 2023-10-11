import { useState } from "react";
import MyContext from "./myContext"; // step 1 import context

    function MyState(props) { // create my state function
        const [mode,setMode] = useState('light'); //creating for dark mode
        
        const toggleMode = () =>{
            if(mode === 'light'){
                setMode('dark');
                document.body.style.backgroundColor = 'rgb(17,24,39)';
            } else {
                setMode ('light');
                document.body.style.backgroundColor = 'white';
            }
        }
        return (
            <MyContext.Provider value={{mode , toggleMode}}>  {/*using provider passing state to all the components*/}
                {props.children}
            </MyContext.Provider>
        )
    }

    export default MyState
