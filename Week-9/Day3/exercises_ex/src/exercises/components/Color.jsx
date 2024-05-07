import React from "react"
import Child from "./Child";

class Color extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteColor: 'red',
            show: false,
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

    // componentDidMount() {
    //     setTimeout(() => {
    //       this.setState({ favoriteColor: 'yellow' });
    //     }, 2000);
    // }

   
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
            {this.state.show || <Child />}
            <button onClick={()=>{this.setState({show:!this.state.show})}}>Delete</button>
            <h2>My favorite color is {this.state.favoriteColor}</h2>
            <button onClick={()=>{this.changeColor()}}>Click Me!</button>

            </>
        )
    }
}

export default Color