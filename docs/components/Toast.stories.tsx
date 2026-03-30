import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast, ToastComponent } from '../../shared/components/Toast/Notification';
import { Button } from '../../shared/components/Button';
import type { Toast } from '../../shared/components/Toast/Notification';

const meta = {
  title: 'Components/Toast',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Toast Types Demo
const ToastDemo = () => {
  const { success, error, warning, info, addToast, dismissAll } = useToast();

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Toast Notifications</h2>
      
      <div className="flex flex-wrap gap-4">
        <Button
          variant="primary"
          onClick={() => success('Operation completed successfully!')}
        >
          Success Toast
        </Button>
        
        <Button
          variant="danger"
          onClick={() => error('Something went wrong!')}
        >
          Error Toast
        </Button>
        
        <Button
          variant="secondary"
          onClick={() => warning('Please review your changes')}
        >
          Warning Toast
        </Button>
        
        <Button
          variant="outline"
          onClick={() => info('New updates are available')}
        >
          Info Toast
        </Button>
        
        <Button
          variant="ghost"
          onClick={() => addToast({
            type: 'info',
            title: 'Custom Toast',
            message: 'This is a custom toast with a title',
          })}
        >
          With Title
        </Button>
        
        <Button
          variant="outline"
          onClick={dismissAll}
        >
          Dismiss All
        </Button>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <ToastDemo />,
};

// Individual Toast Types
export const SuccessToast: Story = {
  render: () => {
    const ToastTrigger = () => {
      const { success } = useToast();
      return (
        <Button onClick={() => success('Operation completed successfully!')}>
          Show Success
        </Button>
      );
    };
    return <ToastTrigger />;
  },
};

export const ErrorToast: Story = {
  render: () => {
    const ToastTrigger = () => {
      const { error } = useToast();
      return (
        <Button variant="danger" onClick={() => error('Something went wrong!')}>
          Show Error
        </Button>
      );
    };
    return <ToastTrigger />;
  },
};

export const WarningToast: Story = {
  render: () => {
    const ToastTrigger = () => {
      const { warning } = useToast();
      return (
        <Button variant="secondary" onClick={() => warning('Please review your changes')}>
          Show Warning
        </Button>
      );
    };
    return <ToastTrigger />;
  },
};

export const InfoToast: Story = {
  render: () => {
    const ToastTrigger = () => {
      const { info } = useToast();
      return (
        <Button variant="outline" onClick={() => info('New updates are available')}>
          Show Info
        </Button>
      );
    };
    return <ToastTrigger />;
  },
};

// With Title
export const WithTitle: Story = {
  render: () => {
    const ToastTrigger = () => {
      const { addToast } = useToast();
      return (
        <Button
          onClick={() =>
            addToast({
              type: 'success',
              title: 'Upload Complete',
              message: 'Your file has been uploaded successfully',
            })
          }
        >
          Show Toast with Title
        </Button>
      );
    };
    return <ToastTrigger />;
  },
};

// Custom Duration
export const LongDuration: Story = {
  render: () => {
    const ToastTrigger = () => {
      const { info } = useToast();
      return (
        <Button
          onClick={() =>
            info('This toast will stay for 10 seconds', { duration: 10000 })
          }
        >
          Show Long Toast (10s)
        </Button>
      );
    };
    return <ToastTrigger />;
  },
};

// Persistent Toast
export const Persistent: Story = {
  render: () => {
    const ToastTrigger = () => {
      const { info } = useToast();
      return (
        <Button
          onClick={() =>
            info('This toast will stay until dismissed', { duration: 0 })
          }
        >
          Show Persistent Toast
        </Button>
      );
    };
    return <ToastTrigger />;
  },
};

// Non-dismissible Toast
export const NonDismissible: Story = {
  render: () => {
    const ToastTrigger = () => {
      const { addToast } = useToast();
      return (
        <Button
          onClick={() =>
            addToast({
              type: 'info',
              message: 'Processing... (cannot dismiss)',
              dismissible: false,
              duration: 3000,
            })
          }
        >
          Show Non-dismissible Toast
        </Button>
      );
    };
    return <ToastTrigger />;
  },
};

// Different Positions
export const TopLeft: Story = {
  decorators: [
    (Story) => (
      <ToastProvider position="top-left">
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => {
    const ToastTrigger = () => {
      const { info } = useToast();
      return (
        <Button onClick={() => info('Toast at top-left')}>
          Show Toast (Top Left)
        </Button>
      );
    };
    return <ToastTrigger />;
  },
};

export const TopCenter: Story = {
  decorators: [
    (Story) => (
      <ToastProvider position="top-center">
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => {
    const ToastTrigger = () => {
      const { info } = useToast();
      return (
        <Button onClick={() => info('Toast at top-center')}>
          Show Toast (Top Center)
        </Button>
      );
    };
    return <ToastTrigger />;
  },
};

export const BottomRight: Story = {
  decorators: [
    (Story) => (
      <ToastProvider position="bottom-right">
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => {
    const ToastTrigger = () => {
      const { info } = useToast();
      return (
        <Button onClick={() => info('Toast at bottom-right')}>
          Show Toast (Bottom Right)
        </Button>
      );
    };
    return <ToastTrigger />;
  },
};

export const BottomCenter: Story = {
  decorators: [
    (Story) => (
      <ToastProvider position="bottom-center">
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => {
    const ToastTrigger = () => {
      const { info } = useToast();
      return (
        <Button onClick={() => info('Toast at bottom-center')}>
          Show Toast (Bottom Center)
        </Button>
      );
    };
    return <ToastTrigger />;
  },
};

// Form Submission Example
export const FormExample: Story = {
  render: () => {
    const FormDemo = () => {
      const { success, error } = useToast();
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
          setIsSubmitting(false);
          success('Form submitted successfully!');
        }, 1000);
      };

      return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface-container-low"
              defaultValue="test@example.com"
            />
          </div>
          <Button type="submit" isLoading={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      );
    };
    return <FormDemo />;
  },
};

// Multiple Toasts Example
export const MultipleToasts: Story = {
  render: () => {
    const ToastTrigger = () => {
      const { success, error, warning } = useToast();
      
      const showAll = () => {
        success('3 items processed successfully');
        error('1 item failed to process');
        warning('2 items were skipped');
      };
      
      return (
        <Button onClick={showAll}>
          Show Multiple Toasts
        </Button>
      );
    };
    return <ToastTrigger />;
  },
};

// Standalone Toast Component
export const StandaloneToast: Story = {
  render: () => {
    const mockToast: Toast = {
      id: 'demo-1',
      type: 'success',
      title: 'Success',
      message: 'This is a standalone toast component',
      duration: 0,
      dismissible: true,
    };

    return (
      <div className="p-4">
        <ToastComponent
          toast={mockToast}
          onDismiss={(id) => console.log('Dismissed:', id)}
        />
      </div>
    );
  },
};
