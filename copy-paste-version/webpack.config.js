import path from "node:path";
import { readdirSync } from "node:fs";

function readDirectoryRecursive(directory) {
  const files = readdirSync(directory, { withFileTypes: true }).flatMap(
    (file) => {
      const fullpath = "." + path.posix.sep + path.join(directory, file.name);
      return file.isFile() ? fullpath : readDirectoryRecursive(fullpath);
    }
  );
  return files;
}

export default {
  entry: readDirectoryRecursive("./src"),
  cache: false,
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist"),
  },
};
