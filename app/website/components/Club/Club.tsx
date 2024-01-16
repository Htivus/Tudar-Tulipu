"use client";
import Image from "next/image";
import { MaskContainer } from "../ui/svg-mask-effect";
import "./Club.css";
export default function Club() {
  return (
    <div className=" select-none flex pt-12 px-10 lg:px-14  items-center justify-center bg-hero md:h-[80vh] overflow-hidden">
      <div className="flex flex-col  gap md:flex-row items-center max-w-8xl">
        <div className="w-full lg:pr-20">
          <MaskContainer
            revealText={
              <div>
                <p className=" text-gray-400 text-justify font-bold text-2xl md:pr-40 ">
                  At TUDAR Club, we are on a mission to celebrate, preserve, and
                  propagate the vibrant heritage of the Tulu language. Rooted in
                  the cultural mosaic of coastal Karnataka, Tulu is a language
                  that encapsulates centuries of tradition, folklore, and a
                  unique identity.
                </p>
              </div>
            }
            className="h-[30rem] ">
              <p className="relative md:text-2xl">

            TUDAR ಕ್ಲಬ್‌ನಲ್ಲಿ, ನಾವು ಆಚರಿಸಲು, ಸಂರಕ್ಷಿಸಲು ಮತ್ತು ಮಿಷನ್‌ನಲ್ಲಿದ್ದೇವೆ
            ತುಳು ಭಾಷೆಯ ರೋಮಾಂಚಕ ಪರಂಪರೆಯನ್ನು ಪ್ರಚಾರ ಮಾಡಿ. ಬೇರೂರಿದೆ ಕರಾವಳಿ ಕರ್ನಾಟಕದ
            ಸಾಂಸ್ಕೃತಿಕ ಮೊಸಾಯಿಕ್, ತುಳು ಒಂದು ಭಾಷೆ ಅದು ಶತಮಾನಗಳ ಸಂಪ್ರದಾಯ, ಜಾನಪದ,
            ಮತ್ತು ಎ ಅನನ್ಯ ಗುರುತು.
              </p>
          </MaskContainer>
        </div> 
        <div className="w-full md:w-1/4 flex justify-center ">
          <Image width={250} height={300} src="/src/logo.png" alt="" className="pr-0 md:pr-4 m-0"/>
        </div>
      </div>
    </div>
  );
}
// TUDAR ಕ್ಲಬ್‌ನಲ್ಲಿ, ನಾವು ಆಚರಿಸಲು, ಸಂರಕ್ಷಿಸಲು ಮತ್ತು ಮಿಷನ್‌ನಲ್ಲಿದ್ದೇವೆ
//             ತುಳು ಭಾಷೆಯ ರೋಮಾಂಚಕ ಪರಂಪರೆಯನ್ನು ಪ್ರಚಾರ ಮಾಡಿ. ಬೇರೂರಿದೆ ಕರಾವಳಿ ಕರ್ನಾಟಕದ
//             ಸಾಂಸ್ಕೃತಿಕ ಮೊಸಾಯಿಕ್, ತುಳು ಒಂದು ಭಾಷೆ ಅದು ಶತಮಾನಗಳ ಸಂಪ್ರದಾಯ, ಜಾನಪದ,
//             ಮತ್ತು ಎ ಅನನ್ಯ ಗುರುತು.