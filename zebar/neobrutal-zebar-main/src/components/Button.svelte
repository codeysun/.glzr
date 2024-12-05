<script lang="ts">
  type ButtonProps = {
    iconClass: string;
    label?: string;
    callback?: () => void;
    isFocused: boolean;
    class: string;
  };
  let { iconClass, label, callback, isFocused, ...rest }: ButtonProps = $props();
</script>

<button
  class="flex bg-blend-30 border border-zb-border rounded-base shadow-button transition-all duration-200 ease-in-out hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none p-1 {rest.class}"
  class:focused={isFocused}
  onclick={callback}
  aria-label={label}
>
  <i class="ti ti-{iconClass}"></i>
</button>

<style>
  @keyframes press {
    from {
      transform: translateY(0px) translateX(0px);
    }
    50% {
      box-shadow: none;
      transform: translateY(2px) translateX(2px);
    }
    to {
      transform: translateY(0px) translateX(0px);
    }
  }

  button {
    &.focused {
      animation: press 0.2s;
    }
  }

</style>
