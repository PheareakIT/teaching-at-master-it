import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <div className="bg-gray-400">
        <div className="bg-blue-500 m-auto flex justify-between w-[80%] max-w-360 p-4">
            <div className="bg-red-500">
                <div>
                    <a href="#">Pheareak</a>
                </div>
            </div>
            <div className="bg-pink-500 flex gap-5">
                <Link to="/">Home</Link>
                <Link to="/class">Class</Link>
                <Link to="/lesson">Lesson</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="bg-yellow-500 flex">
                <div>❤️</div>
                <div>❤️</div>
                <div>❤️</div>
            </div>
        </div>
    </div>
  )
}

export default Header