import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer className="relative bg-blue-light w-full mt-7 rich-content">
    <div className="constrained mh-auto ph-6">
      <div className="flex flex-wrap gutter-ns">
        <div className="w-half w-quarter-ns ph-2-ns mb-4 mb-0-ns">
          <h4 className="h2 mt-0">Advice</h4>
          <ul className="list-style-none p-0 lh-3">
            <li>
              <Link href="/benefits">
                <a>Benefits</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Work</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Debt and Money</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Consumer</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Family</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Housing</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Law and courts</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Immigration</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Health</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-half w-quarter-ns ph-2-ns mb-4 mb-0-ns">
          <h4 className="h2 mt-0">Resources and tools</h4>
          <ul className="list-style-none p-0">
            <li>
              <Link href="#">
                <a>Advisor resources</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Education resources</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Accessibility</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Site search</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>A-Z of advice</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-half w-quarter-ns ph-2-ns mb-4 mb-0-ns">
          <h4 className="h2 mt-0">More from us</h4>
          <ul className="list-style-none p-0">
            <li>
              <Link href="#">
                <a>About us</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Annual reports</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Contact us</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Complaints</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Media</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Policy reseach</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Support us</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Volunteering</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Jobs</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-half w-quarter-ns ph-2-ns mb-4 mb-0-ns">
          <h4 className="h2 mt-0">About Citizens Advice</h4>
          <ul className="list-style-none p-0">
            <li>
              <Link href="#">
                <a>How we provide advice</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>The difference we make</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Support us</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>How Citizens Advice works</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Disclaimer and Copyright</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Privacy and cookies</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-column flex-row-ns items-center-ns mt-7">
        <Link href="/">
          <img
            alt="Citizens Advice brand"
            className="mb-4 mb-0-ns"
            src="/images/ca-logo_100px.svg"
            width="75"
            height="75"
          />
        </Link>

        <p className="pl-0 pl-5-ns mb-0 black font-size-1">
          Copyright © 2018 Citizens Advice. All rights reserved.
          <br />
          Citizens Advice is an operating name of the National Association of
          Citizens Advice Bureaux. Registered charity number 279057
          <br />
          VAT number 726 0202 76 Company limited by guarantee. Registered number
          01436945 England
          <br />
          Registered office: Citizens Advice, 3rd Floor North, 200 Aldersgate,
          London, EC1A 4HD
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
