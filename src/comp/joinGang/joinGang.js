import React from "react";
import "./joinGang.css"
import Discord from "../../assets/social/discord.png";
import LinkedIn from "../../assets/social/linkedin.png";
import { Link } from "react-router-dom";

export default function JoinGang() {
    return (
        <div style={{margin:"20px auto 50px auto"}}>
            <div className="">
                <div className="HeadingText"> Join The Metakul Gang</div>
            </div>
            <div className={"ButtonContiner"}>
                <div className="FlexRow1">
                    <button className="Button">

                        <img className={"Icon"} src={Discord}></img><a style={{ color: "white" }} href="https://discord.com/invite/3MwNU73G7M"> Discord</a>
                    </button>
                    <div className="Button">
                        <img className={"Icon"} src={LinkedIn}></img>
                        <Link className="" to="/mint" activeStyle={{ fontWeight: "bold", }}>
                            Metaverse
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}