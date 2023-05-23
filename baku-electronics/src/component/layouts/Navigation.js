import logo from '../../assets/image/logo.svg';
import React from 'react'


function Navigation() {
    return (
        <div>
            <div className="navbar">
                <p className="offer" >İndi al, 3 ay sonra ödə! Yalnız onlayn!</p>
            </div>


            <div className="navbarr">
                <div className="row">
                    <div className="col-3 mt-3">
                        <img src={logo} alt="" />

                        <p></p>
                    </div>


                    <div className="col-6 mt-4 d-flex">
                        <input className="search" type="text" />
                        <div className="desc d-flex">
                        <p className="one">Kampaniyalar</p>
                        <p className="two">Mağazalar</p>
                        <p className="three">Digər</p>

                        <h3 className="phone">143</h3>



                        </div>
                       
                    </div>

                    <div className="col-3">


                    </div>


                </div>



            </div>


        </div>
    )
}

export default Navigation