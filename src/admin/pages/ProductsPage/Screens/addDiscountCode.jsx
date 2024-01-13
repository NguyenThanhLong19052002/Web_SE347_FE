import React, { useState } from "react";
import { Form, Button, Row, Container, Col } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const AddDiscountCodeForm = () => {
  const [discountCodeText, setDiscountCodeText] = useState("");
  const [discountValue, setDiscountValue] = useState(0);

  const handleSubmit = async (e) => {
    let data = {
      code: discountCodeText,
      value: Number(discountValue),
    };
    e.preventDefault();
    toast.loading("Adding...");
    await axios
      .post("http://localhost:3001/order/discount/add", data)
      .then((res) => {
        toast.dismiss();
        toast.success(<b>Thêm mã giảm giá mới thành công</b>);
        console.log(res.data); // Thêm sản phẩm vào danh sách
        // Reset form sau khi gửi thành công
        setDiscountCodeText("");
        setDiscountValue(0);
      })
      .catch((e) => {
        toast.dismiss();
        toast.error(<b>Thêm mã giảm giá thất bại</b>);
        console.log(e);
      });
  };

  return (
    <Container style={{ width: "1300px" }}>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Row className="d-flex justify-content-center">
        <Col
          md={6}
          style={{
            border: "1px solid rgb(193 197 199)",
            borderRadius: "8px",
            padding: "20px",
            color: "rgb(90 93 95)",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="discountCodeText">
              <Form.Label>Mã giảm giá:</Form.Label>
              <Form.Control
                type="text"
                value={discountCodeText}
                onChange={(e) => setDiscountCodeText(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="discountValue">
              <Form.Label>Phần trăm giảm giá:</Form.Label>
              <Form.Control
                type="text"
                value={discountValue}
                onChange={(e) => setDiscountValue(e.target.value)}
              />
            </Form.Group>

            <br></br>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Thêm mã giảm giá
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddDiscountCodeForm;
