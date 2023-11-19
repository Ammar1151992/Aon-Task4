import "./app.css"
import { useEffect, useState } from "react";
import { Header } from "./Header/header";
import { Container } from "./Container/container";
import { Space } from "./space/space";
import { Search } from "./Search/search";
import { Body } from "./Body/body";
import { useStore } from "./userState";

export const App = () => {
  const {products, setProducts,showTxt} = useStore();

  const getProducts = async () => {
      try {
        let resp = await fetch("https://dummyjson.com/products");
        let data = await resp.json();
        setProducts(data.products);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
      getProducts();
    }, []);
  return (
    <div>
      <div className={showTxt ? "overlay" : ""}>
        <Header />
        <Container>
        <Space height={38}/>
        <Search />
        <Space height={28}/>
        <Body txtLength={20}/>
        </Container>
      </div>
    </div>
  )
}


