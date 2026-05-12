import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const companion: DeepPartial<Translation["cowebsite"]> = {
    open: "Open",
    close: "Close",
    bigBlueButton: "BigBlueButton",
    jitsi: "Jitsi",
    teams: "Microsoft Teams",
};

export default companion;
