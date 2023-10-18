import React, { useState } from "react";
import styles from "./Aman.module.css"
import { useDispatch, useSelector } from "react-redux";
import { addUser} from "./store/slices/userSlice";

const Aman = () => {
    const [users,setUsers]=useState([])
     const [user,setUser]=useState("")
     const dispatch= useDispatch()

      const data = useSelector((state)=>{
        return state.users
      })
    const Increment=()=>{
       dispatch(addUser(user))
       setUser('')
       
    }

    const Decrement=()=>{
        console.log("Decrement")
        console.log(data)
     }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container} >
            <div>
                    <input placeholder="Add User" onChange={(event)=>setUser(event.target.value)} />
                </div>
                <div>
                 <span>
                    <button onClick={()=>Increment()}>
                        +
                    </button>
                </span>
                
                <span>
                    <button onClick={()=>Decrement()}>
                        -
                    </button>
                </span>
                </div>
                

                <div>
                    {users.map((item)=>{
                        return <h2>{item}</h2>
                    })}
                </div>

            </div>

        </div>
    )
}

export default Aman