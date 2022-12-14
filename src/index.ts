import { Resolver, RpcProvider } from "@lumeweb/resolver-module-eip137-common";
import pocketNetworks from "@lumeweb/pokt-rpc-endpoints";

// @ts-ignore
import ENSRoot from "@lumeweb/ensjs";

const ENS = ENSRoot.default;

export default class Evmos extends Resolver {
  protected getEns(provider: RpcProvider): any {
    return new ENS({
      provider,
      ensAddress: "0xae9Da235A2276CAa3f6484ad8F0EFbF4e0d45246",
    });
  }

  getSupportedTlds(): string[] {
    return ["evmos"];
  }

  protected getChain(params: { [p: string]: any }): string {
    return pocketNetworks["evmos-mainnet"];
  }
}
