<script lang="ts">
    export let changeTheme: (theme: string) => void;
  
    // Define an array of themes
    const themes = [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter"
    ];
  </script>
  
  <details class="dropdown dropdown-end">
    <summary class="btn btn-ghost">🌗 Theme</summary>
    <ul class="dropdown-content menu bg-base-200 rounded-box z-[1] w-40 p-2 shadow">
      {#each themes as theme}
        <li>
          <button on:click={() => changeTheme(theme)}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        </li>
      {/each}
    </ul>
  </details>
  