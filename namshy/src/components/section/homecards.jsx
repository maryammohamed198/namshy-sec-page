import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Homecards() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedCardIndex(index);
  };
  const homecards = [
    {
      id: 1,

      icon: "",
      title: "mega deal",

      imgs: [
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 1 text",
        },
        {
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Card 2 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 3 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 4 text",
        },
        {
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Card 5 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 6 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 7 text",
        },
        {
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Card 8 text",
        },
      ],
    },
    {
      id: 2,
      title: "hot sale",
      icon: "",
      imgs: [
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 1 text",
        },
        {
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Card 2 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 3 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 4 text",
        },
        {
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Card 5 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 6 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 7 text",
        },
        {
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Card 8 text",
        },
      ],
    },
    {
      id: 3,
      title: "title 3",
      icon: "",
      imgs: [
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 1 text",
        },
        {
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Card 2 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 3 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 4 text",
        },
        {
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Card 5 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 6 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 7 text",
        },
        {
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Card 8 text",
        },
      ],
    },
    {
      id: 4,
      title: "title 4",
      icon: "",
      imgs: [
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 1 text",
        },
        {
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Card 2 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 3 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 4 text",
        },
        {
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Card 5 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 6 text",
        },
        {
          src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Card 7 text",
        },
        {
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Card 8 text",
        },
      ],
    },
  ];

  return (
    <div>
      {homecards.map((card) => (
        <Container
          className="my-4"
          style={{ justifyContent: "center", backgroundColor: "white" }}
          key={card.id}
        >
          <div className="" style={{ height: "70px", textAlign: "left" }}>
            <div
              className="col-2"
              style={{ display: "inline-flex", fontSize: "2rem" }}
            >
              <i class="bi bi-handbag-fill " style={{ marginLeft: "30px" }}></i>
              <h5 style={{ padding: "13px" }}>Hot Sale</h5>
            </div>
            <div
              className=" col-9"
              style={{ display: "flex", display: "inline-flex" }}
            >
              <a
                className="btn btnfilter mx-2 d-flex"
                style={{
                  backgroundColor: "rgba(178, 182, 186, 0.219)",
                  borderRadius: "26px",
                  border: "1.5px solid rgba(178, 182, 186, 0.219)",
                }}
                href="#"
                role="button"
              >
                Hot sale
              </a>

              <a
                className="btn btnfilter mx-2"
                style={{
                  backgroundColor: "rgba(178, 182, 186, 0.219)",
                  borderRadius: "26px",
                  border: "1.5px solid rgba(178, 182, 186, 0.219)",
                }}
                href="#"
                role="button"
              >
                Electronics
              </a>
              <a
                className="btn btnfilter mx-2"
                style={{
                  backgroundColor: "rgba(178, 182, 186, 0.219)",
                  borderRadius: "26px",
                  border: "1.5px solid rgba(178, 182, 186, 0.219)",
                }}
                href="#"
                role="button"
              >
                Beauty
              </a>
              <a
                className="btn btnfilter mx-2"
                style={{
                  backgroundColor: "rgba(178, 182, 186, 0.219)",
                  borderRadius: "26px",
                  border: "1.5px solid rgba(178, 182, 186, 0.219)",
                }}
                href="#"
                role="button"
              >
                Home
              </a>
              <a
                className="btn btnfilter mx-2"
                style={{
                  backgroundColor: "rgba(178, 182, 186, 0.219)",
                  borderRadius: "26px",
                  border: "1.5px solid rgba(178, 182, 186, 0.219)",
                }}
                href="#"
                role="button"
              >
                Accessories
              </a>
              <a
                className="btn btnfilter mx-2"
                style={{
                  backgroundColor: "rgba(178, 182, 186, 0.219)",
                  borderRadius: "26px",
                  border: "1.5px solid rgba(178, 182, 186, 0.219)",
                }}
                href="#"
                role="button"
              >
                Shoes
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-around flex-wrap">
            {card.imgs.map((image, index) => (
              <div
                className="card m-2"
          style={{border: selectedCardIndex === index ? '1px solid #58b368' : '0.5px solid #C8D2D1', width: "288px", height: "320px"}}
                
                // style={{ width: "18rem", height: "320px" ,}}
                key={index}
              >
                <img
                  className="card-img-top"
                  style={{ height: "230px" }}
                  src={image.src}
                  alt="Card image cap"
                />
                <div
                  className="card-body my-2 d-flex   justify-content-between"
                  style={{ fontSize: "15px", padding: "5px" }}
                >
                  <div className="d-flex flex-column align-items-start ">
                   
                    <Card.Title className="mb-0">productname</Card.Title>
                    <Card.Text className="mb-0">Price: 456</Card.Text>
                    <Card.Text>Quantity: 4567</Card.Text>
                  </div>
                  <div>
                    <button
                      className="btn text-light my-3 mx-3  "
                      style={{ backgroundColor: "#7DCEA0" }}
                      onClick={() => handleButtonClick(index)}
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      ))}
    </div>
  );
}

export function HomeScards() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedCardIndex(index);
  };
  const homescards = [
    {
      id: 2,
      title: "tite ",
      icon: "",
      images: [
        {
          num: 8,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "First slide",
        },

        {
          num: 2,
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          alt: "Second slide",
        },
        {
          num: 3,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Third slide",
        },
      ],
      productname: "Faux Leather Skirt",
      op: " Casual with ed",
      np: "100",
    },
    {
      id: 2,
      images: [
        {
          num: 8,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "First slide",
        },
        {
          num: 7,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "First slide",
        },

        {
          num: 3,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Third slide",
        },
      ],
      productname: "Faux Leather Skirt",
      op: " Casual with ed",
      np: "100",
    },
    {
      id: 2,
      images: [
        {
          num: 8,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "First slide",
        },
      ],
      productname: "Faux Leather Skirt",
      op: " Casual with ed",
      np: "100",
    },
    {
      id: 2,
      images: [
        {
          num: 8,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "First slide",
        },
        {
          num: 7,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "First slide",
        },

        {
          num: 3,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Third slide",
        },
      ],
      productname: "Faux Leather Skirt",
      op: " Casual with ed",
      np: "100",
    },
    {
      id: 2,
      images: [
        {
          num: 8,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "First slide",
        },
      ],
      productname: "Faux Leather Skirt",

      op: "111",
      np: "100",
    },
    {
      id: 2,
      images: [
        {
          num: 2,
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          alt: "Second slide",
        },
        {
          num: 3,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Third slide",
        },
      ],
      productname: "Faux Leather Skirt",
      np: "100",
      op: "111",
    },
    {
      id: 2,
      images: [
        {
          num: 8,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "First slide",
        },
        {
          num: 7,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "First slide",
        },

        {
          num: 3,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Third slide",
        },
      ],
      productname: "Faux Leather Skirt",
      op: "111",
      np: "100",
    },
    {
      id: 2,
      images: [
        {
          num: 8,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "First slide",
        },
        {
          num: 7,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "First slide",
        },
        {
          num: 1,
          src: "https://images.pexels.com/photos/712316/pexels-photo-712316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "First slide",
        },
        {
          num: 2,
          src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
          alt: "Second slide",
        },
      ],
      productname: "Faux Leather Skirt",
      op: " Casual with ed",
      np: "100",
    },
  ];
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    navigate(`/SelectedProductPage/${product.id}`);
  };
  return (
    <div className="contain d-flex  ">
      {homescards.map((product,index) => (
        <div
          className="card m-2 "
          key={product.id}
          style={{border: selectedCardIndex === index ? '1px solid #58b368' : '0.5px solid #C8D2D1', width: "288px", height: "320px"}}

    
        >
          <div
            className="carousel-wrapper"
            onClick={() => handleImageClick(product)}
            style={{ width: "288px", height: "230px" }}
          >
            <Carousel controls={false}>
              {product.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block  "
                    style={{ height: "230px",width:"287px" }}
                    src={image.src}
                    alt={image.alt}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div
            className="card-body my-2 d-flex   justify-content-between"
            style={{ fontSize: "15px", padding: "5px" }}
          >
            <div className="d-flex flex-column align-items-start ">
             
              <Card.Title className="mb-0">productname</Card.Title>
              <Card.Text className="mb-0">Price: 456</Card.Text>
              <Card.Text>Quantity: 4567</Card.Text>
            </div>
            <div>
              <button
                className="btn text-light my-3 mx-3  "
                style={{ backgroundColor: "#7DCEA0" }}
                onClick={() => handleButtonClick(index)}
              >
                <i class="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
