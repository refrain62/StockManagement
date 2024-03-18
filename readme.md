# 【DDD入門】TypeScript × ドメイン駆動設計ハンズオン の写経
https://zenn.dev/yamachan0625/books/ddd-hands-on

## npm プロジェクトの初期化
```
$ npm init -y
```

## src ディレクトリの作成
```
$ mkdir src && mv Domain/ src/
```

## パッケージのインストール
```
$ npm i -D typescript ts-node tsconfig-paths @types/node jest ts-jest @types/jest

# ts-node,jestインストール（グローバルにインストール）
npm install -g ts-node jest
```

## TypeScript の設定
./tsconfig.json
```
{
  "ts-node": {
    "require": ["tsconfig-paths/register"]
    // ts-nodeがtsconfigのpathsを解決できるようにします。
  },
  "compilerOptions": {
    "outDir": "./dist",
    "strict": true,
    "resolveJsonModule": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "baseUrl": "./",
    "paths": {
      "*": ["./src/*"]
    },
    "esModuleInterop": true
  },
  "include": ["src/**/*.ts", "src/**/*.js"],
  "exclude": ["node_modules"]
}
```

## TypeScript の動作確認
src/sayHello.ts
```
export const sayHello = (name: string): string => {
  const res = `Hello ${name}!`
  console.log(res);
  return res;
};

sayHello('World');
```
動作
```
$ ts-node src/sayHello.ts
```

## Jestの設定
jest.config.js
```
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['/node_modules'],
};
```

## Jestの動作確認
Hello.test.ts
```
import { sayHello } from './sayHello';

test('sayHello', () => {
  expect(sayHello('World')).toBe('Hello World!');
});
```
実行
```
$ jest src/sayHello.test.ts
```

# 必要パッケージのインストール
```
$ npm i lodash nanoid@3 #バージョンはは3系を指定してください
$ npm i -D @types/lodash
```