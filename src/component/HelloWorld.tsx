import { useEffect } from 'react';

export default function Welcome(props) {
  useEffect(() => {
    console.log('deps useEffect')
    document.title = `Hello, ${props.name}`
  }, [props.name])

  useEffect(() => console.log('mounted'), []);

  useEffect(() => console.log('mounted or updated'));

  return <h1>Hello, {props.name}</h1>
}