import { parseContent } from '#content/server'

export default eventHandler(async (event) => {
  appendHeader(event, 'Access-Control-Allow-Origin', '*');
  appendHeader(event, 'Access-Control-Allow-Credentials', 'true');
  appendHeader(event, 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  appendHeader(event, 'Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")

  const { id, content } = (await readBody(event)) || {}

  if (!content) {
    throw createError({
      statusCode: 400,
      message: 'Missing content property'
    })
  }

  // @ts-ignore
  const parsedContent = await parseContent(id || 'content:_file.md', content)

  return parsedContent
})
