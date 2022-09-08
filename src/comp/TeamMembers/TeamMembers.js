import React from "react";
import './TeamMembers.css'

import Nft1 from "../../assets/nft/nft1.png";
import Ak from "../../assets/teamMembers/ak.png";
import Instagram from "../../assets/icon/instagram.png";
import LinedIn from "../../assets/icon/linkedIn.png";

import NewsLetter from "../newsLetter/newsLetter";
import Footer from "../footer/footer"
const TeamMemberData = [
    { img: Ak, name: "Ankush Tamta", instaGram: "", linkedIn: "", id: 1 },
    { img: Ak, name: "Ankush Tamta", instaGram: "", linkedIn: "", id: 2 },
    { img: Ak, name: "Ankush Tamta", instaGram: "", linkedIn: "", id: 3 },
    
];

export default function TeamMember() {
    return (
        <div className={"Container"}>
            
            <div className={"HeadingText"}> Team Members </div>
            <div className={"FlexRow"}>
                <div className={"CardContainer"}>
                    {TeamMemberData.map((member) => (
                        <div className="MarginContainer" mt={member.id % 2 ? "50" : "140"}>
                            <div className={"TeamCard"}>
                                <img className={"TeamImage "} src={member.img}></img>

                                <div className={"ContentContainer"}>
                                    <div className="CardText"> {member.name}</div>
                                    <div className="FlexRow" between>
                                        <div className={"IconContainer"}>
                                            <img className={"Icon"} src={Instagram}></img>
                                            <img className={"IconSmall" } src={LinedIn}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
           
            <NewsLetter></NewsLetter>
            <Footer></Footer>
          
        </div>
    );
}
