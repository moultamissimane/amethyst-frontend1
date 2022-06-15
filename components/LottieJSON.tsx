import React, {useEffect, useRef , FC} from "react"
import lottie from "lottie-web"
import sleepyMoon from '../public/sleepyMoon.json'

type Props = {
  json: any;
  height: Number;
  width: Number;

}

export const LottieJSON:FC<Props> = ({json ,  height= 350, width= 500  }) => {
    const anime = useRef()

        useEffect(() => {
            lottie.loadAnimation({
              //@ts-ignore
              container: anime?.current,
              renderer: "svg",
              loop: true,
              autoplay: true,
              animationData: json,
            });
            return () => lottie.stop();
          }, []);
          //@ts-ignore
    return <div style={{ height:height, width: width }} ref={anime}></div>
}
    