import { Common, Renderer } from "@k8slens/extensions";
import React from "react";

const {
  Component: { MenuItem, Icon }, 
} = Renderer;

type KubeObjectMenuProps<T> = Renderer.Component.KubeObjectMenuProps<T>;
type KubeObject = Renderer.K8sApi.KubeObject;


export function OpenInWgeMenuItem(props: KubeObjectMenuProps<KubeObject>) {
  const portalQuery = (clusterName: string, object: KubeObject) => {
    switch(object.kind) {
    case "Canary":
      return `canary_details?clusterName=${clusterName}&name=${object.getName()}&namespace=${object.getNs()}`;
    case "Pipeline":
      return `pipelines/details/status?kind=Pipeline&name=${object.getName()}&namespace=${object.getNs()}`;
    case "GitOpsSet":
      return `gitopssets/object/details?clusterName=${clusterName}&name=${object.getName()}&namespace=${object.getNs()}`;
    case "GitOpsTemplate":
      return `templates/create?name=${object.getName()}&namespace=${object.getNs()}`;
    }
    return "";
  }

  const openWgePortal = () => {
    // sendToTerminal(`kubectl get pods -n ${namespaceName}`);
    console.log("debug menu item", props);
    
    const { object: object } = props;
    const portalUrl = "https://mccp.howard.moomboo.space";
    const clusterName = "howard-moomboo-space";
    const query = portalQuery(clusterName, object);
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
