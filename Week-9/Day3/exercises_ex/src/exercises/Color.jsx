import React from "react"
import Child from "./components/Child";

class Color extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteColor: 'red',
            show: true,
        }
    }


    componentDidMount() {
        // alert('useEffect reached')
        console.log('useEffect reached');
        this.setState({favoriteColor:'yellow'})
    }

    changeColor(){
        this.setState({favoriteColor:'blue'})
    }

    shouldComponentUpdate(){
        return true
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({ favoriteColor: 'yellow' });
        }, 2000);
    }

   
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
          console.log('Previous color:', snapshot);
        }
        if (prevState.favoriteColor !== this.state.favoriteColor) {
            console.log('After update');
            // alert('After update');
        }
      }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate");
        if (prevState.favoriteColor !== this.state.favoriteColor) {
          return prevState.favoriteColor;
        }
        return null;
      }

    render() {
        return (
            <>
            <Child />
            <h2>My favorite color is {this.state.favoriteColor}</h2>
            <button onClick={()=>{this.changeColor()}}>Click Me!</button>
            </>
        )
    }
}

export default Color