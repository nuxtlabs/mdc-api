# MDC API

This API is used for the playground on https://content.nuxtjs.org.

Using the [fetch() API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch):

```ts
const doc = await fetch('https://mdc.nuxt.dev/api/parse', {
  method: 'POST',
  body: JSON.stringify({
    content: '# Hello World\n\nThis is a test.'
  })
}).then(res => res.json())
```