import { exec } from "child_process";

export function runCommand(command) {
  return new Promise((resolve) => {
    exec(
      command,
      {
        windowsHide: true,
        timeout: 5000
      },
      (error, stdout, stderr) => {
        if (error) {
          resolve({
            installed: false,
            version: null,
            error: stderr || error.message
          });

          return;
        }

        const output = `${stdout}\n${stderr}`.trim();

        resolve({
          installed: true,
          version: output,
          error: null
        });
      }
    );
  });
}