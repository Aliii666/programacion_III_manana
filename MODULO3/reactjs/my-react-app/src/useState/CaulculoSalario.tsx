import React, { useState } from "react";

const SalarioSemanal: React.FC = () => {
    const [horasTrabajadas, setHorasTrabajadas] = useState<number>(0);
    const [valorHora, setValorHora] = useState<number>(0);
    const [salario, setSalario] = useState<number | null>(null);

    const calcularSalario = (): void => {
        const total = horasTrabajadas * valorHora * 5;
        setSalario(total);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "20px auto" }}>
            <h2>Calculo de Salario Semanal</h2>

            <label>Horas trabajadas:</label>
            <input
                type="number"
                value={horasTrabajadas}
                onChange={(e) => setHorasTrabajadas(Number(e.target.value))}
            />

            <br /><br />

            <label>Valor por hora:</label>
            <input
                type="number"
                value={valorHora}
                onChange={(e) => setValorHora(Number(e.target.value))}
            />

            <br /><br />

            <button onClick={calcularSalario}>
                Calcular salario
            </button>

            <br /><br />

            {salario !== null && (
                <h3>Salario semanal: ${salario.toFixed(2)}</h3>
            )}
        </div>
    );
};

export default SalarioSemanal;


