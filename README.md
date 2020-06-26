# Description

The source code of my personal website. Does not include assets (images, projects etc.)

# Build

## Develop

```bash
npm install
npx shadow-cljs watch frontend
```

```bash
lein repl
```

## Compile production

```bash
npx shadow-cljs release frontend
```

```bash
lein uberjar
```