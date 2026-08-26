#!/usr/bin/env node

import { Command } from "commander";
import { checkEnvironment } from "./commands/check.js";

const program = new Command();

program
  .name("devsetup")
  .description("Cross-platform developer environment checker")
  .version("1.0.0");

program
  .command("check")
  .description("Check installed developer tools")
  .action(checkEnvironment);

program.parse();