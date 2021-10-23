import React, { FC } from 'react';

interface LinkProps {
  label: string;
  url: string;
}

const Link: FC<LinkProps> = ({ label, url }: LinkProps) => {
  return (
    <a
      className='App-link'
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      {label}
    </a>
  );
};

export default Link;
