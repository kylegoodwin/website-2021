# Simple NextJS Static Site Starter

Why? Use this if you like the development experience of building sites with React but want them to load lightning fast / are tired of manually building and deploying sites.

## Features:

### Built In Continuous Deployment
The provided GitHub Action will build your site and deploy it to Netlify ( if you provide secrets in your repo settings ). If your repo is public these build minutes are unlimited, for private repos you get 2000 free minutes 😤. This can easily be changed to use other providers.

### Bring Your Own Fonts & Content
The provided config allows you to easily import MarkDown and JSON files, which will then be compiled into the static site. Font loading is an issue in NextJS, but I provided the [recommended solution](https://github.com/zeit/next.js/issues/512) by default here.

### Built in styled-components Support
This can be kind of annoying to set up, so I did it here if anyone is curious. This is the best option for static sites at the moment because it avoids pre-styled renders.  If you don't like css in JS then just put your styles in the .css file instead 🙄.

## Get Started:
Development Mode

    npm run dev

Export Static Site Locally

    npm run build; npm run export


## Notes:
[Styled-Components Issues](https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c)
