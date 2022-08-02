import React from "react";
import { AiFillTwitterSquare} from 'react-icons/ai';
import { AiFillFacebook} from 'react-icons/ai';
import { AiFillLinkedin} from 'react-icons/ai';
import { HiLocationMarker} from 'react-icons/hi';
import { BsTelephoneFill} from 'react-icons/bs';
import { AiFillMail} from 'react-icons/ai';
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer p-10 text-base-content justify-around">
        <div>
          <span className="footer-title">MOTION</span>
          <a className="link link-hover"><HiLocationMarker className="mb-2"/> Brivibas Street, Riga, LV</a>
          <a className="link link-hover"><BsTelephoneFill className="mb-2"/> +371 22 333 777</a>
          <a className="link link-hover"><AiFillMail className="mb-2"/> Info@autoparts.com</a>
        </div>
        <div>
          <span className="footer-title">Spare Parts</span>
          <a className="link link-hover">Tyres nd Wheels.</a>
          <a className="link link-hover">Engine.</a>
          <a className="link link-hover">Car Accessories.</a>
          <a className="link link-hover">Car Glass</a>
          <a className="link link-hover">Car Batteries</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 justify-around">
        <div className="items-center grid-flow-col">
          <p>&copy; Md Naimur Rahaman Emon. All rights reserved.</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link to=""><AiFillFacebook/></Link>
            <Link to=""><AiFillTwitterSquare/></Link>
            <Link to=""><AiFillLinkedin/></Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
