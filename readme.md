# Calculadora Básica

Proyecto de calculadora básica desarrollada con HTML, CSS y JavaScript.

## Descripcion

La calculadora permite realizar operaciones basicas como suma, resta, multiplicación y división. Ademas, cuenta con un botón de reinicio que restablece la calculadora a su estado inicial.

- Presiona los botones numéricos para ingresar valores.
- Utiliza los botones de operadores para realizar operaciones aritméticas.
- Presiona '=' para obtener el resultado.
- Presiona 'C' para reiniciar la calculadora.

## Estructura del Proyecto

- **HTML:** Estructura básica de la calculadora.
- **CSS:** Estilo y el diseño visual de la calculadora.
- **JavaScript:** Lógica funcional de la calculadora.

## Funcionalidad

1. **Elementos del DOM:**
   - Se seleccionaron los elementos del DOM relevantes, como la pantalla de la calculadora (display) y los botones (buttons).

2. **Variables de Estado:**
   - displayValue: Mantiene el valor actual que se muestra en la pantalla.
   - firstValue: Almacena el primer operando para las operaciones.
   - operator: Almacena el operador actual.
   - waitingForSecondValue: Indica si se está esperando la entrada del segundo operando.

3. **Funciones Principales:**
   - **updateDisplay:** Actualiza el contenido de la pantalla con el valor de displayValue.
   - **handleNumber:** Gestiona la entrada de números y actualiza displayValue en consecuencia.
   - **handleOperator:** Gestiona la entrada de operadores. Realiza cálculos cuando es necesario y actualiza los estados internos (firstValue, operator).
   - **calculate:** Realiza el cálculo basado en los operandos y el operador dado.
   - **resetCalculator:** Restablece todos los estados internos y la pantalla de la calculadora.

4. **Manejo de Eventos:**
   - Se agregaron eventos click a cada botón para llamar a las funciones correspondientes dependiendo del tipo de botón (número, operador o reinicio).

## Funcionamiento

1. **Entrada del Usuario:**
   - Al presionar un número, handleNumber actualiza displayValue.
   - Al presionar un operador (+, -, *, /), handleOperator guarda el firstValue y el operator, y se prepara para recibir el segundo operando.
   - Al presionar =, handleOperator realiza el cálculo final.
   - Al presionar C, resetCalculator restablece todos los valores.

2. **Actualización de la Pantalla:**
   - Cada acción desencadena updateDisplay, que asegura que la pantalla de la calculadora siempre refleje el estado actual de displayValue.

