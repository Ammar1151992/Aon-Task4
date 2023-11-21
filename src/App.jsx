import "./app.css";
import { useEffect, useState } from "react";
import { Header } from "./Header/header";
import { Container } from "./Container/container";
import { Space } from "./space/space";
import { Search } from "./Search/search";
import { Body } from "./Body/body";
import { useStore } from "./userState";

export const App = () => {
  const { products, setProducts,search,loading, setLoading } = useStore();
  const [skip, setSkip] = useState(0);

  const getProducts = async () => {
    setLoading(true)
    try {
      let resp = await fetch(`https://dummyjson.com/products/search?q=${search}&limit=30&skip=${skip}`);
      let data = await resp.json();
      if(search === ""){
        setProducts([...products, ...data.products]);
      } else{
        setProducts(data.products);
      }
      setLoading(false)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [search, skip]);

  const hundleSkip = () => {
    setSkip(skip + 30);
  }
  return (
    <div>
      <Header />
      <Container>
        <Space height={38} />
        <Search />
        <Space height={28} />
        <Body txtLength={20} />
        {!loading && (
        <button className="loadmore" onClick={() => {
          hundleSkip()
          setLoading(true)}}>
          Show More
        </button>
        )}
        <Space height={75} />
        <div className={loading ? "lod" : ""}>
                <div class="loader"></div>
                </div>
      </Container>
    </div>
  );
};
