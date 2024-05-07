
import BuggyCounter from './components/BuggyCounter'
import ErrorBoundary from './components/ErrorBoundary'

const Exercise_1 =() =>{

    return(
        <>
        <h2>Exercise 1</h2>
        <p>These two counters are inside the same error boundary</p>
      <ErrorBoundary >
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr/>
      <p>These two counters are each inside of their own error boundary</p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr/>
      <p>This counter is not inside of boundary</p>
        <BuggyCounter />
        <hr/ >
        </>
    )
}
export default Exercise_1