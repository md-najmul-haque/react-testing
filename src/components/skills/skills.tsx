import { SkillProps } from "../types/skill.types"

export const Skills = ({ skills }: SkillProps) => {

    return (

        <>
            <ul>
                {
                    skills.map(skill => {
                        return <li key={skill}>{skill}</li>
                    })
                }
            </ul>
        </>
    )
}
