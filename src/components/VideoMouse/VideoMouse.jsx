import React, { useEffect } from "react";

import Cursor from "./cursor";

import Lichi from "../../images/videos/lichi.mp4";
import Design from "../../images/videos/design.mp4"

const VideoMouse = () => {
    useEffect(() => {
        new Cursor(document.querySelector(".cursor"));
    })
    return (
        <div class="cursor">
            <div class="cursor-media">
                <video
                    src={Lichi}
                    type='video/mp4'
                    preload="auto"
                    autoPlay={"autoplay"}
                    muted
                    loop
                    id="lichi"
                />
                <video
                    src={Design}
                    type='video/mp4'
                    preload="auto"
                    autoPlay={"autoplay"}
                    muted
                    loop
                    id="design"
                />
            </div>
        </div>
    )
}
  
export default VideoMouse
  