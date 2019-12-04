# npm-talk-react-hooks

This sample makes use of `standard-version` to automate version bumps and the changelog.

Publishing has been made more streamlined with a `build:ci` npm script which
ensures that each step is run in the proper order.

A project with this setup can be feasibly integrated into a CI pipeline.

## How you can spice this up

By using `standard-version`, we're relying on developers to be responsible and
use appropriate commit messages. There are a few extra tools that can help with
this:

1. Husky (https://github.com/typicode/husky#readme) - Acts as a linter for commit messages (so developers have to use versioning syntax)
2. Commitizen (https://github.com/commitizen/cz-cli) - A commit message wizard
