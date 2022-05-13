import { defineEventHandler, useBody, appendHeader, isMethod } from 'h3'
import { parseContent } from '#content/server'

export default defineEventHandler(async (event) => {
  appendHeader(event, 'Access-Control-Allow-Origin', '*');
  appendHeader(event, 'Access-Control-Allow-Credentials', 'true');
  appendHeader(event, 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  appendHeader(event, 'Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")

  if (!isMethod(event, 'POST')) return {}
  
  const body = await useBody(event)

  // @ts-ignore
  const parsedContent = await parseContent(body.id || 'content:_file.md', body.content)

  return parsedContent
})
