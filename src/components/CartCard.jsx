
export const CartCard = ({ e, data, setData }) => {
  let handleCard = (type, id) => {
    let index = "";
    for (let i = 0; i < data[0].products.length; i++) {
      if (id === data[0].products[i].id) {
        index = i;
      }
    }
    let temp = [...data]
    let obj = temp[0].products[index]
    console.log(obj)
    if (type === "increment") {
      let quantity = obj.quantity+1
      console.log(quantity)
      temp[0].products.splice(index,1,{
        ...obj,
         quantity
      })

    }
     else{
        if(obj.quantity!==1){
          let quantity = obj.quantity-1
          console.log(quantity)
          temp[0].products.splice(index,1,{
            ...obj,
             quantity
          })
        }
        
     }

    setData(temp)
  };
  return (
    <div className="row mt-3">
      <div className="card">
        <div className="row g-2">
          <div className="col-3">
            <img
              src={e.images[0]}
              alt=""
              className="img-fluid"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="col-7 mt-5">
            <div className="card-title">{e.title}</div>
            <div className="card-text">{e.description}</div>
            <div className="card-text m-1">
              <strong>{`price: ${e.price}`}</strong>
            </div>
          </div>
          <div className="col-2 mt-5 d-flex ">
            <p
              className="btn"
              onClick={() => {
                handleCard("decrement", e.id);
              }}
            >
              -
            </p>
            <p className="text mt-1">{e.quantity}</p>
            <p
              className="btn"
              onClick={() => {
                handleCard("increment", e.id);
              }}
            >
              +
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
