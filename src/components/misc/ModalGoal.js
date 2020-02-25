import React from 'react'


const ModalGoalContent = ({ modalVisibility, hideModal }) => {
  return (
    <div style={{ display: modalVisibility }} className="Modal">
      <p onClick={hideModal} className="cBtn">Componente Modal</p>
      <div className="row">
        <div className="col col-4"></div>
        <div className="col col-4"></div>
        <div className="col col-4"></div>
      </div>
      <div className="row">
        <div className="col col-4"></div>
        <div className="col col-4"></div>
        <div className="col col-4"></div>
      </div>
      <div className="row">
        <div className="col col-4"></div>
        <div className="col col-4"></div>
        <div className="col col-4"></div>
      </div>
    </div>
  )
}
export default ModalGoalContent;