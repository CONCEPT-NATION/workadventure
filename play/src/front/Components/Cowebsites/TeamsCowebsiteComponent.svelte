<script lang="ts">
    import type { TeamsCoWebsite } from "../../WebRtc/CoWebsite/TeamsCoWebsite";

    export let actualCowebsite: TeamsCoWebsite;
    export let visible: boolean;

    let iframeFailed = false;

    $: meetingUrl = actualCowebsite.getUrl().toString();

    function openInNewTab() {
        window.open(meetingUrl, "_blank", "noopener,noreferrer");
    }

    function onIframeLoad() {
        iframeFailed = false;
    }

    function onIframeError() {
        iframeFailed = true;
    }
</script>

<div class="relative w-full h-full" class:hidden={!visible}>
    <div class="absolute top-2 end-2 z-10 flex gap-2">
        <button
            class="bg-white/90 hover:bg-white text-black text-sm font-medium px-3 py-1.5 rounded shadow"
            on:click={openInNewTab}
            title="Open the Teams meeting in a new window"
        >
            Open in Microsoft Teams
        </button>
    </div>
    <div class="absolute w-full h-full z-0">
        {#if iframeFailed}
            <div class="w-full h-full flex flex-col items-center justify-center bg-white text-black p-6 text-center">
                <p class="mb-3 text-base font-medium">
                    Microsoft Teams could not be embedded in this window.
                </p>
                <p class="mb-4 text-sm">
                    Your tenant or this meeting blocks embedding. Open the meeting in a new tab instead.
                </p>
                <button
                    class="bg-[#4b53bc] hover:bg-[#3a429f] text-white font-medium px-4 py-2 rounded"
                    on:click={openInNewTab}
                >
                    Open in Microsoft Teams
                </button>
            </div>
        {:else}
            <iframe
                src={meetingUrl}
                frameborder="0"
                allow="camera; microphone; display-capture; autoplay; clipboard-read; clipboard-write; fullscreen"
                title="Microsoft Teams meeting"
                class="bg-white w-full h-full"
                on:load={onIframeLoad}
                on:error={onIframeError}
            />
        {/if}
    </div>
</div>
