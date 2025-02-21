# state : indev

1. learn js-toml `npm install js-toml` quickly
2. learn js-yaml `npm install js-yaml` quickly
3. change `<c-hat>` tag as [like this](#c-ht) and set it <c-ht> tag replace w <c-hat>

# c-ht
when using cht.js
```html
<c-hat [name=$name] [placeholder=$placeholder] [send-button=$send-button] href=~></c-hat>
```

href by
`fetch($href).then(res=>res.text()).then(txt=>txt.replace(/(g-pt|u-sr)\s*:\s*(^[./]*?)/gm, "<$1 src="./$2.md"></$1>")).then(src => {this.innerHTML = src;}).catch(err => console.error(err))`

also
```html
<c-hat src="~.toml"></c-hat>
```
possible

## example.toml
```toml
[example] #must be file name
yamlconf_only_flag = false #must be set 4 fasts
name = $name
placeholder=$placeholder
send-button=$send-button
href=$href
```

## example.yaml
example.toml as
```toml
[example]
yamlconf_only_flag = "example.yaml"
```

example.yaml
```yaml
# I did shiting like json
# also namespace(obj) form allowd
{
    "name" : "$name",
    "placeholder" : "$placeholder",
    "send-button" : "$send-button",
    "href" : "$href"
}
```

# PyPI promptNote pkg : *.chtoml / *.chyaml / .chyaml --yamlconf_only_flag / .conform (set yamlconf_only_flag as false if not seted.)
```toml
[project-name]
yamlconf_only_flag = false #must be set 4 fasts
name = $name
placeholder=$placeholder
send-button=$send-button
href=$href
[md-filename]
...
```

can be yaml (jsonic file style)

# `RED | BLUE >_` redblue.htm
set chtoml/chyaml file gui editor
