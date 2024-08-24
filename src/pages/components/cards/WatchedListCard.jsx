import {PlaySvg} from "../../../util/Svg.jsx";

const WatchedListCard = ({ data }) => {
    return(
        <div className={"card d-flex flex-row align-items-center p-2 gap-3"}>
            <div>
                <img src={data.img} alt=""/>
            </div>
            <div className={"pe-2 pt-1"}>
                <h4>Title</h4>
                <h3>{data.title}</h3>
                <div className={"d-flex justify-content-between mt-3 align-items-center"}>
                    <div>
                        <h4>Creator</h4>
                        <h3>{data.creator}</h3>
                    </div>
                    <div className={"m-0"}>
                        <button><PlaySvg/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchedListCard