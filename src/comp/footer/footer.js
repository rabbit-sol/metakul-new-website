import React from "react";
import "./footer.css"
import {
  
    MetaKulHeading,
    MetaKulHeading1

} from "./footercss";

import Telegram from "../../assets/followus/telegram.png";
import Twitter from "../../assets/followus/twitter.png";
import Youtube from "../../assets/followus/youtube.png";
import Facebook from "../../assets/followus/facebook.png";
import Instagram from "../../assets/followus/instagram.png";
import Tiktok from "../../assets/followus/tiktok.png";

export default function Footer() {
    return (
       <div>
        <div className="Container1">
            <div className="ItemContainer">
                <div className={"MetakulContainer"}>
                    <h1> Metakul</h1>
                    <span>
                        Meta-kul is a metaverse based nft project which aims to spread
                        awareness on blockchain WEB 3.0, NFT's, etc and we want our
                        educational system to be changed.
                    </span>
                </div>
                <div className="MetakulConnectionContainer">
                    <div className={"ExtraHeadingContainer"}>
                        <MetaKulHeading>Company </MetaKulHeading>
                        <div className={"MetaKulContent"}>About </div>
                        <div className={"MetaKulContent"}>Careers </div>
                        <div className={"MetaKulContent"}>Ventures</div>
                        <div className={"MetaKulContent"}>Grants </div>
                    </div>
                     <div className={"ExtraHeadingContainer"}>
                        <MetaKulHeading>Stats</MetaKulHeading>
                        <div className={"MetaKulContent"}>Rankings </div>
                        <div className={"MetaKulContent"}>Activity </div>
                    </div>
                     <div className={"ExtraHeadingContainer"}>
                        <MetaKulHeading>Resources</MetaKulHeading>
                        <div className={"MetaKulContent"}>Help Center</div>
                        <div className={"MetaKulContent"}>Gas-Free Mark</div>
                        <div className={"MetaKulContent"}>Activity </div>
                    </div>
                    
                    </div>
                <div className={"MetakulIconContainer"}>
                    <MetaKulHeading1>Follow us on</MetaKulHeading1>
                    <div className={"MetakulIcon"}>
                        <div className={"FlexRow"} between>
                                <img className={"IconSocial "} src={Telegram}></img>
                                <img className={"IconSocial "} src={Twitter}></img>
                                <img className={"IconSocial "} src={Youtube}></img>
                        </div>
                        <div className={"FlexRow"} between>
                                <img className={"IconSocial "} src={Facebook}></img>
                                <img className={"IconSocial "} src={Instagram}></img>
                                <img className={"IconSocial "} src={Tiktok}></img>
                        </div>
                    </div>
                </div>
               
            </div>
                
               
       
        </div>
        <div className={"MetakulContainer2"}>
                    <h4> 2022 &copy; Metakul. All rights reserved.</h4>


                </div>
                </div>

    );
}
