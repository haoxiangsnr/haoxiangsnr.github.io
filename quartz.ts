import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { registerCondition } from "./quartz/plugins/loader/conditions"

registerCondition("show-graph", ({ fileData }) => fileData.frontmatter?.hideGraph !== true)

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
