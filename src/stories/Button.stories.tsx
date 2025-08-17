import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button/Button";

// Default export (metadata)
const meta: Meta<typeof Button> = {
  title: "Components/Button", // Title for Storybook sidebar
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

// Default button
export const Default: Story = {
  args: {
    label: "Click Me",
    primary: true,
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    label: "Cancel",
    primary: false,
  },
};
