import React, { useContext } from 'react'

export default function Exercise(props) {

    const { exercise, handleExerciseSelect } = props

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
