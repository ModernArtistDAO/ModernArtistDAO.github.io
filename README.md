<p align="center">
  <a href="https://github.com/ModernArtistDAO/mad--brand-assets">
    <img src="https://github.com/ModernArtistDAO/mad--brand-assets/blob/main/logo/mad-logo--color-gradient.png?raw=true" alt="ModernArtistDAO Brand" style="max-width:100%;" width="200">
  </a>
</p>

<br />

## Modern Artist DAO - Reference Frontend. <br> Powered by Pool Together v3

The newest UI for communicating with the (unreleased) v3 PoolTogether protocol. 

A demo of this app is live [here](https://reference-app.modernartistdao.com).

To run the project against a local node you can use the [pooltogether-contracts](https://github.com/pooltogether/pooltogether-contracts/tree/version-3). With those contracts you can bootstrap a local Buidler EVM instance with test data so that you can develop the app locally.

#### Setup

Install dependencies:

```bash
$ yarn
```

Make sure you have `direnv` installed and copy `.envrc.example` to `.envrc`:

```bash
$ cp .envrc.example .envrc
```

Fill in your own values for `.envrc`, then run:

```bash
$ direnv allow
```

To run the local server, run:

```
$ yarn dev
```
