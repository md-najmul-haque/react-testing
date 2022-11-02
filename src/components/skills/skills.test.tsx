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

    test('button render correctly', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole("button", {
            name: 'login'
        })

        expect(loginButton).toBeInTheDocument()
    })

    test('start learning is not present in the UI at initial stage', () => {
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole("button", {
            name: 'start learning'
        })

        expect(startLearningButton).not.toBeInTheDocument()
    })

    test('start learnning button is present', async () => {
        render(<Skills skills={skills} />)
        const startLearningButton2 = await screen.findByRole("button", {
            name: 'start learning'
        },
            {
                timeout: 2000
            })
        expect(startLearningButton2).toBeInTheDocument()

    })
})