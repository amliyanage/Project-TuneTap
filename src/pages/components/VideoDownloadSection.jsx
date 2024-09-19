import React, { useState, useEffect } from 'react';
import { DownloadSvg } from "../../util/Svg.jsx";
import '../../css/VideoDownlaodSection.css';
import axios from "axios";

const VideoDownloadSection = ({ videoData }) => {
    const [formats, setFormats] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        const fetchVideoOptions = async () => {
            try {
                console.log(`Fetching video options for videoId: ${videoData.videoId}`);
                const url = JSON.stringify(`https://www.youtube.com/watch?v=${videoData.videoId}`);
                const response = await axios.post("http://localhost:8000/",url,{
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                console.log(response.data);
                setFormats(response.data);
                setCurrentVideo(videoData.videoId);

            } catch (error) {
                console.error('Error fetching video options:', error);
            }
        };

        if (videoData && videoData.videoId) {
            fetchVideoOptions();
        }
    }, [videoData]);

    const handleDownload = async (format) => {
        const url = `http://localhost:8000/?url=https://www.youtube.com/watch?v=${currentVideo}&format=${format}`
        const serverResponce = await axios.get(url);
        const { response } = serverResponce.data;
        if (response){
            alert("Download Started");
            window.open(response, '_blank');
        }
    };


    return (
        <div id={"VideoDownloadSection"} className={"p-3"}>
            <iframe
                src={`https://www.youtube.com/embed/${videoData.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h4 className={"mt-4"}>Title</h4>
            <h3 className={"videoTitle"}>{videoData.title}</h3>
            <div className={"d-flex justify-content-between mt-4 mb-4"}>
                <div>
                    <h4>Creator</h4>
                    <h3>{videoData.creator}</h3>
                </div>
                <div>
                    <h4>Views</h4>
                    <h3>{videoData.views}</h3>
                </div>
            </div>
            <div className="downloadOption p-3 pt-4">
                <h4 className="mb-3">Video</h4>
                <div className="d-flex flex-column gap-3">
                    {formats && formats.mp4 && (
                        Object.entries(formats.mp4).map(([resolution, size]) => (
                            <div key={resolution} className="d-flex justify-content-between">
                                <h6>{resolution}</h6>
                                <h6>{`${size} MB`}</h6>
                                <button onClick={() => handleDownload(resolution)}>
                                    <DownloadSvg />
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <h4 className="mb-3 mt-4">Audio</h4>
                <div>
                    {formats && formats.mp3 && (
                        <div className="d-flex justify-content-between">
                            <h6>MP3</h6>
                            <h6>{formats.mp3}</h6>
                            <button onClick={() => handleDownload("mp3")}>
                                <DownloadSvg/>
                            </button>
                        </div>
                    )}
                    {/* Handle dynamic audio formats if applicable */}
                    {formats && formats.mp4 &&
                        Object.entries(formats.mp4).filter(([resolution, size]) => !resolution.includes('p')).map(([resolution, size]) => (
                            <div key={resolution} className="d-flex justify-content-between">
                                <h6>{resolution}</h6>
                                <h6>{size} MB</h6>
                                <button onClick={() => handleDownload(resolution)}>
                                    <DownloadSvg/>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default VideoDownloadSection;