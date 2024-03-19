
import React, { useState } from 'react';
import Woman from '../../assets/svg/Rectangle 5.svg';
import './Odejda.css';
import heart from '../../assets/svg/favorites1.svg';
import a from '../../assets/svg/a.svg';
import b from '../../assets/svg/b.svg';
import { Transition } from 'react-transition-group';





import React, { useState } from 'react';
import Woman from '../../assets/svg/Rectangle 5.svg';
import './Odejda.css';
import heart from '../../assets/svg/favorites1.svg';
import a from '../../assets/svg/a.svg';
import b from '../../assets/svg/b.svg';
import { Transition } from 'react-transition-group';

function Odejda() {
    const [btnImg, setBtnImg] = useState(a);
    const [filterImage, setFilterImage] = useState(false);

    const positionclick = () => {
        setBtnImg(btnImg === a ? b : a);
        setFilterImage(!filterImage)
    };

    return (
        <section>
            <div className="container odejda-content">
            <button onClick={positionclick}>Фильт <img className='button-image' src={btnImg} alt="" /></button>

              
                <Transition in={filterImage} timeout={1000} mountOnEnter unmountOnExit>
                    {state => (
                        <div className={`filter-position ${state}`}>
                            <div className="filter-header">
                                <div className="filter-position-content">
                                    <h1>Мужские</h1>
                                    <div>
                                        <p>Футболки</p>
                                        <p>Худи</p>
                                        <p>Брюки</p>
                                        <p>Рубашка</p>
                                        <p>Бутсы</p>
                                        <p>Кеды</p>
                                        <p>Шорты</p>
                                    </div>
                                </div>
                                <div className="filter-position-content">
                                    <h1>Женские</h1>
                                    <div>
                                        <p>Футболки</p>
                                        <p>Худи</p>
                                        <p>Кеды</p>
                                        <p>Рубашка</p>
                                        <p>Брюки</p>
                                        <p>Юбки</p>
                                        <p>Свинтшоты</p>
                                    </div>
                                </div>
                                <div className="filter-position-content">
                                    <h1>Дети</h1>
                                    <div>
                                        <p>Футболки</p>
                                        <p>Худи</p>
                                        <p>Кеды</p>
                                        <p>Рубашка</p>
                                        <p>Юбки</p>
                                        <p>Свинтшоты</p>
                                        <p>Брюки</p>
                                        <p>Шорты</p>
                                        <p>Бутсы</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
                

                <div className="text-info">
                    <span style={{ display: "flex" }}>
                        <h1 style={{ color: "#0D99FF" }}>Главная // </h1>
                        <h1>Все товары </h1>
                    </span>
                    <span style={{ display: "flex" }}>
                        <h1>Главная // </h1>
                        <h1 style={{ color: "#0D99FF" }}>Все товары </h1>
                    </span>
                </div>

                <div className="image-container container">
    const [btnImg, setBtnImg] = useState(a);
    const [filterImage, setFilterImage] = useState(false);

    const positionclick = () => {
        setBtnImg(btnImg === a ? b : a);
        setFilterImage(!filterImage)
    };

    return (
        <section>
            <div className="container odejda-content">
            <button onClick={positionclick}>Фильт <img className='button-image' src={btnImg} alt="" /></button>

              
                <Transition in={filterImage} timeout={1000} mountOnEnter unmountOnExit>
                    {state => (
                        <div className={`filter-position ${state}`}>
                            <div className="filter-header">
                                <div className="filter-position-content">
                                    <h1>Мужские</h1>
                                    <div>
                                        <p>Футболки</p>
                                        <p>Худи</p>
                                        <p>Брюки</p>
                                        <p>Рубашка</p>
                                        <p>Бутсы</p>
                                        <p>Кеды</p>
                                        <p>Шорты</p>
                                    </div>
                                </div>
                                <div className="filter-position-content">
                                    <h1>Женские</h1>
                                    <div>
                                        <p>Футболки</p>
                                        <p>Худи</p>
                                        <p>Кеды</p>
                                        <p>Рубашка</p>
                                        <p>Брюки</p>
                                        <p>Юбки</p>
                                        <p>Свинтшоты</p>
                                    </div>
                                </div>
                                <div className="filter-position-content">
                                    <h1>Дети</h1>
                                    <div>
                                        <p>Футболки</p>
                                        <p>Худи</p>
                                        <p>Кеды</p>
                                        <p>Рубашка</p>
                                        <p>Юбки</p>
                                        <p>Свинтшоты</p>
                                        <p>Брюки</p>
                                        <p>Шорты</p>
                                        <p>Бутсы</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
                

                <div className="text-info">
                    <span style={{ display: "flex" }}>
                        <h1 style={{ color: "#0D99FF" }}>Главная // </h1>
                        <h1>Все товары </h1>
                    </span>
                    <span style={{ display: "flex" }}>
                        <h1>Главная // </h1>
                        <h1 style={{ color: "#0D99FF" }}>Все товары </h1>
                    </span>
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
    );
</div>
</div>
            </div>
        </section>
    );
}

export default Odejda;
export default Odejda;
