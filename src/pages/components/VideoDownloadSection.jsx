import React, { useState, useEffect } from 'react';
import { DownloadSvg } from "../../util/Svg.jsx";
import '../../css/VideoDownlaodSection.css';

const VideoDownloadSection = ({ videoData }) => {
    const [formats, setFormats] = useState([]);

    useEffect(() => {
        const fetchVideoOptions = async () => {
            try {
                console.log(`Fetching video options for videoId: ${videoData.videoId}`);

                const response = await fetch(`http://localhost:3001/video-options/${videoData.videoId}`);
                console.log('Response status:', response.status);

                if (!response.ok) {
                    console.error('Failed to fetch video options. Status:', response.status);
                    return;
                }

                const data = await response.json();
                console.log('Fetched formats:', data.formats);

                // Filter and get unique formats based on quality label
                const filteredFormats = [];
                const seenQualities = new Set();

                data.formats.forEach(format => {
                    const quality = format.qualityLabel;
                    const mimeType = format.mimeType || '';

                    if (
                        (['1440p', '1080p', '720p', '480p'].includes(quality) || mimeType.includes('audio/mp4')) &&
                        !seenQualities.has(quality || mimeType)
                    ) {
                        seenQualities.add(quality || mimeType);
                        filteredFormats.push(format);
                    }
                });

                setFormats(filteredFormats);
            } catch (error) {
                console.error('Error fetching video options:', error);
            }
        };

        if (videoData && videoData.videoId) {
            fetchVideoOptions();
        }
    }, [videoData]);

    const handleDownload = (url) => {
        console.log('Downloading from URL:', url);
        window.open(url, '_blank');
    };

    const formatSize = (size) => {
        if (size) {
            return (size / (1024 * 1024)).toFixed(2) + 'MB';
        }
        return 'Unknown size';
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
                <h4 className={"mb-3"}>Video</h4>
                <div className={"d-flex flex-column gap-3"}>
                    {formats
                        .filter(format => format.hasVideo)
                        .map((format) => (
                            <div key={format.itag} className={"d-flex justify-content-between"}>
                                <h6>{format.qualityLabel}</h6>
                                <h6>{formatSize(format.contentLength)}</h6>
                                <button onClick={() => handleDownload(format.url)}>
                                    <DownloadSvg />
                                </button>
                            </div>
                        ))}
                </div>
                <h4 className={"mb-3 mt-4"}>Audio</h4>
                <div>
                    {formats
                        .filter(format => format.hasAudio && !format.hasVideo)
                        .map((format) => (
                            <div key={format.itag} className={"d-flex justify-content-between"}>
                                <h6>MP3</h6>
                                <h6>{formatSize(format.contentLength)}</h6>
                                <button onClick={() => handleDownload(format.url)}>
                                    <DownloadSvg />
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default VideoDownloadSection;
