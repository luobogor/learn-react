import { useState } from 'react';

export default function MyButton() {
  const [buttonText, setButtonText] = useState('Click Me')

  function handleClick() {
    return setButtonText('Thanks, been clicked!')
  }

  return <button onClick={handleClick}>
    { buttonText }
  </button>
}