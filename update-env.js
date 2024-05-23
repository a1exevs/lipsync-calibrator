const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Accept the first command line argument
const mode = process.argv[2];

if (!mode) {
  console.error("Mode must be specified (e.g., 'dev', 'prod')");
  process.exit(1);
}

// Path to your JSON configuration
const configPath = path.resolve(__dirname, 'env-config.json');

// Check if the configuration file exists
if (!fs.existsSync(configPath)) {
  console.error(`Configuration file not found at: ${configPath}`);
  process.exit(1);
}

// Read and parse configuration file
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const envConfig = config[mode];

if (!envConfig) {
  console.error(`No configuration found for mode: ${mode}`);
  process.exit(1);
}

const envFilePath = path.resolve(__dirname, '.env');

// Function that creates initial configuration for .env file
function createInitialEnvConfig() {
  return (
    Object.entries(envConfig)
      .map(([key, value]) => `${key}=${value}`)
      .join('\n') + '\n'
  );
}

if (!fs.existsSync(envFilePath)) {
  console.log('.env file not found. Creating new .env file.');
  fs.writeFileSync(envFilePath, createInitialEnvConfig());
} else {
  const envRawConfig = fs.readFileSync(envFilePath, 'utf8').split('\n');
  const newEnvConfig = envRawConfig
    .map(line => {
      for (const [key, value] of Object.entries(envConfig)) {
        if (line.startsWith(key)) {
          return `${key}=${value}`;
        }
      }
      return line;
    })
    .join('\n');

  fs.writeFileSync(envFilePath, newEnvConfig);
}

console.log(`.env file updated for mode: ${mode}`);
