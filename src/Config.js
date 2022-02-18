var Config = {
    ENVIRONMENT: "LOCAL",
    ENVIRONMENTS: {
        LOCAL: {
            API_URL: "https://########",
        },
        DEVELOPMENT: {
        },
        STAGING: {
        },
        PRODUCTION: {
        }
    }
};
Config.env = () => {
    return Config.ENVIRONMENTS[Config.ENVIRONMENT];
};
export default Config;
