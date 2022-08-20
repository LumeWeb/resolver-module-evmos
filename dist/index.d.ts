import { Resolver, RpcProvider } from "@lumeweb/resolver-module-eip137-common";
export default class Evmos extends Resolver {
  protected getEns(provider: RpcProvider): any;
  getSupportedTlds(): string[];
  protected getChain(params: { [p: string]: any }): string;
}
