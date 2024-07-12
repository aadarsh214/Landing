import React from 'react';
import './Down.css';
import people from'./people.png';


function Down() {
  return (
    <div className='hhy'>
      <img src={people} alt="" className='people' />
    
    <div className="form-container">
    <h1>Get Started</h1>
          <span>Sign up to access our data analytics courses and resources.</span>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email address" />
                </div>
                <div className="button-group">
                    <button type="button" className="learn-more-btn">Learn More</button>
                    <button type="submit" className="sign-up-btn">Sign Up</button>
                </div>
            </form>
        </div>
    </div>

  )
}

export default Down
