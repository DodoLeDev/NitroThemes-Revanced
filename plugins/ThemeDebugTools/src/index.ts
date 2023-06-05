import { findByProps } from "@vendetta/metro"
import { ApplicationCommandType, ApplicationCommandInputType, ApplicationCommandOptionType } from "../../../ApplicationCommandTypes"
import { registerCommand } from "@vendetta/commands"

const { BackgroundGradientPresetId } = findByProps("BackgroundGradientPresetId")
const ClydeUtils = findByProps("sendBotMessage")
const clientThemeOptions = Object.keys(BackgroundGradientPresetId).filter((e: any) => isNaN(e))
    .map((item: string, index: number) => ({
        name: item,
        displayName: item + " - " + index,
        value: index
    }))

const patches = [
    registerCommand({
        name: "theme debug",
        displayName: "Debug Theme",
        description: "Get info about themes",
        displayDescription: "Get info about themes",
        options: [
        {
            name: "background",
            displayName: "background",
            description: "ClientThemes",
            displayDescription: "ClientThemes",
            type: ApplicationCommandOptionType.STRING as number,
            // @ts-ignore
            choices: [...clientThemeOptions]
        }],
        type: ApplicationCommandType.CHAT as number,
        inputType: ApplicationCommandInputType.BUILT_IN_TEXT as number,
        applicationId: "-1",

        async execute(args, ctx) {
            return ClydeUtils.sendBotMessage(ctx.channel.id, "Debug ended!")
        }
    })
]

export const onUnload = () => {
    for (const unpatch of patches) unpatch()
}
