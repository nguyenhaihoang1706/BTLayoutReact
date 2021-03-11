import React, { Component } from 'react'
import CarouselLayout from './CarouselLayout'

export default class CarouselLayoutList extends Component {
    render() {
        return (
        <div className="container">
            <header className="jumbotron my-4">
            <h1 className="display-3">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
            <a href="#" className="btn btn-primary btn-lg">Call to action!</a>
            </header>
            <div className="row">
                <div className="col-3">
                    <CarouselLayout/>
                </div>
                <div className="col-3">
                    <CarouselLayout/>
                </div>
                <div className="col-3">
                    <CarouselLayout/>
                </div>
                <div className="col-3">
                    <CarouselLayout/>
                </div>
            </div>
        </div>
        
        )
    }
}
