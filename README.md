# GitHub Copilot MCP Showcase repository

This repository is a showcase of the GitHub Copilot's capabilities in generating code and assisting with various programming tasks. It includes examples of code generation, documentation, and other features that demonstrate the power of AI in software development and how to extend the capabilities of GitHub Copilot by using various MCP servers that are configured in `.vscode/mcp.json` file. **The main purpose of this repository is to provide a hands-on experience with GitHub Copilot, the new agent mode and its integration with MCP servers.**

# Prerequisites

## Fork this repository

Please create a fork of this repository to your own GitHub account. This will allow you to make changes and experiment with the code without affecting the original repository.

## Introduction to MCP

Please watch the following video to learn more about MCP and how to use it with GitHub Copilot:

[![MCP Introduction](https://img.youtube.com/vi/1Pf2rW5FsqQ/0.jpg)](https://www.youtube.com/watch?v=1Pf2rW5FsqQ)

## MCP in VS Code
The official documentation for MCP in VS Code can be found [here](https://code.visualstudio.com/docs/copilot/chat/mcp-servers).

## GitHub PAT

To use GitHub Copilot with MCP, you need to create a GitHub Personal Access Token (PAT).
Follow the instructions in the following video to create a PAT.

Use this link to create a PAT: [Create GitHub PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens?wt.mc_id=DT-MVP-5004771)

## Codespaces

This repository is configured to work with GitHub Codespaces. You can create a codespace by clicking the green "Code" button and selecting "Open with Codespaces".
This will create a new codespace with all the necessary dependencies and configurations already set up for you. 

> [!NOTE]
> ### MCP Server Options: Codespaces vs Docker
> In your `.vscode/mcp.json`, you will find two different configurations for the GitHub MCP server based on how you have started this exercise - either on your local machine or in a GitHub Codespace.
>
> - **github-codespace**: Runs the MCP server as a native Go binary built directly in your Codespace or dev container. This is typically faster and allows for easier debugging and direct integration with your environment. The command points to the built binary (e.g., `${workspaceFolder}/github-mcp-server/cmd/github-mcp-server/github-mcp-server`).
>
> - **github-docker**: Runs the MCP server inside a Docker container using the published image (`ghcr.io/github/github-mcp-server`) **on your local machine**. This is more portable and ensures a consistent environment, but may be slower to start and less convenient for debugging or development.

# MCP Servers

We are using the following MCP servers in this repository:

- [GitHub Copilot MCP](https://github.com/github/github-mcp-server)
  - This is the MCP server that gives GitHub Copilot access to the GitHub API and allows you to generate issues, read repository information, and more.
- [Playwright MCP](https://github.com/microsoft/playwright-mcp)
    - This is the MCP server that gives GitHub Copilot access to the Playwright API and allows you to generate tests, read browser information, and more.
- [Maven Dependency MCP](https://github.com/Bigsy/maven-mcp-server)
    - This is the MCP server that gives GitHub Copilot access to the Maven Nexus and allows you to check for dependencies, read repository information, and more.

# Exercises

This repository contains a number of exercises that demonstrate the capabilities of GitHub Copilot and how to use it with MCP servers. Each exercise is contained in its own folder and includes an `exercise.md` file with instructions on how to complete the exercise.

- [Exercise 1: Creating a Polaroid image gallery](./html/exercise/exercise.md)
  - This exercise demonstrates how to leverage an agent to interpret a designer mockup, use the GitHub Copilot MCP server to generate issues, read repository information, and more. Furthermore we will use the Playwright MCP server to generate tests for the Polaroid image gallery.
- [Exercise 2: Creating a Java library to query Star Wars characters](./java/exercise/exercise.md)
  - This exercise demonstrates how you can create issues with the GitHub Copilot MCP server, use the Maven Dependency MCP server to check for dependencies, and reitarate on the code to improve it.