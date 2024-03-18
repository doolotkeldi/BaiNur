import React from 'react'
import Woman from '../../assets/svg/Rectangle 5.svg'
import './Odejda.css'
import heart from '../../assets/svg/favorites1.svg'
// ll 

function Odejda() {
  return (
    <section>
        <div className="container odejda-content">
            <div className="text-info">
                <span  style={{display:"flex"}}><h1 style={{color:"#0D99FF"}}>Главная // </h1>
                <h1>Все товары </h1></span>
                <span  style={{display:"flex"}}><h1>Главная // </h1>
                <h1 style={{color:"#0D99FF"}}>Все товары </h1></span>
            </div>
            <div className="image-container container">

                <div className="image-block">
                    <div className="image-heart">
                    <img className='heart' src={heart} alt="" />
                    </div>
                    <div className="image-info">
                        <img style={{width:"100%",height:"100%"}} src={Woman} alt="" />
                    </div>
                    <div className="text-info">

                    <h1>Женское Платье</h1>
                    <p style={{width:"75%"}}>Nike Sportswear Club+ 
                    Button-Down 
                    Short-Sleeve Gömlek</p>
                    <h5> 71$</h5>
                    <button>Добавить в корзину</button>
                    </div>

                </div>
                <div className="image-block">
                    <div className="image-heart">
                    <img className='heart' src={heart} alt="" />
                    </div>
                    <div className="image-info">
                        <img style={{width:"100%",height:"100%"}} src={Woman} alt="" />
                    </div>
                    <div className="text-info">

                    <h1>Женское Платье</h1>
                    <p style={{width:"75%"}}>Nike Sportswear Club+ 
                    Button-Down 
                    Short-Sleeve Gömlek</p>
                    <h5> 71$</h5>
                    <button>Добавить в корзину</button>
                    </div>

                </div>
                <div className="image-block">
                    <div className="image-heart">
                    <img className='heart' src={heart} alt="" />
                    </div>
                    <div className="image-info">
                        <img style={{width:"100%",height:"100%"}} src={Woman} alt="" />
                    </div>
                    <div className="text-info">

                    <h1>Женское Платье</h1>
                    <p style={{width:"75%"}}>Nike Sportswear Club+ 
                    Button-Down 
                    Short-Sleeve Gömlek</p>
                    <h5> 71$</h5>
                    <button>Добавить в корзину</button>
                    </div>

                </div>
                <div className="image-block">
                    <div className="image-heart">
                    <img className='heart' src={heart} alt="" />
                    </div>
                    <div className="image-info">
                        <img style={{width:"100%",height:"100%"}} src={Woman} alt="" />
                    </div>
                    <div className="text-info">

                    <h1>Женское Платье</h1>
                    <p style={{width:"75%"}}>Nike Sportswear Club+ 
                    Button-Down 
                    Short-Sleeve Gömlek</p>
                    <h5> 71$</h5>
                    <button>Добавить в корзину</button>
                    </div>

                </div>
            </div>

        </div>

      
    </section>
  )
}

export default Odejda
