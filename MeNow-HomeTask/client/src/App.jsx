import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from './features/search/slice.js'
import RandomAndSearch from './features/search/RandomAndSearch.jsx';
import UpdateScore from './features/search/UpdateScore.jsx';




function App() {
  const meNow_product_task = useSelector((state) => state.imagesReducer.filteredImages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllData())
  }, [])

  return (
    <>
      <h1>Hello</h1>
      <h2>Number of Images: {meNow_product_task.length}</h2>

      <RandomAndSearch />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>


        {
          meNow_product_task.map((item) => {
            return (
              <div className='image' key={item.id}>
                <img src={item.path} alt={item.path} />

                <h3>Score: {item.score}</h3>
                <div >

                  {
                    item.keywords.map((word, i) => {
                      return <p key={i} style={{ display: 'inline-block', marginRight: '4px' }}>{word}</p>
                    })
                  }
                </div>
                <UpdateScore id={item.id}/>

              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
