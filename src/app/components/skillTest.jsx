"use client";
import React, { useState, useEffect } from "react";
import image from "./assets/html.svg";
import Image from "next/image";
import ComparisonChart from "./comparisonGraph";
// import RightPanel from "./rightPanel";
import SyllabusWiseAnalysis from './syllabusWiseAnalysis'
import QuestionAnalysis from './questionAnalysis'


const SkillTestCard = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    rank: "3",
    percentile: "",
    score: "12",
  });
  useEffect(() => {
    if (formData.rank) {
      document.querySelector(".text-xl.font-bold.text-gray-700").innerText =
        formData.rank;
    }
    if (formData.percentile) {
      document.querySelectorAll(
        ".text-xl.font-bold.text-gray-700"
      )[1].innerText = formData.percentile + "%";
    }
    if (formData.score) {
      document.querySelectorAll(
        ".text-xl.font-bold.text-gray-700"
      )[2].innerText = formData.score + "/15";
    }
  }, [formData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const updateValues = () => {
    if(showForm === true){
      setShowForm(false);
    }
    else{
      setShowForm(true);
    }
  };
  return (
    <>   
      <div className="grid grid-cols-12 gap-4">
        {/* middle section  */}
        <div id="middle section" className="col-span-7 max-lg:col-span-12">
          {/* heading -skill test */}
          <div className=" flex sm:items-start sm:justify-start sm:text-xl my-5  max-sm:justify-center max-sm:font-bold">
            <h1>Skill Test</h1>
          </div>
          {/* html section starts here */}
          <div className=" bg-white rounded-lg shadow-md p-5 mb-5">
            <div className="flex items-center  max-sm:flex-col  ">
              <Image
                height={48}
                width={48}
                src={image}
                alt="HTML Logo"
                className="w-12"
              />
              <div className="flex-1 ml-3">
                <h1 className="text-lg font-bold mb-1 max-sm:text-center">
                  Hyper Text Markup Language
                </h1>
                <p className="text-gray-500 text-sm max-sm:text-center">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
              <button
                onClick={updateValues}
                className="px-3 py-1 bg-blue-700 text-white rounded-md text-sm hover:bg-blue-800 max-sm:mt-5"
              >
                Update
              </button>
            </div>
          </div>

          {/* quick statistics starts from here */}
          <div className=" bg-white rounded-lg shadow-md p-5">
            <div className="flex-1 mb-5">
              <h1 className="text-lg font-bold">Quick Statistics</h1>
            </div>
            <div className="flex justify-between max-sm:flex-col">
              {/* rank section starts here */}
              <div className="flex max-sm:my-8">
                {/* icon part of the rank section */}
                <div className=" mr-3 rounded-full bg-gray-100 flex items-center justify-center p-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                    />
                  </svg>
                </div>
                {/*text part of the rank section*/}
                <div>
                  <h2 className="text-xl font-bold text-gray-700">
                    {formData.rank ? formData.rank : 2}
                  </h2>
                  <p className="text-gray-500 text-sm">YOUR RANK</p>
                </div>
              </div>

              {/* percentile section starts here */}
              <div className="border-l-2 border-gray-100 mx-4 max-sm:hidden"></div>
              <div className="flex">
                {/* icon part of the percentile section */}
                <div className=" mr-3 rounded-full bg-gray-100 flex items-center justify-center p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                    />
                  </svg>
                </div>
                {/* text part of the percentile section */}
                <div>
                  <h2 className="text-xl font-bold text-gray-700">
                    {formData.percentile ? formData.percentile : 90}%
                  </h2>
                  <p className="text-gray-500 text-sm">PERCENTILE</p>
                </div>
              </div>

              {/* score section starts here */}
              <div className="border-l-2 border-gray-100 mx-4 max-sm:hidden"></div>
              <div className="flex max-sm:my-8">
                <div className=" mr-3 rounded-full bg-gray-100 flex items-center justify-center p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-700">
                    {formData.score ? formData.score : 12}/15
                  </h2>
                  <p className="text-gray-500 text-sm">CORRECT ANSWERS</p>
                </div>
              </div>
            </div>
          </div>

          {/* comparison graph */}
          <div className=" ">
            <div className="my-10">
              <h3 className="font-bold">Comparison Graph</h3>
              <p>
                <span className="font-bold">
                  You scored {formData.percentile}%
                  percentile
                </span>{" "}
                which is lower than the
                <br />
                average percentile 72% of all the engineers who took the
                assessment
              </p>
            </div>

            <ComparisonChart percentile={formData.percentile} />
          </div>
        </div>

        {/* Right panel */}
        <div id="rightpanel" className="col-span-4 mt-16 max-lg:col-span-12">
          <SyllabusWiseAnalysis/>
          <div className="mt-10">

          <QuestionAnalysis score = {formData.score}/>
          </div>
        </div>
      </div>
      
      {/* popup form */}
      {showForm ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="rank" className="mr-2">
                  Update your rank
                </label>
                <input
                  type="text"
                  id="rank"
                  name="rank"
                  value={formData.rank}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="percentile" className="mr-2">
                  Update your percentile
                </label>
                <input
                  type="text"
                  id="percentile"
                  name="percentile"
                  value={formData.percentile}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="score" className="mr-2">
                  Update your current score (out of 15)
                </label>
                <input
                  type="text"
                  id="score"
                  name="score"
                  value={formData.score}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="reset"
                  className="border-2 mx-2 text-black px-4 py-2 rounded"
                  onClick={updateValues}
                >
                  close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={updateValues}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SkillTestCard;
