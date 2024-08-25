import { PlayListSvg } from "../../util/Svg.jsx";
import "../../css/WatchedList.css";
import { useEffect, useState } from "react";
import WatchedListCard from "./cards/WatchedListCard.jsx";

const WatchedList = ({ videoData , handelVideoDataOnWatchedList }) => {
    const [twoDArray, setTwoDArray] = useState(() => {
        const savedData = localStorage.getItem("watchedList");
        return savedData ? JSON.parse(savedData) : [];
    });

    const handelPlayBack = (data) => {
        handelVideoDataOnWatchedList(data);
    }

    useEffect(() => {
        localStorage.setItem("watchedList", JSON.stringify(twoDArray));
    }, [twoDArray]);

    const addNewVideo = (newVideo) => {
        const dateLabel = getDateLabel(new Date());

        setTwoDArray((prevArray) => {
            const updatedArray = [...prevArray];
            const dateIndex = updatedArray.findIndex((item) => item.date === dateLabel);

            if (dateIndex !== -1) {
                updatedArray[dateIndex].video.push(newVideo);
            } else {
                updatedArray.push({
                    date: dateLabel,
                    video: [newVideo],
                });
            }

            return updatedArray;
        });
    };

    const getDateLabel = (videoDate) => {
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        if (isSameDay(videoDate, today)) {
            return "Today";
        } else if (isSameDay(videoDate, yesterday)) {
            return "Yesterday";
        } else {
            return videoDate.toLocaleDateString(); // Returns date like "8/23/2024"
        }
    };

    const isSameDay = (date1, date2) => {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    };

    useEffect(() => {
        if (videoData && videoData.title) {
            addNewVideo(videoData);
        }
    }, [videoData]);

    return (
        <div id={"watchedList"} className={"p-4"}>
            <div className={"d-flex gap-4"}>
                <PlayListSvg />
                <h2>Watched</h2>
            </div>
            <div className="list d-flex flex-column gap-3 mt-2">
                {twoDArray.map((data, index) => (
                    <div key={index}>
                        <h3 className={"d-flex align-items-center gap-3 justify-content-end"}>
                            <hr />
                            {data.date}
                        </h3>
                        <div className={"d-flex flex-column gap-3"}>
                            {data.video.map((video, index) => (
                                <WatchedListCard key={index} data={video} handelPlayBack={handelPlayBack} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WatchedList;
