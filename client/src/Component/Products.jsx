import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";




const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  // đây là tui đẩy dữ liệu thô vào để khởi tao dữ liệu ban đầu cho thằng products nè cái popularProducts á
  const [products, setProducts] = useState([]);
  const [filteredPr, setFilteredPr] = useState([]);
  // khi mà load cái web lên cat thay đổi làm cho setProducts rỗng nên tui phải ẩn nó đi
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);   
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredPr(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
      
  }, [products, cat, filters]);

// console.log(products, cat, filters );


  useEffect(() => {
    if (sort === "newest") {
      setFilteredPr((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredPr((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredPr((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredPr.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
