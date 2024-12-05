<script lang="ts">
  import type { Window } from "glazewm";
  import type { GlazeWmOutput } from "zebar";

  import iconMap from "$lib/icon_map.json";
  import ignoredApps from "$lib/ignored_apps.json";

  import Button from "./Button.svelte";
  import Direction from "./Direction.svelte";

  const getProcessIcon = (child: Window) => {
    const possibleAppNames = [
      child.title.toLowerCase(),
      child.processName.toLowerCase()
    ];

    if (ignoredApps.find((app) => possibleAppNames.includes(app.name))) return;

    let entry = iconMap.find((entry) =>
      entry.appNames
        .map((name) => name.toLowerCase())
        .some((name) => possibleAppNames.includes(name))
    );

    return entry?.iconName ?? "ti-background";
  };

  let { glazewm } : { glazewm: GlazeWmOutput}= $props()
</script>

{#if glazewm}
  <div class="flex flex-row gap-2 items-center">
    {#each glazewm.currentWorkspaces as workspace, i}
      <Button
        iconClass="ti {workspace.hasFocus ? 'ti-point-filled' : 'ti-point'}"
        class="text-zb-ws-{i}"
        isFocused={workspace.hasFocus ? true : false}
        callback={() =>
          glazewm!.runCommand(`focus --workspace ${workspace.name}`)}
      />
    {/each}

    <Direction
      iconClass="ti ti-switch-horizontal"
      class="text-zb-tiling-direction"
      vertical={glazewm?.tilingDirection=="vertical" ? true : false}
      callback={() =>
        glazewm!.runCommand("toggle-tiling-direction")}
    />
    <!-- <div class="flex items-center gap-1"> -->
    <!--   {#if glazewm.focusedWorkspace} -->
    <!--     {#each glazewm.focusedWorkspace!.children as child} -->
    <!--       {#if child.type == "window" && child.state.type != "minimized"} -->
    <!--         {@const icon = getProcessIcon(child as Window)} -->
    <!--         {#if icon} -->
    <!--           <span -->
    <!--             class={child.hasFocus -->
    <!--               ? "text-zb-focused-process" -->
    <!--               : "text-zb-process"} -->
    <!--           > -->
    <!--             <i class="ti {icon}"></i> -->
    <!--           </span> -->
    <!--         {/if} -->
    <!--       {/if} -->
    <!--     {/each} -->
    <!--   {/if} -->
    <!-- </div> -->
  </div>
{/if}
