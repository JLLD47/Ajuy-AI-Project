import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './spinner.css'; // Archivo CSS personalizado

const SpinningProgress = () => {
    return (
        <div className="spinning-container">
            <CircularProgressbar
                value={66}
                text={''}
                styles={{
                    path: { stroke: `#003b46` },
                    trail: {stroke: `#66a5AD`},
                    text: { fill: '#3f51b5', fontSize: '16px' },
                }}
            />
        </div>
    );
};

export default SpinningProgress;
