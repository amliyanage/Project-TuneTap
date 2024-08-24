import { SearchSvg } from "../../util/Svg.jsx";
import '../../css/SearchSection.css';
import { useCallback, useState } from "react";
import SearchResultCard from "./cards/SearchResultCard.jsx";
import axios from "axios";
import debounce from "lodash.debounce";

const SearchSection = ({handelVideoData}) => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [nextPageToken, setNextPageToken] = useState("");
    const [loading, setLoading] = useState(false);

    const API_KEY = "AIzaSyCPwinB670QKX2V86VPyjdquWdbFwReZqA"; // Replace with your actual API key

    const fetchSearchResults = async (searchTerm, pageToken = '') => {
        if (!searchTerm) return;

        setLoading(true);
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    maxResults: 12,
                    q: searchTerm,
                    type: 'video',
                    key: API_KEY,
                    pageToken: pageToken
                }
            });

            const formattedResponse = response.data.items.map((item) => ({
                videoId: item.id.videoId,
                title: item.snippet.title,
                creator: item.snippet.channelTitle,
                img: item.snippet.thumbnails.high.url,
                views: "N/A" // Placeholder, real views require another API call
            }));

            setSearchResults(prevResults => [
                ...prevResults,
                ...formattedResponse,
            ]);

            setNextPageToken(response.data.nextPageToken);
        } catch (error) {
            console.error('Error fetching YouTube data', error);
        } finally {
            setLoading(false);
        }
    };

    const debouncedFetchSuggestions = useCallback(debounce(fetchSearchResults, 500), []);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        setSearchResults([]); // Clear previous results
        setNextPageToken(null); // Reset page token
        debouncedFetchSuggestions(e.target.value);
    };

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchSearchResults(query, nextPageToken);
        }
    };

    return (
        <div id="SearchSection" className="p-5">
            <div className="d-flex align-items-center mb-4 justify-content-end gap-4">
                <div className="search p-2 d-flex align-items-center gap-3 px-3">
                    <SearchSvg />
                    <input type="text" value={query} onChange={handleInputChange} placeholder="Search" />
                </div>
                <button>Search</button>
            </div>
            <div className="list">
                {searchResults.map((result, index) => (
                    <SearchResultCard key={index} data={result} currentVideoData={handelVideoData} />
                ))}
                {loading && <p>Loading...</p>}
            </div>
            {nextPageToken && (
                <div className="d-flex justify-content-center">
                    <button className={"LoadMore mt-3"} onClick={handleLoadMore}>Load More</button>
                </div>
            )}
        </div>
    );
};

export default SearchSection;
