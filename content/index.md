# MDC API

This API is used for the playground on https://content.nuxtjs.org.

Using [unjs/ohmyfetch](https://github.com/unjs/ohmyfetch):

```ts
const document = await fetch('https://mdc.nuxt.dev/api/parse', {
  method: 'POST',
  body: JSON.stringify({
    content: '# Hello World\n\nThis is a test.'
  })
}).then(res => res.json())
```