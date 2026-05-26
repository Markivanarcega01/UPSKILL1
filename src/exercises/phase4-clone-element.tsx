import React, { isValidElement } from "react";

interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (newValue: string) => void;
  children: React.ReactNode;
}
interface RadioProps {
  value: string;
  onChange?: (newValue: string) => void;
  name?: string;
}

const RadioGroup = (props: RadioGroupProps) => {
  return React.Children.map(props.children, (child) => {
    if (isValidElement<RadioProps>(child)) {
      return React.cloneElement(child, {
        name: props.name,
        onChange: () => props.onChange(child.props.value),
        value: props.value,
      });
    }
  });
};
