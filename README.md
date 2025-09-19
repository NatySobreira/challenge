Challenge Automation Web and API

Technology: Playwright for automated web and API testing
Dependencies: Node and npm
Technologies and Dependencies:  Node,npm,git, gitbash, playwright, javascript, powershell, IDE (vscode optional).

Installations:

Install your preferred IDE and install its extensions.
Configure the terminal and customize the necessary settings according to your personal preferences.

Install Git.
Open Gitbash for the initial configuration.

After all these steps, if Playwright still doesn't run, please remember to run these commands:
npm install -D @playwright/test@latest
(instalar dependencias - node modules)

npx playwright test --headedpara rodar chrome e2e via linha de comando


Usage: To interact with the specs.js scripts, please run the command in the VScode terminal: npx playwright test (command to run tests in Playwright).
Make sure the node_modules and dependencies appear in your project ;D

License: The package lock json contains the entire project versioning:
{
  "name": "challenge",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "challenge",
      "version": "1.0.0",
      "license": "ISC",
      "devDependencies": {
        "@playwright/test": "^1.55.0"
      }
    },
    "node_modules/@playwright/test": {
      "version": "1.55.0",
      "resolved": "https://registry.npmjs.org/@playwright/test/-/test-1.55.0.tgz",
      "integrity": "sha512-04IXzPwHrW69XusN/SIdDdKZBzMfOT9UNT/YiJit/xpy2VuAoB8NHc8Aplb96zsWDddLnbkPL3TsmrS04ZU2xQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "playwright": "1.55.0"
      },
      "bin": {
        "playwright": "cli.js"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/playwright": {
      "version": "1.55.0",
      "resolved": "https://registry.npmjs.org/playwright/-/playwright-1.55.0.tgz",
      "integrity": "sha512-sdCWStblvV1YU909Xqx0DhOjPZE4/5lJsIS84IfN9dAZfcl/CIZ5O8l3o0j7hPMjDvqoTF8ZUcc+i/GL5erstA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "playwright-core": "1.55.0"
      },
      "bin": {
        "playwright": "cli.js"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "fsevents": "2.3.2"
      }
    },
    "node_modules/playwright-core": {
      "version": "1.55.0",
      "resolved": "https://registry.npmjs.org/playwright-core/-/playwright-core-1.55.0.tgz",
      "integrity": "sha512-GvZs4vU3U5ro2nZpeiwyb0zuFaqb9sUiAJuyrWpcGouD8y9/HLgGbNRjIph7zU9D3hnPaisMl9zG9CgFi/biIg==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "playwright-core": "cli.js"
      },
      "engines": {
        "node": ">=18"
      }


Contribution: Feel free to contribute best practices to other developers, such as clean code, and improving the project's scope and architecture.
Testing: Web tests with validations and assertions of screen elements via Playwright.
Some API testing was also performed via Playwright, but the main tool used was Postman.


Contact: github.com/NatySobreira
