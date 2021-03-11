import React, { Component } from 'react'
import CarouselLayoutList from './CarouselLayoutList'
import FooterLayout from './FooterLayout'
import HeaderLayout from './HeaderLayout'

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                <HeaderLayout/>
                <CarouselLayoutList/>
                <FooterLayout/>
            </div>
        )
    }
}
