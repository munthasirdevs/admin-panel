import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../shared/components/Card';
import { Button } from '../../shared/components/Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'elevated', 'outlined'],
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    children: (
      <Card.Body>
        <p>Card content goes here...</p>
      </Card.Body>
    ),
  },
};

// Variants
export const DefaultVariant: Story = {
  args: {
    variant: 'default',
    children: (
      <Card.Body>
        <h3>Default Card</h3>
        <p>This is the default card style.</p>
      </Card.Body>
    ),
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    children: (
      <Card.Body>
        <h3>Glass Card</h3>
        <p>This card has a glass effect.</p>
      </Card.Body>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <Card.Body>
        <h3>Elevated Card</h3>
        <p>This card appears elevated.</p>
      </Card.Body>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <Card.Body>
        <h3>Outlined Card</h3>
        <p>This card has a border outline.</p>
      </Card.Body>
    ),
  },
};

// With Header
export const WithHeader: Story = {
  args: {
    header: <span>Card Header</span>,
    children: (
      <Card.Body>
        <p>Card content with header</p>
      </Card.Body>
    ),
  },
};

// With Title and Subtitle
export const WithTitleSubtitle: Story = {
  render: () => (
    <Card>
      <Card.Header title="Card Title" subtitle="Card subtitle" />
      <Card.Body>
        <p>Card content with title and subtitle</p>
      </Card.Body>
    </Card>
  ),
};

// With Footer
export const WithFooter: Story = {
  render: () => (
    <Card
      footer={
        <>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Confirm</Button>
        </>
      }
    >
      <Card.Body>
        <p>Card with footer actions</p>
      </Card.Body>
    </Card>
  ),
};

// Complete Card
export const CompleteCard: Story = {
  render: () => (
    <Card variant="elevated" className="max-w-md">
      <Card.Header
        title="Product Card"
        subtitle="Premium Edition"
        actions={<Button variant="ghost" size="sm">Edit</Button>}
      />
      <Card.Body>
        <p>This is a complete card with all sections.</p>
        <p className="text-sm text-on-surface-variant mt-2">
          Includes header, body, and footer.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline" size="sm">Cancel</Button>
        <Button variant="primary" size="sm">Save</Button>
      </Card.Footer>
    </Card>
  ),
};

// Clickable Card
export const Clickable: Story = {
  args: {
    clickable: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <Card.Body>
        <h3>Clickable Card</h3>
        <p>Click this card to trigger an action</p>
      </Card.Body>
    ),
  },
};

// Selected Card
export const Selected: Story = {
  args: {
    selected: true,
    children: (
      <Card.Body>
        <h3>Selected Card</h3>
        <p>This card is in a selected state</p>
      </Card.Body>
    ),
  },
};

// Loading Card
export const Loading: Story = {
  args: {
    isLoading: true,
    children: (
      <Card.Body>
        <h3>Loading Card</h3>
        <p>This card is in a loading state</p>
      </Card.Body>
    ),
  },
};

// All Variants Grid
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Card variant="default">
        <Card.Body>
          <h4>Default</h4>
        </Card.Body>
      </Card>
      <Card variant="glass">
        <Card.Body>
          <h4>Glass</h4>
        </Card.Body>
      </Card>
      <Card variant="elevated">
        <Card.Body>
          <h4>Elevated</h4>
        </Card.Body>
      </Card>
      <Card variant="outlined">
        <Card.Body>
          <h4>Outlined</h4>
        </Card.Body>
      </Card>
    </div>
  ),
};

// Stats Card Example
export const StatsCard: Story = {
  render: () => (
    <Card variant="outlined" className="w-64">
      <Card.Body>
        <p className="text-sm text-on-surface-variant">Total Revenue</p>
        <p className="text-3xl font-bold text-primary mt-2">$45,231</p>
        <p className="text-sm text-success mt-2">+12.5% from last month</p>
      </Card.Body>
    </Card>
  ),
};
