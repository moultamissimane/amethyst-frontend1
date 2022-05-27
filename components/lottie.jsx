import React, {useEffect, useRef} from "react"
import lottie from "lottie-web"
import breathWave from '../public/breathWave.json'

const Lottie = () => {
    const anime = useRef(null)

        useEffect(() => {
            lottie.loadAnimation({
              container: anime.current,
              renderer: "svg",
              loop: true,
              autoplay: true,
              animationData: breathWave,
            });
            return () => lottie.stop();
    }, []);
    return <div style={{ height: 350, width: 500 }} ref={anime}></div>
}
export default Lottie;