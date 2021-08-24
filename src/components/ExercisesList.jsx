import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import EditExercise from './EditExercise';
import Exercise from './Exercise';
import axios from 'axios';

export const ExerciseContext = React.createContext();

export default function ExercisesList() {

    
    
    const [exercises, setExercises] = useState ([]
        // [{  
        //     id: uuidv4(),
        //     name: 'Bench Press',
        //     category: 'Push',
        //     description: 'Lay flat on the bench and lift a barbell or something I guess'
        // }]
    )

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

    const [selectedExerciseId, setSelectedExerciseId] = useState()

    const handleExerciseAdd = () => {
        const newExercise = {
          id: uuidv4(),
          name: "",
          category: '',
          description: "",
        }
        // create new entry in the db here, update it in the edit section
        axios.post('http://localhost:3001/exercise', newExercise)
    
        //setExercises([...exercises, newExercise])
        console.log(exercises)
        setSelectedExerciseId(newExercise.id)
    }

    const handleExerciseDelete = (id) => {
        setExercises(exercises.filter(exercise => exercise.id !== id))
    }

    const handleExerciseSelect = (id) => {
        setSelectedExerciseId(id)
    }

    const handleExerciseChange = (id, exercise) => {
        const newExercises = [...exercises]
        const index = newExercises.findIndex(r => r.id === id)
        newExercises[index] = exercise
        setExercises(newExercises)
        
      }

    const exerciseContextValue = {
        handleExerciseAdd,
        handleExerciseSelect,
        handleExerciseChange,
        handleExerciseDelete
      }


    return (
        <ExerciseContext.Provider value={ exerciseContextValue }>
            <h2>Exercises</h2>
            <h3>{selectedExerciseId}</h3>
            {
                exercises.map((exercise) => {

                    return (
                        <div key={exercise.id}>
                            {
                                exercise.id === selectedExerciseId
                                    ? <EditExercise exercise={exercise}/>
                                    : <Exercise exercise={exercise} />
                            }
                        </div>
                    )

                })
            }
            <button onClick={handleExerciseAdd}>Add Exercise</button>
        </ExerciseContext.Provider>
    )
}
