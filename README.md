# DevSetup

A lightweight CLI tool for checking common developer tools and their installed versions. Currently tested on Windows, with macOS and Linux support planned for upcoming updates.

## Features

- Check common development tools
- Display installed versions
- Detect missing tools
- Supports alternative commands such as `python` / `python3`
- Works on Windows
- Designed for future macOS and Linux support
- Simple CLI interface

## Currently Checked

- Node.js
- npm
- Git
- Python
- pip
- Java
- .NET
- Yarn
- pnpm
- TypeScript
- VS Code
- GitHub CLI
- CMake
- Maven
- Gradle
- Docker
- Go
- Rust

## Requirements

- Node.js 18 or newer

## Installation

Clone the repository:

```bash
git clone https://github.com/Atrocious7/devsetup.git
cd devsetup


Install dependencies:
npm install

Link the CLI:
npm link

Usage
Run:
devsetup check
```

Future Features
- Add full support for Windows, macOS, and Linux.
- Provide detailed recommendations for missing developer tools.
- Add JSON and file-based environment report exports.
- Introduce a `devsetup doctor` command for diagnosing configuration issues.
- Add optional automatic installation guidance using platform-specific package managers.
- Support customizable tool lists and developer environment profiles.
