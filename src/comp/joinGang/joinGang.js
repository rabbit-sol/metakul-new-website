import React from "react";
import "./joinGang.css"
import Discord from "../../assets/social/discord.png";
import LinkedIn from "../../assets/social/linkedin.png";

export default function JoinGang() {
    return (
        <div style={{margin:"0px 10px 20px 0px"}}>
            <div className="FlexRow">
                <div className="HeadingText"> Join The Metakull Gang</div>
            </div>
            <div className={"ButtonContiner"}>
                <div className="FlexRow">
                    <button className="Button">

                        <img className={"Icon"} src={Discord}></img><a style={{color:"white"}} href=""> Discord</a>
                    </button>
                    <div className="Button">
                        <img className={"Icon"} src={LinkedIn}></img>
                        <a style={{ color: "white" }} href="">
                            LinedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}