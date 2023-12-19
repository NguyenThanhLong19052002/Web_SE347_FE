import "./FooterStyle.css";
import styles from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function NewFooter() {
  return (
    <div style={{ marginTop: 30 }}>
      <div className="clred"></div>
      <div className="topft">
        <div className="container">
          <div className="top-footer">
            <div className="logo-tft">
              <Link to="/">
                <img
                  src={require("../../assets/images/logo.png")}
                  alt="Trang Sức DIALUXURY"
                  style={{ width: 207, height: 75 }}
                />
              </Link>
            </div>
            <div className="hl-tft">
              <p className="lazyed">
                <PhoneIcon className="tft-icon" />
                hotline:
                <Link to="/">18001168</Link>
              </p>
            </div>
            <div className="htpp-tft">
              <LocationOnIcon className="tft-icon" />
              <Link to="/">Hệ thống phân phối</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="lst-footer">
            <div className="it-lft">
              <h3>Liên hệ</h3>
              <ul>
                <li>© 2017 Công Ty Cổ Phần Vàng Bạc Đá Quý Phú Nhuận</li>
                <li>
                  Địa chỉ: 170E Phan Đăng Lưu, P.3, Q.Phú Nhuận, TP.Hồ Chí Minh
                </li>
                <li>
                  Điện thoại: <Link to="/">18001168</Link>
                </li>
                <li>
                  Email: <Link to="/">info@dialuxury.vn</Link>
                </li>
                <li>Mã số doanh nghiệp: 0300521758</li>
              </ul>
            </div>
            <div className="it-lft">
              <h3>Về chúng tôi</h3>
              <ul>
                <li>Về trang sức DIALUXURY</li>
                <li>Tuyển dụng</li>
                <li>Kinh doanh bán sỉ</li>
                <li>Kiểm định kim cương</li>
                <li>Kinh doanh vàng miếng</li>
              </ul>
            </div>
            <div className="it-lft">
              <h3>Dịch vụ khách hàng</h3>
              <ul>
                <li>Hướng dẫn đo kích thước trang sức</li>
                <li>Mua hàng trả góp</li>
                <li>Hướng dẫn mua hàng và thanh toán</li>
                <li>Chính sách hoàn tiền</li>
                <li>Chính sách giao hàng</li>
                <li>Cẩm nang sử dụng trang sức</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="social">
        <div className="container">
          <div className="social-ct">
            <h3>
              <span>Kết nối với chúng tôi</span>
            </h3>
            <ul>
              <li>
                <Link to="/" className="mb-4 mr-1 ms-1 nm-bdic">
                  <img
                    src={require("../../assets/images/fbimg.png")}
                    alt="Facebook"
                    className="bd-ic"
                  />
                </Link>
                DIALUXURY
              </li>
              <li>
                <Link to="/" className="mb-4 mr-1 ms-1 nm-bdic">
                  <img
                    src={require("../../assets/images/instaimg.png")}
                    alt="Instagram"
                    className="bd-ic"
                  />
                </Link>
                Instagram
              </li>
              <li>
                <Link to="/" className="mb-4 mr-1 ms-1 nm-bdic">
                  <img
                    src={require("../../assets/images/Twitterimg.png")}
                    alt="Twitter"
                    className="bd-ic"
                  />
                </Link>
                Twitter
              </li>
              <li>
                <Link to="/" className="mb-4 mr-1 ms-1 nm-bdic">
                  <img
                    src={require("../../assets/images/mailimg.png")}
                    alt="Mailing"
                    className="bd-ic"
                  />
                </Link>
                Mail
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="payment">
        <div className="container">
          <div className="payment-ct">
            <h3>
              <span>Phương thức thanh toán</span>
            </h3>
            <ul>
              <li>
                <Link to="/" className="mb-4 mr-1 ms-1 nm-bdic">
                  <img
                    src={require("../../assets/images/visaimg.png")}
                    alt="visa"
                    className="bd-ic"
                  />
                </Link>
              </li>
              <li>
                <Link to="/" className="mb-4 mr-1 ms-1 nm-bdic">
                  <img
                    src={require("../../assets/images/jcbimg.png")}
                    alt="jcb"
                    className="bd-ic"
                  />
                </Link>
              </li>
              <li>
                <Link to="/" className="mb-4 mr-1 ms-1 nm-bdic">
                  <img
                    src={require("../../assets/images/mastercardimg.png")}
                    alt="mastercard"
                    className="bd-ic"
                  />
                </Link>
              </li>
              <li>
                <Link to="/" className="mb-4 mr-1 ms-1 nm-bdic">
                  <img
                    src={require("../../assets/images/cashimg.png")}
                    alt="cash"
                    className="bd-ic"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    // <div className={"main-footer mt-3 " + styles.mainFooter}>
    //    <Link to="/">
    //         <img src={require('../../assets/images/logo.png')} alt="Logo Image" className={styles.logoFooter}/>
    //     </Link>
    //     <div className={styles.footerContainer}>
    //         <div className={"row " + styles.line}>
    //             <div className={"col-sm-12 col-md-6 col-lg-3 " + styles.column}>
    //                 <h4 className={styles.w_sm_90}>© 2017 Công Ty Cổ Phần Vàng Bạc Đá Quý Phú Nhuận</h4>
    //                 <ul className="list-unstyled">
    //                     <p className={styles.w_sm_90}>170E Phan Đăng Lưu, P.3, Q.Phú Nhuận, TP.Hồ Chí Minh.</p>
    //                     <p>ĐT: 028 39951703</p>
    //                     <p>Fax: 028 3995 1702</p>
    //                     <p>Email: <Link to="#">abcde@gmail.com</Link></p>
    //                     <p className={styles.w_sm_90}>
    //                         <u><Link to="#" style={{color: "#212536"}}>Giấy chứng nhận đăng ký doanh nghiệp: 0300521758.</Link></u>
    //                     </p>
    //                 </ul>
    //             </div>
    //             <div className={"col-sm-12 col-md-4 col-lg-3 " + styles.column}>
    //                 <h4>Về Dialuxury</h4>
    //                 <ul className="list-unstyled">
    //                     <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Câu chuyện PNJ</Link></li>
    //                     <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Tuyển dụng</Link></li>
    //                     <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Xuất khẩu</Link></li>
    //                     <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Kinh doanh sỉ</Link></li>
    //                     <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Kiểm định kim cương</Link></li>
    //                     <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Kinh doanh vàng miếng</Link></li>
    //                 </ul>
    //             </div>
    //             <div className={"col-sm-12 col-md-5 col-lg-3 " + styles.column}>
    //                 <h4>Dịch vụ khách hàng</h4>
    //                 <ul className="list-unstyled">
    //                     <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Hướng dẫn đo size trang sức</Link></li>
    //                     <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Mua hàng trả góp</Link></li>
    //                     <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Hướng dẫn mua hàng và thanh toán</Link></li>
    //                     <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Chính sách hoàn tiền</Link></li>
    //                     <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Chính sách giao hàng</Link></li>
    //                     <li><Link to="#" style={{textDecoration: "none", color: "#212536"}}>Cẩm nang sử dụng trang sức</Link></li>

    //                 </ul>
    //             </div>
    //         </div>
    //         <div className={styles.footerBottom}>
    //             <div className={"col-md-6 col-sm-6 m-0 " + styles.column}>
    //                 <h4 className="text-center">Phương thức thanh toán</h4>
    //                 <ul className="list-unstyled">
    //                     <div className={styles.img + " d-flex flex-wrap justify-content-center"}>
    //                         <Link to="#" className="mb-4 mr-1 ms-1">
    //                             <img
    //                                 src={require('../../assets/images/visaimg.png')}
    //                                 alt="Visa"
    //                                 className={styles.socialMedia}/>
    //                         </Link>
    //                         <Link to="#" className="mb-4 mr-1 ms-1">
    //                             <img
    //                                 src={require('../../assets/images/jcbimg.png')}
    //                                 alt="jcb"
    //                                 className={styles.socialMedia}/>
    //                         </Link>
    //                         <Link to="#" className="mb-4 mr-1 ms-1">
    //                             <img
    //                                 src={require('../../assets/images/mastercardimg.png')}
    //                                 alt="mastercard"
    //                                 className={styles.socialMedia}/>
    //                         </Link>
    //                         <Link to="#" className="mb-4 mr-1 ms-1">
    //                             <img
    //                                 src={require('../../assets/images/cashimg.png')}
    //                                 alt="cash"
    //                                 className={styles.socialMedia}/>
    //                         </Link>
    //                     </div>
    //                 </ul>
    //             </div>
    //             <div className={"col-md-6 col-sm-6 m-0 " + styles.column}>
    //                 <h4 className="text-center">Kết nối với chúng tôi</h4>
    //                 <ul className="list-unstyled">
    //                     <div className={styles.img + " d-flex flex-wrap justify-content-center"}>
    //                         <Link to="#" className="mb-4 mr-1 ms-1">
    //                             <img
    //                                 src={require('../../assets/images/fbimg.png')}
    //                                 alt="Facebook"
    //                                 className={styles.socialMedia}/>
    //                         </Link>

    //                         <Link to="#" className="mb-4 mr-1 ms-1">
    //                             <img
    //                                 src={require('../../assets/images/instaimg.png')}
    //                                 alt="Instagram"
    //                                 className={styles.socialMedia}/>
    //                         </Link>

    //                         <Link to="#" className="mb-4 mr-1 ms-1">
    //                             <img
    //                                 src={require('../../assets/images/Twitterimg.png')}
    //                                 alt="Twitter"
    //                                 className={styles.socialMedia}/>
    //                         </Link>

    //                         <Link to="#" className="mb-4 mr-1 ms-1">
    //                             <img
    //                                 src={require('../../assets/images/mailimg.png')}
    //                                 alt="Mailing"
    //                                 className={styles.socialMedia}/>
    //                         </Link>
    //                     </div>
    //                 </ul>
    //             </div>
    //         </div>
    //    </div>
    // </div>
  );
}

export default NewFooter;
