<script lang="ts">
  type ButtonProps = {
    iconClass: string;
    label?: string;
    callback?: () => void;
    vertical: boolean;
    class: string;
  };
  let { iconClass, label, callback, vertical, ...rest }: ButtonProps = $props();
</script>

<button
  class="flex items-center justify-center {rest.class}"
  class:vertical={vertical}
  onclick={callback}
  aria-label={label}
>
  <i class="ti ti-{iconClass}"></i>
</button>

<style>
  @keyframes rot-vert {to { -webkit-transform: rotate(90deg); transform:rotate(90deg); }}
  @keyframes rot-hor {
    from { -webkit-transform: rotate(90deg); transform:rotate(90deg); }
    to { -webkit-transform: rotate(0deg); transform:rotate(0deg); }
  }

  button {
    i {
      display: inline-block;
      animation: rot-hor 0.2s cubic-bezier(0.460, -0.295, 0.140, 1.80);
      animation-fill-mode: forwards;
    }
    &.vertical {
      i{
        animation: rot-vert 0.2s cubic-bezier(0.460, -0.295, 0.140, 1.80);
        animation-fill-mode: forwards;
      }
    }
  }

</style>
