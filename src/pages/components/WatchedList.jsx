import {PlayListSvg} from "../../util/Svg.jsx";
import '../../css/WatchedList.css'
import {useState} from "react";
import defaultVideoImg from "../../assets/defaultVideoImg.png";
import WatchedListCard from "./cards/WatchedListCard.jsx";

const WatchedList = () => {

    const [twoDArray, setTwoDArray] = useState([
            {
                date : "Today",
                video : [
                    {
                        title : "Enna Yanna Apith Ekka",
                        creator : "Dilu Beats",
                        img : defaultVideoImg
                    }
                ]
            }
    ]);

    return (
        <div id={"watchedList"} className={"p-4"}>
            <div className={"d-flex gap-4"}>
                <PlayListSvg/>
                <h2>Watched</h2>
            </div>
            <div className="list">
                {
                    twoDArray.map((data, index) => {
                        return(
                            <div key={index}>
                                <h3>{data.date}</h3>
                                <div className={"d-flex gap-4"}>
                                    {
                                        data.video.map((video, index) => {
                                            return(
                                                <WatchedListCard key={index} data={video}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default WatchedList;