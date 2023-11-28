import { LogoProjectArbitrum } from "../01-atoms/LogoProjectArbitrum";
import { LogoProjectNova } from "../01-atoms/LogoProjectNova";
import { DiscordLogo } from "../01-atoms/DiscordLogo";

/*Blockful Constants*/
export const blockfulTwitter = "https://twitter.com/blockful_io";
export const blockfulDiscord = "https://discord.gg/B6uDmm7hvC";
export const blockfulLinkedIn = "https://www.linkedin.com/company/blockful/";
export const blockfulInstagram = "https://www.instagram.com/blockful.io/";
export const blockfulWebsite = "https://blockful.io/";
export const blockfulContact = "https://t.me/Danimimm";
export const blockfulMedium =
  "https://medium.com/blockful/swaplace-f9fd222d5636 ";

/*Swaplace Constants*/
export const swaplaceProject = "https://github.com/orgs/blockful-io/projects/3";
export const swaplaceTwitter = "https://twitter.com/Swaplace_io";
export const swaplaceTelegram = "https://t.me/swaplace";
export const swaplaceContracts =
  "https://github.com/blockful-io/swaplace-contracts";
export const swaplaceContractsMain =
  "https://github.com/blockful-io/swaplace-contracts/tree/main/contracts";

/*About Section*/
export const manifestoSectionId = "manifestoSection";
export const whatIsSwaplaceSectionId = "whatIsSwaplaceSection";
export const theTeamSectionId = "theTeamSection";
export const howToBuildSectionId = "howToBuildSection";

export enum PossibleAppNetwork {
  Arbitrum,
  Nova,
}

export const networkImages: Record<PossibleAppNetwork, JSX.Element> = {
  [PossibleAppNetwork.Arbitrum]: LogoProjectArbitrum(),
  [PossibleAppNetwork.Nova]: LogoProjectNova(),
};

export interface ICardProject {
  title: string;
  description: string;
  icon: JSX.Element;
  networks: Array<PossibleAppNetwork>;
}

/*Example possibleAppNetworks*/
export const ObjCardProject: ICardProject[] = [
  {
    title: "Title",
    description: "Description",
    icon: DiscordLogo(),
    networks: [PossibleAppNetwork.Arbitrum, PossibleAppNetwork.Nova],
  },
];
