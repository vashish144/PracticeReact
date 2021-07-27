import React, { Component } from 'react'
import ClassComponentC from './ClassComponentC'

 class ClassComponentB extends Component {
    render() {
        return (
            <div>
                <ClassComponentC/>
            </div>
        )
    }
}

export default ClassComponentB
