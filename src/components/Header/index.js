import React from 'react'
import './style.css'

class Header extends React.Component {

  state = {
    gameStyle: 0
  }

  render() {
    console.log('props' + this.props.onClick)
    return (
      <div className='fluid'>
        <div className="bg-dark text-white">
          <img src="https://get.wallhere.com/photo/colorful-illustration-digital-art-simple-background-abstract-3D-minimalism-heart-blue-background-stars-blue-simple-pattern-texture-circle-3d-object-shape-design-line-petal-2560x1440-px-font-719269.jpg"
            id="image"
            className="card-img"
            alt="..." />
          <div className="card-img-overlay text-center">
            <h1 id="title" className="card-title text-center">Clicky Game</h1>
            <h3 id="rules" className="card-text">Click on an image to earn points, but don't click on any more than once!</h3>
          </div>
        </div>
      </div>
    )
  }
}
export default Header;