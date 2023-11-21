import "./body.css";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useStore } from "../userState";
import { useState } from "react";
import { Modal } from "../Modal/modal";
import { Input } from "../Input/input";

export const Body = ({ txtLength }) => {
  const { 
    products, 
    setProducts, 
    showTxt, 
    setShowTxt, 
    title, 
    description, 
    price, 
    setLoading,
    edit,
    setEdit } = useStore();

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const editProducts = async (productID) => {
    setLoading(true);
    try {
      let add = await fetch(`https://dummyjson.com/products/${productID}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title,
            description,
            price,
        })
      });
      let data = await add.json();
      Swal.fire({
        title: 'Edited!',
        icon: 'success',
        timer: "3000",
        showConfirmButton: false,
      })
      setLoading(false);
      setEdit(false)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletProducts = async (productID) => {
    setLoading(true);
    try {
      let add = await fetch(`https://dummyjson.com/products/${productID}`, {
        method: "DELETE",
      });
      let data = await add.json();
      if(data.isDeleted === true){
          Swal.fire({
          title: 'Deleted!',
          icon: 'success',
          timer: "3000",
          showConfirmButton: false,
        })
      }
      setLoading(false);
      setEdit(false)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };


  const hundleItem = (index) => {
    setSelectedItemIndex(index);
  };
  return (
    <div className="body-table">
      <div className="table">
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {products.map((item, index) => (
            <tr key={index}>
              <td>
                <span className="onMobile">ID: </span>
                {item.id}
              </td>
              <td>
                <span className="onMobile">Title: </span> {item.title}
              </td>
              <td>
                <span className="onMobile">Description: </span>
                {item.description.slice(0, txtLength)}
                {item.description.length > txtLength && (
                  <button
                    className="txt"
                    onClick={() => {
                      setShowTxt(true);
                      hundleItem(index);
                    }}
                  >
                    {" "}
                    ... <span className="txt-read">Read More</span>
                  </button>
                )}
              </td>
              <td className="price">
                <span className="onMobile">Price: </span>
                {`${Number(item.price).toLocaleString("en")} $`}
              </td>
              <td className="icons">
                <span className="onMobile">Action: </span>
                <button onClick={() => {
                  setEdit(true)
                  hundleItem(index);
                }} className="edit">
                  <CiEdit />
                </button>
                <button onClick={() => {
                  deletProducts(item.id)
                  }} className="delete">
                  <RiDeleteBin5Line />
                </button>
              </td>
            </tr>
            
          ))}
        </table>
      </div>
      <Modal width={400} isOpen={showTxt} onClose={() => setShowTxt(false)}>
        <div>
          <div className="popup-content">
            <p>{products[selectedItemIndex]?.description}</p>
            <button className="close" onClose={() => setShowTxt(false)}>
              Close
            </button>
          </div>
        </div>
      </Modal>
      {edit && <Input editProducts = {() => editProducts(products[selectedItemIndex]?.id)}/>}
    </div>
  );
};
