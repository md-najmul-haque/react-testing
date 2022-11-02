import { useEffect, useState } from "react"
import { SkillProps } from "../types/skill.types"

export const Skills = ({ skills }: SkillProps) => {

    const [login, setLoggedIn] = useState(false)

    useEffect(() => {
        setTimeout(() => { setLoggedIn(true) }, 1001)

    }, [])

    return (
        <>
            <ul>
                {
                    skills.map(skill => {
                        return <li key={skill}>{skill}</li>
                    })
                }
            </ul>

            {
                login ? <button>start learning</button> : <button onClick={() => { setLoggedIn(true) }}>login</button>
            }

        </>
    )
}
