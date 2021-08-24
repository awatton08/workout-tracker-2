import React, { useContext, useState } from 'react'
import { ExerciseContext } from './ExercisesList'
import axios from "axios"
import { useForm } from "react-hook-form";



export default function EditExercise(props) {
    const {handleExerciseDelete, handleExerciseChange, handleExerciseSelect} = useContext(ExerciseContext)

    const {exercise} = props

    // const [input, setInput] = useState({
    //     id: "taco",//exercise.id,
    //     name: "taco",//exercise.name,
    //     category: "taco",//exercise.category,
    //     description: "taco"//exercise.description
    // })
    
    const { register, handleSubmit } = useForm({
        defaultValues: {
          name: exercise.name,
          category: exercise.category,
          description: exercise.description
        }
    })

    const onSubmit = (input) => {
        //input.preventDefault()
        const updatedExercise = {
            id: exercise.id,
            name: input.name,
            category: input.category,
            description: input.description
        }
        console.log(updatedExercise)
        
        axios.put('http://localhost:3001/exercise', updatedExercise)
        handleExerciseSelect(null)
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Exercise Name" {...register("name")} />
                <input placeholder="Category" {...register("category")} />
                <textarea placeholder="Description" {...register("description")} />

                <button type="submit">Submit</button>
            </form>        
            <button onClick={handleExerciseDelete}>DELETE</button>
        </div>
    )
}
