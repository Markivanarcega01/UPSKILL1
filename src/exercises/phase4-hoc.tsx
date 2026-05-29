import React from "react";

interface withAuthProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P & withAuthProps) =>
    props.isLoggedIn ? (
      <Component {...props}></Component>
    ) : (
      <p>Access Denied</p>
    );
};
