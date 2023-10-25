import { Common, Renderer } from "@k8slens/extensions";
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

  const openWgePortal = () => {
    // sendToTerminal(`kubectl get pods -n ${namespaceName}`);
    console.log("debug menu item", props);
    
    const { object: pipeline } = props;
    const portalUrl = 'https://mccp.howard.moomboo.space';
    const query = `pipelines/details/status?kind=Pipeline&name=${pipeline.getName()}&namespace=${pipeline.getNs()}`;
    const url = `${portalUrl}/${query}`;
    console.log("opening url", url);
    Common.Util.openExternal(url);
  };

  return (
    <MenuItem onClick={openWgePortal}>
      <Icon
        material="open_in_new"
        interactive={toolbar}
        title="Open in WGE Portal..."
      />
      <span className="title">Open in WGE Portal...</span>
    </MenuItem>
  );
}
