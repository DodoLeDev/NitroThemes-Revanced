import { findByProps } from "@vendetta/metro"

const { default: { setShouldSyncAppearanceSettings }, saveClientTheme } = findByProps("saveClientTheme")

const patches = [saveClientTheme({backgroundGradientPresetId: "CHROMA_GLOW"})]

setShouldSyncAppearanceSettings(false)

export const onUnload = () => {
    for (const unpatch of patches) unpatch()
}
