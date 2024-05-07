import Test from './Test'

const Parent = (props) => {
    if (props.auth === 'admit') {
        return props.children
    }

    return <Test />
}

export default Parent