import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sellino.app',
  appName: 'SellinoApp',
  webDir: 'dist/sellino-app/browser',
  server: {
    androidScheme: 'https',
    url: 'http://169.254.216.94:4200',
    cleartext: true
  }
};

export default config;
