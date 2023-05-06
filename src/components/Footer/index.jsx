import React from "react";
import "./Footer.scss";
import { Button, Container, Divider, Grid } from "@material-ui/core";
import {
  Apple,
  Facebook,
  Instagram,
  Telegram,
  Twitter,
} from "@material-ui/icons";

export const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <div className="footer-title">
                <a href="#" className="logo">
                  ZONE
                </a>
              </div>

              <div className="main-p footer-description">
                The starting point for your next project based on
                easy-to-customize Material-UI © helps you build apps faster and
                better.
              </div>

              <div className="comunity">
                <div className="footer-main-title">Comunity</div>
                <ul>
                  <li className="footer-a12">
                    <a href="#" className="footer-a2">
                      Documentation
                    </a>
                  </li>
                  <li className="footer-a12">
                    <a href="#" className="footer-a2">
                      Changelog
                    </a>
                  </li>
                  <li className="footer-a12">
                    <a href="#" className="footer-a2">
                      Contributing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="comunity">
                <div className="footer-main-title">Let’s stay in touch</div>
                <div className="main-p footer-description">
                  Ubscribe to our newsletter to receive latest articles to your
                  inbox weekly.
                </div>
                <div className="email">
                  <input
                    type="text"
                    className="email-input"
                    placeholder="Email Address"
                  />
                  <Button className="global-btn d-flex">Subscribe</Button>
                </div>
              </div>

              <div className="comunity">
                <div className="footer-main-title">Social</div>
                <div className="comunity footer-icons">
                  <ul>
                    <li>
                      <Facebook />
                    </li>
                    <li>
                      <Instagram />
                    </li>
                    <li>
                      <Telegram />
                    </li>
                    <li>
                      <Twitter />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="comunity">
                <div className="footer-main-title pb-3">Apps</div>
                <div className="download-btns">
                  <Button className="download-btn d-flex">
                    <div className="btn-icon">
                      <Apple />
                    </div>
                    <div className="btn-titles">
                      <div className="btn-header">Dwnload On The</div>
                      <div className="btn-body">Apple Store</div>
                    </div>
                  </Button>
                  <Button className="download-btn d-flex">
                    <div className="btn-icon">
                      <img
                        src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Icon-Logo.wine.svg"
                        className="play-market-icon"
                      />
                    </div>
                    <div className="btn-titles">
                      <div className="btn-header">Dwnload On From</div>
                      <div className="btn-body">Play Market</div>
                    </div>
                  </Button>
                </div>
              </div>
            </Grid>

            <Grid item xs={6}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={3}>
                  <div className="f-title main-h1">Marketing</div>
                  <ul>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Landing
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Services
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Case Studies
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Case Study
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Blog Posts
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Blog Post
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        About
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Contact
                      </a>
                    </li>
                  </ul>

                  {/* travel */}
                  <div className="f-title main-h1 pt-2">Travel</div>
                  <ul>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Landing
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Thours
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Thour
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Checkout
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Order Complated
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Blog Posts
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        About
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Contact
                      </a>
                    </li>
                  </ul>
                </Grid>

                <Grid item xs={3}>
                  <div className="f-title main-h1">Career</div>
                  <ul>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Landing
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Jobs
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Job
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Blog Posts
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Blog Post
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        About
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Contact
                      </a>
                    </li>
                  </ul>

                  {/* travel */}
                  <div className="f-title main-h1 pt-2">E-learning</div>
                  <ul>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Landing
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Courses
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Course
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Blog Posts
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Blog Post
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        About
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Contact
                      </a>
                    </li>
                  </ul>
                </Grid>

                <Grid item xs={3}>
                  <div className="f-title main-h1">E-commerce</div>
                  <ul>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Landing
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Products
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Product
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Cart
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Checkout
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Order Complated
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Wishlist
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Compare
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Account Personal
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Account Wishlist
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Account Vouchers
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Account Orders
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Account Payment
                      </a>
                    </li>
                  </ul>
                </Grid>

                <Grid item xs={3}>
                  <div className="f-title main-h1">Common</div>
                  <ul>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Login Cover
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Login Illistration
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Login Background
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Register Cover
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Register Illustration
                      </a>
                    </li>
                    <li className="footer-a1">
                      <a href="#" className="footer-a">
                        Register Background
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Reset Password
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Verify Code
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        404 Error
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        500 Error
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Maintenance
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        ComingSoon
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Pricing 01
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Pricing 02
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Paymet
                      </a>
                    </li>
                    <li className="footer-a1 pb-3">
                      <a href="#" className="footer-a">
                        Support
                      </a>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </footer>
      {/* footer bottom */}
      <div className="footer-bottom">
        <Divider />

        <Container>
          <div className="d-flex jcsb">
            <div className="left-footer main-p">
              © 2023. All rights reserved
            </div>
            <div className="right-footer main-p">
                <a href="#" className="main-p link1">Help Center</a>
                <a href="#" className="main-p link1">Terms of Service</a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
