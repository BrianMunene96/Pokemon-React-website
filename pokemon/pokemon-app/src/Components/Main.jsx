import React from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import Header from './Header'
import axios from 'axios'
import {useState, useEffect} from 'react'

const Main = () => {

  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [pokeDex, setPokeDex] = useState();



  const pokeFun = async () => {
      const response = await axios.get(url)
      console.log('RESults', response.data.results)
      setNextUrl(response.data.next)
      setPrevUrl(response.data.previous)
      getPokemon(response.data.results)
      setLoading(false)   
  }

    const getPokemon = async(response) => {
      response.map(async(item) => {
        const result = await axios.get(item.url)
        //console.log('RESULT', result.data)
        setPokeData((state)=>{
          state =[...state, result.data]
          state.sort((a,b)=>a.id>b.id?1:-1)
          //console.log('STATE', state)
          return state
        })
      })
    }

  useEffect(() => {
      pokeFun();
  }, [url])


  return (
    <>
    <Header/>
    <div className='container'>
    <div className="left-content">
        <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
        
        <div className="btn-group">
          {prevUrl && <button onClick={()=>{
            setPokeData([])
            setUrl(prevUrl)
          }}>Previous</button>}
          <button onClick={()=>{
            setPokeData([])
            setUrl(nextUrl)
          }}>Next</button>
        </div>
    </div>
    <div className="right-content">
        <Pokeinfo data={pokeDex}/>
    </div>
    </div>
    </>
  )
}

export default Main