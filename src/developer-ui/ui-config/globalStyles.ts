import { reactive } from "vue"
import { loadFromStorage } from "@/developer-ui/addons/storage/storage"

export let globalStyles = reactive({
  enabled: loadFromStorage("is-global-styles-on", true),
})
