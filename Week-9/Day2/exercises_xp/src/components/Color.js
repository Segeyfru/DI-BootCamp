import { useState, useEffect } from 'react'
const Color = (props) => {
    const [favoriteColor, setFavoriteColor] = useState('red')

    useEffect(() => {
        console.log('useEffect');
        setFavoriteColor('yellow')
    }, [])

    const changeToBlue = () => {
        setFavoriteColor('blue')
    }

    return (
        <>
            <header> My Favorite Color is {favoriteColor}</header>
            <button onClick={changeToBlue}>Change Color</button>
        </>
    )
}

export default Color