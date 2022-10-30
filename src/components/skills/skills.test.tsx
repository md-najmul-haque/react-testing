import { render, screen } from "@testing-library/react"
import { Skills } from "./skills"


describe('skills', () => {
    const skills = ['HTML', 'CSS', 'Javascript']

    test('render correctly', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })
})