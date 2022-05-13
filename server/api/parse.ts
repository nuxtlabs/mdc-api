import { defineEventHandler, useBody, appendHeader } from 'h3'
import { parseContent } from '#content/server'

export default defineEventHandler(async (event) => {
  appendHeader(event, 'Access-Control-Allow-Origin', '*')
  const body = await useBody(event)

  // @ts-ignore
  const parsedContent = await parseContent(body.id || 'content:_file.md', body.content)

  return parsedContent
})
