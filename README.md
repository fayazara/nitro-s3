Run the prod build
```bash
pnpm build
```

Run the preview with wrangler
```bash
pnpx wrangler pages dev dist/
```

Error
```bash
Error uploading file: TypeError: t2 is not a function

      at Wd.slurpFile
  (file:///Users/projects/nitro-s3/.wrangler/tmp/pages-mkxmpG/chunks/routes/index.post.mjs:1:242780)
      at loadSharedConfigFiles
  (file:///Users/projects/nitro-s3/.wrangler/tmp/pages-mkxmpG/chunks/routes/index.post.mjs:1:245724)
      at n
  (file:///Users/projects/nitro-s3/.wrangler/tmp/pages-mkxmpG/chunks/routes/index.post.mjs:1:247712)
      at null.<anonymous>
  (file:///Users/projects/nitro-s3/.wrangler/tmp/pages-mkxmpG/chunks/routes/index.post.mjs:1:188559)
      at async coalesceProvider
  (file:///Users/projects/nitro-s3/.wrangler/tmp/pages-mkxmpG/chunks/routes/index.post.mjs:1:188781)
      at null.<anonymous> (async
  file:///Users/projects/nitro-s3/.wrangler/tmp/dev-1Ax2UV/t7mjr99ri8n.js:9569:101)
  Error: Failed to upload file to bucket-name/filename.png
      at FileStorage.upload
  (file:///Users/projects/nitro-s3/.wrangler/tmp/pages-mkxmpG/chunks/routes/index.post.mjs:1:760528)
      at async Object.handler
  (file:///Users/projects/nitro-s3/.wrangler/tmp/pages-mkxmpG/chunks/routes/index.post.mjs:1:761772)
      at async Object.handler
  (file:///Users/projects/nitro-s3/.wrangler/tmp/pages-mkxmpG/chunks/runtime.mjs:1:72110)
      at null.<anonymous> (async
  file:///Users/projects/nitro-s3/.wrangler/tmp/dev-1Ax2UV/t7mjr99ri8n.js:17154:7)
      at null.<anonymous> (async
  file:///Users/projects/nitro-s3/.wrangler/tmp/dev-1Ax2UV/t7mjr99ri8n.js:19166:24)
      at async jsonError
  (file:///Users/main-user/Library/Caches/pnpm/dlx/cbftox4creh25irebxwmcy7fxe/190bf21ed13-b177/node_modules/.pnpm/wrangler@3.65.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts:22:10)
      at async drainBody
  (file:///Users/main-user/Library/Caches/pnpm/dlx/cbftox4creh25irebxwmcy7fxe/190bf21ed13-b177/node_modules/.pnpm/wrangler@3.65.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts:5:10)

```
