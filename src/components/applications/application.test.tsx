import { render, screen } from "@testing-library/react"
import { Application } from "./application"

describe('Application', () => {
    test('render correctly', () => {
        render(<Application />)

        const headingElement = screen.getByRole('heading', {
            level: 1
        })
        expect(headingElement).toBeInTheDocument()

        const subHeadingElement = screen.getByRole('heading', {
            level: 2
        })
        expect(subHeadingElement).toBeInTheDocument()


        const nameElement = screen.getByRole('textbox', {
            name: 'Name'
        })
        expect(nameElement).toBeInTheDocument()

        const nameElement2 = screen.getByLabelText('Name', {
            selector: 'input'
        })
        expect(nameElement2).toBeInTheDocument()

        const nameElement3 = screen.getByPlaceholderText('Fullname')
        expect(nameElement3).toBeInTheDocument()

        const nameElement4 = screen.getByDisplayValue('Najmul')
        expect(nameElement4).toBeInTheDocument()

        const titleElement = screen.getByTitle('close')
        expect(titleElement).toBeInTheDocument()

        const altElement = screen.getByAltText('son with', {
            exact: false
        })
        expect(altElement).toBeInTheDocument()

        const customElement = screen.getByTestId('custom-element')
        expect(customElement).toBeInTheDocument()

        const paragraphElement = screen.getByText('All fields are mandatory')
        expect(paragraphElement).toBeInTheDocument()

        const termsElement = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement).toBeInTheDocument()

        // const bioElement = screen.getByRole('textbox', {
        //     name: 'bio'
        // })
        // expect(bioElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument()

        const CheckElement = screen.getByRole('checkbox')
        expect(CheckElement).toBeInTheDocument()

        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()

    })
})