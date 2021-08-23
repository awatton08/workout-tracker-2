import React, { useContext } from 'react'
import { ExerciseContext } from './ExercisesList'

export default function Exercise(props) {

    const { exercise } = props
    const { handleExerciseSelect } = useContext(ExerciseContext)


    return (
        <div>
            <hr/>
            <h3>{exercise.name}</h3>
            <h3>{exercise.category}</h3>
            <p>{exercise.description}</p>
            <button onClick={() => handleExerciseSelect(exercise.id)}>Edit</button>
            <hr/>
        </div>
    )
}
