# Khinsider Scraper (Scraper Version)

This is the scrapper version using nodejs and playwright

> Right now it will only download the .flac extension

## Usage

1. Put your target url into the <kbd>.app.env</kbd> file

2. Install the dependencies

> If you want to use docker instead, see the "Using Docker" section below

```console
npm install
```

3. Install the chromium
```console
npx playwright install chromium
```

4. Run it
```console
npm start
```

5. The result url will be in urls/ directory

6. The downloaded music appear in the downloads/ directory.

## Using Docker

```console
docker compose up --build
```