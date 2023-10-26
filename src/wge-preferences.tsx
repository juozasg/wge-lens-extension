import { Renderer } from "@k8slens/extensions";
import { makeObservable, observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { WgePreferencesStore } from "./wge-preferences-store";

const {
  Component: { Input },
} = Renderer;


@observer
export class WgeUrlPreferenceInput extends React.Component<{store: WgePreferencesStore}> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(props: {store: WgePreferencesStore}) {
    super(props);
    makeObservable(this);
  }
  @observable url = this.props.store.url;
  render() {

    return (
      <Input
        dirty={true}
        name={"WGE Portal URL"}
        theme="round-black"
        validators={[Renderer.Component.InputValidators.isUrl]}
        value={this.url}
        onChange={(v) => {
          this.url = v;
          this.props.store.url = v;
        }}
      />
    )
  }
}

@observer
export class WgeClusterNamePreferenceInput extends React.Component<{store: WgePreferencesStore}> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(props: {store: WgePreferencesStore}) {
    super(props);
    makeObservable(this);
  }
  @observable clusterName = this.props.store.clusterName;
  render() {
    return (
      <Input
        dirty={true}
        name={"WGE Portal clusterName"}
        theme="round-black"
        validators={[Renderer.Component.InputValidators.isRequired]}
        value={this.clusterName}
        onChange={(v) => {
          this.clusterName = v;
          this.props.store.clusterName = v;
        }}
      />
    )
  }
}




export class EmptyPreferenceHint extends React.Component {
  render() {
    return <span></span>;
  }
}
