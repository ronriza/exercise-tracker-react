import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function EditPage({exerciseToEdit}) {
    const history = useHistory();
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ name: name, reps: reps, weight: weight, unit: unit, date: date }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
             alert("Successfully edited the exercise!");
        } else {
             alert(`Failed to edit exercise, status code = ${response.status}`);
        }     
        history.push("/");
    };

    return(
        <>
        <form>
            <fieldset>
                <legend>Add An Exercise</legend>
                <label for='name'>Name </label>
                <input type='text' id='name' value={name} onChange={e => setName(e.target.value)} />
                <br/>
                <label for='reps'># of Reps </label>
                <input type='number' id='reps' value={reps} onChange={e => setReps(e.target.value)} />
                <br/>
                <label for='weight'>Weight </label>
                <input type='number' id='weight' value={weight} onChange={e => setWeight(e.target.value)} />
                <br/>
                <label for='unit'>Units </label>
                <input type='text' id='unit' value={unit} onChange={e => setUnit(e.target.value)} />
                <br/>
                <label for='date'>Date </label>
                <input type='text' id='date' value={date} onChange={e => setDate(e.target.value)} />
            </fieldset>
            <button onClick={e => {
                e.preventDefault();
                editExercise();
            }}>Add</button>
        </form>

        </>
    )
}

export default EditPage;