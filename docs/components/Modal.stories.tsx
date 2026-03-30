import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../../shared/components/Modal/Dialog';
import { Button } from '../../shared/components/Button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for interactive stories
const ModalStory = ({ children, ...args }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
      {!isOpen && <Button onClick={() => setIsOpen(true)}>Reopen Modal</Button>}
    </>
  );
};

// Default Story
export const Default: Story = {
  render: (args) => (
    <ModalStory {...args}>
      <p>Modal content goes here...</p>
    </ModalStory>
  ),
  args: {
    title: 'Modal Title',
  },
};

// With Title
export const WithTitle: Story = {
  render: (args) => (
    <ModalStory {...args}>
      <p>Modal with title content...</p>
    </ModalStory>
  ),
  args: {
    title: 'Modal Title',
  },
};

// With Title and Subtitle
export const WithSubtitle: Story = {
  render: (args) => (
    <ModalStory {...args}>
      <p>Modal with title and subtitle...</p>
    </ModalStory>
  ),
  args: {
    title: 'Modal Title',
    subtitle: 'This is a subtitle',
  },
};

// With Footer
export const WithFooter: Story = {
  render: (args) => (
    <ModalStory {...args}>
      <p>Are you sure you want to proceed?</p>
    </ModalStory>
  ),
  args: {
    title: 'Confirm Action',
    footer: (
      <>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </>
    ),
  },
};

// Using Sub-components
export const WithSubComponents: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);
    
    if (!isOpen) {
      return <Button onClick={() => setIsOpen(true)}>Open Modal</Button>;
    }
    
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <Modal.Title>Custom Title</Modal.Title>
          <Modal.Subtitle>Custom subtitle</Modal.Subtitle>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body content using sub-components...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    );
  },
};

// Sizes
export const Small: Story = {
  render: (args) => (
    <ModalStory {...args}>
      <p>Small modal content</p>
    </ModalStory>
  ),
  args: {
    title: 'Small Modal',
    size: 'sm',
  },
};

export const Medium: Story = {
  render: (args) => (
    <ModalStory {...args}>
      <p>Medium modal content</p>
    </ModalStory>
  ),
  args: {
    title: 'Medium Modal',
    size: 'md',
  },
};

export const Large: Story = {
  render: (args) => (
    <ModalStory {...args}>
      <p>Large modal content</p>
    </ModalStory>
  ),
  args: {
    title: 'Large Modal',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  render: (args) => (
    <ModalStory {...args}>
      <p>Extra large modal content</p>
    </ModalStory>
  ),
  args: {
    title: 'Extra Large Modal',
    size: 'xl',
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <ModalStory {...args}>
      <p>Full width modal content</p>
    </ModalStory>
  ),
  args: {
    title: 'Full Width Modal',
    size: 'full',
  },
};

// Behavior Options
export const NoCloseButton: Story = {
  render: (args) => (
    <ModalStory {...args}>
      <p>This modal has no close button. Use Escape or backdrop to close.</p>
    </ModalStory>
  ),
  args: {
    title: 'No Close Button',
    showCloseButton: false,
  },
};

export const NoBackdropClose: Story = {
  render: (args) => (
    <ModalStory {...args}>
      <p>Click the backdrop - it won't close. Use the X button or Escape.</p>
    </ModalStory>
  ),
  args: {
    title: 'No Backdrop Close',
    closeOnBackdropClick: false,
  },
};

export const NoEscapeClose: Story = {
  render: (args) => (
    <ModalStory {...args}>
      <p>Press Escape - it won't close. Use the X button or backdrop.</p>
    </ModalStory>
  ),
  args: {
    title: 'No Escape Close',
    closeOnEscape: false,
  },
};

// Loading State
export const Loading: Story = {
  render: (args) => (
    <ModalStory {...args}>
      <p>Saving your changes...</p>
    </ModalStory>
  ),
  args: {
    title: 'Loading...',
    isLoading: true,
  },
};

// Confirmation Dialog Example
export const ConfirmationDialog: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    
    if (!isOpen) {
      return (
        <div className="text-center">
          <p className="text-success mb-4">Item deleted!</p>
          <Button onClick={() => setIsOpen(true)}>Delete Again</Button>
        </div>
      );
    }
    
    return (
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete Item"
        subtitle="This action cannot be undone"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="danger" onClick={() => setIsOpen(false)}>Delete</Button>
          </>
        }
      >
        <p>Are you sure you want to delete this item?</p>
      </Modal>
    );
  },
};

// Form Modal Example
export const FormModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    
    if (!isOpen) {
      return <Button onClick={() => setIsOpen(true)}>Edit User</Button>;
    }
    
    return (
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Edit User"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>Save Changes</Button>
          </>
        }
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface-container-low"
              defaultValue="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface-container-low"
              defaultValue="john@example.com"
            />
          </div>
        </form>
      </Modal>
    );
  },
};

// All Sizes Grid
export const AllSizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    
    return (
      <>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => setOpenSize('sm')}>Small</Button>
          <Button onClick={() => setOpenSize('md')}>Medium</Button>
          <Button onClick={() => setOpenSize('lg')}>Large</Button>
          <Button onClick={() => setOpenSize('xl')}>XL</Button>
          <Button onClick={() => setOpenSize('full')}>Full</Button>
        </div>
        
        {openSize && (
          <Modal
            isOpen={true}
            onClose={() => setOpenSize(null)}
            size={openSize as any}
            title={`${openSize.toUpperCase()} Modal`}
          >
            <p>This is a {openSize} modal.</p>
          </Modal>
        )}
      </>
    );
  },
};
