import Nav from "../components/Nav.svelte";

export default {
  title: "Tabs/Nav",
  component: Nav,
};

const Template = (args) => ({
  components: Nav,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: "Tab 1",
  selected: false,
};