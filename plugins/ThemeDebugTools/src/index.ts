import { findByProps } from "@vendetta/metro"
import { registerCommand } from "@vendetta/commands"

export const enum ApplicationCommandInputType {
    BUILT_IN,
    BUILT_IN_TEXT,
    BUILT_IN_INTEGRATION,
    BOT,
    PLACEHOLDER
}

export const enum ApplicationCommandOptionType {
    SUB_COMMAND = 1,
    SUB_COMMAND_GROUP,
    STRING,
    INTEGER,
    BOOLEAN,
    USER,
    CHANNEL,
    ROLE,
    MENTIONABLE,
    NUMBER,
    ATTACHMENT
}

export const enum ApplicationCommandType {
    CHAT = 1,
    USER,
    MESSAGE
}

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
