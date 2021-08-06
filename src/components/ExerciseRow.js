import React from 'react';
import { MdEdit, MdDelete} from "react-icons/md";

function ExerciseRow({exercise, onEdit, onDelete}) {
    const deleteById = () => {
        onDelete(exercise._id)
    }

    const editByObject = () => {
        onEdit(exercise)
    }

    return(
            <>
            
            <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><MdEdit onClick = {editByObject}/></td>
            <td><MdDelete onClick={deleteById}/></td>
            </tr>
            </>
    
    )
}

export default ExerciseRow;