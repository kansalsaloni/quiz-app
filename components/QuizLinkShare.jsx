import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import '../style/QuizLinkShareStyle.css';
import '../style/CreateQuizStyle.css';
import '../App.css'

function QuizLinkShare() {
    const [showPopup, setShowPopup] = useState(true);
    const handleClose = () => {
        setShowPopup(false);
      };
      const handleShare = () => {
        toast.success("Quiz published successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "custom-toast",
          });
      
        setShowPopup(false);
      };
      return (
        <>
          {showPopup && (
            <div className='quiz-popup-overlay' >
              <div className='quiz-popup-container' id='quiz-share-link-popup-container'>
              <div >
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ position: 'absolute', top: '0', right: '50px' }}
              />
                <button className='popup-close-button' onClick={handleClose}>
                  &times;
                </button>
            </div>
             
                <h2 className='title' style={{marginTop:'0px',marginBottom:'0px'}} id='quiz-share-link-popup-title'>Congrats Your quiz is Published!</h2>
                <p className='share-link-text'>Your link is here</p>
                <button className='button' onClick={handleShare}   style={{ backgroundColor: '#60B84B', color:'white'}}>
                  Share
                </button>
              </div>
            </div>
          )}
        
        </>
      );
}


export default QuizLinkShare
