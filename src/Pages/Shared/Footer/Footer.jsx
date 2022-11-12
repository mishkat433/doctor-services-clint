import React from 'react';
import { Link } from 'react-router-dom';
import shape from "../../../assets/images/footer.png";

const Footer = () => {
    return (
        <footer className=" p-10 "
            style={{
                background: `url(${shape}) no-repeat center center`,
                boxShadow: "0px 10px 20px 0px gray"
            }}
        >
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <hr className='border-1 mt-10 mb-7' />
            <div className="text-center">
                <p>Copyright © 2022 - All right reserved</p>
            </div>

        </footer >
    );
};

export default Footer;