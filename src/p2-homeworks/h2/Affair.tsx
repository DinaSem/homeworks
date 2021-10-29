import React from 'react'
import {AffairType, deleteAffair} from './HW2'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {// need to fix
props.deleteAffairCallback(props.affair._id)
    }
    return (
        <div>
          <span>{" " + props.affair.name +" "}</span>
          <span>{" " + props.affair.priority +" "}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
