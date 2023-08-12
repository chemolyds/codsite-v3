import React from 'react'

interface ScrollLinkProps {
  id: string;
  offset: number;
  children: React.ReactNode;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ id, offset, children }) => {
  const onClick = () => {
    const target = document.getElementById(id)
    if (target) {
      const topPos = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPos - offset,
        behavior: "smooth",
      })
    }
  };

  return (
    <a href={`#${id}`} onClick={onClick}>
      {children}
    </a>
  )
}

export default ScrollLink
