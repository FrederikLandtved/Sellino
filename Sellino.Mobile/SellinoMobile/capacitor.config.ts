import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sellinomobile.app',
  appName: 'SellinoMobile',
  webDir: 'dist/sellino-mobile/browser',
  server: {
    androidScheme: 'https',
    url: 'http://192.168.87.66:4200',
    cleartext: true
  }
};

export default config;
