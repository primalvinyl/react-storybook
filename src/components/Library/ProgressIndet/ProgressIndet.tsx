import React from 'react';
import './ProgressIndet.css';

const ProgressIndet = ({
    id,
    className = undefined
}: ProgressIndetProps): React.ReactElement => {
    return (
        <div className={['progressIndetRoot', className].join(' ')}>
            <div className="progressIndet" id={id} role="progressbar">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

type ProgressIndetProps = {
    id: string;
    className?: string;
};

export default ProgressIndet;
