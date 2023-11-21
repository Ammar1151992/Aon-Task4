import "./add.css"
import { useStore } from "../userState";
import Swal from 'sweetalert2';
import { Input } from "../Input/input";

export const Add = () => {
    const {
      title,
      description,
      price,
      open,
      setOpen, 
      setLoading, 
      products, 
      setProducts,
      setTitle,
      setDescription,
      setPrice } = useStore()
    
    const addProducts = async () => {
        setLoading(true);
        try {
          let add = await fetch("https://dummyjson.com/products/add", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                description,
                price,
            })
          });
          let data = await add.json();
          setTitle("")
          setDescription("")
          setPrice("")
          Swal.fire({
            title: 'Added!',
            icon: 'success',
            timer: "3000",
            showConfirmButton: false,
          })
          setLoading(false);
          setOpen(false)
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className="button">
            <button onClick={() => setOpen(true)}>
                + New Product
            </button>
            {open && <Input addProducts ={() => addProducts()}/>}
        </div>
    )
}