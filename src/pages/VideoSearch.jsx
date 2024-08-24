import '../css/MainPage.css'
import WatchedList from "./components/WatchedList.jsx";
import SearchSection from "./components/SearchSection.jsx";
import VideoDownloadSection from "./components/VideoDownloadSection.jsx";

const VideoSearch = () => {

    return(
        <section className={"p-4 d-flex justify-content-between"}>
            <WatchedList/>
            <SearchSection/>
            <VideoDownloadSection/>
        </section>
    )
}

export default VideoSearch