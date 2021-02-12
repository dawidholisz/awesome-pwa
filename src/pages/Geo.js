import React from 'react';
import {useGeolocation, useAsyncFn} from 'react-use';
import {Row, Alert, Spinner, Col} from "react-bootstrap";

const Geo = () => {
    const {loading, longitude, latitude, error} = useGeolocation()
    const [state, getPlaces] = useAsyncFn(async () => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.REACT_APP_GOOGLE_MAP_API}&radius=1000&location=49.8103,19.0129&type=parking,restaurant`)
        return response.json()
    }, [])

    if (loading)
        return <Spinner animation="border" variant="info"/>

    if (error?.message)
        return <Alert variant="danger">{error.message}</Alert>

    const fetchPlaces = async () =>{
        const resp = await fetch(`https://reverent-hugle-6b1951.netlify.app/.netlify/functions/fetchPlaces?location=49.8103,19.0129`)
        console.log(resp);
    }

    return (
        <Row>
            <Col>
                <div>Your position:
                    <p>{longitude} lng</p>
                    <p>{latitude} lat</p>
                    <button onClick={fetchPlaces}>XD</button>
                </div>
            </Col>
            <Col>
                sds
            </Col>
        </Row>
    );
};

export default Geo;