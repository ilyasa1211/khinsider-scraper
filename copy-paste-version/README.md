# Khinsider Scraper (Copy Paste Version)

This is a script for getting all links in a some download for direct downloads in khinsider.com.
Because the website cannot download all songlist at once

# How To Use

1. **Go to khinsider.com** and find what you want to donwload. In this example, I'm looking to download plant vs zombie music.

![1](https://user-images.githubusercontent.com/110075636/230800726-f8b6111c-36b1-4b7f-987a-3240ddd6c8a9.png)

2. When you're in, you need to **open DevTools menu** or Web Developer Tools menu in your browser, this is usually done by pressing <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>I</kbd> at the same time

3. Click the **Console** tab.

![3](https://user-images.githubusercontent.com/110075636/230801162-0246b26b-47c7-4028-8a51-5fdf66e0ff70.png)

4. **Paste** the source code that is ./dist/index.js in the console terminal. And then press <kbd>Enter</kbd>

![4](https://user-images.githubusercontent.com/110075636/230801209-d62dc8ac-a632-44b6-b44e-78a0c1983dc4.png)

5. Alert menu will appear. **Choose** your download format. In here example I choose FLAC, then press **OK**

![5](https://user-images.githubusercontent.com/110075636/230801312-2c8aaf1d-b502-4627-989c-3263cdbc61f9.png)

6. All the download link is now in the page

![7](https://user-images.githubusercontent.com/110075636/230801388-d9f93847-ce31-4ec7-9921-6a16b7380aa1.png)

7. That's it your get all the links you want.

## Compile

```console
docker compose up --build
```

# How To Download

You can use wget to download it automatically

1. Click <kbd>Copy to Clipboard</kbd>

2. Create a new file in some directory. For example ~/Desktop/file.txt

3. Paste the link to that file.txt. And then save.

4. Open bash terminal

5. Type `wget -i ~/Desktop/file.txt` and then <kbd>Enter</kbd>

6. Done, just wait for it to finish download
