import React from "react";

const Resume = () => {
  return (
    <div name="resume" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 my-5">
          <div className="text-center">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work Experience
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 p-6 mt-4">
            <div className="w-2/2 sm:w-1/2 flex flex-col gap-6 text-right text-lg">
              Since September 2020
            </div>
            <div className="flex flex-col w-2/2 sm:w-1/2">
              <p className="text-2xl text">Front-End Developer</p>
              <p>PT. Kreasi Kode Digital (Codify)</p>
              <ul className="list-disc">
                <li className="px-0 ml-5">
                  Successfully developed and deployed LINISTORE website project for merchant and small 
                  shop for buying their product stocks using Angular JS and ngx-bootstrap.
                </li>
                <li className="px-0 ml-5">
                  Contribute in PT Gudang Anak Bangsa (KeepPack) team for developing Kelola client and 
                  staff web app for maintaining warehouse goods using Angular JS and tailwind css.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-6 p-6">
            <div className="w-full sm:w-1/2 flex flex-col gap-6 text-right">
              June 2019 - September 2019
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <p className="text-2xl">Front-End Engineer Intern</p>
              <p>PT. Lingkar Niaga Solusindo (SIRCLO)</p>
              <ul className="list-disc">
                <li className="px-0 ml-5">Contribute in Template Development Kit (TDK) project using React JS and GraphQL.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
