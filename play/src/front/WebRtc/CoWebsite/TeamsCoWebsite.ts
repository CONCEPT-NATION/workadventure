import { SimpleCoWebsite } from "./SimpleCoWebsite";

export class TeamsCoWebsite extends SimpleCoWebsite {
    constructor(
        url: URL,
        widthPercent: number | undefined,
        closable: boolean | undefined,
        public readonly displayName: string | undefined,
        hideUrl?: boolean
    ) {
        super(url, false, undefined, widthPercent, closable, hideUrl);
    }

    public getTitle(): string {
        return this.displayName ?? "Microsoft Teams";
    }

    public shouldCloseOnOpenInNewTab(): boolean {
        return true;
    }
}
