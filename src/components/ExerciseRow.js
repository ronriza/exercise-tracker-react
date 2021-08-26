import React from 'react';
import { MdEdit, MdDelete } from "react-icons/md";

function ExerciseRow({ exercise, onEdit, onDelete }) {
    const deleteById = () => {
        onDelete(exercise._id)
    }

    const editByObject = () => {
        onEdit(exercise)
    }


    return (
        <>

            <tr>
                <td>{exercise.name}</td>
                <td>{exercise.reps}</td>
                <td>{exercise.sets}</td>
                <td>{`${(exercise.unit==='lbs') ? exercise.weight : Math.round(exercise.weight * 0.45359237)} ${exercise.unit}`}</td>
                <td>{`${String(exercise.date.getUTCMonth()+1).padStart(2,'0')}-${String(exercise.date.getUTCDate()).padStart(2,'0')}-${String(exercise.date.getUTCFullYear()).slice(2)}`}</td>
                <td className="text-center"><MdEdit class="clickable" onClick={editByObject} /></td>
                <td className="text-center"><MdDelete class="clickable" onClick={deleteById} /></td>
            </tr>
        </>

    )
}

export default ExerciseRow;