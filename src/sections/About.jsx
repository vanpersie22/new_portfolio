import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {

    const [isCopied, setIsCopied] = useState(false);
    const copyText = () => {
        navigator.clipboard.writeText("ezealijonas@gmail.com");

        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };


  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full
                        sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">
                You found Jonas <span className="text-pink-500">Dev</span>
              </p>
              <p className="grid-subtext"> I am based in Lagos, Nigeria
<img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg" alt="Nigerian flag" className="inline-block w-6 h-4 ml-1" />.

I have 4 years of experience developing web and full-stack applications using React, Tailwind, Bootstrap, and Laravel, as well as mobile applications with React Native.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/untitled.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Player Stacks</p>
              <p className="grid-subtext">
              JavaScript with a focus on React js,Next js Three.js, React Native, Tailwind, MongoDB, Express,Git, CI/CD and Node.js. I also work with Python (PyTorch and Keras) for machine learning.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "Rjieka, Croatia",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">Educational Background</p>
              <p className="grid-subtext">
               
                I have a Bachelor&apos;s degree in computer science from Ebonyi state
                university 2019, & and a Master&apos;s degree in computer science from Babcock
                University.
              </p>
              <a
                href="/assets/CV_JONAS_EZEALI.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  name="Download CV"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Research Interest (Ph.D)</p>
              <p className="grid-subtext">
                Computer Vision, Natural Language Processing, Machine Learning ◦
                With particular focus on how ML models can be used to improve
                computer vision /How language models interact both with humans
                and other models.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full 
                md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            /> 
            <div className="space-y-2">
                <p className="grid-subtext text-center">Write me ...</p>
                <div className="copy-container" onClick={copyText}>
                    <img src={isCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                    <p className="lg:text-2xl md:text=xl font-medium text-gray_gradient text-white">
                       ezealijonas@gmail.com 
                    </p>

                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
