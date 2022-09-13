
import JoinGang from "../comp/joinGang/joinGang";
import HeroSection from "../comp/HeroSection/HeroSection"
import NftShowcase from "../comp/NftShowcase/NftShowcase"
import NftCase from "../comp/NftCase/NftCase"
import BlockChainCase from "../comp/BlockchainCase/BlockchainCase"
import TeamMembers from "../comp/TeamMembers/TeamMembers"

const Mint = () => {
    return (
        <div>
           
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

export default Mint;