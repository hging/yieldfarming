$(function() {
    consoleInit();
    start(main);
});

async function main() {

    const App = await init_ethers();
    const WBNB_POOL_ABI = [{"inputs":[{"internalType":"address","name":"cash_","type":"address"},{"internalType":"address","name":"wbnb_","type":"address"},{"internalType":"uint256","name":"starttime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cash","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardDistribution","type":"address"}],"name":"setRewardDistribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"starttime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wbnb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const BUSD_POOL_ABI = [{"inputs":[{"internalType":"address","name":"cash_","type":"address"},{"internalType":"address","name":"busd_","type":"address"},{"internalType":"uint256","name":"starttime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"BUSD","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cash","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardDistribution","type":"address"}],"name":"setRewardDistribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"starttime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const USDT_POOL_ABI = [{"inputs":[{"internalType":"address","name":"cash_","type":"address"},{"internalType":"address","name":"usdt_","type":"address"},{"internalType":"uint256","name":"starttime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cash","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardDistribution","type":"address"}],"name":"setRewardDistribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"starttime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const DAI_POOL_ABI = [{"inputs":[{"internalType":"address","name":"cash_","type":"address"},{"internalType":"address","name":"dai_","type":"address"},{"internalType":"uint256","name":"starttime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cash","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dai","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardDistribution","type":"address"}],"name":"setRewardDistribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"starttime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    const USDC_POOL_ABI = [{"inputs":[{"internalType":"address","name":"cash_","type":"address"},{"internalType":"address","name":"usdc_","type":"address"},{"internalType":"uint256","name":"starttime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cash","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardDistribution","type":"address"}],"name":"setRewardDistribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"starttime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdc","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

    _print(`Initialized ${App.YOUR_ADDRESS}`);
    _print("Reading smart contracts...");

    // const CURVE_SUSD_POOL = new ethers.Contract(CURVE_SUSD_POOL_ADDR, CURVE_SUSD_POOL_ABI, App.provider);
    // const SYNTH_crvPlain3andSUSD_POOL = new ethers.Contract(SYNTH_crvPlain3andSUSD_STAKING_POOL_ADDR, SYNTH_crvPlain3andSUSD_STAKING_POOL_ABI, App.provider);
    // const crvPlain3andSUSD_TOKEN_CONTRACT = new ethers.Contract(sCRV_TOKEN_ADDR, ERC20_ABI, App.provider);
    const WBNB_TOKEN = new ethers.Contract("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", ERC20_ABI, App.provider);
    const BUSD_TOKEN = new ethers.Contract("0xe9e7cea3dedca5984780bafc599bd69add087d56", ERC20_ABI, App.provider);
    const USDT_TOKEN = new ethers.Contract("0x55d398326f99059ff775485246999027b3197955", ERC20_ABI, App.provider);
    const DAI_TOKEN = new ethers.Contract("0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3", ERC20_ABI, App.provider);
    const USDC_TOKEN = new ethers.Contract("0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", ERC20_ABI, App.provider);

    const SOLIDUS_WBNB_POOL = new ethers.Contract("0x072ffcc7a7a62276a4b092d242343f91fa656efc", WBNB_POOL_ABI, App.provider);
    const SOLIDUS_BUSD_POOL = new ethers.Contract("0xaaef6ab46fe13889e1b0f44752f3bf728ebad7c9", BUSD_POOL_ABI, App.provider);
    const SOLIDUS_USDT_POOL = new ethers.Contract("0x70c00d4a15a2e94f3a3f49288f326aedeef8e5c0", USDT_POOL_ABI, App.provider);
    const SOLIDUS_DAI_POOL = new ethers.Contract("0x545b374d099d81c32074069151489718f69e2ecc", DAI_POOL_ABI, App.provider);
    const SOLIDUS_USDC_POOL = new ethers.Contract("0x9f4a92f4a68de27ea7e1c4662647706ad4031e54", USDC_POOL_ABI, App.provider);
    // // SYNTH Staking pool
    // const rawStakedCRVAmount = await SYNTH_crvPlain3andSUSD_POOL.balanceOf(App.YOUR_ADDRESS);
    // const stakedCRVAmount = rawStakedCRVAmount / 1e18;
    // const earnedSNX = await SYNTH_crvPlain3andSUSD_POOL.earned(App.YOUR_ADDRESS) / 1e18;

    // // Curve susd pool
    // const totalCrvPlain3andSUSDSupply = await crvPlain3andSUSD_TOKEN_CONTRACT.totalSupply() / 1e18;
    // const totalStakedCrvPlain3andSUSDAmount = await crvPlain3andSUSD_TOKEN_CONTRACT.balanceOf(SYNTH_crvPlain3andSUSD_STAKING_POOL_ADDR) / 1e18;
    // const stakingPoolPercentage = 100 * stakedCRVAmount / totalStakedCrvPlain3andSUSDAmount;

    const totalWBNBAmount = await WBNB_TOKEN.balanceOf("0x072ffcc7a7a62276a4b092d242343f91fa656efc") / 1e18;
    const totalBUSDAmount = await BUSD_TOKEN.balanceOf("0xaaef6ab46fe13889e1b0f44752f3bf728ebad7c9") / 1e18;
    const totalUSDTAmount = await USDT_TOKEN.balanceOf("0x70c00d4a15a2e94f3a3f49288f326aedeef8e5c0") / 1e18;
    const totalDAIAmount = await DAI_TOKEN.balanceOf("0x545b374d099d81c32074069151489718f69e2ecc") / 1e18;
    const totalUSDCAmount = await USDC_TOKEN.balanceOf("0x9f4a92f4a68de27ea7e1c4662647706ad4031e54") / 1e18;
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

    const wbnbRewardPerToken = (await SOLIDUS_WBNB_POOL.periodFinish()) * 1000 >= Date.now() ? await SOLIDUS_WBNB_POOL.rewardRate() / 1e18 : 0;
    const busdRewardPerToken = (await SOLIDUS_BUSD_POOL.periodFinish()) * 1000 >= Date.now() ? await SOLIDUS_BUSD_POOL.rewardRate() / 1e18 : 0;
    const usdtRewardPerToken = (await SOLIDUS_USDT_POOL.periodFinish()) * 1000 >= Date.now() ? await SOLIDUS_USDT_POOL.rewardRate() / 1e18 : 0;
    const daiRewardPerToken = (await SOLIDUS_DAI_POOL.periodFinish()) * 1000 >= Date.now() ? await SOLIDUS_DAI_POOL.rewardRate() / 1e18 : 0;
    const usdcRewardPerToken = (await SOLIDUS_USDC_POOL.periodFinish()) * 1000 >= Date.now() ? await SOLIDUS_USDC_POOL.rewardRate() / 1e18 : 0;


    _print("Finished reading smart contracts... Looking up prices... \n")

    // CoinGecko price lookup
    const tokenPrice = await lookUpPricesFromPancake("0x0bD67D358636Fd7B0597724Aa4F20BEEDBf3073A", App);
    const bnbPrice = await lookUpPricesFromPancake("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", App)
    _print("========= STAKING ==========")
    _print(`There are total   : ${totalWBNBAmount} BNB (≈ ${totalWBNBAmount * bnbPrice} USD) in pools`);
    _print(`There are total   : ${totalBUSDAmount} BUSD in pools`);
    _print(`There are total   : ${totalUSDTAmount} USDT in pools`);
    _print(`There are total   : ${totalDAIAmount} DAI in pools`);
    _print(`There are total   : ${totalUSDCAmount} USDC in pools \n`);

    _print("========= WBNB REWARD ==========")
    const wbnbHourlyROI = (wbnbRewardPerToken * 3600 * tokenPrice / (totalWBNBAmount * bnbPrice)) * 100
    _print(`Hourly estimate   : ${toFixed(wbnbRewardPerToken * 3600, 2)} SOC`)
    _print(`Daily estimate    : ${toFixed(wbnbRewardPerToken * 3600 * 24, 2)} SOC`)
    _print(`Weekly estimate   : ${toFixed(wbnbRewardPerToken * 3600 * 24 * 7, 2)} SOC`)

    _print(`Daily ROI in USD  : ${toFixed(wbnbHourlyROI * 24, 4)}%`)
    _print(`Weekly ROI in USD : ${toFixed(wbnbHourlyROI * 24 * 7, 4)}%`)
    _print(`APY (unstable)    : ${toFixed(wbnbHourlyROI * 24 * 365, 4)}% \n`)

    _print("========= BUSD REWARD ==========")
    const busdbHourlyROI = (busdRewardPerToken * 3600 * tokenPrice / totalBUSDAmount ) * 100
    _print(`Hourly estimate   : ${toFixed(busdRewardPerToken * 3600, 2)} SOC`)
    _print(`Daily estimate    : ${toFixed(busdRewardPerToken * 3600 * 7, 2)} SOC`)
    _print(`Weekly estimate   : ${toFixed(busdRewardPerToken * 3600 * 7 * 7, 2)} SOC`)

    _print(`Daily ROI in USD  : ${toFixed(busdbHourlyROI * 24, 4)}%`)
    _print(`Weekly ROI in USD : ${toFixed(busdbHourlyROI * 24 * 7, 4)}%`)
    _print(`APY (unstable)    : ${toFixed(busdbHourlyROI * 24 * 365, 4)}% \n`)

    _print("========= USDT REWARD ==========")
    const usdtbHourlyROI = (usdtRewardPerToken * 3600 * tokenPrice / totalUSDTAmount ) * 100
    _print(`Hourly estimate   : ${toFixed(usdtRewardPerToken * 3600, 2)} SOC`)
    _print(`Daily estimate    : ${toFixed(usdtRewardPerToken * 3600 * 7, 2)} SOC`)
    _print(`Weekly estimate   : ${toFixed(usdtRewardPerToken * 3600 * 7 * 7, 2)} SOC`)

    _print(`Daily ROI in USD  : ${toFixed(usdtbHourlyROI * 24, 4)}%`)
    _print(`Weekly ROI in USD : ${toFixed(usdtbHourlyROI * 24 * 7, 4)}%`)
    _print(`APY (unstable)    : ${toFixed(usdtbHourlyROI * 24 * 365, 4)}% \n`)

    _print("========= DAI REWARD ==========")
    const daibHourlyROI = (daiRewardPerToken * 3600 * tokenPrice / totalDAIAmount ) * 100
    _print(`Hourly estimate   : ${toFixed(daiRewardPerToken * 3600, 2)} SOC`)
    _print(`Daily estimate    : ${toFixed(daiRewardPerToken * 3600 * 7, 2)} SOC`)
    _print(`Weekly estimate   : ${toFixed(daiRewardPerToken * 3600 * 7 * 7, 2)} SOC`)

    _print(`Daily ROI in USD  : ${toFixed(daibHourlyROI * 24, 4)}%`)
    _print(`Weekly ROI in USD : ${toFixed(daibHourlyROI * 24 * 7, 4)}%`)
    _print(`APY (unstable)    : ${toFixed(daibHourlyROI * 24 * 365, 4)}% \n`)

    _print("========= USDC REWARD ==========")
    const usdcbHourlyROI = (usdcRewardPerToken * 3600 * tokenPrice / totalUSDCAmount ) * 100
    _print(`Hourly estimate   : ${toFixed(usdcRewardPerToken * 3600, 2)} SOC`)
    _print(`Daily estimate    : ${toFixed(usdcRewardPerToken * 3600 * 7, 2)} SOC`)
    _print(`Weekly estimate   : ${toFixed(usdcRewardPerToken * 3600 * 7 * 7, 2)} SOC`)

    _print(`Daily ROI in USD  : ${toFixed(usdcbHourlyROI * 24, 4)}%`)
    _print(`Weekly ROI in USD : ${toFixed(usdcbHourlyROI * 24 * 7, 4)}%`)
    _print(`APY (unstable)    : ${toFixed(usdcbHourlyROI * 24 * 365, 4)}% \n`)
    // _print("========= STAKING ==========")
    // _print(`There are total   : ${totalCrvPlain3andSUSDSupply} crvPlain3andSUSD given out by Curve.`);
    // _print(`There are total   : ${totalStakedCrvPlain3andSUSDAmount} crvPlain3andSUSD staked in Synthetix's pool.`);
    // _print(`                  = ${toDollar(totalStakedCrvPlain3andSUSDAmount * crvPlain3andSUSDPricePerToken)} \n`);
    // _print(`You are staking   : ${stakedCRVAmount} crvPlain3andSUSD (${toFixed(stakingPoolPercentage, 5)}% of the pool)`);
    // _print(`                  ≈ ${toDollar(crvPlain3andSUSDPricePerToken * stakedCRVAmount)} (Averaged)\n`);

    // _print("======== SNX REWARDS =======")
    // _print(`Claimable Rewards : ${earnedSNX} SNX`);
    // _print(`                  = ${toDollar(earnedSNX * SNXPrice)}\n`)

    // _print(`Weekly estimate   : ${rewardPerToken * stakedCRVAmount} SNX (out of total ${weekly_reward} SNX)`)
    // _print(`                  = ${toDollar((rewardPerToken * stakedCRVAmount) * SNXPrice)}`)
    // const SNXWeeklyROI = rewardPerToken * SNXPrice * 100 / crvPlain3andSUSDPricePerToken;
    // _print(`Weekly ROI in USD : ${toFixed(SNXWeeklyROI, 4)}%`)
    // _print(`APR (unstable)    : ${toFixed(SNXWeeklyROI * 52, 4)}% \n`)

    // _print("======== CRV REWARDS ========")
    // _print(`    Not distributed yet`);

    // await _print24HourPrice("havven", "SNX");

    hideLoading();

}
