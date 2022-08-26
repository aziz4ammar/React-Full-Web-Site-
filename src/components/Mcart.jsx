import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./mcart.css"
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Head from "./Head";
import { dec, del, inc } from "../redux/actions";
export default function CartCheckout() {
    const state = useSelector(state=>state)
    const [total, setTotal] = useState(0)

const tot=()=>{
    let price=0
    state.map(el=>
        price+=el.cont*el.Price
        )
        setTotal(price)
}

useEffect(() => {
    
 tot()
}, [total,state])


    const dispatch = useDispatch()
  console.log(state)
  return (
    <div>
    <Head/>
    <br />
    <br />
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Your products
                    </MDBTypography>
                    {
                        state.map(el=>
                    
                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src={el.image}
                          fluid
                          style={{ width: "150px" }}
                          alt="Generic placeholder image"
                        />
                      </div>
                            
                      <div className="flex-grow-1 ms-3">
                        <button onClick={()=>dispatch(del(el.id))} className="float-end text-black">
                          <MDBIcon fas icon="times" />
                        </button>
                        <MDBTypography tag="h5" className="text-primary">
                          {el.name}
                        </MDBTypography>
                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">{el.Price}$ </p>

                          <div className="def-number-input number-input safari_only">
                            <button disabled={el.cont==1} onClick={()=>dispatch(dec(el.id))} className="minus"></button>
                            <p className="quantity fw-bold text-black">{el.cont}</p>
                            <button onClick={()=>dispatch(inc(el.id)) } className="plus"></button>
                          </div>
                        </div>
                      </div>
                    </div>)
                    }
                    <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1266f1",
                        opacity: 1,
                      }}
                    />
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total:
                      </MDBTypography>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        {total}$
                      </MDBTypography>
                    </div>
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total To Pay:
                      </MDBTypography>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                      {total*3.2}TND
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Payment
                    </MDBTypography>

                    <form className="mb-5">
                      <MDBInput
                        className="mb-5"
                        label="Card number"
                        type="text"
                        size="lg"
                        placeholder="1234 5678 9012 3457"
                        required
                      />

                      <MDBInput
                        className="mb-5"
                        label="Name on card"
                        type="text"
                        size="lg"
                        placeholder="Full Name"
                        required
                      />

                      <MDBRow>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Expiration"
                            type="text"
                            size="lg"
                            minLength="5"
                            maxLength="7"
                            placeholder="MM/YYYY"
                            required
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="CVV"
                            type="text"
                            size="lg"
                            minLength="3"
                            maxLength="3"
                            placeholder="CVV"
                            required
                          />
                        </MDBCol>
                      </MDBRow>

                      <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </p>

                      <MDBBtn block size="lg">
                        Buy now
                      </MDBBtn>

                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <Link to="/">
                          <MDBIcon fas icon="angle-left me-2" />
                          Back to shopping
                        </Link>
                      </MDBTypography>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
  );
}