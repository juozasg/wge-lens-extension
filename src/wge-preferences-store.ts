import { Common } from "@k8slens/extensions";
import { makeObservable, observable } from "mobx";
const { Store } = Common;

export type WgePreferencesStoreModel = {
    url: string;
    clusterName: string;
}

export class WgePreferencesStore extends Store.ExtensionStore<WgePreferencesStoreModel>{
    @observable url = "https://mccp.howard.moomboo.space";
    @observable clusterName = "howard-moomboo-space";

    constructor() {
      super({
        configName: "wge-lens-preference-store",
        defaults: {
          url: "",
          clusterName: "",
        }
      });
      makeObservable(this);
    }

    fromStore({ url, clusterName }: WgePreferencesStoreModel): void {
      this.url = url;
      this.clusterName = clusterName;
    }

    toJSON(): WgePreferencesStoreModel {
      return {
        url: this.url,
        clusterName: this.clusterName
      };
    }
}