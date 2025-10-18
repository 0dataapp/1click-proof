# 1click-proof

Sample Node.js app that can be [one-click](https://easyindie.app) deployed to self-hosted panels.

Each request writes a file to the local filesystem, which should persist between restarts; set the destination directory via a `DATA_DIRECTORY` environment variable. Requests to `/skip-write` will not write a file.

## [Cloudron](https://cloudron.io)

Installing custom apps from [the Docker Hub image](https://hub.docker.com/repository/docker/rosano/1click-proof) is done via the [Cloudron CLI](https://docs.cloudron.io/packaging/cli/).

First clone the project locally:

```
git clone https://github.com/0dataapp/1click-proof
cd 1click-proof
```

Then from the project, run the `install` command:

```
cloudron install --image rosano/1click-proof:cloudron --location 1click-proof
```

Updates are also done from the project directory:

```
cloudron update --image rosano/1click-proof:cloudron --app 1click-proof
```

See the [packaging tutorial](https://docs.cloudron.io/packaging/tutorial/) for reference. You can also [use Cloudron itself to build and as a registry](https://rosano.ca/log/01hs9tx1ytkp3kb0v03pdpm08a).

## Questions

Feel free to reach out on [Mastodon](https://rosano.ca/mastodon) or [Bluesky](https://rosano.ca/bluesky).
