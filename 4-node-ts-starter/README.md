# Node.js starter project guide

How to setup microservice starter project?

### Setup microserivices bootstrap

### manifest 
- add node config ``` npm init ```
- Add typescript config ``` npx tsc --init ```
- install ``` npm i @types/node ```

### api folder structure
- create a source folder ``` mkdir src ```
- folder structure ```mkdir configs controllers dtos exceptions http interfaces middlewares models routes services utils```

### .gitignore
- node_modules
- dist
- coverage
- .env

### install framework packages
- install express, cors, mongoosem, SWC transpiler

### create application files
- create main files in root ``` touch app.ts index.ts server.ts ```
---

#### node version
- setup node version ``` node -v > .nvmrc ```

#### eslint 
- npm i eslint -D
- configure eslint -> npx eslint --init
- add .eslintignore /dist

#### prettier
- npm install prettier -D
- add .prettierrc 

#### configure scripts package.json
- configure scripts section in package.json

#### nodemon
- ```touch nodemon.json```
```
{
    "watch": [
        "src",
        ".env"
    ],
    "ext": "js,ts,json",
    "ignore": [
        "src/logs/*",
        "src/**/*.{spec,test}.ts"
    ],
    "exec": "ts-node -r tsconfig-paths/register --transpile-only src/server.ts"
}
```

#### dotenv 

#### unit testing with jest
- npm i -D jest ts-jest @types/jest
