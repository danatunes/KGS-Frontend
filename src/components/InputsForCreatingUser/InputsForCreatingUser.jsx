import React from 'react';

const InputsForCreatingUser = () => {
    return (
        <div className={'inputs-for-creating-user'}>
            <div className={'input'}>
                <label>ID</label>
                <label>#139</label>
            </div>
            <div className={'input'}>
                <label>Имя</label>
                <label>Илон</label>
            </div>
            <div className={'input'}>
                <label>Фамилия</label>
                <label>Илон</label>
            </div>
            <div className={'input'}>
                <label>Логин</label>
                <label>spacex@gharysh.kz</label>
            </div>
            <div className={'input'}>
                <label>Роль</label>
                <label>Отан қорғаушы</label>
            </div>
            <div className={'input'}>
                <label>Последняя активность</label>
                <label>9 часов назад</label>
            </div>
        </div>
    );
};

export default InputsForCreatingUser;