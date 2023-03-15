import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";


function App() {
  const [show, setShow] = useState(false);
  const [itemsList, setItemsList] = useState([]);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [itemId, setItemId] = useState("");
  const [design, setDesign] = useState("");
  const [productId, setProductId] = useState("");
  const [size, setSize] = useState("");
  const [pricePerItem, setPricePerItem] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  //fun for delete items
  const deleteItem = (id) => {
    const updatedItemsList = itemsList.filter((item) => item.id !== id);
    setItemsList(updatedItemsList);
  };

    //  
  const openAddItemModal = () => {
    setShowAddItemModal(true);
  };
  

  const closeAddItemModal = () => {
    setShowAddItemModal(false);
  };
  const addItem = (
    itemId,
    design,
    productId,
    size,
    pricePerItem,
    quantity,
    totalPrice
  ) => {
    const newItem = {
      id: itemId,
      design: design,
      productId: productId,
      size: size,
      pricePerItem: pricePerItem,
      quantity: quantity,
      totalPrice: totalPrice,
    };
    const updatedItemsList = [...itemsList, newItem];
    setItemsList(updatedItemsList);
    closeAddItemModal();
  };

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo">
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className="nav-logo-name">Homepage</span>
            </Link>

            <div className="nav-list">
              <Link to="/editProfileSidebar" className="nav-link active">
                <i className='<i class="fa-sharp fa-solid fa-pen-to-square"></i>'></i>
                <span className="nav-link-name">Edit Profile</span>
              </Link>
              <Link to="/forgotPassSidebar" className="nav-link">
                <i className="fas fa-hotel nav-link-icon"></i>
                <span className="nav-link-name">Change Password</span>
              </Link>
              <Link to="/list" className="nav-link">
                <i className="fas fa-image nav-link-icon"></i>
                <span className="nav-link-name">List</span>
              </Link>

              <Link to="/PersonalInfo" className="nav-link">
                <i className="fas fa-image nav-link-icon"></i>
                <span className="nav-link-name">Personal Info</span>
              </Link>

              <Link to="/CustomerOrder" className="nav-link">
                <i className="fas fa-image nav-link-icon"></i>
                <span className="nav-link-name">CustomerOrder</span>
              </Link>
              <Link to="/ProfileCard" className="nav-link">
                <i className="fas fa-image nav-link-icon"></i>
                <span className="nav-link-name">Profile Card</span>
              </Link>
            </div>
          </div>
          <Link to="/login" className="nav-link">
            <i className="fas fa-sign-out nav-link-icon"></i>
            <span className="nav-link-name">Logout</span>
          </Link>

        </nav>
      </aside>

      <div style={{marginTop:"-240px"}}>
        <h1>Add Items here </h1>
        <Table striped //   variant="dark"
          bordered
          hover
          style={{ width: "1000px",margin:"0px",padding:"0px"}}
        >
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Design</th>
              <th>Product ID</th>
              <th>Size</th>
              <th>Price Per Item</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {itemsList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.design}</td>
                <td>{item.productId}</td>
                <td>{item.size}</td>
                <td>{item.pricePerItem}</td>
                <td>{item.quantity}</td>
                <td>{item.totalPrice}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteItem(item.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="primary" onClick={openAddItemModal}>
          Add Line Items
        </Button>

        <Modal show={showAddItemModal} onHide={closeAddItemModal} >
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="itemId">Item ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="itemId"
                  value={itemId}
                  onChange={(e) => setItemId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="design">Design</label>
                <input 
                  type="text"
                  className="form-control"
                  id="design"
                  value={design}
                  onChange={(e) => setDesign(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="productId">Product ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="productId"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="size">Size</label>
                <input
                  type="text"
                  className="form-control"
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pricePerItem">Price Per Item</label>
                <input
                  type="number"
                  className="form-control"
                  id="pricePerItem"
                  value={pricePerItem}
                  onChange={(e) => setPricePerItem(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="totalPrice">Total Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="totalPrice"
                  value={totalPrice}
                  onChange={(e) => setTotalPrice(e.target.value)}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeAddItemModal}>
              Close
            </Button>
            <Button 
              variant="primary"
              onClick={() =>
                addItem(
                  itemId,
                  design,
                  productId,
                  size,
                  pricePerItem,
                  quantity,
                  totalPrice
                )
              }
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </main>
  );
}

export default App;
