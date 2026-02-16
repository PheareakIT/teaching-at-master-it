import React from 'react'

function Class() {
  return (
    <div>

      <div className="flex gap-5">
        <a href="https://docs.google.com/spreadsheets/d/1T0LVPjsS8D644ISgtTUP56cMckDAqRjJeNch21609os/edit?gid=0#gid=0">
          <div className="hover-3d">
            {/* content */}
            <figure className="w-60 rounded-2xl">
              <img src="https://img.daisyui.com/images/stock/card-1.webp?x" alt="Tailwind CSS 3D card" />
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="text-center">9-11 Backend</div>

        </a>
        <a href="">
          <div className="hover-3d">
            {/* content */}
            <figure className="w-60 rounded-2xl">
              <img src="https://img.daisyui.com/images/stock/card-2.webp?x" alt="Tailwind CSS 3D hover" />
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="text-center">9-11 Backend</div>
        </a>

        <a href="">
          <div className="hover-3d">
            {/* content */}
            <figure className="w-60 rounded-2xl">
              <img src="https://img.daisyui.com/images/stock/card-3.webp?x" alt="Tailwind CSS 3D hover" />
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="text-center">9-11 Backend</div>

        </a>


      </div>




    </div>
  )
}

export default Class