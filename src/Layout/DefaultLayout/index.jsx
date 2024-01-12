import Header from "../../Components/Header";
import NewHeader from "../../Components/Header_new_template";
import NewFooter from "../../Components/Footer_new_template";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";
// import NorthIcon from "@mui/icons-material/North";

function DefaultLayout({ children }) {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY / (scrollHeight - clientHeight) >= 0.7) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {/* <Header /> */}
      <NewHeader />
      <div>{children}</div>
      <NewFooter />
      {/* <Footer /> */}
      {/* {backToTopButton && (
                <button className={styles.btn} onClick={scrollUp}>
                    <NorthIcon className={styles.btnIcon} />
                </button>
            )} */}
    </div>
  );
}

export default DefaultLayout;
