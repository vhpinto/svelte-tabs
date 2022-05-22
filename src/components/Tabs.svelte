<script lang="ts">
import Nav from './Nav.svelte'
import Tab from './Tab.svelte'

export let tabs: {title: string, content: string}[] = [
    {
      title: "tab 1",
      content: "Conteúdo da tab 1"
    },
    {
      title: "tab 2",
      content: "Conteúdo da tab 2"
    },
    {
      title: "tab 3",
      content: "Conteúdo da tab 3"
    },
    {
      title: "tab 4",
      content: "Conteúdo da tab 4"
    }
  ];
  
  let selectedTab: {title: string, content: string} = tabs.at(0);

  function select(event: CustomEvent<string>) {
    const title = event.detail
    const newSelectedTab = tabs.find((tab) => title === tab.title);
    selectedTab = newSelectedTab;
  }
</script>
    
    
    
<main>
  <div>
      {#each tabs as tab (tab.title)}
      <Nav
        title={tab.title}
        selected={selectedTab.title === tab.title}
        on:selection={e => select(e)}
      ></Nav>
      {/each}
    </div>
  <Tab content={selectedTab.content}> </Tab>
</main>
    
<style>

</style>