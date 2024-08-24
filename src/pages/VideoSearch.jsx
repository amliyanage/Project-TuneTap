import '../css/MainPage.css'
import WatchedList from "./components/WatchedList.jsx";
import SearchSection from "./components/SearchSection.jsx";

const VideoSearch = () => {

    return(
        <section className={"p-4 d-flex justify-content-between"}>
            <WatchedList/>
            <SearchSection/>
            <div></div>
        </section>
    )
}

export default VideoSearch