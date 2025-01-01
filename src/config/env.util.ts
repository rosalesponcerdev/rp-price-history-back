export class EnvironmentUtil {
  static getEnvironment(key: string) {
    return process.env[key];
  }

  static getNumberEnv(key: string): number {
    return Number(this.getEnvironment(key));
  }
}
