import React from 'react';
import {useMotion} from 'react-use';

const DevicePosition = () => {
    const state = useMotion();
    return (
        <div>
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
        </div>
    );
};

export default DevicePosition;