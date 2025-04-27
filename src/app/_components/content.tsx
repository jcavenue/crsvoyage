"use client";
import React from "react";
import { Layout, Row, Col, Button } from "antd";

const ContentBody = () => {
  const { Footer, Content } = Layout;

  return (
    <>
      {/* Main content */}
      <Content
  className="flex flex-col items-center justify-center p-5 mx-3 md:p-20 md:mx-15"
  style={{
    backgroundImage: 'url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', // replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    minHeight: '100vh',
  }}
>
  {/* Optional overlay to make the background semi-transparent */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust opacity as needed
      zIndex: 1, // Make sure the overlay is above the image but below the content
    }}
  ></div>

  <Row gutter={16}>
    {" "}
    {/* Add gutter for spacing between columns */}
    <Col xs={24} md={12} className="text-center md:text-start">
      {" "}
      {/* Column 1 */}
      <h1 className="text-3xl font-bold mb-5 text-white z-10 relative">
        TRAVEL WITH EASE
      </h1>
      <p className="text-lg mb-8 text-white z-10 relative">
        Discover your perfect getaway with ease! Our travel booking platform offers a seamless experience to explore, plan, and book your next adventure. From flights and hotels to car rentals and activities, find everything you need to create unforgettable memories. Start your journey now!
      </p>
      <div className="flex flex-row gap-5 md:justify-start justify-center z-10 relative">
        <Button type="primary" size="large">
          Book Now
        </Button>{" "}
        <Button
          type="default"
          size="large"
          style={{
            borderColor: "black",
            color: "black",
            background: "white",
          }}
        >
          Learn More
        </Button>
      </div>
    </Col>
    <Col xs={24} md={12}>
      {" "}
      {/* Column 2 */}
      <div className="flex justify-center items-center h-full">
        {/* You can add an image, a call-to-action, or any other content here */}
      </div>
    </Col>
  </Row>
</Content>


      {/* Footer */}
      <Footer className="text-center text-lg bottom-0">
        ©2025 CRS Voyage. All rights reserved.
      </Footer>
    </>
  );
};

export default ContentBody;
