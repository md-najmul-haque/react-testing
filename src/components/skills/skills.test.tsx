import { render, screen } from "@testing-library/react"
import { Skills } from "./skills"


describe('skills', () => {
    const skills = ['HTML', 'CSS', 'Javascript']
    test('render correctly', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })

    test('render list of skill correctly', () => {
        render(<Skills skills={skills} />)
        const listAllElement = screen.getAllByRole('listitem')
        expect(listAllElement).toHaveLength(3)
    })
})