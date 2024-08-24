import { SearchSvg } from "../../util/Svg.jsx";
import '../../css/SearchSection.css';
import defaultVideoImg from '../../assets/defaultVideoImgInSearch.png';
import { useState } from "react";
import SeardResaultCard from "./cards/SearchResultCard.jsx";

const SearchSection = () => {
    const [results, setResults] = useState([
        {
            title: "Enna Yanna Apith Ekka",
            creator: "Dilu Beat",
            views: "2.3M",
            img: defaultVideoImg
        },
        {
            title: "Enna Yanna Apith Ekka",
            creator: "Dilu Beat",
            views: "2.3M",
            img: defaultVideoImg
        },
        {
            title: "Enna Yanna Apith Ekka",
            creator: "Dilu Beat",
            views: "2.3M",
            img: defaultVideoImg
        },
        {
            title: "Enna Yanna Apith Ekka",
            creator: "Dilu Beat",
            views: "2.3M",
            img: defaultVideoImg
        },
        {
            title: "Enna Yanna Apith Ekka",
            creator: "Dilu Beat",
            views: "2.3M",
            img: defaultVideoImg
        },
        {
            title: "Enna Yanna Apith Ekka",
            creator: "Dilu Beat",
            views: "2.3M",
            img: defaultVideoImg
        },
        {
            title: "Enna Yanna Apith Ekka",
            creator: "Dilu Beat",
            views: "2.3M",
            img: defaultVideoImg
        },
        {
            title: "Enna Yanna Apith Ekka",
            creator: "Dilu Beat",
            views: "2.3M",
            img: defaultVideoImg
        },
        {
            title: "Enna Yanna Apith Ekka",
            creator: "Dilu Beat",
            views: "2.3M",
            img: defaultVideoImg
        }
    ]);

    return (
        <div id="SearchSection" className={"p-5"}>
            <div className="search p-2 d-flex align-items-center gap-3 px-3 mb-5">
                <SearchSvg />
                <input type="text" placeholder="Search" />
            </div>
            <div className={"list"}>
                {
                    results.map((result, index) => (
                        <SeardResaultCard key={index} data={result} />
                    ))
                }
            </div>
        </div>
    );
}

export default SearchSection;
