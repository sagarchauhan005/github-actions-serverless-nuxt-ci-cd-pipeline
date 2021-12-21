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

# How to read github-actions-setup.yml file?

Check your `github-actions-setup.yml` file in `.github/workflows/` directory to understand what all steps you need to set up.

![Imgur](https://i.imgur.com/txRbDQK.jpg)

Make sure you have added AWS secrets to your specific repository or organization. 
![Imgur](https://i.imgur.com/SQlTRZm.jpg)

Make sure you have a `make file` in your project root directory which has all the commands to build your project.
![Imgur](https://i.imgur.com/KQVHWUo.jpg)

Comment / Uncomment the following snippet if you don't need to install PHP or customize it as per your need. Use this to install any language or package you need.
![Imgur](https://i.imgur.com/bumTO4E.jpg)

Comment / Uncomment the following snippet if you don't need any Laravel Mix package to build production assets.
![Imgur](https://i.imgur.com/tE15aO8.jpg)

This section sets up the node environment for you to run npm commands.
![Imgur](https://i.imgur.com/Q7kpKI9.jpg)

This step allows you to read files at your root directory or local directory such as we use `make` file
![Imgur](https://i.imgur.com/Ksf3sdy.jpg)

# Customization

You can easily customize the deployment process by adding your own commands to the `Makefile` file.

# Author

[Sagar Chauhan](https://twitter.com/sagarchauhan005) works as a Project Manager - Technology at [Greenhonchos](https://www.greenhonchos.com).
In his spare time, he hunts bug as a Bug Bounty Hunter.
Follow him at [Instagram](https://www.instagram.com/sagarchauhan005/), [Twitter](https://twitter.com/sagarchauhan005),  [Facebook](https://facebook.com/sagar.chauhan3),
[Github](https://github.com/sagarchauhan005)

# License
MIT
