import "./body.css";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useStore } from "../userState";
import { useState } from "react";
import { Modal } from "../Modal/modal";

export const Body = ({ txtLength }) => {
  const { products, setProducts, showTxt, setShowTxt } = useStore();
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

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
            <tr>
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
                {`${item.price} $`}
              </td>
              <td className="icons">
                <span className="onMobile">Action: </span>
                <button className="edit">
                  <CiEdit />
                </button>
                <button className="delete">
                  <RiDeleteBin5Line />
                </button>
              </td>
              {/* {selectedItemIndex !== null && (
                                <div className={showTxt ? "popup" : "close-pop"}>
                                    <div className="popup-content">
                                        <p>{products[selectedItemIndex].description}</p>
                                        <button className="close" onClick={() => setShowTxt(false)}>Close</button>
                                    </div>
                                </div>
                            )} */}
            </tr>
          ))}
        </table>
      </div>
      <Modal width={280} isOpen={showTxt} onClose={() => setShowTxt(false)}>
        <div>
          <div className="popup-content">
            <p>{products[selectedItemIndex]?.description}</p>
            <button className="close" onClick={() => setShowTxt(false)}>
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
