import React, {useEffect, useRef} from 'react';
import courage from '../image/courage.jpeg';
import {animateImg} from '../animation'

function Content() {
    let img = useRef(null);

    useEffect(() => {
        animateImg.fromImg(img);
        animateImg.toImg(img);
    }, [img])

    return (
        <div className='content'>
            <img ref={el => img=el} src={courage} alt='courage'/>
        </div>
    )
}

export default Content
