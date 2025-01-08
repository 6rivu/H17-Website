import React from 'react';
import './Council.css'; // For styling the council page
import placeHolder from '../images/council/placeholder.jpg';

const Council = () => {
  return (
    <div className="council-container">
      <h2>🏫 Meet Our Council 🏫</h2>
      
      <section className="group">
        <h3> Wardens</h3>
        <div className="image-group">
            <div className="image-container">
                <img src={placeHolder} alt="Warden 1" />
                <p className="image-desc">Warden 1</p>
            </div>
          <img src={placeHolder} alt="Warden 2" />
          <img src={placeHolder} alt="Warden 3" />
        </div>
      </section>
      
      <section className="group">
        <h3> General Secretary</h3>
        <div className="image-group">
        <div className="image-container">
            <img src={placeHolder} alt="Councillor 2" />
            <p className="image-desc">Warden 1</p>
          </div>
          </div>
      </section>
      
      <section className="group">
        <h3>👥 Councillors</h3>
        <div className="image-group">
          <img src={placeHolder} alt="Sports Councillor"></img>
          {/* <p> Wardens</p> */}
          <div className="image-container">
            <img src={placeHolder} alt="Councillor 2" />
            <p className="image-desc">Sydney Sweeney, Sports Councillor</p>
          </div>
          <img src={placeHolder} alt="Councillor 2" />
          <img src={placeHolder} alt="Councillor 2" />
          <img src={placeHolder} alt="Councillor 2" />
        </div>
      </section>
      
      <section className="group">
        <h3> Committee Members</h3>
        <div className="image-group">
          <img src="/assets/member1.jpg" alt="Member 1" />
          <img src="/assets/member2.jpg" alt="Member 2" />
          <img src="/assets/member2.jpg" alt="Member 2" />
          <img src="/assets/member2.jpg" alt="Member 2" />
          <img src="/assets/member2.jpg" alt="Member 2" />
          <img src="/assets/member2.jpg" alt="Member 2" />
          <img src="/assets/member2.jpg" alt="Member 2" />
          <img src="/assets/member2.jpg" alt="Member 2" />
          <img src="/assets/member2.jpg" alt="Member 2" />
          <img src="/assets/member2.jpg" alt="Member 2" />
          <img src="/assets/member2.jpg" alt="Member 2" />
        </div>
      </section>
    </div>
  );
};

export default Council;
