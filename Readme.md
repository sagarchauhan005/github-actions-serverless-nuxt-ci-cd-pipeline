# GitHub Actions Serverless CI/CD Pipeline Setup

A simple GitHub actions serverless pipeline setup for a simple serverless function.

# Installation

- Run `npm install github-actions-serverless-pipeline` into your app and then follow the steps.

# Dependency

1. This package expects that all the build procedures or commands are written in a single `Makefile` file and that the `Makefile` is located in the root of the project.
2. A sample file is attached to this package, and you can use it as a template.

# Post Installation Steps

1. Open your `github-actions-setup.yml` from `.github/workflows/` directory.
2. Since this is a hidden folder, make sure it is visible in your editor or file explorer.
3. Replace the following :
    ```
    name: github-actions-setup
    ```
    with
    ```
    name: <your-unique-github-actions-setup-name>
    ```
4. Replace the following :
    ```
    branches: [ master ]
    ```
   with
    ```
    branches: [ <your-branch-name> ]
    ```
5. That's it! Push the changes to your branch, and you are ready to go.

# Customization

You can easily customize the deployment process by adding your own commands to the `Makefile` file.

# Author

[Sagar Chauhan](https://twitter.com/sagarchauhan005) works as a Project Manager - Technology at [Greenhonchos](https://www.greenhonchos.com).
In his spare time, he hunts bug as a Bug Bounty Hunter.
Follow him at [Instagram](https://www.instagram.com/chauhansahab005/), [Twitter](https://twitter.com/chauhansahab005),  [Facebook](https://facebook.com/sagar.chauhan3),
[Github](https://github.com/sagarchauhan005)

# License
MIT
