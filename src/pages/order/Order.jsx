import { useContext } from "react"
import Layout from "../../components/layout/Layout"
import myContext from "../../context/data/myContext"


    function Order() {
        const context = useContext(myContext);
        const {name , rollno} = context;
    return (
        <Layout>
            order
            <h1>NAme : {name}</h1>
            <h1>Roll No : {rollno}</h1>
        </Layout>
    )
    }

    export default Order
