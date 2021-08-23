import React, { useContext } from 'react'
import { ExerciseContext } from './ExercisesList'


export default function EditExercise(props) {
    const {handleExerciseDelete, handleExerciseChange, handleExerciseSelect} = useContext(ExerciseContext)

    

    const handleChange = (changes) => {
        handleExerciseChange(exercise.id, { ...exercise, ...changes })
    }

    const {exercise} = props

    return (
        <div className="exercise-card">
            <label htmlFor="exercise-name">Name: </label>
            <input id="exercise-name" value={exercise.name} onInput={ e => handleChange({ name: e.target.value })}/>
            {/* <input id="exercise-category" value={exercise.category} onInput={ e => handleChange({ category: e.target.value })}/> */}
            <select id="exercise-category" value={exercise.category} onChange={ e => handleChange({ category: e.target.value })}>
                <option value="Any">Any</option>
                <option value="Push">Push</option>
                <option value="Pull">Pull</option>
                <option value="Legs">Legs</option>
            </select>
            <label htmlFor="exercise-description">Description</label>
            <textarea id="exercise-description" value={exercise.description} onInput={ e => handleChange({ description: e.target.value })} type="text"/>
            <button onClick={() => handleExerciseSelect(null)}>Done</button>
            <button onClick={ () => handleExerciseDelete(exercise.id)}>DELETE</button>  
            <hr/>
        </div>
    )

    // const { exercise, handleExerciseEditSelect, handleExerciseChange, handleExerciseDelete} = props;
    
    // const handleChange = (changes) => {
    //     handleExerciseChange(exercise.id, { ...exercise, ...changes })
    // }

    // return (
    //     <div className="exercise-card">
    //         <label htmlFor="exercise-name">Name: </label>
    //         <input id="exercise-name" value={exercise.name} onInput={ e => handleChange({ name: e.target.value })}/>
    //         <button onClick={() => handleExerciseEditSelect(null)}>Done</button>
    //         <button onClick={ () => handleExerciseDelete(exercise.id)}>DELETE</button>
    //         <hr/>
    //         <label htmlFor="exercise-description">Description</label>
    //         <textarea id="exercise-description" value={exercise.description} onInput={ e => handleChange({ description: e.target.value })} type="text"/>
    //         <hr/>
    //     </div>
    // )
}
