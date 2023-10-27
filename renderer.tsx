import { Renderer } from "@k8slens/extensions";
import React from "react";


import { OpenInWgeMenuItem } from "./src/open-wge-portal-menu-item";
import { WgeUrlPreferenceInput } from "./src/wge-preferences";
import { WgePreferencesStore } from "./src/wge-preferences-store";

type KubeObjectMenuProps<T> = Renderer.Component.KubeObjectMenuProps<T>;
// type Namespace = Renderer.K8sApi.Namespace;
type KubeObject = Renderer.K8sApi.KubeObject;

/**
 * 
 * To see console statements in 'renderer' process, go to the console tab in DevTools in Lens
 * View > Toggle Developer Tools > Console.
 * 
 */
export default class WgeLensRenderer extends Renderer.LensExtension {
  prefStore: WgePreferencesStore;

  onActivate() {
    console.log("wge-lens Rendered activated");
    this.prefStore = new WgePreferencesStore();
    this.prefStore.loadExtension(this);
  }

  appPreferences = [
    {
      title: "Weave GitOps Enterprise Portal Settings",
      components: {
        Input: () => <WgeUrlPreferenceInput store={this.prefStore} />,
        Hint: () => <></>,
      },
    }
  ];
  

  kubeObjectMenuItems = [
    {
      kind: "Canary",
      apiVersions: ["flagger.app/v1beta1"],
      components: {
        MenuItem: (props: KubeObjectMenuProps<KubeObject>) => (
          <OpenInWgeMenuItem {...{...this.prefStore, ...props }} />
        ),
      },
    },
    {
      kind: "Pipeline",
      apiVersions: ["pipelines.weave.works/v1alpha1"],
      components: {
        MenuItem: (props: KubeObjectMenuProps<KubeObject>) => (
          <OpenInWgeMenuItem {...{...this.prefStore, ...props }} />
        ),
      },
    },
    {
      kind: "GitOpsSet",
      apiVersions: ["templates.weave.works/v1alpha1"],
      components: {
        MenuItem: (props: KubeObjectMenuProps<KubeObject>) => (
          <OpenInWgeMenuItem {...{...this.prefStore, ...props }} />
        ),
      },
    },
    {
      kind: "GitOpsTemplate",
      apiVersions: ["templates.weave.works/v1alpha2"],
      components: {
        MenuItem: (props: KubeObjectMenuProps<KubeObject>) => (
          <OpenInWgeMenuItem {...{...this.prefStore, ...props }} />
        ),
      },
    },
  ];

}




// function ExampleIcon() {
//   return <Renderer.Component.Icon
//     material="airport_shuttle"
//     interactive={toolbar}
//     title="Open in WGE Portal..."
//   />
// }

// Examples nested page menus
// clusterPageMenus = [
//   {
//     target: { pageId: "hello" },
//     title: "Hello World Parent",
//     id: "hello-world-parent",
//     components: {
//       Icon: ExampleIcon,
//     }
//   },
//   {
//     target: { pageId: "hello" },
//     title: "Hello World Child",
//     parentId: "hello-world-parent",
//     components: {
//       Icon: ExampleIcon,
//     }
//   }
// ]


  