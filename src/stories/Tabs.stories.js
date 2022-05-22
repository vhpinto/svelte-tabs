import Tabs from "../components/Tabs.svelte";

export default {
  title: "Tabs",
  component: Tabs,
};

const Template = (args) => ({
  components: Tabs,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      title: "tab 1",
      content: "Texto do primeiro tab",
    },
    {
      title: "tab 2",
      content: "Texto do segundo tab",
    },
    {
      title: "tab 3",
      content: "Texto do terceiro tab",
    },
    {
      title: "tab 4",
      content: "Texto do quarto tab",
    },
  ],
};