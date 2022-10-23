type GreetProps = {
  name?: String;
}

export const Greet = ({ name }: GreetProps) => {
  return (
    <div>Hello {name}</div>
  )
}
