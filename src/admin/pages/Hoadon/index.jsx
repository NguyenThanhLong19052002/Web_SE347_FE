import Container from 'react-bootstrap/Container';
import Table from '../../Components/Table';

import axios from 'axios';
import { useEffect, useState } from 'react';
function Hoadon() {
  const [list, setList] = useState([]);
  const [selectedQuarter, setSelectedQuarter] = useState('0');
  const [selectedYear, setSelectedYear] = useState('0');
  const [filteredOrders, setFilteredOrders] = useState([]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleQuarterChange = (event) => {
    setSelectedQuarter(event.target.value);
  };

  useEffect(() => {
    axios
      .get('https://dialuxury.onrender.com/order/tinhtrang/Đã%20giao%20hàng')
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filterOrdersByQuarter = () => {
      if (selectedYear !== '0') {
        const filtered = list.filter((order) => {
          const month = parseInt(order.ngaylap.split('/')[1]);
          const year = parseInt(order.ngaylap.split('/')[2]).toString();
          if (selectedQuarter === '0') {
            if (year === selectedYear) return true;
            return false;
          } else {
            if (
              year === selectedYear &&
              ((selectedQuarter === '1' && month >= 1 && month <= 3) ||
                (selectedQuarter === '2' && month >= 4 && month <= 6) ||
                (selectedQuarter === '3' && month >= 7 && month <= 9) ||
                (selectedQuarter === '4' && month >= 10 && month <= 12))
            ) {
              return true;
            }
            return false;
          }
        });
        setFilteredOrders(filtered);
      } else {
        setFilteredOrders(list);
      }
    };

    filterOrdersByQuarter();
  }, [selectedYear, selectedQuarter, list]);

  return (
    <Container fluid>
      <div className={'border-l-3 py-4'}>
        <label htmlFor="yearSelect">Chọn năm:</label>
        <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
          <option value={0}>Tất cả</option>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
        </select>
        <label style={{ marginLeft: '20px' }} htmlFor="quarterSelect">
          Chọn quý:
        </label>
        <select id="quarterSelect" value={selectedQuarter} onChange={handleQuarterChange}>
          <option value={0}>Tất cả</option>
          <option value={1}>Quý 1</option>
          <option value={2}>Quý 2</option>
          <option value={3}>Quý 3</option>
          <option value={4}>Quý 4</option>
        </select>
        <Table rows={filteredOrders} />
      </div>
    </Container>
  );
}

export default Hoadon;
