import { findByProps } from "@vendetta/metro"

const { default: { setShouldSyncAppearanceSettings }, saveClientTheme } = findByProps("saveClientTheme")

const patches = [setTimeout(() => {saveClientTheme({backgroundGradientPresetId: 10})}, 0)]

setShouldSyncAppearanceSettings(false)

export const onUnload = () => {
    for (const unpatch of patches) unpatch()
}
