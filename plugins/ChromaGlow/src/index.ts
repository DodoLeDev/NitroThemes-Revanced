import { findByProps } from "@vendetta/metro"
import { instead } from "@vendetta/patcher"

const canUse = findByProps("canUseClientThemes")
const { default: { setShouldSyncAppearanceSettings }, saveClientTheme } = findByProps("saveClientTheme")

const patches = [
    instead("canUseClientThemes", canUse, () => true),
    instead("canUsePremiumProfileCustomization", canUse, () => true),
    setTimeout(() => {
        saveClientTheme({
            backgroundGradientPresetId: 9,
            theme: "dark"
        })}, 0)
]

setShouldSyncAppearanceSettings(false)

export const onUnload = () => {
    for (const unpatch of patches) unpatch()
}
