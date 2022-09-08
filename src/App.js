 
import React, { Fragment, useEffect, useMemo, useState } from 'react';

import NavBar from "./comp/Navbar/navbar"
import HeroSection from "./comp/HeroSection/HeroSection"
import NftShowcase from "./comp/NftShowcase/NftShowcase"
import NftCase from "./comp/NftCase/NftCase"
import BlockChainCase from "./comp/BlockchainCase/BlockchainCase"
import TeamMembers from "./comp/TeamMembers/TeamMembers"
//import TeamMember from "./comp/TeamMember/TeamMember"
import { Helmet } from "react-helmet";
import JoinGang from "./comp/joinGang/joinGang";



const App= () => {
    return (
        <div>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
            </Helmet>
            <NavBar></NavBar>
            <HeroSection></HeroSection>
            <div className={"Container"}>
            <JoinGang></JoinGang>
            </div>
            <NftShowcase></NftShowcase>
            <NftCase></NftCase>
            <BlockChainCase></BlockChainCase>
            <TeamMembers></TeamMembers>

        </div>
    )
}

export default App;