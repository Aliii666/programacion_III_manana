import { useCallback } from 'react';

interface TablaMultiplicarProps {
  numeros: number[];
}

export default function TablaMultiplicar({ numeros }: TablaMultiplicarProps) {
  const handleClick = useCallback((numero: number) => {
    const tabla = Array.from({ length: 10 }, (_, i) => {
      return `${numero} x ${i + 1} = ${numero * (i + 1)}`;
    });
    console.log(tabla.join("\n"));
  }, []);

  return (
    <ul>
      {numeros.map(numero => (
        <li key={numero}>
          <button onClick={() => handleClick(numero)}>{`Tabla del ${numero}`}</button>
        </li>
      ))}
    </ul>
  );
}