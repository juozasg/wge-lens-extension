import { Main } from "@k8slens/extensions";
import { WgePreferencesStore } from "./src/wge-preferences-store";

/**
 * Main.LensExtension api allows you to access, configure, and customize Lens data add
 * custom application menu items, and generally run custom code in Lens'
 * main process.
 * 
 * See more details: <https://docs.k8slens.dev/>
 */
export default class WgeLensExtensionMain extends Main.LensExtension {
  onActivate() {
    console.log("wge-lens Main activated");
    const prefStore = new WgePreferencesStore();
    prefStore.loadExtension(this);
  }
}
