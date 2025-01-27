/// <reference types="react-scripts" />

declare module 'react-scroll' {
    import * as React from 'react';
  
    export interface LinkProps extends React.HTMLAttributes<HTMLElement> {
      to: string;
      smooth?: boolean;
      duration?: number;
      offset?: number;
      onSetActive?: () => void;
      onSetInactive?: () => void;
    }
  
    export interface ElementProps extends React.HTMLAttributes<HTMLElement> {
      name: string;
    }
  
    export const Link: React.ComponentType<LinkProps>;
    export const Element: React.ComponentType<ElementProps>;
    export const animateScroll: any;
    export const scroller: any;
  }
  