import React, { Component } from 'react'
import classes from './Modal.css'
import Auxiliary from '../../../hoc/Auxiliary'
import BackDrop from '../Backdrop/Backdrop'


class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState){
      
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children

    }

    render(){
        return( <Auxiliary>
            <div className={classes.Modal}
            style={{
                transform:this.props.show?'translateY(0)':'translateY(500vh)'
            }}>
                {this.props.children}
    
            </div>
            <BackDrop
              show={this.props.show}
              cancled={this.props.cancleModal}
            
            />
            
        </Auxiliary>)
    }
}

export default Modal;