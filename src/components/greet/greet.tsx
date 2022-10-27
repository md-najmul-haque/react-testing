import { GreetProps } from "../types/Greet.type"


export const Greet = ({ name }: GreetProps) => {
  return (
    <div>Hello {name ? name : 'Guest'}</div>
  )
}
