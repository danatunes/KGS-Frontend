import React, {useState} from 'react';

import './GridPhoto.css';
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";

const GridPhoto = ({photoData}) => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className={'gridPhoto'}>
                <div>
                    <label>
                        <input type="checkbox" checked={photoData.checked} onChange={()=>{
                            console.log('tap')}}/>
                        {photoData.date}
                    </label>
                </div>
                <div className={'notification-toggle'}>
                    <button type="button"
                            className="btn btn-outline-secondary btn-sm">{photoData.numberOfPhotos}</button>
                    <svg onClick={() => setOpen(!open)} width="14" height="9" viewBox="0 0 14 9" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.15283 8.5325L0.757326 2.36525C0.120576 1.63963 0.638076 0.5 1.60445 0.5H12.3955C12.6117 0.499815 12.8235 0.561974 13.0053 0.679034C13.1872 0.796093 13.3314 0.963092 13.4208 1.16003C13.5102 1.35697 13.5409 1.5755 13.5093 1.78945C13.4777 2.0034 13.3851 2.20371 13.2426 2.36638L7.84708 8.53137C7.74148 8.65221 7.61126 8.74906 7.46515 8.81541C7.31904 8.88177 7.16042 8.9161 6.99995 8.9161C6.83948 8.9161 6.68086 8.88177 6.53475 8.81541C6.38864 8.74906 6.25842 8.65221 6.15283 8.53137V8.5325Z"
                            fill="#868E96"/>
                    </svg>
                </div>
            </div>
            {open && photoData.photos &&
            <div className={'dropdown'}>
                {photoData.photos.map((data =>
                        <DropdownMenuItem key={data.id} data={data}/>
                ))}
            </div>
            }
            <div className="divider"></div>
        </div>
    );
};

export default GridPhoto;