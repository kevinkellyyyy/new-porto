import React from "react";

const Resume = () => {
  return (
    <div name="resume" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 my-5">
          <div className="text-center" data-aos="fade-left">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work Experience
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 mt-8 text-justify">
            <div className="w-2/2 sm:w-1/3 flex flex-col gap-6 text-right text-lg" data-aos="fade-right" data-aos-delay="50">
              June 2022 - Present
            </div>
            <div className="flex flex-col w-2/2 sm:w-2/3">
              <div data-aos="fade-left" data-aos-delay="100">
                <p className="text-2xl font-bold">Front-End Engineer</p>
                <p className="text-xl mt-2">PT. Sejahtera Lunaria Annua (Koinworks)</p>
              </div>
              <ul>
                <li className="px-0 pt-2">
                  <ul className="list-disc">
                    <li className="ml-5 pt-2 pr-0" data-aos="fade-left" data-aos-delay="200">
                      Successfully developed and deployed Business Calculator Webview for business user to calculate their Cost of Goods Sold and Break Even Point using React JS + Bootstrap
                    </li>
                    <li className="ml-5 pt-2 pr-0" data-aos="fade-left" data-aos-delay="250">
                      Develop Influencer Marketplace to help business user find influencer for their product endorsement using Next JS
                    </li>
                    <li className="ml-5 pt-2 pr-0" data-aos="fade-left" data-aos-delay="300">
                      Successfully developed and deployed Business Dashboard & Explore Page in Backoffice for add new feature menu with it's category in Business Account using Laravel + Vue JS
                    </li>
                    <li className="ml-5 pt-2 pr-0" data-aos="fade-left" data-aos-delay="350">
                      Maintaining Koinbill Product Backoffice and revamp in transaction history and sub product CRUD using Laravel + Vue JS
                    </li>
                    <li className="ml-5 pt-2 pr-0" data-aos="fade-left" data-aos-delay="350">
                      Maintaining NEO Backoffice feature config using React JS + Ant Design
                    </li>
                    <li className="ml-5 pt-2 pr-0" data-aos="fade-left" data-aos-delay="350">
                      Maintaining NEO Payment Link Webview hotfixes React JS + Ant Design
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 mt-8 text-justify">
            <div className="w-2/2 sm:w-1/3 flex flex-col gap-6 text-right text-lg" data-aos="fade-right" data-aos-delay="50">
              September 2020 - May 2022
            </div>
            <div className="flex flex-col w-2/2 sm:w-2/3">
              <div data-aos="fade-left" data-aos-delay="100">
                <p className="text-2xl font-bold">Front-End Engineer</p>
                <p className="text-xl mt-2">PT. Kreasi Kode Digital (Codify - MacroAd)</p>
              </div>
              <ul>
                <li className="px-0 pt-2">
                  <div data-aos="fade-left" data-aos-delay="150">
                    Task performed are, develop LINISTORE web-app and content management system (CMS) using angular, implement UI using ngx-bootstrap on angular website and integration API to backend using http services from angular and return it through pipe. 
                  </div>
                  <ul className="list-disc">
                    <li className="ml-5 pt-2 pr-0" data-aos="fade-left" data-aos-delay="200">
                      Successfully developed and deployed LINISTORE storefront for merchant and small shop for buying their product stocks using Angular JS and ngx-bootstrap. (https://linistore.id)
                    </li>
                    <li className="ml-5 pt-2 pr-0" data-aos="fade-left" data-aos-delay="250">
                      Successfully developed and deployed LINISTORE admin CMS and warehouse CMS for master data and warehouse products.
                    </li>
                    <li className="ml-5 pt-2 pr-0" data-aos="fade-left" data-aos-delay="300">
                      Successfully developed Know Your Customer (KYC) form for LINISTORE user with Google maps pinpoin location service for verifying user merchant.
                    </li>
                    <li className="ml-5 pt-2 pr-0" data-aos="fade-left" data-aos-delay="350">
                      Develop Mobile Point of Sales (MPOS) using React Native to help LINISTORE merchant maintain their shop's stocks, consignment item and transaction.
                    </li>
                  </ul>
                </li>
                <li className="px-0 pt-2">
                  <div data-aos="fade-left" data-aos-delay="400">
                    In partnership with PT Gudang Anak Bangsa (KeepPack), develop Kelola Client and Staff CMS for maintaining warehouse goods using Angular JS and tailwind css :
                  </div>
                  <ul className="list-disc">
                    <li className="ml-5 pt-2 pr-0" data-aos="fade-left" data-aos-delay="450">
                      Build dashboard page (total order, total sales, etc) with date filter in Kelola Client app.
                    </li>
                    <li className="ml-5 pt-2 pr-0" data-aos="fade-left" data-aos-delay="500">
                      Successfully develop edit client and staff account data and profile pic, and edit account password.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 mt-4 mb-8">
            <div className="w-2/2 sm:w-1/3 flex flex-col gap-6 text-right text-lg" data-aos="fade-right" data-aos-delay="100">
              June 2019 - September 2019
            </div>
            <div className="flex flex-col w-full sm:w-2/3">
              <div data-aos="fade-left" data-aos-delay="200">
                <p className="text-2xl font-bold">Front-End Engineer Intern</p>
                <p className="text-xl pt-2">PT. Lingkar Niaga Solusindo (SIRCLO)</p>
              </div>
              <ul className="list-disc">
                <li className="ml-5 pr-0 pt-2" data-aos="fade-left" data-aos-delay="300">
                  Develop Template Development Kit (TDK) project using React JS and GraphQL.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
