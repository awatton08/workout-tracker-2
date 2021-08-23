import React from 'react'

export default function Home() {

    const sessionListPlaceholder = [
        {
            id: 0,
            date: "August 9, 2021",
            category: "Push",
            sets: [
                {
                    name: "Bench Press",
                    weight: 20,
                    reps: 5
                },
                {
                    name: "Bench Press",
                    weight: 20,
                    reps: 5
                },
                {
                    name: "Bench Press",
                    weight: 20,
                    reps: 5
                },
                {
                    name: "Pushups",
                    weight: 0,
                    reps: 15
                },
                {
                    name: "Pushups",
                    weight: 0,
                    reps: 15
                }
            ]
        },
        {
            id: 1,
            date: "August 10, 2021",
            category: "Pull",
            sets: [
                {
                    name: "Skullcrushers",
                    weight: 20,
                    reps: 5
                },
                {
                    name: "Skullcrushers",
                    weight: 20,
                    reps: 5
                },
                {
                    name: "Skullcrushers",
                    weight: 20,
                    reps: 5
                },
                {
                    name: "Rows",
                    weight: 25,
                    reps: 15
                },
                {
                    name: "Rows",
                    weight: 25,
                    reps: 15
                }
            ]
        }
    ]


    return (
        <div>
            <h2>Last Session</h2>
            <p>{sessionListPlaceholder[0].date} - {sessionListPlaceholder[0].category}</p>
            <button>New Session</button>
            
        </div>
    )
}
