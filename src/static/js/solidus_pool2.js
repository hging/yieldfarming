$(function() {
    consoleInit();
    start(main);
});

async function main() {

    const App = await init_ethers();
    const SOC_BUSD_POOL_ABI = [{"inputs":[{"internalType":"address","name":"share_","type":"address"},{"internalType":"address","name":"lptoken_","type":"address"},{"internalType":"uint256","name":"starttime_","type":"uint256"},{"internalType":"address","name":"feeTo_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initreward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardDistribution","type":"address"}],"name":"setRewardDistribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"share","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"starttime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const SOS_BUSD_POOL_ABI = [{"inputs":[{"internalType":"address","name":"share_","type":"address"},{"internalType":"address","name":"lptoken_","type":"address"},{"internalType":"uint256","name":"starttime_","type":"uint256"},{"internalType":"address","name":"feeTo_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardDistribution","type":"address"}],"name":"setRewardDistribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"share","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"starttime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const LP_ABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]



    _print(`Initialized ${App.YOUR_ADDRESS}`);
    _print("Reading smart contracts...");

    // const CURVE_SUSD_POOL = new ethers.Contract(CURVE_SUSD_POOL_ADDR, CURVE_SUSD_POOL_ABI, App.provider);
    // const SYNTH_crvPlain3andSUSD_POOL = new ethers.Contract(SYNTH_crvPlain3andSUSD_STAKING_POOL_ADDR, SYNTH_crvPlain3andSUSD_STAKING_POOL_ABI, App.provider);
    // const crvPlain3andSUSD_TOKEN_CONTRACT = new ethers.Contract(sCRV_TOKEN_ADDR, ERC20_ABI, App.provider);
    const BUSD_TOKEN = new ethers.Contract("0xe9e7cea3dedca5984780bafc599bd69add087d56", ERC20_ABI, App.provider);
    const SOC_TOKEN = new ethers.Contract("0x0bD67D358636Fd7B0597724Aa4F20BEEDBf3073A", ERC20_ABI, App.provider);
    const SOS_TOKEN = new ethers.Contract("0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075", ERC20_ABI, App.provider);

    // const SOC_LP_TOKEN = new ethers.Contract("0x7fef46b152365f1c546aab5c26d38b54b82cd3b9", LP_ABI, App.provider);
    // const SOS_LP_TOKEN = new ethers.Contract("0x80be2826934056b32aa344871a8b14291dac2782", LP_ABI, App.provider);

    const SOLIDUS_SOC_BUSD_POOL = new ethers.Contract("0x615ADfCa9bEDF0A42211ef67E744A3F84D010dA2", SOC_BUSD_POOL_ABI, App.provider);
    const SOLIDUS_SOS_BUSD_POOL = new ethers.Contract("0xbff1d8efa5496d056fbda8aa18e38744d9f76d84", SOS_BUSD_POOL_ABI, App.provider);
  
    // // SYNTH Staking pool
    // const rawStakedCRVAmount = await SYNTH_crvPlain3andSUSD_POOL.balanceOf(App.YOUR_ADDRESS);
    // const stakedCRVAmount = rawStakedCRVAmount / 1e18;
    // const earnedSNX = await SYNTH_crvPlain3andSUSD_POOL.earned(App.YOUR_ADDRESS) / 1e18;

    // // Curve susd pool
    // const totalCrvPlain3andSUSDSupply = await crvPlain3andSUSD_TOKEN_CONTRACT.totalSupply() / 1e18;
    // const totalStakedCrvPlain3andSUSDAmount = await crvPlain3andSUSD_TOKEN_CONTRACT.balanceOf(SYNTH_crvPlain3andSUSD_STAKING_POOL_ADDR) / 1e18;
    // const stakingPoolPercentage = 100 * stakedCRVAmount / totalStakedCrvPlain3andSUSDAmount;

    const busdInSOCAmount = await BUSD_TOKEN.balanceOf("0x7fef46b152365f1c546aab5c26d38b54b82cd3b9") / 1e18;
    const busdInSOSAmount = await BUSD_TOKEN.balanceOf("0x80be2826934056b32aa344871a8b14291dac2782") / 1e18;

    const socAmount = await SOC_TOKEN.balanceOf("0x7fef46b152365f1c546aab5c26d38b54b82cd3b9") / 1e18;
    const sosAmount = await SOS_TOKEN.balanceOf("0x80be2826934056b32aa344871a8b14291dac2782") / 1e18;

    // const DAIPerToken = totalDaiAmount / totalCrvPlain3andSUSDSupply;
    // const USDCPerToken = totalUSDCAmount  / totalCrvPlain3andSUSDSupply;
    // const USDTPerToken = totalUSDTAmount / totalCrvPlain3andSUSDSupply;
    // const sUSDPerToken = totalSUSDAmount / totalCrvPlain3andSUSDSupply;

    // // Find out reward rate
    // const bnb_weekly_reward = await get_synth_weekly_rewards(SOLIDUS_WBNB_POOL);
    // const busd_weekly_reward = await get_synth_weekly_rewards(SOLIDUS_BUSD_POOL);
    // const usdt_weekly_reward = await get_synth_weekly_rewards(SOLIDUS_USDT_POOL);
    // const dai_weekly_reward = await get_synth_weekly_rewards(SOLIDUS_DAI_POOL);
    // const usdc_weekly_reward = await get_synth_weekly_rewards(SOLIDUS_USDC_POOL);
    // const rewardPerToken = weekly_reward / totalStakedCrvPlain3andSUSDAmount;
    // const wbnb_weekly_reward = await get_synth_weekly_rewards(SOLIDUS_WBNB_POOL);
    // const busd_weekly_reward = await get_synth_weekly_rewards(SOLIDUS_BUSD_POOL);
    // const usdt_weekly_reward = await get_synth_weekly_rewards(SOLIDUS_USDT_POOL);
    // const dai_weekly_reward = await get_synth_weekly_rewards(SOLIDUS_DAI_POOL);
    // const usdc_weekly_reward = await get_synth_weekly_rewards(SOLIDUS_USDC_POOL);

    const socLpPerToken = await SOLIDUS_SOC_BUSD_POOL.rewardRate() / 1e18;
    const sosLpPerToken = await SOLIDUS_SOS_BUSD_POOL.rewardRate() / 1e18;


    _print("Finished reading smart contracts... Looking up prices... \n")

    // CoinGecko price lookup
    const socPrice = await lookUpPricesFromPancake("0x0bD67D358636Fd7B0597724Aa4F20BEEDBf3073A", App);
    const sosPrice = await lookUpPricesFromPancake("0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075", App);
    _print("========= STAKING ==========")
    _print(`There are total   : ${socAmount} SOC`)
    _print(`                    ${busdInSOCAmount} BUSD in pools`);
    _print(`There are total   : ${sosAmount} SOS`);
    _print(`                    ${busdInSOSAmount} BUSD in pools`);

    _print("========= SOC-LP REWARD ==========")
    const socLpHourlyROI = (socLpPerToken * 3600 * socPrice / (busdInSOCAmount + socAmount * socPrice)) * 100
    _print(`Hourly estimate   : ${toFixed(socLpPerToken * 3600, 2)} SOS`)
    _print(`Daily estimate    : ${toFixed(socLpPerToken * 3600 * 7, 2)} SOS`)
    _print(`Weekly estimate   : ${toFixed(socLpPerToken * 3600 * 7 * 7, 2)} SOS`)

    _print(`Daily ROI in USD  : ${toFixed(socLpHourlyROI * 24, 4)}%`)
    _print(`Weekly ROI in USD : ${toFixed(socLpHourlyROI * 24 * 7, 4)}%`)
    _print(`APY (unstable)    : ${toFixed(socLpHourlyROI * 24 * 365, 4)}% \n`)

    _print("========= SOS-LP REWARD ==========")
    const sosLpHourlyROI = (sosLpPerToken * 3600 * sosPrice / (busdInSOSAmount + sosAmount * sosPrice) ) * 100
    _print(`Hourly estimate   : ${toFixed(sosLpPerToken * 3600, 2)} SOS`)
    _print(`Daily estimate    : ${toFixed(sosLpPerToken * 3600 * 7, 2)} SOS`)
    _print(`Weekly estimate   : ${toFixed(sosLpPerToken * 3600 * 7 * 7, 2)} SOS`)

    _print(`Daily ROI in USD  : ${toFixed(sosLpHourlyROI * 24, 4)}%`)
    _print(`Weekly ROI in USD : ${toFixed(sosLpHourlyROI * 24 * 7, 4)}%`)
    _print(`APY (unstable)    : ${toFixed(sosLpHourlyROI * 24 * 365, 4)}% \n`)

    _print("========= USDT REWARD ==========")


    hideLoading();

}
