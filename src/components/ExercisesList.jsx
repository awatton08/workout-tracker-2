import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import EditExercise from './EditExercise';
import Exercise from './Exercise';

export const ExerciseContext = React.createContext();

export default function ExercisesList() {

    const [selectedExerciseId, setSelectedExerciseId] = useState()
    const [exercises, setExercises] = useState ([])

    // populate our blank state with the exercise list from the db 
    useEffect(( () => {
        return fetch("/exercises", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
        }).then( res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setExercises(jsonRes))
    }))

    // add an exercise by creating a blank one, using axios to post it to the db, then selecting it's id to edit
    const handleExerciseAdd = () => {
        const newExercise = {
          id: uuidv4(),
          name: "",
          category: '',
          description: "",
        }
        
        axios.post('http://localhost:3001/exercise', newExercise)
        setSelectedExerciseId(newExercise.id)
    }

    // change the currently selected exercise so we can display one as an edit component at a time
    const handleExerciseSelect = (id) => {
        setSelectedExerciseId(id)
    }

    return (
        <>
            <h2>Exercises</h2>
            <h3>{selectedExerciseId}</h3>
            { exercises.map((exercise) => {
                return (
                    <div key={exercise.id}>
                        {
                            exercise.id === selectedExerciseId
                                ? <EditExercise exercise={exercise} handleExerciseSelect={handleExerciseSelect}/>
                                : <Exercise exercise={exercise}  handleExerciseSelect={handleExerciseSelect} />
                        }
                    </div>
                )
            })}
            <button onClick={handleExerciseAdd}>Add Exercise</button>
        </>
    )
}
