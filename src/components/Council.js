import React from 'react';
import './Council.css'; // For styling the council page
import warden from '../images/council/images.jpeg';
import awarden1 from '../images/council/AviMaji.png';
import awarden2 from '../images/council/Nagendra.png';
import placeHolder from '../images/council/Khush.jpeg';
import placeHolder1 from '../images/council/20241226_162104.jpg';
import placeHolder2 from '../images/council/Manasvee Baranwal_Mess Co.jpg';
import placeHolder3 from '../images/council/Pankaj Nagar_ Maintenance Councillor.jpg';
import placeHolder4 from '../images/council/Samarth Kumar_Cultural Secretary.jpg';
import placeHolder5 from '../images/council/chandrangsu.jpeg';
import placeHolder6 from '../images/council/Vishesh Jain_Sports Secretary_.jpg';
import placeHolder7 from '../images/council/Sanskar Gupta_Sports Secretary.jpg';
import placeHolder8 from '../images/council/Abhilaakshan_Sports Secretary_.jpg';
import placeHolder9 from '../images/council/Srinivas Kalyan_Mess Secretary_.jpg';
import placeHolder10 from '../images/council/Sawan Mess Secy.jpg';
import placeHolder11 from '../images/council/harsh_mess_secy.jpg';
import placeHolder12 from '../images/council/sarthak.jpeg';
import placeHolder13 from '../images/council/teja.jpg';

const Council = () => {
  return (
    <div className="council-container">
      <h1><b>🏫 Meet Our Council 🏫</b></h1>
      
      <section className="group">
        <h3> <b>Wardens</b></h3>
        <div className="image-group">
            <div className="image-container">        
                <img src={warden} alt="Warden 1" />
                <p className="image-desc">Prof. Rakesh Mote, Warden</p>
                <p className="image-desc"></p>
            </div>
            <div className="image-container">
                <img src={awarden1} alt="Warden 2" />
                <p className="image-desc">Prof. Avijit Maji, Associate Warden</p>
            </div>
            <div className="image-container">
                <img src={awarden2} alt="Warden 3" />
                <p className="image-desc">Prof. Nagendra Rao Valega, Associate Warden</p>
            </div>
          
          
        </div>
      </section>
      
      <section className="group">
        <h3> <b>General Secretary</b></h3>
        <div className="image-group">
        <div className="image-container">
            <img src={placeHolder} alt="GSec" />
            <p className="image-desc">Khush Soni</p>
          </div>
          </div>
      </section>
      
      <section className="group">
        <h3><b> Councillors</b></h3>
        <div className="image-group">
          
          <div className="image-container">
            <img src={placeHolder1} alt="Sports Councillor"></img>
            <p className="image-desc">Harshit Sharma, Sports Councillor</p>
          </div>
          <div className="image-container">
            <img src={placeHolder2} alt="Councillor 2" />
            <p className="image-desc">Manasvee Baranwal, Mess Councillor</p>
          </div>
          <div className="image-container">
            <img src={placeHolder3} alt="Councillor 3" />
            <p className="image-desc">Pankaj Nagar, Maintenance Councillor</p>
          </div>
          <div className="image-container">
            <img src={placeHolder4} alt="Councillor 4" />
            <p className="image-desc">Samarth Kumar, Cultural Councillor</p>
          </div>
          <div className="image-container">
            <img src={placeHolder5} alt="Councillor 2" />
            <p className="image-desc">Chandrangsu Biswas, System Admin</p>
          </div>
        </div>
      </section>
      
      <section className="group">
        <h3> <b>Committee Secretaries</b></h3>
        <div className="image-group">
            <div className="image-container">
                <img src={placeHolder6} alt="Councillor 2" />
                <p className="image-desc">Vishesh Jain, Sports Co-ordinator</p>
            </div>
            <div className="image-container">
            <img src={placeHolder7} alt="Councillor 2" />
            <p className="image-desc">Sanskar Gupta, Sports Co-ordinaton</p>
          </div>
          <div className="image-container">
            <img src={placeHolder8} alt="Councillor 2" />
            <p className="image-desc">Abhilaakshan, Sports Co-ordinato</p>
          </div>
          <div className="image-container">
            <img src={placeHolder9} alt="Councillor 2" />
            <p className="image-desc">Srinivas Kalyan, Mess Co-ordinator</p>
          </div>
          <div className="image-container">
            <img src={placeHolder10} alt="Councillor 2" />
            <p className="image-desc">Sawan, Mess Co-ordinator</p>
          </div>
          <div className="image-container">
            <img src={placeHolder11} alt="Councillor 2" />
            <p className="image-desc">Harsh Kumar, Mess Co-ordinator</p>
          </div>
          <div className="image-container">
            <img src={placeHolder12} alt="Councillor 2" />
            <p className="image-desc">Sarthak Kumar, Cultural Co-ordinator</p>
          </div>
          <div className="image-container">
            <img src={placeHolder13} alt="Councillor 2" />
            <p className="image-desc">Shivateja, Mess Co-ordinator</p>
          </div>
          <img src="/assets/member1.jpg" alt="Member 1" />
        </div>
      </section>
    </div>
  );
};

export default Council;
