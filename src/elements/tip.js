import React from 'react';
import s from '../styles/main.module.scss';
import { CurvedArrow } from '../assets/icons';

const Tip = ({ text, position }) => {
    return (
        <div className={s.mainWrap__tips_tip}>
            <span className={s.mainWrap__tips_tip__arrow + ' ' + position && position === 'top' ? s.mainWrap__tips_tip__arrow_top : s.mainWrap__tips_tip__arrow_bottom}>
                <CurvedArrow width={30} height={50} />
            </span>
            <span style={{ marginLeft: '20px' }} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )
}

export default Tip;