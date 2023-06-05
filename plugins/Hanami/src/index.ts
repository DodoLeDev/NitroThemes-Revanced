import { findByProps } from "@vendetta/metro"

const { default: { setShouldSyncAppearanceSettings }, saveClientTheme } = findByProps("saveClientTheme")

const patches = [saveClientTheme({backgroundGradientPresetId: "HANAMI"})]

setShouldSyncAppearanceSettings(false)

export const onUnload = () => {
    for (const unpatch of patches) unpatch()
}
