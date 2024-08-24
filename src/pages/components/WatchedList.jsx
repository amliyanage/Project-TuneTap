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
                    },
                    {
                        title : "Enna Yanna Apith Ekka",
                        creator : "Dilu Beats",
                        img : defaultVideoImg
                    }
                ]
            },
            {
                date : "Yesterday",
                video : [
                    {
                        title : "Enna Yanna Apith Ekka",
                        creator : "Dilu Beats",
                        img : defaultVideoImg
                    },
                    {
                        title : "Enna Yanna Apith Ekka",
                        creator : "Dilu Beats",
                        img : defaultVideoImg
                    }
                ]
            },
        {
            date : "Last Week",
            video : [
                {
                    title : "Enna Yanna Apith Ekka",
                    creator : "Dilu Beats",
                    img : defaultVideoImg
                },
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
            <div className="list d-flex flex-column gap-3 mt-2">
                {
                    twoDArray.map((data, index) => {
                        return(
                            <div key={index}>
                                <h3 className={"d-flex align-items-center gap-3 justify-content-end"}>
                                    <hr/>
                                    {data.date}
                                </h3>
                                <div className={"d-flex flex-column gap-3"}>
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