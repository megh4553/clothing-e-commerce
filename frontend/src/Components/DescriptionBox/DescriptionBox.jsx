import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (100)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi velit laborum autem quibusdam reiciendis officia voluptatum corrupti facere blanditiis reprehenderit perferendis deleniti eaque iste quia minus sit rem sed at sint voluptatibus tempore repellendus assumenda, necessitatibus dolores. In labore quisquam velit aspernatur nihil? Tempore fugiat numquam dolorem ullam error enim?
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
