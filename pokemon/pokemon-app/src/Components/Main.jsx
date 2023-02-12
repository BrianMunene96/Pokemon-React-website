import React from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import Header from './Header'
// import axios from 'axios'

const Main = () => {
  return (
    <>
    <Header/>
    <div className='container'>
    <div className="left-content">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <div className="btn-group">
          <button>Previous</button>
          <button>Next</button>
        </div>
    </div>
    <div className="right-content">
        <Pokeinfo/>
    </div>
    </div>
    </>
  )
}

export default Main