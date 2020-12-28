# Description

The source code of my personal website. Does not include assets (images, projects etc.)

# License

All material in this repo is copyrighted. You are free to publicly examine it, but not use without permission.

# Build

Before doing anything else, run:

```bash
npm install
```

## Develop

### Frontend

```bash
npx shadow-cljs watch pikseli
npx shadow-cljs watch metsa
```

### Backend

```bash
lein repl
```

## Production

### Frontend

```bash
npx shadow-cljs release pikseli
npx shadow-cljs release metsa
```

### Backend

```bash
lein uberjar
```
