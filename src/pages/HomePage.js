import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable'
import LoadingSymbol from '../components/LoadingSymbol'

function HomePage({ setExerciseToEdit, user }) {
    const history = useHistory();
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false)

    const onDelete = async id => {
        const token = await user.getIdToken()
        const response = await fetch(`/exercises/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (response.status === 204) {
            loadExercises(user)
        } else {
            const error = response.json()
            alert(error.error)
        }
    }

    const onEdit = async exerciseToEdit => {
        setExerciseToEdit(exerciseToEdit);
        history.push("/Edit");
    }

    const loadExercises = async (user) => {
        setLoading(true)
        const token = await user.getIdToken();
        const response = await fetch(`/exercises/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (response.status===200){
            const exercises = await response.json()
            exercises.forEach((item) => {
                item.date = new Date(item.date)
            })
            setExercises(exercises);
        } else{
            const error = await response.json()
            alert(error.error)
        }

        setLoading(false)
    }

    useEffect(() => {
        loadExercises(user);
    }, [user]);

    if (!loading) {
        return (
            <>
                <ExerciseTable exercises={exercises} onEdit={onEdit} onDelete={onDelete} />
            </>
        )
    } else {
        return (
            <LoadingSymbol />
        )
    }


}

export default HomePage;