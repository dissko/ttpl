<script>
  import { onMount } from 'svelte';
  let count = 0;
  let error = 'N'
  let repo = 'R'
  let content = 'C';
  let addend = 0;
  let resave = 'S';
  let again = "N";
  let base = "B";
  let sha = "H";


  onMount(async () => {
    const response = await fetch(
        'https://api.github.com/repos/nicksalt/ttpl/contents/src/traffic/map-count-0.md',
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer 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`,
            },
        }
        );
    
    if (response.ok) {
        const data = await response.json();
        content = atob(data.content);
        sha = data.sha;
        resave = content
        content = content.replace(/(\r\n|\n|\r)/g, " ");
        addend = content.split(' ').filter(word => !isNaN(word)).length +2;
        repo = content.substring(content.indexOf(":") + 2, content.indexOf(":") +addend);
        count = parseInt(repo)
        count++;
        resave = resave.replace(repo.toString(),count.toString())
        base = btoa(resave);
        console.log(data);

    } else {
        console.error('Failed to fetch json:', response.status);
        error = 'F'
    }
    
    const responseagain = await fetch(
        'https://api.github.com/repos/nicksalt/ttpl/contents/src/traffic/map-count-0.md', {
            method: 'PUT',
            body: JSON.stringify({
                "message": "update with new count",
                "content": base,
                "sha": sha,
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer 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`,
            },
    });
    if (responseagain.ok) {
        const dataagain = await responseagain.json();
        again = "N";
        console.log(dataagain);

    } else {
        console.error('Failed to save json:', response.status);
        again = 'F'
    }

    
}
    


    
    
    
  }
</script>

<div class="traffic-counter">
  <h1>Traffic Count: {count}{error}{repo}{content}{addend}{resave}{again}</h1>
</div>

<style>
  .traffic-counter {
    text-align: center;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
</style>
