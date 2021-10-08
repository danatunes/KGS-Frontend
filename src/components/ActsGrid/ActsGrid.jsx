import React from 'react';

import './ActsGrid_module.css';

const ActsGrid = ({data}) => {
    return (
        <div>
            <div className={'gridPhoto'}>
                <input type="checkbox" checked={data.checked}/>

                <div className={'grid-photo-labels'}>
                    <label>
                        Номер: #{data.id}
                    </label>
                    <label>
                        Дата: {data.date}
                    </label>

                    <label>
                        Количество снимков: {data.numberOfShots}
                    </label>

                </div>
                <div className="downloadAct">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.4809 13.531L14.875 17.1377V7.875C14.875 7.392 14.483 7 14 7C13.517 7 13.125 7.392 13.125 7.875V17.1377L9.51913 13.5319C9.177 13.1897 8.62313 13.1897 8.28187 13.5319C7.93974 13.874 7.93974 14.4279 8.28187 14.7691L13.2317 19.719C13.4417 19.929 13.7287 19.9937 14.0009 19.9456C14.2722 19.9937 14.56 19.9281 14.77 19.719L19.7199 14.7691C20.062 14.427 20.062 13.8731 19.7199 13.5319C19.3769 13.1897 18.823 13.1897 18.4809 13.531ZM14 0C6.26852 0 0 6.26761 0 14C0 21.7324 6.26852 28 14 28C21.7315 28 28 21.7315 28 14C28 6.26852 21.7324 0 14 0ZM14 26.25C7.23448 26.25 1.75 20.7655 1.75 14C1.75 7.23448 7.23448 1.75 14 1.75C20.7655 1.75 26.25 7.23448 26.25 14C26.25 20.7655 20.7655 26.25 14 26.25Z"
                            fill="#007BFF"/>
                    </svg>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default ActsGrid;