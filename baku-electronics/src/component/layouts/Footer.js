import React from 'react'
import image from '../../assets/image/mastercard.svg';

function Footer() {
    return (
        <div>
            <section>
                <div className="footers row">
                    <div className="col-3 ">
                        <div className="my-3">

                            <ul className="footer-pay">
                                <li><span>Məlumat</span></li><br />
                                <li><span>Kampaniyalar</span></li>
                                <li><span>Müştəri kartı</span></li>
                                <li><span>Brendlər</span></li>
                                <li><span>Bloq</span></li>
                                <br /> <br /> <br /> <br />
                                <li><span>Ödəniş:</span></li>
                                <img src={image} alt="" />

                            </ul>

                        </div>

                    </div>
                    <div className="col-3 d-flex">
                        <div className="my-5 d-flex">

                            <ul className="footer-pay">
                                <li><span>Şirkət</span></li><br />
                                <li><span>Mağazalar</span></li>
                                <li><span>Şirkəthaqqında</span></li>
                                <li><span>Vakansiyalar</span></li>
                                <li><span>Korporativsatışlar</span></li>
                                <br /> <br /> <br /> <br />
                                <li><span>Bizə qoşulun:</span></li>


                            </ul>

                        </div>
                    </div>
                    <div className="col-3">
                        <div className="my-4 d-flex">

                            <ul className="footer-pay">
                                <li><span>Alıcılara</span></li><br />
                                <li><span>Çatdırılma və ödəniş</span></li>
                                <li><span>Zәmanәt</span></li>
                                <li><span>Servis mərkəzləri</span></li>
                                <li><span>Nisyə alış</span></li>
                                <br /> <br /> <br /> <br />
                                <li><span>Bizə qoşulun:</span></li>
                                <li><span>
                                    © 2018 - 2023 bakuelectronics.az
                                </span></li>
                                <li><span>Mexfilik siyaseti</span></li>


                            </ul>

                        </div>
                    </div>
                    <div className="col-3 blacks">
                        <div className="my-4 d-flex">

                            <ul className="footer-pay">
                                <li><span>Məlumat mərkəzi</span></li><br />
                                <li><span>9:00 - 20:00 (hər gün)</span></li>
                                <li><span>143</span></li>
                                <li><span>info@bakuelectronics.az</span></li>
                                <br /> <br /> <br /> <br /> <br />
                                <li><span>Saytın hazırlanması</span></li>
                            
                                <li><span>Турум-бурум</span></li>


                            </ul>

                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default Footer