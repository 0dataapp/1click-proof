# 1click-proof

Sample Node.js app that can be [one-click](https://easyindie.app) deployed to self-hosted panels.

Each request writes a file to the local filesystem, which should persist between restarts; set the destination directory via a `DATA_DIRECTORY` environment variable. Requests to `/skip-write` will not write a file.

## [Cloudron](https://cloudron.io)

If you're comfortable with Docker, follow the [packaging tutorial](https://docs.cloudron.io/packaging/tutorial/) — something like:

```
git clone https://github.com/0dataapp/1click-proof
cd 1click-proof

docker build -t username/1click-proof:0.0.1 .
docker push username/1click-proof:0.0.1
```

Or [use Cloudron itself to build and as a registry](https://rosano.ca/log/01hs9tx1ytkp3kb0v03pdpm08a).

## Questions

Feel free to reach out on [Mastodon](https://rosano.ca/mastodon) or [Bluesky](https://rosano.ca/bluesky).
