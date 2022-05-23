import Tab from "../components/Tab.svelte";

export default {
  title: "Tabs/Tab",
  component: Tab,
};

const Template = (args) => ({
  components: Tab,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
    content: "Story title"
};