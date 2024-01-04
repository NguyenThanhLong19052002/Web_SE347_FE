import "../CartStyle.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewIConfirmationModal from "./NewConfirmationModal";
import toast, { Toaster } from "react-hot-toast";

import { Button } from "react-bootstrap";

function NewIBill({ cart }) {
  //lấy _id của người dùng trong localStorage
  const Id = localStorage.getItem("_id");

  const [showModal, setShowModal] = useState(false);
  const [thanhtoan, setThanhtoan] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(0);

  useEffect(() => {
    if(cart.tongtrigia === 0)
      setDiscountedPrice(0);
    else{
      if(discountedPrice !== 0){
        let dataDiscount = {
          code: voucherCode,
          total: cart.tongtrigia,
        };
        axios
          .post("http://localhost:3001/order/discount", dataDiscount)
          .then((response) => {
            console.log(response.data);
            setDiscountedPrice(response.data.result);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, [cart.tongtrigia]);

  const handleThanhtoan = () => {
    setThanhtoan(true);
  };

  const today = new Date(); // Lấy ngày tháng hiện tại
  const date = today.getDate(); // Lấy ngày
  const month = today.getMonth() + 1; // Lấy tháng (Lưu ý: Tháng bắt đầu từ 0, do đó cần phải cộng thêm 1)
  const year = today.getFullYear(); // Lấy năm

  var spList = cart.sanphams.map((sp) => {
    return {
      hinhanh: sp.image,
      sanpham: sp.name,
      loaisp: sp.category,
      sl: sp.soluong,
      dvt: sp.dvt,
      dongia: sp.price,
      thanhtien: sp.price * sp.soluong,
    };
  });


  const navigate = useNavigate();
  const addOrder = () => {
    let data = {
      hinhanh: "",
      ngaylap: date + "/" + month + "/" + year,
      tinhtrang: "Đang xử lý",
      diachigiaohang: "",
      userId: Id,
      sanphams: spList,
      hinhthucthanhtoan: "",
      tongtien: discountedPrice === 0 ? cart.tongtrigia : cart.tongtrigia - discountedPrice
    };
    if (!Array.isArray(cart.sanphams) || cart.sanphams.length === 0) {
      setThanhtoan(false);
      setShowModal(true);
    } else {
      //refresh lại giỏ hàng (xóa tất cả các sản phẩm có trong giỏ hàng này)
      axios
        .post("https://dialuxury.onrender.com/cart/refresh", { userId: Id })
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
      // tạo đơn hàng mới trong order
      axios
        .post("https://dialuxury.onrender.com/order", data)
        .then((response) => {
          //chuyển hướng tới trang paymentinfo
          const mahd = response.data.mahd;
          navigate("/paymentinfo", {
            state: { mahd },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setVoucherCode(inputText);
  };

  const handleApplyClick = () => {
    // Xử lý khi nút "Áp dụng" được nhấn
    toast.loading("Checking...");
    let dataDiscount = {
      code: voucherCode,
      total: cart.tongtrigia,
    };
    axios
      .post("http://localhost:3001/order/discount", dataDiscount)
      .then((response) => {
        console.log(response.data);
        toast.dismiss();
        toast.success(<b>Áp dụng mã giảm giá thành công!</b>);
        setDiscountedPrice(response.data.result);
      })
      .catch((error) => {
        console.log(error);
        toast.dismiss();
        toast.error(<b>Mã giảm giá không hợp lệ!!!</b>);
      });
  };

  return (
    <div className="infor-cart">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <p>Tổng tiền</p>
      <div className="it-cartr">
        <p>Tạm tính:</p>
        <p>
          {cart.tongtrigia.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </p>
      </div>
      <div className="it-cartr">
        <p>Vận chuyển:</p>
        <p>Miễn phí vận chuyển</p>
      </div>
      <div className="it-cartr frm-vou">
        <p>Mã giảm giá</p>
        <div className="form-group">
          <input
            type="text"
            id="VorcherCode"
            className=""
            value={voucherCode}
            onChange={handleInputChange}
          />
          <button
            id="VorcherCodeSubmit"
            onClick={handleApplyClick}
            disabled={!voucherCode.trim()}
          >
            Áp dụng
          </button>
        </div>
      </div>
      <div className="it-cartr">
        <p>
          Thành tiền <span>(Đã bao gồm VAT)</span>:
        </p>
        {discountedPrice === 0 ? (
          <>
            <p>
              {cart.tongtrigia.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </>
        ) : (
          <>
            <del style={{ float: "right", fontSize: "14px" }}>
              {cart.tongtrigia.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </del> <br />
            <p>
              {(cart.tongtrigia - discountedPrice).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </>
        )}
        {/* <p>{discountedPrice === 0 ? cart.tongtrigia.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          }) : (

            (cart.tongtrigia - discountedPrice).toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })
          )}</p> */}
      </div>
      <div className="text-center">
        <Button
          variant="danger"
          onClick={handleThanhtoan}
          className="w-100 mt-20"
        >
          Thanh toán
        </Button>
      </div>
      <NewIConfirmationModal
        show={showModal}
        title={"Thông báo"}
        message="Giỏ hàng rỗng"
        onConfirm={() => {
          setShowModal(false);
        }}
        onCancel={() => {
          setShowModal(false);
        }}
      />
      <NewIConfirmationModal
        show={thanhtoan}
        title={"Xác nhận"}
        message="Bạn muốn thanh toán!"
        onConfirm={addOrder}
        onCancel={() => {
          setThanhtoan(false);
        }}
      />
    </div>
  );
}

export default NewIBill;
