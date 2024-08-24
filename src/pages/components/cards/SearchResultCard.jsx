import {DownloadSvg} from "../../../util/Svg.jsx";

const SearchResultCard = ({ data }) => {

    return(
        <div className={"card p-2"}>
            <img src={data.img} alt=""/>
            <h4 className={"mt-3"}>Title</h4>
            <h3>{data.title}</h3>
            <div className={"d-flex justify-content-between mt-2"}>
                <div>
                    <h4>Creator</h4>
                    <h3>{data.creator}</h3>
                </div>
                <div>
                    <h4>Views</h4>
                    <h3>{data.views}</h3>
                </div>
            </div>
            <button className={"d-flex align-items-center justify-content-center gap-2 mt-2"}>
                <DownloadSvg/>
                Download
            </button>
        </div>
    )
}

export default SearchResultCard;