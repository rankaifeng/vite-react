import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import lessToJS from 'less-vars-to-js'
import path from 'path'
import config from './config'
import fs from 'fs'
const env = process.argv[process.argv.length - 1]
const base = config[env]
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './config/variables.less'), 'utf8')
)
// import 'antd/dist/antd.less';
export default defineConfig({
  base: base.cdn,
  plugins: [
    react(),
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: _ => `antd/dist/antd.less`
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables
      }
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      "@": path.resolve(__dirname, "src")
    }
  },
  server: {
    port: 3008
  }
})
