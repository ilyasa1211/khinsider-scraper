import path from "path";

export default class Config {
    public static autoDownload: boolean = false;
    public static downloadedPath: string = path.resolve(__dirname, '../downloads');
    public static outputAllUrl: string = path.resolve(__dirname, '../urls');
    public static targetUrl: string = process.env.TARGET_URL as string;
}