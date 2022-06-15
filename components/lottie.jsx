import React, {useEffect, useRef} from "react"
import lottie from "lottie-web"
import BreathingSimple from '../public/BreathingSimple.json'

const Lottie = () => {
    const anime = useRef(null)

        useEffect(() => {
            lottie.loadAnimation({
              container: anime.current,
              renderer: "svg",
              loop: true,
              autoplay: true,
              animationData: BreathingSimple,
            });
            return () => lottie.stop();
    }, []);
    return <div style={{ height: 400, width: 500 }} ref={anime}></div>
}
export default Lottie;