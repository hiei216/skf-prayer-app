/// <reference types="vite/client" />
declare module "@editorjs/link"
declare module "@editorjs/delimiter"
declare module "@editorjs/checklist"
declare module "@editorjs/quote"
declare module "@editorjs/marker"
declare module "@editorjs/table"
declare module "@editorjs/embed"

declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & { title?: string }
    >;
    const src: string;
    export default src;
  }