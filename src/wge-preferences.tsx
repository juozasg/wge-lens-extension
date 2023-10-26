import { Renderer } from "@k8slens/extensions";
import { observable } from "mobx";
import { observer } from "mobx-react";
import React from "react";

const {
  Component: { Input },
} = Renderer;


// eslint-disable-next-line @typescript-eslint/ban-types
// type Props = {}


@observer
export class WgeUrlPreferenceInput extends React.Component {
  // eslint-disable-next-line @typescript-eslint/ban-types
  // constructor(props: {} | Readonly<{}>) {
  //   super(props);
  //   makeObservable(this);
  // }

  @observable url = "https://mccp.howard.moomboo.space1";
  render() {
    // const { preference } = this.props;
    // const store = new WgePreferencesStore();
    return (
      <>
        <h5>Weave GitOps Enterprise Portal Base URL</h5>
        <Input
          dirty={true}
          name={"WGE Portal URL"}
          theme="round-black"
          validators={[Renderer.Component.InputValidators.isUrl]}
          value={this.url}
          onChange={(v) => {
            this.url = v;
            // store.url = v;
          }}
        />
      </>)
  }
}


// @observer
// export class WgeClusterNamePreferenceInput extends React.Component<Props> {
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   constructor(props: {} | Readonly<{}>) {
//     super(props);
//     makeObservable(this);
//   }

//   @observable clusterName = "https://mccp.howard.moomboo.space";
//   render() {
//     // const { preference } = this.props;
//     return (
//       <>
//         <h5>Weave GitOps Enterprise Portal Base URL</h5>
//         <Input
//           dirty={true}
//           name={"WGE Portal URL"}
//           theme="round-black"
//           validators={[Renderer.Component.InputValidators.isUrl]}
//           value={this.url}
//           onChange={(v) => {
//             this.url = v;
//           }}
//         />
//       </>)
//   }
// }



export class EmptyPreferenceHint extends React.Component {
  render() {
    return <span></span>;
  }
}
