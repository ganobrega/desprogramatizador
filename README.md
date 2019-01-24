<p align="center"><img src="/src/medias/avatar.svg" alt="Avatar" width="200"></p>

# Desprogramatizador (alpha)

![Travis](https://img.shields.io/travis/ganobrega/desprogramatizador.svg)
[![license](https://img.shields.io/github/license/ganobrega/desprogramatizador.svg)](./license.md)
[![GitHub contributors](https://img.shields.io/github/contributors/ganobrega/desprogramatizador.svg)](https://github.com/ganobrega/desprogramatizador/graphs/contributors)

> To translate developer's language for people's language

[View project](https://ganobrega.github.io/desprogramatizador/)

[View political translator](https://github.com/LFeh/despolitizador)

## Add new words

It is simple, you need to access the [`src/library.json`](https://github.com/ganobrega/desprogramatizador/edit/master/src/library.json), add the new word and submit a pull request.

Example:

```json
  "bug": "problema"
```

It need that all words in our library.json using the correct grammar and lowercase.

## Getting Started

This project uses Pug, Stylus and Webpack.


```sh
# Clone this repository
$ git clone git@github.com:ganobrega/desprogramatizador.git
$ cd desprogramatizador

# install dependencies
$ npm i

# Run the project
$ npm start

```

With the commands above, you have everything to start.

### Post CSS libs

For grid system uses [Autoprefixer](https://github.com/postcss/autoprefixer) to make easy use browser prefixes, [Lost](https://github.com/peterramsing/lost) with some help from, [Rucksack](http://simplaio.github.io/rucksack/) for animations, reset and a lot of great mixins, [Rupture](https://github.com/jenius/rupture) for responsive utilities. And [Font Magician](https://github.com/jonathantneal/postcss-font-magician/) to get the webfonts.

### Code Standards

This project uses the [Coding Style](https://github.com/LFeh/coding-style) of ``LFeh`` as code reference.

To help you, this project has a `npm run fix` command to fix all eslint errors.

### Tasks

- `npm start`: run all tasks and initialize watch for changes and a server
- `npm run build`: run all production tasks create a `dist` folder to deploy
- `npm run lint`: lint javascript and css
- `npm run fix`: command to fix all eslint errors
- `npm run deploy`: run all tasks to build and deploy on gh-pages

## Credits

- Felipe Fialho - Base project from [Despolitizador](https://github.com/LFeh/despolitizador)
- Gabriel Nobrega - Features for developers translation

## License

MIT License © Felipe Fialho
