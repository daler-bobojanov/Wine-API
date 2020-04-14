import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const ButtonsModal = (props) => {
    const [modalIsOpen, setmodalIsOpen] = useState(false)

    return (
        <div className='child-modal'>

            <button className='modal-button' onClick={() => setmodalIsOpen(true)}>More Information</button>
            <Modal
                className='modal'
                overlayClassName='modal-overlay'
                bodyOpenClassName='modal-open'
                isOpen={modalIsOpen}
                onRequestClose={() => setmodalIsOpen(false)}
                style={
                    {
                        overlay: {
                            position: 'fixed',
                            top: 70,
                            left: 20,
                            right: 20,
                            bottom: 70,
                            backgroundColor: 'rgba(255, 255, 255, 0.85)'
                        },
                        content: {
                            position: 'absolute',
                            top: '40px',
                            left: '300px',
                            right: '300px',
                            bottom: '40px',
                            border: '2px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '20px'
                        }
                    }
                }
            >
                <div style={{ display: 'grid', gridTemplateColumns: '30% 60% 10%' }}>
                    <div style={{ paddingTop: '40px' }}>
                        <img src={props.value.picture} alt='' />
                    </div>

                    <div style={{ paddingTop: '40px' }}>
                        <ul>
                            <li>Wine Name: {props.value.name}</li>
                            <br></br>
                            <li>Year: {props.value.year}</li>
                            <br></br>
                            <li>Grapes: {props.value.grapes}</li>
                            <br></br>
                            <li>Country: {props.value.country}</li>
                            <br></br>
                            <li>Region: {props.value.region}</li>
                            <br></br>
                            <li>Description: {props.value.description}</li>
                            <br></br>
                            <li>Price:$ {props.value.price}</li>
                        </ul>
                    </div>

                    <div style={{ paddingLeft: '40px' }}>
                        <button onClick={() => setmodalIsOpen(false)} style={{ fontSize: '1.5em', border: '1px gray solid', padding: '2px' }}>X</button>
                    </div>

                </div>
            </Modal>
        </div >
    );
}

export default ButtonsModal;
