export type RewardItem = {
    _id: string;
    category: string;
    method: string;
    numRewards: number | null;
    countLeft: number | null;
    countWon: number;
    countInitiated: number;
    countClaimed: number;
    isUnlimited: boolean;
    isLuckyWinnersSelected: boolean;
    isLeaderboardWinnersSelected: boolean;
    isDistributedOnPlatform: boolean;
    isDistributedOnPlatformAfterLaunch: boolean;
    whitelistReward?: {
        imagePosition?: {
            x: number;
            y: number;
        };
        enableCustomPoints: boolean;
        name?: string;
        image?: string;
    };
    discordReward?: {
        roleId: string;
        roleName: string;
    };
    nftReward?: {
        nftTokenId: string;
        nftContractAddress: string;
        nftDocId: string;
        chainId: number;
        nftAmountPerUser: number;
        name: string;
        image: string;
        isGasless: boolean;
    };
    tokenReward?: {
        approvalTransaction: {
            txHash: string;
            status: string;
            chainId: number;
        };
        tokenAddress: string;
        tokenSymbol: string;
        chainId: number;
        tokenAmountPerUser: string;
        tokenDecimals: number;
        logo: string;
        name: string;
    };
}

export type WidgetItem = {
    _id: string;
    title: string;
    banner: string;
    reward: RewardItem[];
    xps: number;
    initiatedUsersCount: number;
    numTasks: number;
    path: string;
    projectName: string;
    projectId: string;
    projectLogo: string;
    nftImage?: string;
};
