import React, { useContext } from 'react';
import Context from '../store/Context';
import mapData from '../data';

export default function MapSelector() {
    const [mapSelect, setMapSelect] = useContext(Context);
    const handleInput = (event) => {
        const {checked} = event.target;
        setMapSelect(preData => {
            return {
                ...preData,
                [event.target.name]: checked
            }
        })
    }
    return (
        <div className='MapSelector'>
            {mapData.map(data => {
                return (
                    <div>
                        <input
                            type='checkbox'
                            id={data.id} name={data.id}
                            checked={mapSelect[`${data.id}`]}
                            onChange={handleInput}
                        />
                        <label htmlFor={data.id}>{data.id}</label>
                    </div>
                );
            })}
        </div>
    )
}