import {
  useState,
  useRef,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useMemo,
  ChangeEventHandler,

} from 'react'
import './App.css'
// import Heading from './components/Heading'
// import Section from './components/Section'
// import Counter from './components/Counter'
// import List from './components/List'

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}
const myNum: number = 18
function App() {
  const [count, setCount] = useState<number>(0)

  const inputRef = useRef<HTMLInputElement>(null)
  console.log(inputRef?.current?.value);

  const numRef = useRef<number>(0)
  console.log(numRef?.current);

  const fibResult = useMemo<number>(() => fib(myNum), [myNum])

  const handelChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    console.log(e.currentTarget.value);
  }

  // const add=(e: MouseEvent<HTMLButtonElement>| KeyboardEvent<HTMLButtonElement>) =>{
  const add = useCallback((): void => {
    setCount(count => count + 10)
  }, [])

  return (
    <>
      <input ref={inputRef} onInput={handelChange} />
      <button onClick={add} >{count}</button>
      {fibResult}
      {/* <h2>Tupescript Day4</h2>
      <Heading title={'My Title'} />
      <Section content={'My Content'}>
        <h3>My children</h3>
      </Section>
      <Counter setCount={setCount}>
        <h2>{count}</h2>
      </Counter>
      <List items={['Dan','Jack','Mary',2221]}/> */}
    </>
  )
}

export default App
