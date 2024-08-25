import '../css/MainPage.css'
import WatchedList from "./components/WatchedList.jsx";
import SearchSection from "./components/SearchSection.jsx";
import VideoDownloadSection from "./components/VideoDownloadSection.jsx";
import {useState} from "react";

const VideoSearch = () => {

    const [videoData, setVideoData] = useState({});
    const [watchedListData, setWatchedListData] = useState([]);

    const handelVideoData = (data) => {
        setVideoData(data);
        setWatchedListData(data);
    }

    const playBack = (data) => {
        setVideoData(data);
    }

    return(
        <section className={"p-4 d-flex justify-content-between"}>
            {
                watchedListData && (<WatchedList videoData={watchedListData} handelVideoDataOnWatchedList={playBack}/>)
            }
            <SearchSection handelVideoData={handelVideoData}/>
            {
                videoData && (<VideoDownloadSection videoData={videoData}/>)
            }
        </section>
    )
}

export default VideoSearch