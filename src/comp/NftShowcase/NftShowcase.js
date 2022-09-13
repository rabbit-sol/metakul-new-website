import Nft1 from "../../assets/nft3.png";
import Nft2 from "../../assets/nft2.png";
import Nft3 from "../../assets/nft1.png";
import Qna from "../qna/qna";

import './NftShowcase.css'

const NftData = [
    {
        url: Nft1,
        name: "NFT one",
    },
    {
        url: Nft2,
        name: "NFT two",
    },
  
    
];

export default function NftShowCase() {
    return (
        <div className="Containershowcase" id="about">
            <div className="CardContainercase">
                {NftData.map((nft) => (
                    <div className="Cardcase">
                        <img className="CardImg" src={nft.url}></img>
                        {/*<div className="CardTittlecase">{nft.name}</div>*/}
                    </div>
                ))}

            </div>
            <div className="MainQnaContainer" >
                <Qna></Qna>
                <iframe className={"mainVideo"} src="https://www.instagram.com/reel/CgDvAEpKa4Z/?igshid=YmMyMTA2M2Y="  ></iframe>
            </div>
        </div>
    );
}
