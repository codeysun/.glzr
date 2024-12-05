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
    {media.currentSession?.artist} - {media.currentSession?.title}
  </div>
{/if}

<!-- {#if glazewm} -->
<!--   <div class="flex items-center gap-1"> -->
<!--     {#each glazewm.allWorkspaces as workspace} -->
<!--       {#each workspace.children as child} -->
<!--         {#if child.type == "window" && child.processName.toLowerCase() === "spotify"} -->
<!--           {#if child.title.toLowerCase() === "spotify premium"} -->
<!--             <i class="ti ti-music-off text-zb-spotify-paused"></i> -->
<!--             nothing is playing -->
<!--           {:else} -->
<!--             <i class="ti ti-music text-zb-spotify-playing"></i> -->
<!--             <span class="max-w-md truncate"> -->
<!--               {child.title} -->
<!--             </span> -->
<!--           {/if} -->
<!--         {/if} -->
<!--       {/each} -->
<!--     {/each} -->
<!--   </div> -->
<!-- {/if} -->
