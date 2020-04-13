import React from 'react';


const DeleteWineBtn = props => {

    const hideInput = (e) => {
        e.preventDefault();
        const inputField = document.getElementById('text-input');
        const buttonText = document.getElementById('btn-txt');
        if (inputField.style.display === 'block') {
            inputField.style.display = 'none';
            buttonText.innerHTML = 'Delete Wine';
        } else {
            inputField.style.display = 'block';
            buttonText.innerHTML = 'Submit';
        }
    }

    return (
        < form onSubmit={props.deleteWine} style={{ padding: '0', marginLeft: '100px' }}>
            <button
                id='btn-txt'
                className='wine-form-button'
                onMouseEnter={hideInput}>
                Delete Wine
            </button>
            <span id='text-input' style={{ display: 'none', marginTop: '10px' }}><h5>ID:<input type='input' name="wineId" placeholder="enter wine id" style={{ width: '60px', height: '20px', fontSize: '0.7em', borderRadius: '5px', placeholderColor: 'red' }} /></h5></span>
        </form >
    );

}

export default DeleteWineBtn;


