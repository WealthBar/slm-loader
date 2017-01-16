** Note: Looking for a new maintainer **

Due to the limited support for Angular 2 syntax offered by SLIM/SLM we are migrating to PUG. This project is looking for a new maintainer. If you are using slm-loader and are interested in accepting pull requests I would be happy to transfer the project to you.

# slm-loader
SLM/SLIM Template Loader for Webpack

Import [SLM/SLIM][1] templates with Webpack.

[SLM][1] is a JS port of the Ruby [SLIM][2] template language for HTML. This
loader allows you to use these templates in your Webpack projects.

## Basic Setup

```
{ test: /\.html\.(slm|slim)/, loader: "slm" }
```

## Recommended Usage

It is highly recommended to combine slm-loader with the [html-loader][3] to get
features like minification and handling of src assets such as images

You can also combine it with other HTML template handlers such as
[ngtemplate-loader][4] if you are using it with AngularJS.

```
{ test: /\.html\.(slm|slim)$/, loader: 'ngtemplate!html!slm' },
```

[1]: https://github.com/slm-lang/slm
[2]: http://slim-lang.com/
[3]: https://github.com/webpack/html-loader
[4]: https://github.com/WearyMonkey/ngtemplate-loader
