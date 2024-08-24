import '../css/MainPage.css'
import WatchedList from "./components/WatchedList.jsx";
import SearchSection from "./components/SearchSection.jsx";
import VideoDownloadSection from "./components/VideoDownloadSection.jsx";
import {useState} from "react";

const VideoSearch = () => {

    const [videoData, setVideoData] = useState({});

    const handelVideoData = (data) => {
        alert("Video Data" + data);
        setVideoData(data);
    }

    return(
        <section className={"p-4 d-flex justify-content-between"}>
            <WatchedList/>
            <SearchSection handelVideoData={handelVideoData}/>
            {
                videoData && (<VideoDownloadSection videoData={videoData}/>)
            }
        </section>
    )
}

export default VideoSearch