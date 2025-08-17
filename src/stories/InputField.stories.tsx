import type { Meta, StoryObj } from "@storybook/react";
import InputField from "../components/InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField", // 👈 Shows up in Storybook sidebar
  component: InputField,
  tags: ["autodocs"], // optional
};

export default meta; // 👈 THIS is required (default export)

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
};
