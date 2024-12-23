<script lang="ts">
  import type { GlazeWmOutput, MediaOutput } from "zebar";

  type MediaProps = {
    glazewm: GlazeWmOutput;
    media: MediaOutput;
  };

  let { glazewm, media }: MediaProps = $props();
</script>

{#if media}
  <div class="flex items-center gap-1">
    {#if media.currentSession?.isPlaying}
      <i class="ti ti-music text-zb-spotify-playing" style="margin-right: 7px;"></i>
    {:else}
      <i class="ti ti-music-off text-zb-spotify-paused" style="margin-right: 7px;"></i>
    {/if}
    <span class="max-w-[10rem] truncate">
      {media.currentSession?.artist} - {media.currentSession?.title}
    </span>
  </div>
{/if}
