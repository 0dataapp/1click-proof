# 1click-proof

Sample Node.js app demonstrating [one-click](https://easyindie.app) deploys to self-hosted panels.

Each request writes a file to the local filesystem, which should persist between restarts; set the destination directory via a `DATA_DIRECTORY` environment variable. Requests to `/skip-write` will not write a file.

These panels maintain their own 'app catalogs' for one-click installs; until your app is included there, it will require more clicks to setup. Below are instructions for each platform so that you can test easily before submission.

## [Cloudron](https://cloudron.io)

Installing from [the Docker Hub image for Cloudron](https://hub.docker.com/repository/docker/0data/1click-proof/tags/cloudron) is done via the [Cloudron CLI](https://docs.cloudron.io/packaging/cli/).

First clone the project locally:

```
git clone https://github.com/0dataapp/1click-proof
cd 1click-proof
```

Then from the project directory, run the `install` command:

```
cloudron install --image 0data/1click-proof:cloudron --location 1click-proof
```

Updates are also done from the project directory:

```
cloudron update --image 0data/1click-proof:cloudron --app 1click-proof
```

See the [packaging tutorial](https://docs.cloudron.io/packaging/tutorial/) for reference. You can also [use Cloudron itself to build and as a registry](https://rosano.ca/log/01hs9tx1ytkp3kb0v03pdpm08a).

## [Caprover](https://caprover.com)

The simplest way to install [the Docker Hub image for Caprover](https://hub.docker.com/repository/docker/0data/1click-proof/tags/caprover) is:

1. navigate to "Apps" → "Create A New App" → https://captain.cloud3.rosano.ca/#/apps/details/oneclick-proof
, then search for `>> TEMPLATE <<` or scroll to bottom.
2. select the ">> TEMPLATE <<" app and paste the following configuration:

```yaml
captainVersion: 4
services:
  $$cap_appname:
    image: 0data/1click-proof:caprover
    volumes:
      - $$cap_appname-local:/usr/src/app/__local
    restart: always
caproverOneClickApp:
  instructions:
    start: See repository for details https://github.com/0dataapp/1click-proof
    end: 1click-proof is deployed and available as $$cap_appname. 
  displayName: 1click-proof
  description: Sample Node.js app that can be one-click deployed to self-hosted panels.
  documentation: See repository for details https://github.com/0dataapp/1click-proof
```

3. name your app as `oneclick-proof` or something else, and then deploy.

---

A more complex method is:

1. navigate to "Apps" → "Create A New App".
2. check the box for "Has Persistent Data", name your app as `oneclick-proof` or something else, and then click "Create New App".
3. navigate to your app settings, then "App Configs" → "Persistent Directories".
4. set "Path in App" to `/usr/src/app/__local` and "Label" to `oneclick-proof-local`; click "Save & Restart".
5. navigate to "Deployment"; enter `0data/1click-proof:caprover` into "Deploy via ImageName", then click "Deploy"

---

If you want to deploy code directly from your machine without Docker via the CLI:

```
git clone https://github.com/0dataapp/1click-proof
cd 1click-proof
caprover deploy
```

## Questions

Feel free to reach out on [Mastodon](https://rosano.ca/mastodon) or [Bluesky](https://rosano.ca/bluesky).
