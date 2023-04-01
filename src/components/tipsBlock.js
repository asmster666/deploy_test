import React from 'react';
import { Tip } from '../elements';

const TipsBlock = ({ classN, isOpen }) => {
    return (
        <div className={classN} style={{ display: !isOpen ? 'flex' : 'none' }}>
            <Tip position={'top'} text={'Type something there'} />
            <p>it's complex search through categories</p>
            <Tip position={'bottom'} text={`Look up the categories <br /> to test functionality`} />
        </div>
    )
}

export default TipsBlock;