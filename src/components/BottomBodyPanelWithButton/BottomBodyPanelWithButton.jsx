import React from 'react';

import './BottomBodyPanelWithButton.css';
import TwiceButtonsWithChangedColor from "../../UI/TwiceButtonsWithChangedColor";

const BottomBodyPanelWithButton = () => {
    return (
        <div className={'bottom-panel--wrapper'}>
            <TwiceButtonsWithChangedColor title={'Снимок:'}/>
            <TwiceButtonsWithChangedColor title={'Сетка:'}/>
                <button type="button" className="btn btn-primary" id={'bottom-panel-wrapper__button'}>Завершить</button>
        </div>
    );
};

export default BottomBodyPanelWithButton;