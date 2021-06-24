// TypeScript with React
// http://localhost:3000/isolated/exercise/05.tsx

// 🦺 add type definitions for each function
type OperationFn = (left: number, right: number) => number;
// 🦺 create a type called CalculatorProps
type CalculatorProps = {
  left?: number,
  operator?: keyof typeof operations,
  right?: number,
};
const createOperations = <OperationsType extends Record<string, OperationFn>>(
  opts: OperationsType
) => opts;

const operations = createOperations({
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
});

// 🦺 set the type for this props argument to CalculatorProps
function Calculator({left = 0, operator = '+', right = 0}: CalculatorProps) {
  const result = operations[operator](left, right)
  return (
    <div>
      <code>
        {left} {operator} {right} = <output>{result}</output>
      </code>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <Calculator left={1} right={2} />
      <Calculator operator="-" />
      <Calculator left={1} operator="*" />
      <Calculator operator="/" right={2} />
      <Calculator operator="**" right={2} />
    </div>
  )
}

export {App}
