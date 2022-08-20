import { Resolver } from "@lumeweb/resolver-module-eip137-common";
import pocketNetworks from "@lumeweb/pokt-rpc-endpoints";
// @ts-ignore
import ENSRoot from "@lumeweb/ensjs";
const ENS = ENSRoot.default;
export default class Evmos extends Resolver {
    getEns(provider) {
        return new ENS({
            provider,
            ensAddress: "0xae9Da235A2276CAa3f6484ad8F0EFbF4e0d45246",
        });
    }
    getSupportedTlds() {
        return ["evmos"];
    }
    getChain(params) {
        return pocketNetworks["evmos-mainnet"];
    }
}
