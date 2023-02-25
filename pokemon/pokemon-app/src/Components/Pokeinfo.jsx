import React from 'react'

const Pokeinfo = ({data}) => {
  return (
        <>
        {
            (!data)?"":(
                <>
                    <h1>{data.name}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
        <div className="abilities">
        {
            data.abilities.map((item)=>{
                return (
                    <div className="group" key={item.ability.url}>
                        <h2>{item.ability.name}</h2>
                    </div>
                )
            })
        }
        </div>
        <div className="base-stat">
            {
                data.stats.map((item)=>{
                    return (
                        <h3 key={item.stat.url}>{item.stat.name}:{item.base_stat}</h3>
                    )
                })
            }
        </div>
                </>
            )
        }
        </>

  )
}

export default Pokeinfo