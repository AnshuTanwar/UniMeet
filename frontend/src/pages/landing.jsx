import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    return(
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>UniMeet</h2>
                </div>
                <div className='navlist'>
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <div role='button'>Loginn</div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color: "#FF9839"}}>Connect </span>with your loved Ones</h1>
                    <p>Meet anyone, anywhere, with <span style={{color: "#FF9839"}}>UniMeet</span></p>
                    <div role='button'>
                        <Link to={"/home"}>Get Started</Link>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}