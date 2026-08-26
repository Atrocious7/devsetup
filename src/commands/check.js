import chalk from "chalk";
import { runCommand } from "../utils/command.js";

const tools = [
  {
    name: "Node.js",
    commands: ["node --version"]
  },
  {
    name: "npm",
    commands: ["npm --version"]
  },
  {
    name: "Git",
    commands: ["git --version"]
  },
  {
    name: "Python",
    commands: ["python --version", "python3 --version"]
  },
  {
    name: "pip",
    commands: ["pip --version", "pip3 --version"]
  },
  {
    name: "Java",
    commands: ["java --version"]
  },
  {
    name: ".NET",
    commands: ["dotnet --version"]
  },
  {
    name: "Yarn",
    commands: ["yarn --version"]
  },
  {
    name: "pnpm",
    commands: ["pnpm --version"]
  },
  {
    name: "TypeScript",
    commands: ["tsc --version"]
  },
  {
    name: "VS Code",
    commands: ["code --version"]
  },
  {
    name: "GitHub CLI",
    commands: ["gh --version"]
  },
  {
    name: "CMake",
    commands: ["cmake --version"]
  },
  {
    name: "Maven",
    commands: ["mvn --version"]
  },
  {
    name: "Gradle",
    commands: ["gradle --version"]
  },
  {
    name: "Docker",
    commands: ["docker --version"]
  },
  {
    name: "Go",
    commands: ["go version"]
  },
  {
    name: "Rust",
    commands: ["rustc --version"]
  }
];

function extractVersion(output) {
  const match = output.match(
    /\d+\.\d+(?:\.\d+)?(?:[-+][\w.-]+)?/
  );

  return match ? match[0] : "Installed";
}

async function checkTool(tool) {
  for (const command of tool.commands) {
    const result = await runCommand(command);

    if (result.installed) {
      return {
        installed: true,
        version: extractVersion(result.version)
      };
    }
  }

  return {
    installed: false,
    version: null
  };
}

export async function checkEnvironment() {
  console.log();
  console.log(chalk.bold("  DEVSETUP"));
  console.log(chalk.gray("  Development Environment Checker"));
  console.log();
  console.log(
    chalk.gray("  Checking your development environment...\n")
  );

  let installedCount = 0;

  for (const tool of tools) {
    const result = await checkTool(tool);

    if (result.installed) {
      installedCount++;

      console.log(
        `  ${chalk.green("✓")} ${tool.name.padEnd(14)} ${chalk.gray(
          result.version
        )}`
      );
    } else {
      console.log(
        `  ${chalk.red("✗")} ${tool.name.padEnd(14)} ${chalk.red(
          "Not installed"
        )}`
      );
    }
  }

  const total = tools.length;
  const percentage = Math.round(
    (installedCount / total) * 100
  );

  let status;

  if (percentage === 100) {
    status = chalk.green("Ready");
  } else if (percentage >= 70) {
    status = chalk.yellow("Mostly Ready");
  } else if (percentage >= 40) {
    status = chalk.yellow("Partially Ready");
  } else {
    status = chalk.red("Needs Setup");
  }

  console.log();
  console.log(
    chalk.gray("  ─────────────────────────────────────")
  );
  console.log();

  console.log(
    `  Tools available: ${chalk.bold(
      `${installedCount}/${total}`
    )}`
  );

  console.log(`  Environment: ${status}`);

  console.log();
}