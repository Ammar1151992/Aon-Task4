import "./input.css"
import { useStore } from "../userState"
import { Modal } from "../Modal/modal";
import { IoMdClose } from "react-icons/io";

export const Input = ({addProducts, editProducts}) => {
    const {
        open, 
        setOpen, 
        title, 
        setTitle, 
        description, 
        setDescription, 
        price, 
        setPrice, 
        loading, 
        edit, 
        setEdit} = useStore();
    return (
            <Modal width={500} isOpen={open} isEdit={edit}>
                <div className="produc">
                    <div className="add-product">
                        {open && <h3> Add New Product</h3>} 
                        {edit && <h3> Edit Product</h3>}
                        <div onClick={() => {
                            setOpen(false)
                            setEdit(false)
                        }} className="close-icon">
                            <IoMdClose />
                        </div>
                    </div>
                    <div className="product-items">
                        <div>
                            <p>Product Name</p>
                            <input 
                            type="text" 
                            placeholder="Ex: iPhone x" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            />
                        </div>
                        <div>
                            <p>Description</p>
                            <input 
                            className="description" 
                            type="text" placeholder="Ex: An apple mobile which is nothing like apple" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                            />
                            
                        </div>
                        <div>
                            <p>Product Price</p>
                            <input 
                            type="text" 
                            placeholder="Ex: 12,000" 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="product-buttom">
                        <button className="save" onClick={open ? addProducts : editProducts}>Save</button>
                        <button onClick={() => setOpen(false)} className="cancel">Cancel</button>
                    </div>
                </div>
                <div className={loading ? "lod" : ""}>
                <div class="loader"></div>
                </div>
            </Modal>
    )
}
