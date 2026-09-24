import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import fs from "fs"
import path from "path"

function sanitizeMathFiles(dir: string) {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      sanitizeMathFiles(fullPath)
    } else if (file.endsWith(".md")) {
      let content = fs.readFileSync(fullPath, "utf-8")
      const originalContent = content

      // Step 1: Fix the \ohm command by remapping it to the supported \Omega symbol
      content = content.replace(/\\ohm\b/g, "\\Omega")

      // Step 2: Standardize all legacy align tags to aligned
      content = content.replace(/\\begin\{align\*?\}/g, "\\begin{aligned}")
      content = content.replace(/\\end\{align\*?\}/g, "\\end{aligned}")

      // Step 3: Strip ALL existing math fences ($ and $$) touching any environment tag globally
      content = content.replace(/\$+\s*\\begin\{/g, "\\begin{")
      content = content.replace(/\\end\{([a-zA-Z*]+)\}\s*\$+/g, "\\end{$1}")

      // Step 4: Fix single trailing backslashes (\) into proper LaTeX row breaks (\\)
      content = content.replace(/([^\\ \t])\\(\s*\n)/g, "$1\\\\$2")

      // Step 5: Type-Safe Stack-Walker Loop for outermost container fences
      const envRegex = /\\begin\{([a-zA-Z*]+)\}|\\end\{([a-zA-Z*]+)\}/g
      let match: RegExpExecArray | null
      let depth = 0
      let lastIndex = 0
      let newContent = ""

      envRegex.lastIndex = 0
      while ((match = envRegex.exec(content)) !== null) {
        const matchStr = match[0]
        const isBegin = matchStr.startsWith("\\begin")
        
        if (isBegin) {
          if (depth === 0) {
            newContent += content.slice(lastIndex, match.index) + "\n\n$$\n" + matchStr
          } else {
            newContent += content.slice(lastIndex, match.index) + matchStr
          }
          depth++
        } else {
          depth--
          if (depth === 0) {
            newContent += content.slice(lastIndex, match.index) + matchStr + "\n$$\n\n"
          } else {
            newContent += content.slice(lastIndex, match.index) + matchStr
          }
        }
        lastIndex = envRegex.lastIndex
      }
      newContent += content.slice(lastIndex)
      content = newContent

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, "utf-8")
      }
    }
  }
}

// Run the script on the content folder at startup
sanitizeMathFiles(path.resolve("./content"))

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

