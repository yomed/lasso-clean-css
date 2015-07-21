# lasso-clean-css

[Lasso.js](https://github.com/lasso-js/lasso) plugin to minify CSS using 
[clean-css](https://github.com/jakubpawlowicz/clean-css).


## Installation

```bash
npm install lasso-clean-css --save
```

## Usage

This plugin can be included through Lasso configuration. You should disable the default Lasso.js minifier, 
otherwise both minification transforms will execute. Any [clean-css](https://github.com/jakubpawlowicz/clean-css) 
options can be passed through `config`. The revelant portion of configuration should look something like this:

```json
{
    "plugins": [
        "lasso-less",
        {
            "plugin": "lasso-clean-css",
            "config": {
                "aggressiveMerging": false
            }
        }
    ],
    "minify": false
}
```