import React from 'react'

const Box = (props) => {
  return (
    <div className={`box ${props.result}`}>
      <h1 className="player-text">{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} alt="" />
      <h2 className="player-text">{props.result}</h2>
    </div>
  )
}
export default Box