import "./NetflixIntro.scss";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import badumIntro from '../assets/sounds/BadumIntro.mp3';

const NetflixIntro = () => {
  const [isStarted, setIsStarted] = useState(false); // To track if the animation is playing
  const soundRef = useRef(null);

  const soundNotification = () => {
    const sound = new Audio(badumIntro);
    const promise = sound.play();

    if (promise !== undefined) {
      promise.then(() => {}).catch((error) => console.error(error));
    }
  };

  const handleStartClick = () => {
    setIsStarted(true);  // Set the animation state to true when clicked
    soundNotification(); // Play the sound
  };

  return (
    <div className="SplashAnimation">
      {/* If animation hasn't started, show the 'Click here to enter site' button */}
      {!isStarted ? (
        <div className="enter-text" onClick={handleStartClick}>
          <p>Click here to enter site</p>
        </div>
      ) : (
        <motion.div
          id="SplashAnimation__wrp"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <audio ref={soundRef} src={badumIntro} />
          <div className="netflixintro" data-letter="R">
            {/* First Helper */}
            <div className="helper-1">
              <div className="effect-brush">
                <span className="fur-31"></span>
                <span className="fur-30"></span>
                <span className="fur-29"></span>
                <span className="fur-28"></span>
                <span className="fur-27"></span>
                <span className="fur-26"></span>
                <span className="fur-25"></span>
                <span className="fur-24"></span>
                <span className="fur-23"></span>
                <span className="fur-22"></span>
                <span className="fur-21"></span>
                <span className="fur-20"></span>
                <span className="fur-19"></span>
                <span className="fur-18"></span>
                <span className="fur-17"></span>
                <span className="fur-16"></span>
                <span className="fur-15"></span>
                <span className="fur-14"></span>
                <span className="fur-13"></span>
                <span className="fur-12"></span>
                <span className="fur-11"></span>
                <span className="fur-10"></span>
                <span className="fur-9"></span>
                <span className="fur-8"></span>
                <span className="fur-7"></span>
                <span className="fur-6"></span>
                <span className="fur-5"></span>
                <span className="fur-4"></span>
                <span className="fur-3"></span>
                <span className="fur-2"></span>
                <span className="fur-1"></span>
              </div>
              <div className="effect-lumieres">
                <span className="lamp-1"></span>
                <span className="lamp-2"></span>
                <span className="lamp-3"></span>
                <span className="lamp-4"></span>
                <span className="lamp-5"></span>
                <span className="lamp-6"></span>
                <span className="lamp-7"></span>
                <span className="lamp-8"></span>
                <span className="lamp-9"></span>
                <span className="lamp-10"></span>
                <span className="lamp-11"></span>
                <span className="lamp-12"></span>
                <span className="lamp-13"></span>
                <span className="lamp-14"></span>
                <span className="lamp-15"></span>
                <span className="lamp-16"></span>
              </div>
            </div>

            {/* Second Helper */}
            <div className="helper-2">
              <div className="effect-brush">
                <span className="fur-31"></span>
                <span className="fur-30"></span>
                <span className="fur-29"></span>
                <span className="fur-28"></span>
                <span className="fur-27"></span>
                <span className="fur-26"></span>
                <span className="fur-25"></span>
                <span className="fur-24"></span>
                <span className="fur-23"></span>
                <span className="fur-22"></span>
                <span className="fur-21"></span>
                <span className="fur-20"></span>
                <span className="fur-19"></span>
                <span className="fur-18"></span>
                <span className="fur-17"></span>
                <span className="fur-16"></span>
                <span className="fur-15"></span>
                <span className="fur-14"></span>
                <span className="fur-13"></span>
                <span className="fur-12"></span>
                <span className="fur-11"></span>
                <span className="fur-10"></span>
                <span className="fur-9"></span>
                <span className="fur-8"></span>
                <span className="fur-7"></span>
                <span className="fur-6"></span>
                <span className="fur-5"></span>
                <span className="fur-4"></span>
                <span className="fur-3"></span>
                <span className="fur-2"></span>
                <span className="fur-1"></span>
              </div>
            </div>

            {/* Third Helper */}
            <div className="helper-3">
              <div className="effect-brush">
                <span className="fur-31"></span>
                <span className="fur-30"></span>
                <span className="fur-29"></span>
                <span className="fur-28"></span>
                <span className="fur-27"></span>
                <span className="fur-26"></span>
                <span className="fur-25"></span>
                <span className="fur-24"></span>
                <span className="fur-23"></span>
                <span className="fur-22"></span>
                <span className="fur-21"></span>
                <span className="fur-20"></span>
                <span className="fur-19"></span>
                <span className="fur-18"></span>
                <span className="fur-17"></span>
                <span className="fur-16"></span>
                <span className="fur-15"></span>
                <span className="fur-14"></span>
                <span className="fur-13"></span>
                <span className="fur-12"></span>
                <span className="fur-11"></span>
                <span className="fur-10"></span>
                <span className="fur-9"></span>
                <span className="fur-8"></span>
                <span className="fur-7"></span>
                <span className="fur-6"></span>
                <span className="fur-5"></span>
                <span className="fur-4"></span>
                <span className="fur-3"></span>
                <span className="fur-2"></span>
                <span className="fur-1"></span>
              </div>
            </div>

            {/* Fourth Helper */}
            <div className="helper-4">
              <div className="effect-brush">
                <span className="fur-31"></span>
                <span className="fur-30"></span>
                <span className="fur-29"></span>
                <span className="fur-28"></span>
                <span className="fur-27"></span>
                <span className="fur-26"></span>
                <span className="fur-25"></span>
                <span className="fur-24"></span>
                <span className="fur-23"></span>
                <span className="fur-22"></span>
                <span className="fur-21"></span>
                <span className="fur-20"></span>
                <span className="fur-19"></span>
                <span className="fur-18"></span>
                <span className="fur-17"></span>
                <span className="fur-16"></span>
                <span className="fur-15"></span>
                <span className="fur-14"></span>
                <span className="fur-13"></span>
                <span className="fur-12"></span>
                <span className="fur-11"></span>
                <span className="fur-10"></span>
                <span className="fur-9"></span>
                <span className="fur-8"></span>
                <span className="fur-7"></span>
                <span className="fur-6"></span>
                <span className="fur-5"></span>
                <span className="fur-4"></span>
                <span className="fur-3"></span>
                <span className="fur-2"></span>
                <span className="fur-1"></span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NetflixIntro;
