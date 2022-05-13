import { defineEventHandler, appendHeader } from 'h3';

export default defineEventHandler((event) => {
  appendHeader(event, 'Access-Control-Allow-Origin', '*');
  appendHeader(event, 'Access-Control-Allow-Credentials', 'true');
  appendHeader(
    event,
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,OPTIONS'
  );
});
