# lint staged

- Run this command to lint every staged file that has been updated before a commit. `npx lint-staged`

#

- Before publishing to the package to git run `npm run rollup` to build the package first.
- After that `npm publish` to publish the package

# github hooks

- We are using husky and lint-staged as the prehooks that lint the code before each commit.
