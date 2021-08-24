import React from 'react'
import axios from "axios"
import { useForm } from "react-hook-form";

export default function EditExercise(props) {
    
    const {exercise, handleExerciseSelect} = props
    
    // cool hook for forms. no idea how it works, but it's awesome. default values come right from our existing exercise (blank or otherwise)
    const { register, handleSubmit } = useForm({
        defaultValues: {
          name: exercise.name,
          category: exercise.category,
          description: exercise.description
        }
    })

    // create a new exercise from our form, then use acios to send a put request & finish by deselecting the exercise 
    const onSubmit = (input) => {
        
        const updatedExercise = {
            id: exercise.id,
            name: input.name,
            category: input.category,
            description: input.description
        }

        axios.put('http://localhost:3001/exercise', updatedExercise)
        handleExerciseSelect(null)
    }

    // use axios to send a request to delete an exercise, then deselect the exercise (so we aren't editing a nothing)
    const handleExerciseDelete = () => {
        axios.delete('http://localhost:3001/exercise', { data: {id: exercise.id} })
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
