import React from "react";

export default function Home() {
  return (
    <div style={{ paddingTop: "1px" }}>
      <div className="flex flex-col items-center w-full font-console p-5">
        <div className="w-full mt-5 max-w-screen-lg text-red">
          <div
            className="relative flex justify-center w-full h-full p-1 overflow-hidden md:p-5"
            style={{
              borderImage: "url('/border.svg') 20 18 / 1 / 20px repeat",
              background: "rgb(237, 227, 209)",
              borderWidth: "40px",
            }}
          >
            <div
              className="absolute"
              style={{
                width: "110%",
                height: "110%",
                top: "-5%",
                left: "-5%",
                opacity: "0.04",
                backgroundImage: "url('/wood-mask.svg')",
                backgroundRepeat: "repeat",
                backgroundSize: "400px 268px",
              }}
            ></div>
            <div className="relative w-full h-full z-index:5">
              <div className="flex flex-col items-center ">
                {/* <img alt="shepherd" src="/shepherd.gif" className="mt-8 w-80" /> */}
                <div className="w-full my-8 px-4 md:px-16 text-lg">
                  <span className="text-2xl">Hi Buddies</span>
                  <br />
                  <br />
                  Welcome to NFT Game on{" "}
                  <span className="title-upper text-xl">Aptos</span>, where
                  Sheep and Wolves on the blockchain compete for a tempting
                  prize of WOOL, with deadly high stakes.
                  <br />
                  <br />
                  Your successes and failures shall be defined by the choices
                  you make.
                  <br />
                  <br />
                  The game has begun.
                  <br />
                  <br />
                </div>
                <div className="w-48 h-10 flex justify-center align-center px-2 cursor-pointer">
                  <div className="flex flex-row w-full">
                    <a
                      href="/game"
                      className="text-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Play
                    </a>
                  </div>
                </div>
                <div className="w-48 h-10 flex justify-center align-center px-2 cursor-pointer mt-4">
                  <div className="flex flex-row w-full">
                    <a
                      href="/whitepapers"
                      className="text-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Whitepapers
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
