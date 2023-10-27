# wge-lens extension
Weave GitOps Enterprise Integration for Lens K8s IDE


### Features

Proof of concept integration for Lens and Weave GitOps Enterprise.

Adds a menu item to open WGE portal for Canary, Pipeline, GitOpsTemplate and GitOpsSet WGE resources.


### Installation and usage

Install using Lens **Extensions** page and a `.tgz` url:

https://docs.k8slens.dev/extensions/lens-extensions/#install-extensions

Configure WGE Portal base URL and WGE management cluster name in Lens **Settings...* page.

WGE object menu items will open the browser with WGE portal details (Canary, Pipeline and GitOpsSet) or create (GitOpsTemplate) pages.
