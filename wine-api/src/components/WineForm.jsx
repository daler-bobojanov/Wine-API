import React, { useState } from 'react';
import Modal from 'react-modal';
import Axios from 'axios';

const WineForm = () => {



    const [modalIsOpen, setmodalIsOpen] = useState(false)
    return (
        <div>
            <button className='wine-form-button' onClick={() => setmodalIsOpen(true)}>Add Wine</button>
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
                            left: 70,
                            right: 70,
                            bottom: 70,
                            backgroundColor: 'rgba(255, 255, 255, 0.95)'
                        },
                        content: {
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            right: '40px',
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


                <h2>Modal Heading</h2>
                <p>Modal Body</p>

                <button onClick={() => setmodalIsOpen(false)} style={{ fontSize: '1.5em' }}>X</button>
            </Modal>
        </div>
    );
}


export default WineForm;