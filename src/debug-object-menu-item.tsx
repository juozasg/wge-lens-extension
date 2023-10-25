import { Renderer } from "@k8slens/extensions";
import React from "react";

const {
  Component: { terminalStore, MenuItem, Icon },
  Navigation,
} = Renderer;

type KubeObjectMenuProps<T> = Renderer.Component.KubeObjectMenuProps<T>;
type Namespace = Renderer.K8sApi.Namespace;
type KubeObject = Renderer.K8sApi.KubeObject;


export function DebugObjectMenuItem(props: KubeObjectMenuProps<KubeObject>) {
//   const { object: namespace, toolbar } = props;
//   if (!namespace) return null;

//   const namespaceName = namespace.getName();

//   const sendToTerminal = (command: string) => {
//     terminalStore.sendCommand(command, {
//       enter: true,
//       newTab: true,
//     });
//     Navigation.hideDetails();
//   };

  const debug = () => {
    // sendToTerminal(`kubectl get pods -n ${namespaceName}`);
    console.log("debug menu item", props);
  };

  return (
    <MenuItem onClick={debug}>
      <Icon
        material="speaker_group"
        interactive={toolbar}
        title="Debug"
      />
      <span className="title">Debug Props</span>
    </MenuItem>
  );
}
