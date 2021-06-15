// TypeScript with React
// http://localhost:3000/isolated/exercise/05.tsx

// 🦺 add type definitions for each function
const operations = {
  '+': (left: number, right: number) : number => left + right,
  '-': (left: number, right: number) : number => left - right,
  '*': (left: number, right: number) : number => left * right,
  '/': (left: number, right: number) : number => left / right,
}

// 🦺 create a type called CalculatorProps
type CalculatorProps = {
  left: number,
  operator: '+' | '-' | '*' | '/',
  right: number,
};

// 🦺 set the type for this props argument to CalculatorProps
function Calculator({left, operator, right}: CalculatorProps) {
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
      <Calculator left={1} operator="+" right={2} />
      <Calculator left={1} operator="-" right={2} />
      <Calculator left={1} operator="*" right={2} />
      <Calculator left={1} operator="/" right={2} />
    </div>
  )
}

export {App}
