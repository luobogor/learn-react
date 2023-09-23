import { useEffect } from 'react';

export default function Welcome(props) {
  useEffect(() => {
    document.title = `Hello, ${props.name}`
  }, [props.name])

  return <h1>Hello, {props.name}</h1>
}
