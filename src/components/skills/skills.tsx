import { useState } from "react"
import { SkillProps } from "../types/skill.types"

export const Skills = ({ skills }: SkillProps) => {

    const [login, setLoggedIn] = useState(false)

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
