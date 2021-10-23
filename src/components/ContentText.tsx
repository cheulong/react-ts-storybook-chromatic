import React, { FC } from 'react';

interface ContextTypeProps {
  children: JSX.Element;
}

const ContentText: FC<ContextTypeProps> = ({ children }: ContextTypeProps) => {
  return <>{children}</>;
};

export default ContentText;
