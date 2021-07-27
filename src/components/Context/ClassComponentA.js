import React, { Component } from 'react'
import ClassComponentB from './ClassComponentB'

 class ClassComponentA extends Component {
    render() {
        return (
            <div>
                <ClassComponentB/>
            </div>
        )
    }
}

export default ClassComponentA
