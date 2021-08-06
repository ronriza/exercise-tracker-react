import React from 'react';
import ExerciseRow from './ExerciseRow'

function ExerciseTable({exercises, onEdit, onDelete}) {
    return(
        <>
            <table>
                <caption>Exercise List</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise, i) => <ExerciseRow exercise={exercise} onEdit = {onEdit} onDelete={onDelete} key={i} />)}
                </tbody>

            </table>
        </>
    )
}

export default ExerciseTable;