import React from 'react'
import {goal} from '../assets'


const ModalContent = ({ hideModal }) => {
    console.info('fn => ', hideModal)
    
    return (
        <div className="modal-root">
            <div className="modal-header">
                <h2>Select the goal zone</h2>
                <span onClick={hideModal}><i className="fa fa-times" aria-hidden="true"></i></span>             
            </div>
            <div className="goal" style={{ position: "relative"}}>
                <img src={goal} alt="goal" style={{ width: "100%" }}/>
                <div className="custom-row" style={{ top: "0" }}>
                    <div className="goal-point tLeft">
                    </div>
                    <div className="goal-point top" onClick={test}>
                    </div>
                    <div className="goal-point tRight">
                    </div>
                </div>
                <div className="custom-row" style={{ top: "33.3333%" }}>
                    <div className="goal-point mLeft">
                    </div>
                    <div className="goal-point middle">
                    </div>
                    <div className="goal-point mRight">
                    </div>
                </div>
                <div className="custom-row" style={{ top: "66.66666%" }}>
                    <div className="goal-point bLeft">
                    </div>
                    <div className="goal-point bottom">
                    </div>
                    <div className="goal-point bRight">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalContent;
