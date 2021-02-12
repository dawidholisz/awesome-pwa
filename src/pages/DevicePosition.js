import React from 'react';
import {useMotion} from 'react-use';
import {random, get} from 'lodash'
import {Alert} from "react-bootstrap";


const getRadian = angle => angle * (Math.PI / 180)

const DevicePosition = () => {
    const state = useMotion();
    const xAngle = get(state, 'accelerationIncludingGravity.x')
    const yAngle = get(state, 'accelerationIncludingGravity.y')

    // if (get(state, 'accelerationIncludingGravity.x') == null && get(state, 'accelerationIncludingGravity.y') == null)
    //     return <Alert variant="danger">Your device doesn't support accelerometer</Alert>

    const meterRadius = 35/9

    const xTransformValue = (xAngle * meterRadius)
    const yTransformValue = (yAngle * meterRadius)

    const xTranslation = `-50% + ${xTransformValue}vmin`
    const yTranslation = `-50% - ${yTransformValue}vmin`

    return (
        <div>
            <div className="level-meter">
                <div id="level-pointer" style={{transform: `translate(calc(${xTranslation}), calc(${yTranslation}))`}}/>
            </div>
            <pre>
                {JSON.stringify(state.accelerationIncludingGravity, null, 2)}
            </pre>
        </div>
    );
};

export default DevicePosition;