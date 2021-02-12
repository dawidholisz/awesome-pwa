import React, {useEffect} from 'react';
import {useGeolocation, useAsyncFn} from 'react-use';
import {Row, Alert, Spinner, Col, Card} from "react-bootstrap";
import {isEmpty} from 'lodash'
import mockPlaces from '../mockPlaces'

const Geo = () => {
    const {loading, longitude, latitude, error} = useGeolocation()
    const [{loading:isPlacesLoading, value:places}, getPlaces] = useAsyncFn(async () => {
        if(process.env.NODE_ENV==='development')
            return mockPlaces
        const response = await fetch(`${process.env.URL}/.netlify/functions/fetchPlaces?location=49.8103,19.0129`)
        return response.json()
    }, [longitude,latitude])

    useEffect(()=>{
        getPlaces()
        },
        [longitude, latitude])

    if (loading)
        return <Spinner animation="border" variant="info"/>

    if (error?.message)
        return <Alert variant="danger">{error.message}</Alert>

    return (
        <Row>
            <Col md={4}>
                <Card >
                    <Card.Body>
                        <Card.Title>Your position</Card.Title>
                        <Card.Text>
                            {longitude} lng<br/>
                            {latitude} lat
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Row>
                {isPlacesLoading
                    ?<Spinner animation="border" variant="warning"/>
                    :isEmpty(places)
                    ? <Alert variant="danger">Places fetching error</Alert>
                        : places.map(({name,icon,place_id,vicinity})=>(
                            <Col xs={6} md={4} key={place_id}>
                                <Card >
                                    <Card.Img variant="top" src={icon} />
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text>
                                            {vicinity}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                }
                </Row>
            </Col>
        </Row>
    );
};

export default Geo;