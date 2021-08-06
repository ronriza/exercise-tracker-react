import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable'

function HomePage({setExerciseToEdit}) {
    const history = useHistory();
    const [exercises, setExercises] = useState([]);

    const onDelete = async id => {
        console.log('calling onDelete')
        const response = await fetch(`/exercises/${id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
        console.error(`Failed to delete exercise with id = ${id}, status code = ${response.status}`)
        }
    }	

    const onEdit = async exerciseToEdit => {
        setExerciseToEdit(exerciseToEdit);
        history.push("/Edit");
    }



    const loadExercises = async () => {
        const response = await fetch('/exercises')
        const exercises = await response.json()
        setExercises(exercises);
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
        <Link to="/Create">Add an Exercise</Link>
        <ExerciseTable exercises={exercises} onEdit = {onEdit} onDelete={onDelete} />
        </>
    )
}

export default HomePage;