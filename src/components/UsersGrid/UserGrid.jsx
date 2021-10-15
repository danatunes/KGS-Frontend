import React from 'react';

import './UserGrid_module.css';

const UserGrid = ({data}) => {
    return (
        <div>
            <div className={'grid-user'}>
                <input type="checkbox" checked onChange={()=>{
                    console.log('tap')}}/>

                <div className={'grid-user-labels'}>
                    <label>
                        Номер: #{data.id}
                    </label>
                    <label>
                        Логин: {data.login}
                    </label>

                    <label>
                        ФИО: {data.fullName}
                    </label>
                    <label>
                        Роль: {data.role}
                    </label>

                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default UserGrid;