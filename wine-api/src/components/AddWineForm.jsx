import React, { useState } from 'react';
import Modal from 'react-modal';


const WineForm = (props) => {
    const [modalIsOpen, setmodalIsOpen] = useState(false)

    return (
        < div >
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

                {/* <h2>Modal Heading</h2>
                <p>Modal Body</p> */}
                <form onSubmit={props.postWine} style={{ display: 'flex', flexDirection: 'column' }}>
                    <h4 className='wine-form__h4'>Wine Name: <input type='text' name='name' placeholder='Enter value here...' /></h4>
                    <h4 className='wine-form__h4'>Year: <input type='number' name='year' placeholder='Enter Numeric value here...' /></h4>
                    <h4 className='wine-form__h4'>Grapes: <input type='text' name='grapes' placeholder='Enter value here...' /></h4>
                    <h4 className='wine-form__h4'>Country: <input type='text' name='country' placeholder='Enter value here...' /></h4>
                    <h4 className='wine-form__h4'>Region: <input type='text' name='region' placeholder='Enter value here...' /></h4>
                    <h4 className='wine-form__h4'>Description: <input type='text' name='description' placeholder='Enter value here...' /></h4>
                    <h4 className='wine-form__h4'>Picture: <input type='URL' name='picture' placeholder='Image URL...' /></h4>
                    <h4 className='wine-form__h4'>Price: $<input type='number' name='price' placeholder='Enter value here...' /></h4>
                    <button className="wine-form__btn">Submit</button>
                </form>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={() => setmodalIsOpen(false)} style={{ fontSize: '1.5em' }}>Close</button>
            </Modal>
        </div >
    );
}

export default WineForm;