import * as React from 'react';
import { Component } from 'react';
import { Carousel } from 'antd';

const MyCarousel = (props: {children: any}) => {

    return (
        <Carousel>
            {props.children}
        </Carousel>
    )
}

export default MyCarousel;