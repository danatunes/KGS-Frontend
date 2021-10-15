import React, {useContext} from 'react';
import GridPhoto from "../GridPhoto/GridPhoto";

import styles from './SideMenuMap.module.css';
import {Context} from "../../index";
import Login from "../Login/Login";

const SideMenuMap = () => {

    const arrPhotosMap = [
        {
            id: 1,
            date: '22-05-2002',
            numberOfPhotos: 43,
            checked: 'checked',
            photos: [
                {
                    id: 1,
                    name: 'first',
                    img: 'https://world-nan.kz/img/news/e9d22c20c6b7383938bd34ea4f4d59d5.jpg',
                    checked: 'checked'
                }, {
                    id: 2,
                    name: 'second',
                    img: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2016/06/edrs-c3/16018083-2-eng-GB/EDRS-C_pillars.jpg',
                    checked: 'checked'
                }, {
                    id: 3,
                    name: 'third',
                    img: 'https://media.istockphoto.com/photos/space-station-in-earth-orbit-picture-id182062885?k=20&m=182062885&s=612x612&w=0&h=Jw28yZRY8wusc80ttcELCUT9OEb6DtFIHmtO7OI3jmE='
                }, {
                    id: 4,
                    name: 'fourth',
                    img: 'http://sun9-63.userapi.com/s/v1/ig2/1mH3NkGTv9evbOBgKp_CiUstMgxpEGoCSGqeuWVq7TXyEom3fqkeFDEBhEl_1K0y8wjydKlk79xR6MRohGxs-gTX.jpg?size=400x400&quality=96&crop=0,268,656,656&ava=1'
                }, {
                    id: 5,
                    name: 'fourth',
                    img: 'http://sun9-63.userapi.com/s/v1/ig2/1mH3NkGTv9evbOBgKp_CiUstMgxpEGoCSGqeuWVq7TXyEom3fqkeFDEBhEl_1K0y8wjydKlk79xR6MRohGxs-gTX.jpg?size=400x400&quality=96&crop=0,268,656,656&ava=1'
                }, {
                    id: 6,
                    name: 'fourth',
                    img: 'http://sun9-63.userapi.com/s/v1/ig2/1mH3NkGTv9evbOBgKp_CiUstMgxpEGoCSGqeuWVq7TXyEom3fqkeFDEBhEl_1K0y8wjydKlk79xR6MRohGxs-gTX.jpg?size=400x400&quality=96&crop=0,268,656,656&ava=1'
                }, {
                    id: 7,
                    name: 'fourth',
                    img: 'http://sun9-63.userapi.com/s/v1/ig2/1mH3NkGTv9evbOBgKp_CiUstMgxpEGoCSGqeuWVq7TXyEom3fqkeFDEBhEl_1K0y8wjydKlk79xR6MRohGxs-gTX.jpg?size=400x400&quality=96&crop=0,268,656,656&ava=1'
                }
            ]

        }, {
            id: 2,
            date: '02-11-2032',
            numberOfPhotos: 123,
            checked: 'checked',
            photos: []
        }, {
            id: 3,
            date: '22-05-2022',
            numberOfPhotos: 4109,
            photos: [
                {
                    id: 1,
                    name: 'first',
                    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fworld-nan.kz%2Fen%2Fnews%2Fv-eaes-obedinyayut-kosmicheskie-sptuniki-dlya-effektivnoyi-raboty-agrosektora&psig=AOvVaw21yZ67aWG-9-kIrI_4hYWC&ust=1632562963655000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOitxI-pl_MCFQAAAAAdAAAAABAD'
                }
            ]
        }, {
            id: 4,
            date: '11-05-2222',
            numberOfPhotos: 311,
            photos: [
                {
                    id: 1,
                    name: 'third',
                    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fsatellite&psig=AOvVaw21yZ67aWG-9-kIrI_4hYWC&ust=1632562963655000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOitxI-pl_MCFQAAAAAdAAAAABAS'
                }, {
                    id: 2,
                    name: 'fourth',
                    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsia.org%2F&psig=AOvVaw21yZ67aWG-9-kIrI_4hYWC&ust=1632562963655000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOitxI-pl_MCFQAAAAAdAAAAABAY',
                    checked: 'checked'
                }
            ]
        }, {
            id: 5,
            date: '22-05-2002',
            numberOfPhotos: 13
        },
    ]

    const {store} = useContext(Context);


    if (!store.isAuth) {

        console.log(store)

        return (
            <Login/>
        )
    }

    return (
        <React.Fragment>
            <div className="generate-act">
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">Сгенерировать акт</button>

                    <div className="btn-group btn-group-sm justify-content-md-center" role="group"
                         aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary ">Нужно посмотреть</button>
                        <button type="button" className="btn btn-outline-primary">Просмотрено</button>
                    </div>

                </div>
            </div>


            <div className={'gridPhoto'}>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="scales" id="checkbox">Выбрать все</label>
                </div>
                <div>
                    <button type="button" className="btn btn-primary position-relative">
                        Скачать
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                     </span>
                    </button>
                </div>
            </div>

            <div className="divider"></div>
            <div className={styles.wrapperForGrid}>
                <div className={'gridPhotos'}>
                    {arrPhotosMap.map((photo) =>
                        <GridPhoto key={photo.id} photoData={photo}/>)
                    }
                </div>
            </div>

            <div className={styles.bottomMenu}>
                <div className={styles.bottomMenuLabel}>
                    <hr/>
                    Отмеченные сетки
                    <hr/>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-center bottomMenuBtnsForDownload">
                    <button type="button" className="btn btn-outline-dark btn-sm">
                        Выберите файл
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.996 10.8H21.6V8.2928C21.6 7.6904 21.1096 7.2 20.5072 7.2H19.2V6.2344L19.002 6.0364C19.0016 6.0364 19.0016 6.036 19.0016 6.0356L16.0832 3.1172L12.9656 0H3.2V4.4H1.0928C0.4904 4.4 0 4.8904 0 5.4928V22.9676H0.0024C0.0004 23.1928 0.0704 23.4132 0.2112 23.5976C0.4072 23.8536 0.704 24 1.026 24H18.9296C19.392 24 19.7992 23.6884 19.9096 23.2748L24 12.0596V11.9888C24 11.3 23.5776 10.8 22.996 10.8ZM20.5072 8C20.6684 8 20.8 8.1312 20.8 8.2928V10.8H19.2V8H20.5072ZM13.2 1.366L17.8344 6H13.2V1.366ZM4 0.8H12.4V6.8H18.4V7.2V10.8H5.0924C5.0352 10.8 4.9788 10.8048 4.9236 10.814C4.534 10.8788 4.2092 11.1628 4.1124 11.5252L4 11.834V4.4V0.8ZM0.8 5.4928C0.8 5.3312 0.9316 5.2 1.0928 5.2H3.2V14.014L0.8 20.5596V5.4928ZM19.1476 23.0332C19.1212 23.1312 19.0316 23.2 18.9296 23.2H1.026C0.9288 23.2 0.872 23.1444 0.8468 23.1112C0.8216 23.0784 0.7828 23.0088 0.7976 22.948L3.2 16.3592V16.3612L4.864 11.7996L4.8744 11.7668C4.9008 11.6688 4.9908 11.6 5.0924 11.6H18.4H19.2H21.6H22.996C23.148 11.6 23.1868 11.8184 23.1968 11.9276L19.1476 23.0332Z"
                                fill="black"/>
                            <path
                                d="M6.4 6.8H10.4C10.6208 6.8 10.8 6.6212 10.8 6.4C10.8 6.1788 10.6208 6 10.4 6H6.4C6.1792 6 6 6.1788 6 6.4C6 6.6212 6.1792 6.8 6.4 6.8Z"
                                fill="black"/>
                            <path
                                d="M6.4 4.00001H10.4C10.6208 4.00001 10.8 3.82121 10.8 3.60001C10.8 3.37881 10.6208 3.20001 10.4 3.20001H6.4C6.1792 3.20001 6 3.37881 6 3.60001C6 3.82121 6.1792 4.00001 6.4 4.00001Z"
                                fill="black"/>
                            <path
                                d="M6.4 9.59999H16C16.2208 9.59999 16.4 9.42119 16.4 9.19999C16.4 8.97879 16.2208 8.79999 16 8.79999H6.4C6.1792 8.79999 6 8.97879 6 9.19999C6 9.42119 6.1792 9.59999 6.4 9.59999Z"
                                fill="black"/>
                        </svg>
                    </button>
                    <button type="button" className="btn btn-primary btn-sm">Загрузить</button>

                </div>
                <button className={'exit'} onClick={()=>store.logout()}>
                <div className={`justify-content-md-center`}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.7969 21.4375V23.625C19.7969 26.0374 17.8343 28 15.4219 28H4.42969C2.01724 28 0.0546875 26.0374 0.0546875 23.625V4.375C0.0546875 1.96255 2.01724 0 4.42969 0H15.4219C17.8343 0 19.7969 1.96255 19.7969 4.375V6.5625C19.7969 7.16663 19.3073 7.65625 18.7031 7.65625C18.099 7.65625 17.6094 7.16663 17.6094 6.5625V4.375C17.6094 3.16888 16.628 2.1875 15.4219 2.1875H4.42969C3.22357 2.1875 2.24219 3.16888 2.24219 4.375V23.625C2.24219 24.8311 3.22357 25.8125 4.42969 25.8125H15.4219C16.628 25.8125 17.6094 24.8311 17.6094 23.625V21.4375C17.6094 20.8334 18.099 20.3438 18.7031 20.3438C19.3073 20.3438 19.7969 20.8334 19.7969 21.4375ZM27.2538 12.1212L24.8046 9.672C24.3774 9.24475 23.6848 9.24475 23.2578 9.672C22.8305 10.099 22.8305 10.7916 23.2578 11.2186L24.9999 12.9609H11.8672C11.2631 12.9609 10.7734 13.4506 10.7734 14.0547C10.7734 14.6588 11.2631 15.1484 11.8672 15.1484H24.9999L23.2578 16.8907C22.8305 17.3178 22.8305 18.0103 23.2578 18.4374C23.4714 18.651 23.7513 18.7578 24.0311 18.7578C24.3112 18.7578 24.591 18.651 24.8046 18.4374L27.2538 15.9882C28.32 14.922 28.32 13.1874 27.2538 12.1212Z"
                                    fill="black"/>
                            </svg>
                            Выйти
                    </div>
                </button>

            </div>
        </React.Fragment>
    );
};

export default SideMenuMap;