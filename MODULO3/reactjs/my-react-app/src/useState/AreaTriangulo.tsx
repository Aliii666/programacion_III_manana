import { useState } from 'react';

export default function AreaTriangulo() {
    const [base, setBase] = useState('');
    const [altura, setAltura] = useState('');
    const [area, setArea] = useState(0);

    const calcularArea = () => {

        const b = parseFloat(base);
        const h = parseFloat(altura);

        if (!isNaN(b) && !isNaN(h) && b > 0 && h > 0) {
            const areaTriangulo = (b * h) / 2;
            setArea(areaTriangulo);
        } else {
            alert('Por favor ingresa valores válidos para la base y la altura.');
        }
    };

    return (
        <div>
            <h2>Cálculo del Área de un Triángulo</h2>
            <input
                type="number"
                value={base}
                placeholder="Base del triángulo"
                onChange={e => setBase(e.target.value)}
            /><br/>
            <input
                type="number"
                value={altura}
                placeholder="Altura del triángulo"
                onChange={e => setAltura(e.target.value)}
            /><br/>
            <button onClick={calcularArea}>Calcular Área</button>

            {area !== 0 && <p>Área del Triángulo: {area} unidades cuadradas</p>}
        </div>
    );
}
