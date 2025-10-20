# oneclick-proof

Simple Node.js app demonstrating how to package for [one-click](https://easyindie.app) deploys on self-hosted panels.

Each request increments a count that's stored on the local filesystem, which should persist between restarts; set the destination directory path via a `DATA_DIRECTORY` environment variable.

These panels maintain their own 'app catalogs' for one-click installs; until your app is included there, it will require more clicks to setup. Below are instructions for each platform so that you can test easily before submission.

Many of them also require publishing a Docker image somewhere to install. For simplicity the examples below uses [pre-built images](https://hub.docker.com/repository/docker/0data/oneclick-proof).

## [Cloudron](https://cloudron.io)

First clone the project locally:

```
git clone https://github.com/0dataapp/oneclick-proof
cd oneclick-proof
```

Then from the project directory, run the `install` command via the [Cloudron CLI](https://docs.cloudron.io/packaging/cli/):

```
cloudron install --image 0data/oneclick-proof:cloudron --location oneclick-proof
```

Updates are also done from the project directory:

```
cloudron update --image 0data/oneclick-proof:cloudron --app oneclick-proof
```

See the [packaging tutorial](https://docs.cloudron.io/packaging/tutorial/) for reference. You can also [use Cloudron itself to build and as a registry](https://rosano.ca/log/01hs9tx1ytkp3kb0v03pdpm08a).

## [Caprover](https://caprover.com)

### with docker-compose:

1. navigate to "Apps" → "Create A New App" → "One-Click Apps/Databases"
, then search for `>> TEMPLATE <<` or scroll to bottom.
2. select the ">> TEMPLATE <<" app and paste the configuration from `caprover/compose.yml`.
3. name your app as `oneclick-proof` or something else, and then deploy.

### without docker-compose:

1. navigate to "Apps" → "Create A New App".
2. check the box for "Has Persistent Data", name your app as `oneclick-proof` or something else, and then click "Create New App".
3. navigate to your app settings, then "App Configs" → "Persistent Directories".
4. set "Path in App" to `/usr/src/app/__local` and "Label" to `oneclick-proof-local`; click "Save & Restart".
5. navigate to "Deployment"; enter `0data/oneclick-proof:caprover` into "Deploy via ImageName", then click "Deploy"

### other ways

There are a variety of other [deployment methods](https://caprover.com/docs/deployment-methods.html), including deploying code directly from your machine without publishing a Docker image via the [Caprover CLI](https://caprover.com/docs/cli-commands.html):

```
git clone https://github.com/0dataapp/oneclick-proof
cd oneclick-proof
caprover deploy
```

More info on packaging and deployment:
- [Captain Definition File](https://caprover.com/docs/captain-definition-file.html)
- [Persistent Apps](https://caprover.com/docs/persistent-apps.html)
- [How to Run Docker Compose on CapRover](https://caprover.com/docs/docker-compose.html#how-to-run-docker-compose-on-caprover)
- [Example packages](https://github.com/caprover/one-click-apps/tree/master/public/v4/apps)

## Questions

Feel free to reach out on [Mastodon](https://rosano.ca/mastodon) or [Bluesky](https://rosano.ca/bluesky).
