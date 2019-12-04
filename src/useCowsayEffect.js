import { useEffect } from 'react';
import cowsay from 'cowsay';

export default (dependencies) => useEffect(() => {
  cowsay.say({ text: 'PHP sucks' });

  return () => {
    cowsay.say({ text: 'And Ruby does too!' });
  };
}, dependencies);
